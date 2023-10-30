import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const url = "https://api.jsonbin.io/v3/b/653fd91b54105e766fc921a8/latest/record";

// async function getData() {
//   const res = await fetch(url);
//   // const { record } = await res.json();
//   // const data = record.cities;
//   const data = await res.json();
//   console.log(data);
// }

// getData();

/* const binId = "653fd91b54105e766fc921a8";
const binVersion = "latest";
const apiKey = "$2a$10$TOLGvmNJYYE66o5/c9PVjeVR6C5I02eBsI5T2VMHoXfh5IZkh5JM2";

fetch(`https://api.jsonbin.io/v3/b/${binId}/${binVersion}`, {
  method: "GET",
  headers: {
    "X-Master-Key": apiKey,
    "X-Bin-Meta": false,
    "X-JSON-Path": "cities",
  },
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Failed to fetch data");
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
 */

