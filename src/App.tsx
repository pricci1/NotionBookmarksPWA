import { BookmarkInput } from "./components/BookmarkInput";
import { MyBookmarks } from "./components/MyBookmarks";
import { NotionProvider } from "./notion";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Settings } from "./components/Settings";
const queryClient = new QueryClient();

export function App() {
  return (
    <div className="container">
      <NotionProvider>
        <QueryClientProvider client={queryClient}>
          <Settings />
          <BookmarkInput />
          <MyBookmarks />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </NotionProvider>
    </div>
  );
}
