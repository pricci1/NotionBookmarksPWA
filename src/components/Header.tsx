import { Settings } from "./Settings";
import { useState } from "react";

const Header = () => {
  return (
    <header className="bg-white shadow flex items-center h-16">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Bookmarks</h1>
      </div>
      <SettingsMenu>
        <Settings />
      </SettingsMenu>
    </header>
  );
};

const SettingsMenu = ({ children }) => {
  const [showSettings, setShowSettings] = useState(false);
  return (
    <div className="ml-4 flex items-center md:ml-6">
      <div className="relative mr-5">
        <div>
          <button
            type="button"
            className="max-w-xs rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            id="user-menu-button"
            onClick={() => setShowSettings((val) => !val)}
          >
            <svg
              className="h-8 w-8 rounded-full"
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="m10.0761 3.16311c.0599-.65873.6122-1.16311 1.2736-1.16311h1.3006c.6614 0 1.2137.50438 1.2736 1.16311.0492.54081.4384.98232.9469 1.17289.1307.04899.2599.10124.3874.15663.5031.21866 1.0949.17675 1.5163-.17445.5208-.43398 1.2866-.39924 1.7659.08011l.918.91794c.457.45703.4901 1.18715.0763 1.68369-.3446.41357-.3767.99753-.145 1.48349.1003.21045.1919.42585.2743.64575.1906.50851.6321.89774 1.1729.94694.6587.0599 1.1631.6122 1.1631 1.2736v1.3006c0 .6614-.5044 1.2137-1.1631 1.2736-.5408.0492-.9823.4384-1.1729.9469-.074.1974-.1554.3912-.2438.581-.2149.4612-.1801 1.0119.1456 1.4028.3962.4754.3645 1.1745-.0731 1.6121l-1.026 1.026c-.4376.4376-1.1367.4693-1.6121.0731-.3909-.3257-.9416-.3605-1.4028-.1456-.1898.0884-.3836.1698-.581.2438-.5085.1906-.8977.6321-.9469 1.1729-.0599.6587-.6122 1.1631-1.2736 1.1631h-1.3006c-.6614 0-1.2137-.5044-1.2736-1.1631-.0492-.5408-.43843-.9823-.94693-1.1729-.2199-.0824-.4353-.174-.64574-.2743-.48597-.2317-1.06993-.1996-1.48351.145-.49654.4138-1.22667.3807-1.6837-.0763l-.91793-.918c-.47936-.4793-.51409-1.2451-.08011-1.7659.35121-.4214.39311-1.0132.17445-1.5163-.05539-.1275-.10763-.2566-.15663-.3874-.19056-.5085-.63208-.8977-1.17289-.9469-.65873-.0599-1.16311-.6122-1.16311-1.2736v-1.3006c0-.6614.50438-1.2137 1.16311-1.2736.54082-.0492.98233-.43842 1.1729-.94693.05759-.15367.11967-.30515.18608-.45428.23501-.52773.19595-1.15232-.17388-1.59612-.45099-.54119-.41489-1.33698.08324-1.83512l.81219-.81219c.49814-.49814 1.29393-.53424 1.83512-.08324.4438.36983 1.06839.40888 1.59612.17387.14913-.06641.30061-.12849.45428-.18608.50851-.19057.89774-.63208.94694-1.1729z" />
                <path d="m15 12c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3 1.3431-3 3-3 3 1.3431 3 3z" />
              </g>
            </svg>
          </button>
        </div>
        <div
          className="z-10 origin-top-right absolute right-0 mt-2 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          hidden={!showSettings}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Header;
