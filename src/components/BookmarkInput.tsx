import { useState } from "react";

export const BookmarkInput = ({ onSaveClicked }) => {
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="container m-4">
      <label htmlFor="description">Description</label>
      <input
        className="block border-2 border-black rounded-sm"
        type="text"
        name="description"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="url">URL</label>
      <input
        className="block border-2 border-black rounded-sm"
        type="url"
        name="url"
        id="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        className="border-4 border-black mt-1 w-52"
        onClick={() => onSaveClicked(description, url)}
      >
        Save
      </button>
    </div>
  );
};
