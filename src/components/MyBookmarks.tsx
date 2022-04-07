import { useContext } from "react";
import { useQuery } from "react-query";
import NotionContext, { NotionList } from "../notion";

const useBookmarks = (queryOptions?: object) => {
  const { getItems } = useContext(NotionContext);

  return useQuery<NotionList>("bookmarks", getItems, {
    staleTime: Infinity,
    ...queryOptions,
  });
};

export const MyBookmarks = () => {
  const { data: bookmarksData, refetch: fetchBookmarks } = useBookmarks({
    refetchOnMount: false,
  });

  const bookmarkPages = bookmarksData?.results;

  return (
    <div className="m-4">
      <button
        className="border-black border-2"
        onClick={() => {
          fetchBookmarks();
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
