import React from "react";
import ReactDomSever from "react-dom/server";

const html = ReactDomSever.renderToString(
   <div>heelo world</div>
);

console.log(html);