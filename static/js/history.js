!function(){var t={6768:function(t,e,n){"use strict";var r=n(2667),o=(n(5101),n(5466)),i=n(3074),u=n.n(i),a=n(8204),c=n(4426),s=n(9174),l=n(5261),f=(n(6116),n(2259)),p=n(612),h=n(5464);function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?v(t):e}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n(8170);var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(a,t);var e,n,r,i,u=(r=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=g(r);if(i){var n=g(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return b(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=u.call(this,t,"author-history")).state={resultsCount:null},e.getCountFunc=e.getCountFunc.bind(v(e)),e}return e=a,(n=[{key:"getCountFunc",value:function(t){this.setState({resultsCount:t})}},{key:"pageContent",value:function(){return[this.state.author?o.createElement(p.Z,{key:"ProfilePagesHeader",author:this.state.author,type:"history"}):null,this.state.author?o.createElement(h.Z,{key:"ProfilePagesContent"},o.createElement(s._,{title:this.props.title+(null!==this.state.resultsCount?" ("+this.state.resultsCount+")":""),className:"items-list-ver"},o.createElement(l.J,{itemsCountCallback:this.getCountFunc,requestUrl:c.Z.get("api-user-history"),hideAuthor:!c.Z.get("config-media-item").displayAuthor,hideViews:!c.Z.get("config-media-item").displayViews,hideDate:!c.Z.get("config-media-item").displayPublishDate,canEdit:!1}))):null]}}])&&m(e.prototype,n),a}(f.G);f.G.propTypes={title:u().string.isRequired},f.G.defaultProps={title:"My history"};var _=n(8024);function P(t){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function O(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function k(t,e,n){return e&&C(t.prototype,e),n&&C(t,n),t}function D(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&R(t,e)}function R(t,e){return(R=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Z(t);if(e){var o=Z(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return E(this,n)}}function E(t,e){return!e||"object"!==P(e)&&"function"!=typeof e?S(t):e}function S(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Z(t){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var x=function(t){D(n,t);var e=j(n);function n(t){var r;return O(this,n),(r=e.call(this,t,"history-media")).state={resultsCount:null},r.getCountFunc=r.getCountFunc.bind(S(r)),r}return k(n,[{key:"getCountFunc",value:function(t){this.setState({resultsCount:t})}},{key:"pageContent",value:function(){return o.createElement(s._,{title:this.props.title+(null!==this.state.resultsCount?" ("+this.state.resultsCount+")":""),className:"search-results-wrap items-list-hor"},o.createElement(l.J,{singleLinkContent:!1,horizontalItemsOrientation:!0,itemsCountCallback:this.getCountFunc,requestUrl:this.props.api_url,hideViews:!c.Z.get("config-media-item").displayViews,hideAuthor:!c.Z.get("config-media-item").displayAuthor,hideDate:!c.Z.get("config-media-item").displayPublishDate}))}}]),n}(a.T);x.propTypes={title:u().string.isRequired,api_url:u().string.isRequired},x.defaultProps={title:c.Z.get("config-enabled").pages.history.title,api_url:c.Z.get("api-user-history")};var F=function(t){D(n,t);var e=j(n);function n(t){return O(this,n),e.call(this,t)}return k(n,[{key:"render",value:function(){return c.Z.get("config-user").is.anonymous||!c.Z.get("config-options").pages.profile.includeHistory?o.createElement(x,null):((0,_.Ec)(document.getElementById("page-history"),"profile-page-history"),window.MediaCMS.profileId=c.Z.get("config-user").username,o.createElement(w,null))}}]),n}(o.PureComponent);(0,r.X)("page-history",F)},8416:function(t,e,n){var r=n(4835).Dispatcher;t.exports=new r},6203:function(t,e,n){"use strict";n(2322),n(9268),n(3233),e.Z=function(){var t,e,n,r=null;if(document.cookie&&""!==document.cookie)for(e=document.cookie.split(";"),t=0;t<e.length;){if("csrftoken="===(n=e[t].trim()).substring(0,10)){r=decodeURIComponent(n.substring(10));break}t+=1}return r}},8420:function(t,e,n){"use strict";n.d(e,{A_:function(){return r.Z},GH:function(){return o.Z},Jl:function(){return i.Z},v$:function(){return u.Z},uf:function(){return a.Z},$4:function(){return c.Z},m5:function(){return s.Z}});var r=n(1712),o=(n(9752),n(84)),i=n(9009),u=n(1438),a=n(4135),c=n(3140),s=(n(1752),n(7514),n(1569),n(6203));n(7188)},9752:function(t,e,n){"use strict";n(6394),n(5334),n(7588),n(4559),n(6028)},8170:function(t,e,n){"use strict";n(4458),n(5101),n(2322),n(9006),n(9268),n(5466);var r=n(1590),o=n.n(r),i=n(8420),u=n(4426);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?f(t):e}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(h,t);var e,n,r,o,a=(r=h,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=p(r);if(o){var n=p(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return l(this,t)});function h(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,h),(t=a.call(this)).authorData=null,t.authorQuery=void 0,t.onDataLoad=t.onDataLoad.bind(f(t)),t.onDataLoadFail=t.onDataLoadFail.bind(f(t)),t.removeProfileResponse=t.removeProfileResponse.bind(f(t)),t.removeProfileFail=t.removeProfileFail.bind(f(t)),t.removingProfile=!1,t}return e=h,(n=[{key:"removeProfileResponse",value:function(t){t&&204===t.status&&this.emit("profile_delete",this.authorData.username)}},{key:"removeProfileFail",value:function(){this.emit("profile_delete_fail",this.authorData.username),setTimeout((function(t){this.removingProfile=!1}),100,this)}},{key:"get",value:function(t){switch(t){case"author-data":return this.authorData;case"author-query":if(void 0===this.authorQuery){this.authorQuery=null;var e=window.location.search;if(e&&""!==e){e=e.split("?")[1].split("=");for(var n=0;n<e.length;){if("aq"===e[n]){this.authorQuery=e[n+1]||null;break}n+=1}}}return this.authorQuery}}},{key:"onDataLoad",value:function(t){t&&t.data&&(this.authorData=t.data,this.authorData.id=this.authorData.username,this.authorData.name=""!==this.authorData.name?this.authorData.name:this.authorData.username,this.emit("load-author-data"))}},{key:"onDataLoadFail",value:function(t){}},{key:"actions_handler",value:function(t){switch(t.type){case"REMOVE_PROFILE":if(this.removingProfile)return;this.removingProfile=!0;var e=u.Z.get("api-users")+"/"+this.authorData.username;(0,i.Jl)(e,{headers:{"X-CSRFToken":(0,i.m5)()}},!1,this.removeProfileResponse,this.removeProfileFail);break;case"LOAD_AUTHOR_DATA":(0,i.A_)(u.Z.get("api-users")+"/"+window.MediaCMS.profileId,!1,this.onDataLoad,this.onDataLoadFail)}}}])&&c(e.prototype,n),h}(o());e.Z=(0,i.v$)(new h,"actions_handler")},9174:function(t,e,n){"use strict";n.d(e,{_:function(){return a}});var r=n(5466),o=n(3074),i=n.n(o),u=n(3085);function a(t){return r.createElement("div",{className:(void 0===t.className||null===t.className?"":t.className+" ")+"media-list-wrapper",style:t.style},r.createElement(u.G,{title:t.title,viewAllLink:t.viewAllLink,viewAllText:t.viewAllText},t.children||null))}a.propTypes={style:i().object,className:i().string}}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,n),o.exports}n.m=t,n.x=function(){},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.j=908,function(){var t={908:0},e=[[6768,431]],r=function(){},o=function(o,i){for(var u,a,c=i[0],s=i[1],l=i[2],f=i[3],p=0,h=[];p<c.length;p++)a=c[p],n.o(t,a)&&t[a]&&h.push(t[a][0]),t[a]=0;for(u in s)n.o(s,u)&&(n.m[u]=s[u]);for(l&&l(n),o&&o(i);h.length;)h.shift()();return f&&e.push.apply(e,f),r()},i=self.webpackChunk_mediacms_frontend=self.webpackChunk_mediacms_frontend||[];function u(){for(var r,o=0;o<e.length;o++){for(var i=e[o],u=!0,a=1;a<i.length;a++){var c=i[a];0!==t[c]&&(u=!1)}u&&(e.splice(o--,1),r=n(n.s=i[0]))}return 0===e.length&&(n.x(),n.x=function(){}),r}i.forEach(o.bind(null,0)),i.push=o.bind(null,i.push.bind(i));var a=n.x;n.x=function(){return n.x=a||function(){},(r=u)()}}(),n.x()}();