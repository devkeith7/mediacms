!function(){"use strict";var e={25:function(e,t,n){var o=n(9087),a=(n(5101),n(5466)),r=(n(6116),n(4426),n(8349));n(6010),n(5666),n(8487),n(8024);a.PureComponent,n(3123).Y;var i=n(9518),s=n(2276),l=n(3699);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}!function(e,t){if(void 0!==t){var n=document.getElementById(e);null!==n&&o.Z.display(n,t,{},e)}}("page-embed",function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(m,e);var t,n,o,u,y=(o=m,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(o);if(u){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function m(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m),t=y.call(this,e),r.df("embed"),t.state={loadedVideo:!1,loadedAudio:!1,loadedImage:!1,failedMediaLoad:!1},t.onLoadedVideoData=t.onLoadedVideoData.bind(h(t)),t.onLoadedAudioData=t.onLoadedAudioData.bind(h(t)),t.onLoadedImageData=t.onLoadedImageData.bind(h(t)),t.onMediaLoadError=t.onMediaLoadError.bind(h(t)),s.Z.on("loaded_video_data",t.onLoadedVideoData),s.Z.on("loaded_audio_data",t.onLoadedAudioData),s.Z.on("loaded_image_data",t.onLoadedImageData),s.Z.on("loaded_media_error",t.onMediaLoadError),t}return t=m,(n=[{key:"componentDidMount",value:function(){l.loadMediaData()}},{key:"onLoadedVideoData",value:function(){this.setState({loadedVideo:!0})}},{key:"onLoadedAudioData",value:function(){this.setState({loadedAudio:!0})}},{key:"onLoadedImageData",value:function(){this.setState({loadedImage:!0})}},{key:"onMediaLoadError",value:function(){this.setState({failedMediaLoad:!0})}},{key:"render",value:function(){return a.createElement("div",{className:"embed-wrap"},this.state.failedMediaLoad?a.createElement("div",{className:"player-container player-container-error"},a.createElement("div",{className:"player-container-inner"},a.createElement("div",{className:"error-container"},a.createElement("div",{className:"error-container-inner"},a.createElement("span",{className:"icon-wrap"},a.createElement("i",{className:"material-icons"},"error_outline")),a.createElement("span",{className:"msg-wrap"},s.Z.get("media-load-error-message")))))):null,this.state.loadedVideo?a.createElement(i.Z,{data:s.Z.get("media-data")}):null)}}])&&c(t.prototype,n),m}(a.PureComponent))},1395:function(e,t,n){function o(e,t,n){return e.scrollLeft?1+Math.ceil(e.scrollLeft/t):n}function a(e,t){void 0!==e&&(this.data={dom:{wrapper:e,firstItem:e.querySelector(t)},item:{width:null}},this.data.item.width=this.data.dom.firstItem.offsetWidth,this.state={initedAllStateValues:!1,currentSlide:1,maxSlideIndex:null,slideItemsFit:null,slideItems:null,totalItems:null,wrapper:{width:null,scrollWidth:null}})}n.d(t,{Z:function(){return a}}),a.prototype.updateDataStateOnResize=function(e,t){this.data.item.width=this.data.dom.firstItem.offsetWidth,this.state.wrapper.width=this.data.dom.wrapper.offsetWidth,this.state.wrapper.scrollWidth=this.data.dom.wrapper.scrollWidth,this.state.slideItemsFit=Math.floor(this.state.wrapper.width/this.data.item.width),this.state.slideItems=Math.max(1,this.state.slideItemsFit),t&&this.state.slideItems<=this.state.slideItems&&(this.state.itemsLengthFit=this.state.slideItems),this.state.totalItems=e,this.state.maxSlideIndex=Math.max(this.state.totalItems-this.state.slideItemsFit+1),this.state.currentSlide=Math.min(this.state.currentSlide,this.state.maxSlideIndex||1)},a.prototype.updateDataState=function(e,t,n){!n&&this.state.initedAllStateValues||(this.state.initedAllStateValues=!0,this.state.wrapper.width=this.data.dom.wrapper.offsetWidth,this.state.wrapper.scrollWidth=this.data.dom.wrapper.scrollWidth,this.state.slideItemsFit=Math.floor(this.state.wrapper.width/this.data.item.width),this.state.slideItems=Math.max(1,this.state.slideItemsFit),t&&this.state.slideItems<=this.state.slideItems&&(this.state.itemsLengthFit=this.state.slideItems)),this.state.totalItems=e,this.state.maxSlideIndex=Math.max(1,this.state.totalItems-this.state.slideItemsFit+1),this.state.currentSlide=Math.min(this.state.currentSlide,this.state.maxSlideIndex)},a.prototype.nextSlide=function(){this.state.currentSlide=Math.min(o(this.data.dom.wrapper,this.data.item.width,this.state.currentSlide)+this.state.slideItems,this.state.maxSlideIndex)},a.prototype.previousSlide=function(){this.state.currentSlide=Math.max(1,o(this.data.dom.wrapper,this.data.item.width,this.state.currentSlide)-this.state.slideItems)},a.prototype.scrollToCurrentSlide=function(){this.data.dom.wrapper.scrollLeft=this.data.item.width*(this.state.currentSlide-1)},a.prototype.hasNextSlide=function(){return this.state.currentSlide<this.state.maxSlideIndex},a.prototype.hasPreviousSlide=function(){return 1<this.state.currentSlide},a.prototype.currentSlide=function(){return this.state.currentSlide},a.prototype.loadItemsToFit=function(){return 2*this.state.slideItemsFit>this.state.totalItems},a.prototype.loadMoreItems=function(){return this.state.currentSlide+this.state.slideItemsFit>=this.state.maxSlideIndex},a.prototype.itemsFit=function(){return this.state.slideItemsFit}},792:function(e,t,n){n.d(t,{KC:function(){return s},RA:function(){return l},$e:function(){return u}}),n(7228),n(9751),n(2322),n(9268);var o=n(4426),a=n(9688),r=["hls","h265","vp9","h264","vp8","mp4","theora"];function i(e,t){var n=null,o=document.createElement("video");if(o.canPlayType)try{switch(e){case"hls":n=!0;break;case"h265":n="probably"===o.canPlayType('video/mp4; codecs="hvc1.1.L0.0"')||"probably"===o.canPlayType('video/mp4; codecs="hev1.1.L0.0"');break;case"h264":n="probably"===o.canPlayType('video/mp4; codecs="avc1.42E01E"')||"probably"===o.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');break;case"vp9":n="probably"===o.canPlayType('video/webm; codecs="vp9"');break;case"vp8":n="probably"===o.canPlayType('video/webm; codecs="vp8, vorbis"');break;case"theora":n="probably"===o.canPlayType('video/ogg; codecs="theora"');break;case"mp4":n=!0}if(t=(t instanceof Boolean||0===t||1==t)&&t){if("no"===o.canPlayType("video/nonsense")&&console.warn('BUGGY: Codec detection bug in Firefox 3.5.0 - 3.5.1 and Safari 4.0.0 - 4.0.4 that answer "no" to unknown codecs instead of an empty string'),"probably"===o.canPlayType("video/webm")&&console.warn('BUGGY: Codec detection bug that Firefox 27 and earlier always says "probably" when asked about WebM, even when the codecs string is not present'),"maybe"===o.canPlayType('video/mp4; codecs="avc1.42E01E"'))switch(o.canPlayType("video/mp4")){case"probably":console.warn('BUGGY: Codec detection bug in iOS 4.1 and earlier that switches "maybe" and "probably" around');break;case"maybe":console.warn('BUGGY: Codec detection bug in Android where no better answer than "maybe" is given')}"probably"===o.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')&&"probably"!==o.canPlayType('video/mp4; codecs="avc1.42E01E"')&&console.warn("BUGGY: Codec detection bug in Internet Explorer 9 that requires both audio and video codec on test")}}catch(e){console.warn(e)}return n}function s(e){var t=[],n={},o=document.createElement("video");return o.canPlayType&&(n.hls=!0,t.push("hls"),(o.canPlayType('video/mp4; codecs="hvc1.1.L0.0"')||"probably"===o.canPlayType('video/mp4; codecs="hev1.1.L0.0"'))&&(n.h265=!0,t.push("h265")),"probably"===o.canPlayType('video/mp4; codecs="avc1.42E01E"')&&(n.h264=!0,t.push("h264")),"probably"===o.canPlayType('video/webm; codecs="vp9"')&&(n.vp9=!0,t.push("vp9")),e&&("probably"===o.canPlayType('video/webm; codecs="vp8, vorbis"')&&(n.vp8=!0,t.push("vp8")),"probably"===o.canPlayType('video/ogg; codecs="theora"')&&(n.theora=!0,t.push("theora"))),"probably"===o.canPlayType('video/mp4; codecs="mp4v.20.8"')&&(n.mp4=!0,t.push("mp4"))),{order:t,support:n}}function l(e,t,n){var l,u,c,d={};n=void 0===n?s():n;var p={hls:["m3u8"],h265:["mp4","webm"],h264:["mp4","webm"],vp9:["mp4","webm"],vp8:["mp4","webm"],theora:["ogg"],mp4:["mp4"]};for(l in t)t.hasOwnProperty(l)&&(u=null,null!==(u="master_file"===l?"Auto":2===(u=l.split("_playlist")).length?u[0]:null)&&(d[u]=void 0===d[u]?{format:[],url:[]}:d[u],d[u].format.push("hls"),d[u].url.push((0,a.U)(t[l],o.Z.get("config-site").url))));for(u in e)if(e.hasOwnProperty(u)&&Object.keys(e[u]).length&&(1080>=parseInt(u,10)||1080<window.screen.width&&1080<window.screen.height))for(l=0;l<r.length;)void 0!==e[u][r[l]]&&i(r[l],!1)&&e[u][r[l]]&&e[u][r[l]].url&&(100!==e[u][r[l]].progress&&console.warn("VIDEO DEBUG:","PROGRESS value is",e[u][r[l]].progress),"success"!==e[u][r[l]].status&&console.warn("VIDEO DEBUG:","STATUS value is",e[u][r[l]].status),(c=e[u][r[l]].url.split(".")).length&&0<=p[r[l]].indexOf(c[c.length-1])&&(d[u]=void 0===d[u]?{format:[],url:[]}:d[u],d[u].format.push(r[l]),d[u].url.push((0,a.U)(e[u][r[l]].url,o.Z.get("config-site").url)))),l+=1;return d}function u(e,t){var n,o=Object.keys(t);if(void 0!==t[e])return e;if(parseInt(e,10)>=parseInt(o[o.length-1],10))return o[o.length-1];if(parseInt(e,10)<=parseInt(o[0],10))return o[0];for(n=o.length-1;n>=0;){if(parseInt(e,10)>=parseInt(o[n],10))return o[n+1];n-=1}}},915:function(e,t,n){n.d(t,{Y:function(){return b}}),n(717),n(5101);var o=n(5466),a=(n(6116),n(3074)),r=n.n(a),i=n(920),s=n.n(i),l=n(4426),u=n(4860),c=n(9688);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(d,e);var t,n,a,r,i=(a=d,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(a);if(r){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function d(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),(t=i.call(this,e)).player=null,t.initPlayer=t.initPlayer.bind(y(t)),t.unsetPlayer=t.unsetPlayer.bind(y(t)),t.onClickNext=t.onClickNext.bind(y(t)),t.onClickPrevious=t.onClickPrevious.bind(y(t)),t.onPlayerStateUpdate=t.onPlayerStateUpdate.bind(y(t));var n=new u.Z(l.Z.get("config-site").id,86400);return t.playerStates={playerVolume:n.get("player-volume"),playerSoundMuted:n.get("player-sound-muted"),videoQuality:n.get("video-quality"),videoPlaybackSpeed:n.get("video-playback-speed"),inTheaterMode:n.get("in-theater-mode")},t.playerStates.playerVolume=null===t.playerStates.playerVolume?1:Math.max(Math.min(Number(t.playerStates.playerVolume),1),0),t.playerStates.playerSoundMuted=null!==t.playerStates.playerSoundMuted&&t.playerStates.playerSoundMuted,t.playerStates.videoQuality=null!==t.playerStates.videoQuality?t.playerStates.videoQuality:"Auto",t.playerStates.videoPlaybackSpeed=null!==t.playerStates.videoPlaybackSpeed&&t.playerStates.videoPlaybackSpeed,t.playerStates.inTheaterMode=null!==t.playerStates.inTheaterMode&&t.playerStates.inTheaterMode,t}return t=d,(n=[{key:"componentDidMount",value:function(){this.props.inEmbed||document.hasFocus()||"visible"===document.visibilityState?this.initPlayer():(window.addEventListener("focus",this.initPlayer),document.addEventListener("visibilitychange",this.initPlayer))}},{key:"componentWillUnmount",value:function(){this.unsetPlayer(),"function"==typeof this.props.onUnmountCallback&&this.props.onUnmountCallback()}},{key:"onClickNext",value:function(){"function"==typeof this.props.onClickNextCallback&&this.props.onClickNextCallback()}},{key:"onClickPrevious",value:function(){"function"==typeof this.props.onClickPreviousCallback&&this.props.onClickPreviousCallback()}},{key:"onPlayerStateUpdate",value:function(e){this.playerStates.playerVolume!==e.volume&&(this.playerStates.playerVolume=e.volume),this.playerStates.playerSoundMuted!==e.soundMuted&&(this.playerStates.playerSoundMuted=e.soundMuted),this.playerStates.videoQuality!==e.quality&&(this.playerStates.videoQuality=e.quality),this.playerStates.videoPlaybackSpeed!==e.playbackSpeed&&(this.playerStates.videoPlaybackSpeed=e.playbackSpeed),this.playerStates.inTheaterMode!==e.theaterMode&&(this.playerStates.inTheaterMode=e.theaterMode),"function"==typeof this.props.onStateUpdateCallback&&this.props.onStateUpdateCallback(e)}},{key:"initPlayer",value:function(){if(null===this.player&&null===this.props.errorMessage&&(this.props.inEmbed||(window.removeEventListener("focus",this.initPlayer),document.removeEventListener("visibilitychange",this.initPlayer)),this.refs.videoElem)){this.props.inEmbed||this.refs.videoElem.focus();var e={on:!1};if(void 0!==this.props.subtitlesInfo&&null!==this.props.subtitlesInfo&&this.props.subtitlesInfo.length){e.languages=[];for(var t=0;t<this.props.subtitlesInfo.length;)void 0!==this.props.subtitlesInfo[t].src&&void 0!==this.props.subtitlesInfo[t].srclang&&void 0!==this.props.subtitlesInfo[t].label&&e.languages.push({src:(0,c.U)(this.props.subtitlesInfo[t].src,l.Z.get("config-site").url),srclang:this.props.subtitlesInfo[t].srclang,label:this.props.subtitlesInfo[t].label}),t+=1;e.languages.length&&(e.on=!0)}this.player=new(s())(this.refs.videoElem,{enabledTouchControls:!0,sources:this.props.sources,poster:this.props.poster,autoplay:this.props.autoplay,bigPlayButton:!0,controlBar:{theaterMode:this.props.theaterMode,pictureInPicture:!1,next:!!this.props.nextLink,previous:!!this.props.previousLink},subtitles:e,cornerLayers:this.props.cornerLayers,videoPreviewThumb:this.props.previewSprite},{volume:this.playerStates.playerVolume,soundMuted:this.playerStates.playerSoundMuted,theaterMode:this.playerStates.inTheaterMode,theSelectedQuality:void 0,theSelectedPlaybackSpeed:this.playerStates.videoPlaybackSpeed||1},this.props.info,[.25,.5,.75,1,1.25,1.5,1.75,2],this.onPlayerStateUpdate,this.onClickNext,this.onClickPrevious),"function"==typeof this.props.onPlayerInitCallback&&this.props.onPlayerInitCallback(this.player,this.refs.videoElem)}}},{key:"unsetPlayer",value:function(){this.player&&(videojs(this.refs.videoElem).dispose(),this.player=null,delete this.player)}},{key:"render",value:function(){return null===this.props.errorMessage?o.createElement("video",{ref:"videoElem",className:"video-js vjs-mediacms native-dimensions"}):o.createElement("div",{className:"error-container"},o.createElement("div",{className:"error-container-inner"},o.createElement("span",{className:"icon-wrap"},o.createElement("i",{className:"material-icons"},"error_outline")),o.createElement("span",{className:"msg-wrap"},this.props.errorMessage)))}}])&&p(t.prototype,n),d}(o.PureComponent);b.propTypes={cornerLayers:r().object.isRequired},b.defaultProps={cornerLayers:{}}},8024:function(e,t,n){function o(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}function a(e,t){e.classList?e.classList.add(t):e.className+=" "+t}n.d(t,{dt:function(){return o},Ec:function(){return a}}),n(7441),n(7390),n(2322),n(4669),n(3296),n(9268)},3140:function(e,t,n){n(2322),n(9268)},9688:function(e,t,n){n.d(t,{U:function(){return r}}),n(6394),n(2322),n(4669),n(3296);var o=n(137),a=n.n(o);function r(e,t){var n=a()(e,{});return""!==n.origin&&"null"!==n.origin&&n.origin||(n=a()(t+"/"+e.replace(/^\//g,""),{})),n.toString()}},4135:function(e,t,n){function o(e,t){function n(e,t,n){return Number(parseFloat(e/t).toFixed(e<10*t?1:0))+n}return t?e.toLocaleString():function(e,t,o,a,r,i){for(;t>=a;)r*=o,a*=o,e+=1;return e<i.length?n(t,r,i[e]):n(t*(o*(e-(i.length-1))),r,i[i.length-1])}(0,e,1e3,1e3,1,["","K","M","B","T"])}n.d(t,{Z:function(){return o}}),n(717),n(6660)},8420:function(e,t,n){n.d(t,{A_:function(){return o.Z},j0:function(){return a.Z},GH:function(){return r.Z},Jl:function(){return i.Z},v$:function(){return s.Z},uf:function(){return l.Z},UN:function(){return u.Z},$A:function(){return c.Z},m5:function(){return d.Z},vo:function(){return p.ZP}});var o=n(1712),a=n(9752),r=n(84),i=n(9009),s=n(1438),l=n(4135),u=(n(3140),n(1752),n(7514),n(6146)),c=n(4845),d=(n(1569),n(6203)),p=n(7188)},2186:function(e,t,n){function o(e){return function(e){return e===Math.trunc(e)}(e)&&(function(e){return function(e,t){return e>0}(e)}(e)||function(e){return 0===e}(e))}n.d(t,{ZU:function(){return o}}),n(5777)},3699:function(e,t,n){n.d(t,{loadMediaData:function(){return r}}),n(2322),n(3296);var o=n(8416),a=n.n(o);function r(){a().dispatch({type:"LOAD_MEDIA_DATA"})}},8349:function(e,t,n){n.d(t,{sc:function(){return r},df:function(){return i},Zr:function(){return s},vh:function(){return l},Qb:function(){return u}});var o=n(8416),a=n.n(o);function r(){a().dispatch({type:"TOGGLE_PAGE_SIDEBAR"})}function i(e){a().dispatch({type:"INIT_PAGE",page:e})}function s(e){a().dispatch({type:"INIT_SIDEBAR",page:e})}function l(e){a().dispatch({type:"TOGGLE_MOBILE_SEARCH_FIELD",open:e})}function u(e){a().dispatch({type:"TOGGLE_DARK_THEME"})}}},t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,n.x=function(){},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.j=991,function(){var e={991:0},t=[[25,431]],o=function(){},a=function(a,r){for(var i,s,l=r[0],u=r[1],c=r[2],d=r[3],p=0,h=[];p<l.length;p++)s=l[p],n.o(e,s)&&e[s]&&h.push(e[s][0]),e[s]=0;for(i in u)n.o(u,i)&&(n.m[i]=u[i]);for(c&&c(n),a&&a(r);h.length;)h.shift()();return d&&t.push.apply(t,d),o()},r=self.webpackChunk_mediacms_frontend=self.webpackChunk_mediacms_frontend||[];function i(){for(var o,a=0;a<t.length;a++){for(var r=t[a],i=!0,s=1;s<r.length;s++){var l=r[s];0!==e[l]&&(i=!1)}i&&(t.splice(a--,1),o=n(n.s=r[0]))}return 0===t.length&&(n.x(),n.x=function(){}),o}r.forEach(a.bind(null,0)),r.push=a.bind(null,r.push.bind(r));var s=n.x;n.x=function(){return n.x=s||function(){},(o=i)()}}(),n.x()}();