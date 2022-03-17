import { useState } from "react";
import { BookmarkInput } from "./components/BookmarkInput";
import { MyBookmarks } from "./components/MyBookmarks";
import { addItem } from "./notion";

export function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const addToBookmarks = (description, url) => {
    setBookmarks((old) => [...old, url]);
    addItem(description, url);
  };
  return (
    <div className="container">
      <BookmarkInput onSaveClicked={addToBookmarks} />
      <MyBookmarks />
    </div>
  );
}
