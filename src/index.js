import ReactDOM from "react-dom";
import { App } from "./App";

const app = document.getElementById("app");
ReactDOM.render(<App />, app);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register(new URL("service-worker.js", import.meta.url), { type: "module" })
    .then(function (reg) {
      console.log("Service worker registered.");
    })
    .catch(function (err) {
      console.log("Service worker not registered. This happened:", err);
    });
}
