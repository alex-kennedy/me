(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var a=n("q1tI"),o=r(a),i=r(n("Gytx"));function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function p(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var l=a.prototype;return l.shouldComponentUpdate=function(e){return!i(e,this.props)},l.componentWillMount=function(){s.push(this),p()},l.componentDidUpdate=function(){p()},l.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),p()},l.render=function(){return o.createElement(r,this.props)},a}(a.Component);return l(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),l(f,"canUseDOM",c),f}}},Bl7J:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r);n("wcMv");var o=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return a.a.createElement("div",{id:"footer"},a.a.createElement("div",{className:"inner"},a.a.createElement("ul",{className:"icons"},a.a.createElement("li",null,a.a.createElement("a",{href:"https://github.com/alex-kennedy",className:"icon fa-github"},a.a.createElement("span",{className:"label"},"Github"))),a.a.createElement("li",null,a.a.createElement("a",{href:"https://nz.linkedin.com/in/alex-kennedy",className:"icon fa-linkedin"},a.a.createElement("span",{className:"label"},"LinkedIn"))),a.a.createElement("li",null,a.a.createElement("a",{href:"mailto:apkennedy@me.com",className:"icon fa-envelope-o"},a.a.createElement("span",{className:"label"},"Email")))),a.a.createElement("ul",{className:"copyright"},a.a.createElement("li",null,"Photo taken August, 2018 in Marin, California")),a.a.createElement("ul",{className:"copyright"},a.a.createElement("li",null,"© Alex Kennedy"),a.a.createElement("li",null,"Template: ",a.a.createElement("a",{href:"http://html5up.net"},"HTML5 UP")))))},r}(a.a.Component);var i=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return a.a.createElement("header",{id:"header"},a.a.createElement("div",{className:"inner"},a.a.createElement("h1",null,a.a.createElement("strong",null,"I am Alex Kennedy")," ",a.a.createElement("br",null),"Engineering and Physics student at the University of Auckland, New Zealand."," ")),a.a.createElement(o,null))},r}(a.a.Component);var l=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props.children;return a.a.createElement("div",null,a.a.createElement(i,null),e)},r}(a.a.Component);t.a=l},Gytx:function(e,t,n){n("2Spj"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),c=0;c<o.length;c++){var u=o[c];if(!l(u))return!1;var s=e[u],p=t[u];if(!1===(a=n?n.call(r,s,p,u):void 0)||void 0===a&&s!==p)return!1}return!0}},Oyvg:function(e,t,n){var r=n("dyZX"),a=n("Xbzi"),o=n("hswa").f,i=n("kJMx").f,l=n("quPj"),c=n("C/va"),u=r.RegExp,s=u,p=u.prototype,f=/a/g,E=/a/g,d=new u(f)!==f;if(n("nh4g")&&(!d||n("eeVq")((function(){return E[n("K0xU")("match")]=!1,u(f)!=f||u(E)==E||"/a/i"!=u(f,"i")})))){u=function(e,t){var n=this instanceof u,r=l(e),o=void 0===t;return!n&&r&&e.constructor===u&&o?e:a(d?new s(r&&!o?e.source:e,t):s((r=e instanceof u)?e.source:e,r&&o?c.call(e):t),n?this:p,u)};for(var h=function(e){e in u||o(u,e,{configurable:!0,get:function(){return s[e]},set:function(t){s[e]=t}})},m=i(s),T=0;m.length>T;)h(m[T++]);p.constructor=u,u.prototype=p,n("KroJ")(r,"RegExp",u)}n("elZq")("RegExp")},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("TJpk"),i=n.n(o),l=n("Bl7J");function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=function(e){var t,n;function r(){var t;return(t=e.call(this)||this).state={lightboxIsOpen:!1,currentImage:0},t.closeLightbox=t.closeLightbox.bind(c(t)),t.gotoNext=t.gotoNext.bind(c(t)),t.gotoPrevious=t.gotoPrevious.bind(c(t)),t.gotoImage=t.gotoImage.bind(c(t)),t.handleClickImage=t.handleClickImage.bind(c(t)),t.openLightbox=t.openLightbox.bind(c(t)),t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.openLightbox=function(e,t){t.preventDefault(),this.setState({currentImage:e,lightboxIsOpen:!0})},o.closeLightbox=function(){this.setState({currentImage:0,lightboxIsOpen:!1})},o.gotoPrevious=function(){this.setState({currentImage:this.state.currentImage-1})},o.gotoNext=function(){this.setState({currentImage:this.state.currentImage+1})},o.gotoImage=function(e){this.setState({currentImage:e})},o.handleClickImage=function(){this.state.currentImage!==this.props.images.length-1&&this.gotoNext()},o.renderGallery=function(){var e=this.props.images;if(e){var t=e.map((function(e,t){return a.a.createElement("article",{className:"6u 12u$(xsmall) work-item",key:t},a.a.createElement("a",{className:"image fit thumb",href:e.liveLink},a.a.createElement("img",{src:e.thumbnail,alt:""})),a.a.createElement("h3",null,e.caption),a.a.createElement("p",null,e.description),a.a.createElement("br",null),a.a.createElement("p",null,a.a.createElement("a",{href:e.gitLink},"View on GitHub")))}));return a.a.createElement("div",{className:"row"},t)}},o.render=function(){return a.a.createElement("div",null,this.renderGallery())},r}(r.Component);u.displayName="Gallery";var s=u,p=n("hJd+"),f=n.n(p),E=n("qU6q"),d=n.n(E);function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=[{id:"2",src:d.a,thumbnail:d.a,caption:"Quantum Hydrogen",description:"A visualisation of electron locations in a hydrogen atom. The shapes are derived from Quantum Mechanics. The details are a little painful, but the shapes are pretty!",liveLink:"https://alexk.nz/quantum-hydrogen",gitLink:"https://github.com/alex-kennedy/quantum-hydrogen"},{id:"1",src:f.a,thumbnail:f.a,caption:"Solar System",description:"Emulates celestial bodies. It is not yet complete, but I plan to display the live(ish) locations of the hundreds of thousands of asteroids in our Solar System.",liveLink:"https://alexk.nz/solar-system",gitLink:"https://github.com/alex-kennedy/solar-system"}],T=function(e){var t,n;function r(){var t;return(t=e.call(this)||this).state={lightboxIsOpen:!1,currentImage:0},t.closeLightbox=t.closeLightbox.bind(h(t)),t.gotoNext=t.gotoNext.bind(h(t)),t.gotoPrevious=t.gotoPrevious.bind(h(t)),t.openLightbox=t.openLightbox.bind(h(t)),t.handleClickImage=t.handleClickImage.bind(h(t)),t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.openLightbox=function(e,t){t.preventDefault(),this.setState({currentImage:e,lightboxIsOpen:!0})},o.closeLightbox=function(){this.setState({currentImage:0,lightboxIsOpen:!1})},o.gotoPrevious=function(){this.setState({currentImage:this.state.currentImage-1})},o.gotoNext=function(){this.setState({currentImage:this.state.currentImage+1})},o.handleClickImage=function(){this.state.currentImage!==this.props.images.length-1&&this.gotoNext()},o.render=function(){return a.a.createElement(l.a,null,a.a.createElement(i.a,null,a.a.createElement("title",null,"Alex Kennedy"),a.a.createElement("meta",{name:"description",content:"My personal site."})),a.a.createElement("div",{id:"main"},a.a.createElement("section",{id:"one"},a.a.createElement("header",{className:"major"},a.a.createElement("h2",null,"I am Alex Kennedy. ")),a.a.createElement("p",null,"I am a student, actor and proud Physics nerd. My home is the beautiful rural town of Ōhaupō, New Zealand. I remember the day my dad grudgingly brought home our first computer, what can be done with one has captivated me ever since. I love exoplanets, the glare of stage lights, learning, talking, and educating. If you want to talk to me, I'd love to hear from you!"," ")),a.a.createElement("section",null,a.a.createElement("h1",null,"Projects"),a.a.createElement(s,{images:m.map((function(e){e.id;return{src:e.src,thumbnail:e.thumbnail,caption:e.caption,description:e.description,liveLink:e.liveLink,gitLink:e.gitLink}}))})),a.a.createElement("section",{id:"education"},a.a.createElement("h1",null,"Education"),a.a.createElement("h2",null,"University of Auckland"),a.a.createElement("h4",null,"2016 - 2020"),a.a.createElement("p",null,"Bachelor of Engineering (Hons) - Engineering Science",a.a.createElement("br",null),a.a.createElement("i",null,"conjoint"),a.a.createElement("br",null),"Bachelor of Science - Physics"),a.a.createElement("h2",null,"University of California - Berkeley"),a.a.createElement("h4",null,"Fall 2018"),"Reciprocal Exchange Program - Physics",a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("h3",null,"Honours and Awards"),a.a.createElement("p",null,"University of Auckland Scholarship - full tuition."),a.a.createElement("p",null,"Named on Engineering Dean's Honours List each year eligible."),a.a.createElement("p",null,"Department of Physics Scholarship (2020)"),a.a.createElement("p",null,"Cecil M Segedin Prize In Engineering Science (2020)"),a.a.createElement("h4",null,"Top in Course Awards"),a.a.createElement("ul",null,a.a.createElement("li",null,"Integer and Multi-objective Optimisation (ENGSCI 761, 2019)"),a.a.createElement("li",null,"Innovating for a Knowledge Society (SCIGEN 201, 2018)"),a.a.createElement("li",null,"Frontiers of Physics (PHYSICS 245, 2017)"),a.a.createElement("li",null,"Introduction to Operations Research (ENGSCI 255, 2017)"),a.a.createElement("li",null,"Advanced Mechanics and Mathematical Modelling (ENGGEN 150, 2016)"))),a.a.createElement("section",{id:"experience"},a.a.createElement("h1",null,"Experience"),a.a.createElement("h2",null,"Google - Software Engineering Intern"),a.a.createElement("h4",null,"Nov 2019 - Feb 2020"),a.a.createElement("p",null,"Created an internal visualisation tool for network demand planning."),a.a.createElement("a",{href:"https://google.com"},"google.com"),a.a.createElement("h2",null,"Quantiful - Junior Data Scientist"),a.a.createElement("h4",null,"Nov 2017 - Aug 2018"),a.a.createElement("p",null,"Summer internship and subsequent part time work."),a.a.createElement("p",null,"I worked to develop Quantiful’s minimum viable product; the client interface, machine learning pipeline, analytics platform and data engineering back-end."," "),a.a.createElement("a",{href:"https://quantiful.ai"},"quantifu.ai"),a.a.createElement("h2",null,"HD Geotechnical, Hamilton – Junior Engineering Technician"),a.a.createElement("h4",null,"Nov 2016 – Feb 2017"),a.a.createElement("a",{href:"https://hdgeo.co.nz"},"hdgeo.co.nz")),a.a.createElement("section",null,a.a.createElement("h1",null,"Leadership"),a.a.createElement("h2",null,"Resident Advisor – O’Rorke Hall, 2017"),a.a.createElement("p",null,"I learned the value of being a compassionate, engaged and emotionally aware leader and team member."," "),a.a.createElement("h2",null,"Dean’s Leadership Programme – Sir Colin Maiden Scholar 2017"),a.a.createElement("p",null,"A selective programme recognising and developing leadership skills and potential."," ")),a.a.createElement("section",null,a.a.createElement("h1",null,"Culture"),a.a.createElement("h2",null,"Auckland Engineering Revue"),a.a.createElement("h4",null,"2019 – Executive Director"),a.a.createElement("h4",null,"2018 – Assistant Director"),a.a.createElement("h4",null,"2019 – Lead Role"),a.a.createElement("p",null,"The Engineering Revue is an annual stage show redefining what it means to be an Engineer. I lead a team of 100+ students. Our goal is to break the mould, and prove our faculty is a home for all."," "),a.a.createElement("h2",null,"UC Berkeley BareStage"),a.a.createElement("h4",null,"2018 Production of Orwell's ",a.a.createElement("i",null,"1984")),a.a.createElement("h2",null,"UC Berkeley Theater4Charity"),a.a.createElement("h4",null,"Fall 2018"),a.a.createElement("p",null,"Winner of ",a.a.createElement("i",null,"Best Supporting Actor in a One Act")," and"," ",a.a.createElement("i",null,"Best One-Liner in a One Act"),"."," "),a.a.createElement("h2",null,"Shakespeare Globe Centre New Zealand - Young Shakespeare Company"),a.a.createElement("h4",null,"2016"),a.a.createElement("p",null,"I had the honour to perform at Shakespeare’s Globe Theatre in London while a member of the Shakespeare Globe Centre New Zealand Young Shakespeare Company."))))},r}(a.a.Component);t.default=T},TJpk:function(e,t,n){n("LK8F"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("/SS/"),n("hHhE"),n("V+eJ"),n("HAE/"),n("91GP"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=p(n("q1tI")),i=p(n("17x9")),l=p(n("8+s/")),c=p(n("bmMU")),u=n("v1p5"),s=n("hFT/");function p(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h,m,T,g=(0,l.default)(u.reducePropsToState,u.handleClientStateChange,u.mapStateOnServer)((function(){return null})),A=(h=g,T=m=function(e){function t(){return E(this,t),d(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case s.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return r({},a,((t={})[n.type]=[].concat(a[n.type]||[],[r({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,o=e.newProps,i=e.newChildProps,l=e.nestedChildren;switch(a.type){case s.TAG_NAMES.TITLE:return r({},o,((t={})[a.type]=l,t.titleAttributes=r({},i),t));case s.TAG_NAMES.BODY:return r({},o,{bodyAttributes:r({},i)});case s.TAG_NAMES.HTML:return r({},o,{htmlAttributes:r({},i)})}return r({},o,((n={})[a.type]=r({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var a;n=r({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=f(a,["children"]),l=(0,u.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,o),e.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:l,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=f(e,["children"]),a=r({},n);return t&&(a=this.mapChildrenToProps(t,a)),o.default.createElement(h,a)},a(t,null,[{key:"canUseDOM",set:function(e){h.canUseDOM=e}}]),t}(o.default.Component),m.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},m.defaultProps={defer:!0,encodeSpecialCharacters:!0},m.peek=h.peek,m.rewind=function(){var e=h.rewind();return e||(e=(0,u.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},T);A.renderStatic=A.rewind,t.Helmet=A,t.default=A},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var l,c,u,s=r(t),p=r(n);if(s&&p){if((c=t.length)!=n.length)return!1;for(l=c;0!=l--;)if(!e(t[l],n[l]))return!1;return!0}if(s!=p)return!1;var f=t instanceof Date,E=n instanceof Date;if(f!=E)return!1;if(f&&E)return t.getTime()==n.getTime();var d=t instanceof RegExp,h=n instanceof RegExp;if(d!=h)return!1;if(d&&h)return t.toString()==n.toString();var m=a(t);if((c=m.length)!==a(n).length)return!1;for(l=c;0!=l--;)if(!o.call(n,m[l]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(l=c;0!=l--;)if(!("_owner"===(u=m[l])&&t.$$typeof||e(t[u],n[u])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(e,t,n){n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},"hJd+":function(e,t,n){e.exports=n.p+"static/solar-system-988a5d70bba67753a513d18c1b5b6823.png"},qU6q:function(e,t,n){e.exports=n.p+"static/quantum-hydrogen-d56072860ead837ec8ccb0996fe73949.png"},v1p5:function(e,t,n){(function(e){n("dZ+Y"),n("KKXr"),n("eM6i"),n("8+KV"),n("LK8F"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0l/t"),n("bWfx"),n("DNiP"),n("pIFo"),n("91GP"),n("rE2o"),n("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=c(n("q1tI")),i=c(n("MgzW")),l=n("hFT/");function c(e){return e&&e.__esModule?e:{default:e}}var u,s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},p=function(e){var t=m(e,l.TAG_NAMES.TITLE),n=m(e,l.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=m(e,l.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},f=function(e){return m(e,l.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},E=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},d=function(e,t){return t.filter((function(e){return void 0!==e[l.TAG_NAMES.BASE]})).map((function(e){return e[l.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},h=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&b("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],u=c.toLowerCase();-1===t.indexOf(u)||n===l.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||u===l.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==l.TAG_PROPERTIES.INNER_HTML&&c!==l.TAG_PROPERTIES.CSS_TEXT&&c!==l.TAG_PROPERTIES.ITEM_PROP||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][s]&&(r[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(r),c=0;c<o.length;c++){var u=o[c],s=(0,i.default)({},a[u],r[u]);a[u]=s}return e}),[]).reverse()},m=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},T=(u=Date.now(),function(e){var t=Date.now();t-u>16?(u=t,e(t)):setTimeout((function(){T(e)}),0)}),g=function(e){return clearTimeout(e)},A="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||T:e.requestAnimationFrame||T,y="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||g:e.cancelAnimationFrame||g,b=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},S=null,v=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,p=e.styleTags,f=e.title,E=e.titleAttributes;P(l.TAG_NAMES.BODY,r),P(l.TAG_NAMES.HTML,a),I(f,E);var d={baseTag:R(l.TAG_NAMES.BASE,n),linkTags:R(l.TAG_NAMES.LINK,o),metaTags:R(l.TAG_NAMES.META,i),noscriptTags:R(l.TAG_NAMES.NOSCRIPT,c),scriptTags:R(l.TAG_NAMES.SCRIPT,s),styleTags:R(l.TAG_NAMES.STYLE,p)},h={},m={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(m[e]=d[e].oldTags)})),t&&t(),u(e,h,m)},_=function(e){return Array.isArray(e)?e.join(""):e},I=function(e,t){void 0!==e&&document.title!==e&&(document.title=_(e)),P(l.TAG_NAMES.TITLE,t)},P=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(l.HELMET_ATTRIBUTE),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var u=i[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===a.indexOf(u)&&a.push(u);var p=o.indexOf(u);-1!==p&&o.splice(p,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute(l.HELMET_ATTRIBUTE):n.getAttribute(l.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(l.HELMET_ATTRIBUTE,i.join(","))}},R=function(e,t){var n=document.head||document.querySelector(l.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+l.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===l.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===l.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(l.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},O=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[l.REACT_TAG_MAP[n]||n]=e[n],t}),t)},M=function(e,t,n){switch(e){case l.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[l.HELMET_ATTRIBUTE]=!0,a=C(n,r),[o.default.createElement(l.TAG_NAMES.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=O(n),o=_(t);return a?"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+a+">"+s(o,r)+"</"+e+">":"<"+e+" "+l.HELMET_ATTRIBUTE+'="true">'+s(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case l.ATTRIBUTE_NAMES.BODY:case l.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return C(t)},toString:function(){return O(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[l.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=l.REACT_TAG_MAP[e]||e;if(n===l.TAG_PROPERTIES.INNER_HTML||n===l.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),o.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===l.TAG_PROPERTIES.INNER_HTML||e===l.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===l.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[l.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){S&&y(S),e.defer?S=A((function(){v(e,(function(){S=null}))})):(v(e),S=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,p=e.title,f=void 0===p?"":p,E=e.titleAttributes;return{base:M(l.TAG_NAMES.BASE,t,r),bodyAttributes:M(l.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:M(l.ATTRIBUTE_NAMES.HTML,a,r),link:M(l.TAG_NAMES.LINK,o,r),meta:M(l.TAG_NAMES.META,i,r),noscript:M(l.TAG_NAMES.NOSCRIPT,c,r),script:M(l.TAG_NAMES.SCRIPT,u,r),style:M(l.TAG_NAMES.STYLE,s,r),title:M(l.TAG_NAMES.TITLE,{title:f,titleAttributes:E},r)}},t.reducePropsToState=function(e){return{baseTag:d([l.TAG_PROPERTIES.HREF],e),bodyAttributes:E(l.ATTRIBUTE_NAMES.BODY,e),defer:m(e,l.HELMET_PROPS.DEFER),encode:m(e,l.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:E(l.ATTRIBUTE_NAMES.HTML,e),linkTags:h(l.TAG_NAMES.LINK,[l.TAG_PROPERTIES.REL,l.TAG_PROPERTIES.HREF],e),metaTags:h(l.TAG_NAMES.META,[l.TAG_PROPERTIES.NAME,l.TAG_PROPERTIES.CHARSET,l.TAG_PROPERTIES.HTTPEQUIV,l.TAG_PROPERTIES.PROPERTY,l.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:h(l.TAG_NAMES.NOSCRIPT,[l.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:f(e),scriptTags:h(l.TAG_NAMES.SCRIPT,[l.TAG_PROPERTIES.SRC,l.TAG_PROPERTIES.INNER_HTML],e),styleTags:h(l.TAG_NAMES.STYLE,[l.TAG_PROPERTIES.CSS_TEXT],e),title:p(e),titleAttributes:E(l.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=A,t.warn=b}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=component---src-pages-index-js-d51bf8ba44eaccfe4b71.js.map