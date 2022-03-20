import { useContext, useState } from "react";
import NotionContext from "../notion";

export const MyBookmarks = () => {
  const { getItems } = useContext(NotionContext);
  const [bookmarkPages, setBookmarkPages] = useState([]);

  return (
    <div className="m-4">
      <button
        className="border-black border-2"
        onClick={() => {
          getItems().then((items) => {
            setBookmarkPages(items?.results);
          });
        }}
      >
        GET
      </button>
      <ul>
        {bookmarkPages?.map((bookmarkPage) => (
          <li className="pb-3" key={bookmarkPage.id}>
            <p>{bookmarkPage.properties["Description"].title[0].plain_text}</p>
            <p>
              <a
                href={bookmarkPage.properties["URL"].rich_text[0].plain_text}
                target="_blank"
                rel="noopener noreferrer"
              >
                {bookmarkPage.properties["URL"].rich_text[0].plain_text}
              </a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
