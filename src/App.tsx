import { BookmarkInput } from "./components/BookmarkInput";
import { MyBookmarks } from "./components/MyBookmarks";
import { NotionProvider } from "./notion";
import { Settings } from "./components/Settings";

export function App() {
  return (
    <div className="container">
      <NotionProvider>
        <Settings />
        <BookmarkInput />
        <MyBookmarks />
      </NotionProvider>
    </div>
  );
}
