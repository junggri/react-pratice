!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=8)}([function(e,t){e.exports=require("react/jsx-runtime")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("fs")},function(e,t,n){"use strict";var r=n(0),i=(n(2),n(1)),c=function(){return Object(r.jsx)("div",{className:"Red",children:"Red"})},o=function(){return Object(r.jsx)(c,{})},u=function(){return Object(r.jsx)("div",{className:"Blue",children:"Blue"})},s=function(){return Object(r.jsx)(u,{})},a=function(){return Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(i.Link,{to:"/red",children:"red"})}),Object(r.jsx)("li",{children:Object(r.jsx)(i.Link,{to:"/blue",children:"blue"})})]})};t.a=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(a,{}),Object(r.jsx)("hr",{}),Object(r.jsx)(i.Route,{path:"/red",component:o}),Object(r.jsx)(i.Route,{path:"/blue",component:s})]})}},function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),r=(n(2),n(5)),i=n.n(r),c=n(7),o=n(4),u=n.n(o),s=n(1),a=n(3),l=n.n(a),f=n(6),d=n.n(f),p=JSON.parse(d.a.readFileSync(l.a.resolve("./build/asset-manifest.json"),"utf8")),j=p.files,b=Object.keys(p.files).filter((function(e){return/chunk\.js$/.exec(e)})).map((function(e){return'<script src="'.concat(j[e],'"><\/script>')})).join("");var h=u()(),x=u.a.static(l.a.resolve("./build"),{index:!1});h.use(x),h.use((function(e,n,r){var o=Object(t.jsx)(s.StaticRouter,{location:e.url,context:{},children:Object(t.jsx)(c.a,{})}),u=i.a.renderToString(o);n.send(function(e){return'\n      <!DOCTYPE html>\n      <html lang="en">\n      <head>\n        <meta charset = "utf-8"/>\n        <link rel="shortcut icon" href="/favicon.ico"/>\n        <meta\n          name="viewport"\n          content="width=device-width, initial-scale=1, shrink-to-fit=no"\n        />\n        <title>ReactApp</title>\n        <link href="'.concat(j["main.css"],'" rel="stylesheet"/>\n      </head>\n      <body>\n        <noscript> You need to enableJavaScript to run the this app</noscript>\n        <div id="root">\n        ').concat(e,'\n        </div>\n        <script src="').concat(j["runtime-main.js"],'"><\/script>\n        ').concat(b,'\n        <script src="').concat(j["main.js"],"></script\n      </body>\n      </html>\n    ")}(u))})),h.get("*",(function(t,n){n.sendFile(l.a.join(e,"/../../../build/index.html"))})),h.listen(5e3,(function(){console.log("Running on http://localhost:5000")}))}.call(this,"/")}]);