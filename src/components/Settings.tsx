import { useContext, useState } from "react";
import NotionContext from "../notion";

export const Settings = () => {
  const [showSettings, setShowSettings] = useState(false);
  const { setNotionToken, setDatabaseId } = useContext(NotionContext);
  const [token, setToken] = useState("");
  const [dbId, setDbId] = useState("");

  const saveSettings = () => {
    setNotionToken(token);
    setDatabaseId(dbId);
  };

  const ShowSettingsToggle = () => (
    <div onClick={() => setShowSettings((old) => !old)}>
      {showSettings ? "Hide" : "Show"} settings
    </div>
  );

  if (!showSettings) return <ShowSettingsToggle />;

  return (
    <div className="container m-4">
      <ShowSettingsToggle />
      <label>
        Notion Token{" "}
        <input
          autoComplete="false"
          className="mr-4 border-2 border-black rounded-sm"
          type="password"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
      </label>
      <label>
        Database Id{" "}
        <input
          autoComplete="false"
          className="mr-4 border-2 border-black rounded-sm"
          type="url"
          value={dbId}
          onChange={(e) => setDbId(e.target.value)}
        />
      </label>
      <button
        className="border-4 border-black mt-1 w-52"
        onClick={() => saveSettings()}
      >
        Save
      </button>
    </div>
  );
};
