(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{202:function(e,t,r){var content=r(212);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("719af744",content,!0,{sourceMap:!1})},203:function(e,t,r){var content=r(214);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("04d348f6",content,!0,{sourceMap:!1})},205:function(e,t,r){"use strict";r.r(t);var n={components:{ProgressCard:r(206).default},props:["progresses"]},l=(r(213),r(21)),component=Object(l.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"progress-set tile is-ancestor is-vertical"},[t("section",{staticClass:"tile container section is-parent is-10"},[t("div",{staticClass:"tile notification is-primary-light is-child"},[t("h3",{staticClass:"is-light-blue-invert is-centered title"},[this._t("default")],2)])]),this._v(" "),t("section",{staticClass:"columns is-multiline is-centered is-flex-wrap-wrap"},this._l(this.progresses,(function(progress,e){return t("progress-card",{key:e,staticClass:"column",attrs:{progress:progress}})})),1)])}),[],!1,null,"438df77a",null);t.default=component.exports;installComponents(component,{ProgressCard:r(206).default})},206:function(e,t,r){"use strict";r.r(t);var n={props:["progress"]},l=(r(211),r(21)),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"tile is-parent is-4"},[r("div",{staticClass:"tile is-child is-vertical notification is-light"},[r("section",{staticClass:"progress-card-container tile is-parent box"},[r("div",{staticClass:"tile is-centered is-child"},[r("header",{staticClass:"card-header"},[r("p",{staticClass:"card-header-title"},[e._v("\n            "+e._s(e.progress.title)+"\n          ")])]),e._v(" "),r("div",{staticClass:"card-image"},[r("figure",{staticClass:"image"},[r("img",{attrs:{src:e.progress.img,alt:"Progress image or icon"}})])]),e._v(" "),r("div",{staticClass:"card-content"},[r("div",{staticClass:"content"},[e._v("\n            "+e._s(e.progress.desc)+"\n          ")])])])]),e._v(" "),e.progress.progressLevels?r("section",{staticClass:"progress-stats tile is-parent is-vertical box"},e._l(e.progress.progressLevels,(function(t,n){return r("div",{key:n,staticClass:"progress-bar-meter tile is-child columns is-centered is-vcentered"},[r("div",{staticClass:"progress-entry column"},[r("div",{staticClass:"columns is-centered is-vcentered"},[r("div",{staticClass:"progress-meter-desc column is-3"},[e._v("\n              "+e._s(t.name)+"\n            ")]),e._v(" "),r("div",{staticClass:"column is-2"}),e._v(" "),r("div",{staticClass:"column is-6"},["percent"===t.type?r("b-progress",{attrs:{value:t.level,"show-value":void 0!==t.tag,format:"percent"}},[e._v("\n              "+e._s(t.tag)+"\n              ")]):"data"===t.type?r("div",[e._v("\n                "+e._s(t.level)+"\n              ")]):e._e()],1)])])])})),0):e._e()])])}),[],!1,null,"2a8ff699",null);t.default=component.exports},211:function(e,t,r){"use strict";r(202)},212:function(e,t,r){(t=r(35)(!1)).push([e.i,".card-image[data-v-2a8ff699]{margin:10px}",""]),e.exports=t},213:function(e,t,r){"use strict";r(203)},214:function(e,t,r){(t=r(35)(!1)).push([e.i,".progress-set[data-v-438df77a]{margin-top:10px}",""]),e.exports=t},215:function(e,t,r){"use strict";r.r(t);var n=r(205),l={skills:[{title:"Gimp",desc:"Gimp is a free image editing program",img:"/img/gimp.png",progressLevels:[{name:"Experience",type:"percent",tag:"beginner",level:15}]},{title:"Unity",desc:"Unity is a powerful editor often used to make 2D or 3D games. This includes my knowledge of C# for Unity",img:"/img/unity.png",progressLevels:[{name:"Experience",type:"percent",level:35}]},{title:"Blender",desc:"Blender is a powerful 3D modelling software",img:"/img/blender.png",progressLevels:[{name:"Experience",type:"percent",level:20}]},{title:"Git",desc:"Git is a powerful version control software",img:"/img/git.png",progressLevels:[{name:"Experience",type:"percent",level:35}]},{title:"Ubuntu shell",desc:"Ubuntu is one of the most popular flavours of Linux",img:"/img/ubuntu.jpg",progressLevels:[{name:"Experience",type:"percent",tag:"beginner",level:25}]}],languages:[{title:"Python",desc:"An interpreted programming language often used for machine learning or quickly prototyping projects",img:"/img/python.png",progressLevels:[{name:"Experience",type:"percent",level:60}]},{title:"Javascript",desc:"A client-side and server-side interpreted programming language often used for full-stack apps",img:"/img/js.png",progressLevels:[{name:"Experience",type:"percent",level:65}]},{title:"Java",desc:"A compiled programming language often used for fast computations",img:"/img/java.png",progressLevels:[{name:"Experience",type:"percent",level:25}]},{title:"C++",desc:"A compiled programming language often used for fast computations",img:"/img/cpp.png",progressLevels:[{name:"Experience",type:"percent",level:40}]},{title:"SQL (mySQL + some postgreSQL)",desc:"A query language for CRUD operations on a database",img:"/img/mysql.jpg",progressLevels:[{name:"Experience",type:"percent",level:35}]}],libraries:[{title:"Node.js",desc:"Node.js is a server-side javascript runtime",img:"/img/nodejs.png",progressLevels:[{name:"Experience",type:"percent",level:60}]},{title:"Express.js",desc:"Express.js is a node.js library/framework for writing asynchronous http and https servers",img:"/img/expressjs.png",progressLevels:[{name:"Experience",type:"percent",level:60}]},{title:"Vue.js",desc:"Vue is a client-side framework for responsive single-page websites",img:"/img/vuejs.png",progressLevels:[{name:"Experience",type:"percent",tag:"beginner",level:25}]},{title:"Nuxt.js",desc:"Nuxt is a framework built around Vue that allows for better SEO by pre-processing some pages. This is what this website is written in!",img:"/img/nuxtjs.png",progressLevels:[{name:"Experience",type:"percent",tag:"beginner",level:25}]},{title:"Buefy + Bulma",desc:"Buefy is a powerful css framework based on Bulma. This is what this website uses!",img:"/img/buefy.png",progressLevels:[{name:"Experience",type:"percent",tag:"beginner",level:20}]},{title:"Processing",desc:'Processing can be argued to be a language or a framework for Java. It specializes in running graphical applications with a "canvas"',img:"/img/Processing.png",progressLevels:[{name:"Experience",type:"percent",level:60}]},{title:"p5.js",desc:'p5.js is a client-side framework/library for running "sketches", or js code using a canvas. You can see some examples under "Web Projects"',img:"/img/p5js.png",progressLevels:[{name:"Experience",type:"percent",level:75}]}]},o={name:"HomePage",components:{ProgressSet:n.default},data:function(){return{skills:l,title:"micnekr homepage"}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"My custom description"}]}}},c=r(21),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"skills"},[r("progress-set",{attrs:{progresses:e.skills.skills}},[e._v("\n    Skills\n  ")]),e._v(" "),r("progress-set",{attrs:{progresses:e.skills.languages}},[e._v("\n    Languages\n  ")]),e._v(" "),r("progress-set",{attrs:{progresses:e.skills.libraries}},[e._v("\n    Libraries and frameworks\n  ")])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ProgressSet:r(205).default})}}]);