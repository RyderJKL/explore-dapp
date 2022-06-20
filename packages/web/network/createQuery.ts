import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity, // Stale time to 10s
      retry: 2,
      refetchOnWindowFocus: true,
      useErrorBoundary: false,
    },
  },
  // queryCache: new QueryCache({
  //   onError: (error, query) => {
  //     // 🎉 only show error toasts if we already have data in the cache
  //     // which indicates a failed background update
  //     // https://tkdodo.eu/blog/react-query-error-handling
  //     // !query.state.data &&
  //     alert("5555");

  //   },
  // }),
});

