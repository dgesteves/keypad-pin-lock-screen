import { MutationFunction } from '@tanstack/react-query';
import { handleError } from '@utils';

export async function defaultMutationFn(
  variables: unknown
): Promise<MutationFunction<unknown, unknown>> {
  const token = localStorage.getItem('token');

  /* if (!token) {
    throw new Error('No authentication token found');
  }*/

  const { method, apiEndpoint, ...otherVariables } = variables as {
    method: string;
    apiEndpoint: string;
    [key: string]: unknown;
  };

  try {
    const response = await fetch(`${process.env.NX_API_URL}${apiEndpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(otherVariables),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      handleError(new Error(`Network response was not ok: ${errorMessage}`));
    }

    return await response.json();
  } catch (error) {
    handleError(error as Error);
  }
}
