import { handleError } from '@utils';
import { QueryFunctionContext, QueryFunction } from '@tanstack/react-query';

export async function defaultQueryFn({
  queryKey,
}: QueryFunctionContext): Promise<QueryFunction> {
  const token = localStorage.getItem('token');

  /* if (!token) {
    throw new Error('No authentication token found');
  }*/

  try {
    const response = await fetch(`${process.env.NX_API_URL}${queryKey[0]}`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
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
