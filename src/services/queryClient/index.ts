import { QueryClient } from '@tanstack/react-query';
import { defaultQueryFn } from '@services';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});
