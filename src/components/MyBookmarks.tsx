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
        className="mt-2 rounded-lg font-medium border border-solid cursor-pointer text-center text-xs py-1 px-2 text-white bg-green-400 border-green-400 hover:bg-green-600 hover:border-green-600"
        onClick={() => {
          fetchBookmarks();
        }}
      >
        GET BOOKMARKS
      </button>
      <ul>
        {bookmarkPages?.map((bookmarkPage) => (
          <li className="pb-3" key={bookmarkPage.id}>
            <BookmarkBlock
              description={
                bookmarkPage.properties["Description"].title[0].plain_text
              }
              url={bookmarkPage.properties["URL"].rich_text[0].plain_text}
              read={false}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

const BookmarkBlock = ({ description, url, read }) => {
  if (!description && !url) return null;

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-1 flex flex-col justify-center items-center">
        <button>{read ? "[X]" : "[ ]"}</button>
      </div>
      <div className="col-span-11">
        <p>{description}</p>
        <p>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {url}
          </a>
        </p>
      </div>
    </div>
  );
};
