import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
(function (window, document) {
  var loader = function () {
    var script = document.createElement("script"),
      tag = document.getElementsByTagName("script")[0];
    script.src =
      "https://sandbox.sslcommerz.com/embed.min.js?" +
      Math.random().toString(36).substring(7);
    tag.parentNode.insertBefore(script, tag);
  };

  window.addEventListener
    ? window.addEventListener("load", loader, false)
    : window.attachEvent("onload", loader);
})(window, document);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
