import { BookmarkInput } from "./components/BookmarkInput";
import { MyBookmarks } from "./components/MyBookmarks";
import { NotionProvider } from "./notion";
import { QueryClient, QueryClientProvider } from "react-query";
import { persistQueryClient } from "react-query/persistQueryClient-experimental";
import { createWebStoragePersistor } from "react-query/createWebStoragePersistor-experimental";
import { ReactQueryDevtools } from "react-query/devtools";
import Header from "./components/Header";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
    },
  },
});

const localStoragePersistor = createWebStoragePersistor({
  storage: window.localStorage,
});

persistQueryClient({
  queryClient,

  persistor: localStoragePersistor,
});

export function App() {
  return (
    <NotionProvider>
      <QueryClientProvider client={queryClient}>
        <div className="min-h-full">
          <Header />
          <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              <div className="px-4 py-6 sm:px-0">
                <div className="border-4 border-dashed border-gray-200 rounded-lg">
                  <BookmarkInput />
                  <MyBookmarks />
                  <ReactQueryDevtools />
                </div>
              </div>
            </div>
          </main>
        </div>
      </QueryClientProvider>
    </NotionProvider>
  );
}
