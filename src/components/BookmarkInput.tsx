import { useContext, useState } from "react";
import NotionContext from "../notion";

export const BookmarkInput = () => {
  const { addItem } = useContext(NotionContext);
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  const addToBookmarks = (description, url) => {
    addItem(description, url);
  };

  return (
    <div className="container m-4">
      <label
        className="block text-sm font-medium text-gray-700"
        htmlFor="description"
      >
        Description
      </label>
      <div className="mt-1 relative rounded-md shadow-lg">
        <input
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-1 pr-12 sm:text-sm border-gray-300 rounded-lg"
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <label className="mt-1 relative rounded-md shadow-lg" htmlFor="url">
        URL
      </label>
      <div className="mt-1 relative rounded-md shadow-lg">
        <input
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-1 pr-12 sm:text-sm border-gray-300 rounded-lg"
          type="url"
          name="url"
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <button
        className="mt-2 rounded-lg font-medium border border-solid cursor-pointer text-center text-xs py-1 px-2 text-white bg-green-400 border-green-400 hover:bg-green-600 hover:border-green-600"
        onClick={() => addToBookmarks(description, url)}
      >
        Save
      </button>
    </div>
  );
};
