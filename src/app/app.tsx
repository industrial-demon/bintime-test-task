import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routing } from "../router";
import "./global.css";
import { RootStoreProvider } from "../providers/store-provider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      retryOnMount: false,
      refetchOnReconnect: false,
    },
  },
});

function App() {
  return (
    <RootStoreProvider>
      <QueryClientProvider client={queryClient}>
        <Routing />
      </QueryClientProvider>
    </RootStoreProvider>
  );
}

export default App;
