/*[system-bundles-config]*/
System.paths["bundles/*.css"] ="../assets/*css";
System.paths["bundles/*"] = "../assets/*.js";
System.bundles = {"bundles/main.css!":["components/page-server/db-tile/db-tile.css!$css","components/page-collection/query-builder/query-builder.css!$css","components/page-collection/code-editor/code-editor.css!$css","components/servers-sidebar/servers-sidebar.css!$css"]};
/*@config*/
System.define("@config",'!function(){var e=!1;!function(){try{var t=document.createElement("a");t.innerHTML="<xyz></xyz>",e=1==t.childNodes.length||function(){document.createElement("a");var e=document.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(s){e=!0}}(),System.config({map:{"jquery/jquery":"jquery"},paths:{jquery:"bower_components/jquery/dist/jquery.js","theme/*":"bower_components/jquery-ui/themes/base/jquery.ui.*css","ui/*":"bower_components/jquery-ui/ui/jquery.ui.*.js",bootstrap:"bower_components/bootstrap/dist/js/bootstrap.js","bootstrap.css":"bower_components/bootstrap/dist/css/bootstrap.csscss"},meta:{jquery:{exports:"jQuery",deps:e?void 0:["can/lib/html5shiv.js"]},"ui/core":{deps:["jquery","theme/core.css!","theme/theme.css!"]},"ui/widget":{deps:["jquery"]},"ui/accordion":{deps:["ui/core","ui/widget","theme/accordion.css!"]}},ext:{ejs:"can/view/ejs/system",mustache:"can/view/mustache/system",stache:"can/view/stache/system"},bundlesPath:"assets"})}(),System.buildConfig={map:{"can/util/util":"can/util/domless/domless"}};',{address:"@config",metadata:{deps:[],format:"global"}});
/*stache-helpers*/
System.define("stache-helpers",'"use strict";can.stache.registerHelper("linkTo",function(e){return can.stache.safeString(can.route.link(e,{page:e}))}),can.stache.registerHelper("hrefTo",function(e){return can.stache.safeString(can.route.url({page:e}))}),can.stache.registerHelper("money",function(e){return accounting.formatMoney(e()/100)}),can.stache.registerHelper("number",function(e,r){var r=r||0;return accounting.formatMoney(e(),"",r)}),can.stache.registerHelper("depositOrWithdrawal",function(e){return e()<0?"withdrawal":"deposit"}),can.stache.registerHelper("blackOrRed",function(e){return e()<0?"red":"black"}),can.stache.registerHelper("shortPrettyDate",function(e){if(e()){var r=moment(e()),t=moment();return r.format(r.year()===t.year()?"MMM D":"MMM D, YYYY")}return""});',{address:"stache-helpers",metadata:{deps:[],use:"strict",format:"global"}});
/*routes*/
System.define("routes",'can.route("passwordemail/:email",{page:"passwordemail"}),can.route("passwordchange/:secret",{page:"passwordchange"}),can.route("verify/:secret",{page:"verify"}),can.route("",{page:"home"}),can.route("settings",{page:"settings"}),can.route("help",{page:"help"}),can.route(":hostname",{page:"server"}),can.route(":hostname/:db_name",{page:"database"}),can.route(":hostname/:db_name/:coll_name",{page:"collection"}),can.route(":hostname/:db_name/:coll_name/:doc_id",{page:"document"});',{address:"routes",metadata:{deps:[],format:"global"}});
/*fixtures/collections*/
System.define("fixtures/collections",'var collections=[{name:"account_shared_names",documents:2},{name:"accounts",documents:19},{name:"assets",documents:1242},{name:"budget",documents:855},{name:"calendar",documents:57},{name:"categories",documents:411},{name:"contacts",documents:1001},{name:"credit_scores",documents:141},{name:"debt",documents:144},{name:"labels",documents:1},{name:"planning",documents:55},{name:"preferences",documents:991},{name:"reports",documents:1444},{name:"sessions",documents:144242},{name:"system.indexes",documents:555},{name:"system.users",documents:155},{name:"trash",documents:0}];can.fixture({"GET /api/collections":function(){return collections}});',{address:"fixtures/collections",metadata:{deps:[],format:"global"}});
/*fixtures/documents*/
System.define("fixtures/documents",'var documents=[{_id:\'ObjectID("5359550868cc9b2b372e2ea1")\',text:""},{_id:\'ObjectID("5359550868cc9b2b372e2ea2")\',text:""},{_id:\'ObjectID("5359550868cc9b2b372e2ea3")\',text:""},{_id:\'ObjectID("5359550868cc9b2b372e2ea4")\',text:""},{_id:\'ObjectID("5359550868cc9b2b372e2ea5")\',text:""},{_id:\'ObjectID("5359550868cc9b2b372e2ea6")\',text:""},{_id:\'ObjectID("5359550868cc9b2b372e2ea7")\',text:""},{_id:\'ObjectID("5359550868cc9b2b372e2ea8")\',text:""},{_id:\'ObjectID("5359550868cc9b2b372e2ea9")\',text:""},{_id:\'ObjectID("5359550868cc9b2b372e2e10")\',text:""}];can.fixture({"GET /api/documents":function(){return documents}});',{address:"fixtures/documents",metadata:{deps:[],format:"global"}});
/*models/models*/
define("models/models",[],function(){"use strict";var e=can.Feathers.Model.extend("Server",{resource:"amity/servers"},{}),t=can.Model.extend("Doc",{resource:"/api/documents"},{}),r=can.Feathers.Model.extend("tasks",{resource:"/api/tasks"},{}),o=can.Feathers.Model.extend("todos",{resource:"/api/todos"},{});return{get Server(){return e},get Doc(){return t},get Task(){return r},get Todo(){return o},__esModule:!0}});
/*models/dbModels*/
define("models/dbModels",[],function(){"use strict";function e(e){return t[e]||(t[e]=can.Feathers.Model.extend({resource:e},{dbSize:function(){var e=this.attr("dataSize");if(0==e)return"0 Byte";var t=1024,r=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],n=Math.floor(Math.log(e)/Math.log(t));return(e/Math.pow(t,n)).toPrecision(3)+" "+r[n]}})),t[e]}var t={};return{get getDbModel(){return e},__esModule:!0}});
/*models/collModels*/
define("models/collModels",[],function(){"use strict";function e(e){return t[e]||(t[e]=can.Feathers.Model.extend({resource:e},{})),t[e]}var t={};return{get getCollModel(){return e},__esModule:!0}});
/*models/documentModels*/
define("models/documentModels",[],function(){"use strict";function e(e){return t[e]||(t[e]=can.Feathers.Model.extend({resource:e},{})),t[e]}var t={};return{get getDocumentModel(){return e},__esModule:!0}});
/*stores/databases*/
define("stores/databases",[],function(){"use strict";function e(e,t){if(!e)return console.error("Must pass a location to dbStore()."),!1;var n=e.split("/"),o=n[0],u=n[1]||!1;if(!t){if(u){if(r[o]){for(var s=r[o].length-1;s>=0;s--)if(r[o][s].db===u)return r[o][s];return console.log("no data found"),!1}return console.log("no data found here."),!1}return r[o]||!1}return t.length?(r[o]=t,t):(r[o]||(r[o]={}),r[o][t.db]=t,t)}var r={};return{get dbStore(){return e},__esModule:!0}});
/*stores/collections*/
define("stores/collections",[],function(){"use strict";function e(e,r){if(!e)return console.error("Must pass a location to dbStore()."),!1;var t=e.split("/"),o=t[0],u=t[1]||!1;if(!r){if(u){if(n[o]){for(var i=n[o].length-1;i>=0;i--)if(n[o][i].name===u)return n[o][i];return console.log("no data found"),!1}return console.log("no data found here."),!1}return n[o]||!1}return r.length?(n[o]=r,r):(n[o]||(n[o]={}),n[o][r.name]=r,r)}var n={};return{get dbStore(){return e},__esModule:!0}});
/*appState*/
define("appState",["../../models/models","../../models/dbModels","../../models/collModels","../../models/documentModels","./stores/databases","./stores/collections"],function(e,t,a,n,s,r){"use strict";e&&e.__esModule||(e={"default":e}),t&&t.__esModule||(t={"default":t}),a&&a.__esModule||(a={"default":a}),n&&n.__esModule||(n={"default":n}),s&&s.__esModule||(s={"default":s}),r&&r.__esModule||(r={"default":r});var o=t.getDbModel,l=a.getCollModel,i=n.getDocumentModel,c=new can.Deferred,d=new can.Deferred,u=new can.Deferred,f=s.dbStore,m=(r.collStore,can.Map.extend({define:{servers:{serialize:!1,value:new Server.List},hostname:{serialize:!0,set:function(e){var t=this;return this.attr("servers").forEach(function(a){a.name===e&&t.attr("server",a)}),e}},server:{serialize:!1,set:function(e){var t=this,a="/api/"+e.name+"/_databases";return o(a).findAll({},function(a){f(e.name,a),t.attr("databases").replace(a),c.resolve(a)}),e}},databases:{serialize:!1,set:function(e){return e},value:new can.List},db_name:{serialize:!0,set:function(e){var t=this;return c.done(function(){var a=t.hostname;t.attr("database",f(a+"/"+e))}),e},remove:function(){this.attr("database",{})}},database:{set:function(e){var t=this,a="/api/"+this.attr("hostname")+"/"+e.db+"/_collections";return l(a).findAll({},function(e){t.attr("collections").replace(e),d.resolve(e)}),e},serialize:!1},collections:{serialize:!1,value:new can.List,set:function(e){return e}},coll_name:{set:function(e){var t=this;return d.done(function(a){for(var n=a.length-1;n>=0;n--)e==a[n].name&&t.attr("collection",a[n])}),e},remove:function(){this.attr("collection",{}),this.attr("page","database")}},collection:{serialize:!1,value:{},set:function(e){var t=this,a="/api/"+this.attr("hostname")+"/"+this.attr("db_name")+"/"+e.name;return i(a).findAll({},function(e){t.attr("documents").replace(e),u.resolve(e)}),e}},page:{serialize:!1},documents:{serialize:!1,value:new can.List,set:function(e){return console.log(e),e}},doc_id:{}}})),v=new m,_=v;return window.appState=v,can.route.map(v),{get default(){return _},__esModule:!0}});
/*components/page-home/page-home*/
define("components/page-home/page-home",["../../appState"],function(e){"use strict";e&&e.__esModule||(e={"default":e});var a=e["default"];return can.Component.extend({tag:"page-home",template:can.view("/main/components/page-home/page-home.stache"),scope:{appState:a,selectDB:function(e){console.log(e),can.route.attr("db_name",e.name),can.route.attr("page","database")}},events:{},helpers:{}}),{}});
/*components/page-server/server-status/server-status*/
define("components/page-server/server-status/server-status",["../../../models/models"],function(t){"use strict";t&&t.__esModule||(t={"default":t});t["default"];return can.Component.extend({tag:"server-status",template:can.view("/main/components/page-server/server-status/server-status.stache"),scope:{stats:{},loading:function(){var t=this;this.attr("spin",!0),can.route.attr("hostname")&&can.$.ajax({url:"amity/servers/status?hostname="+can.route.attr("hostname")}).done(function(e){t.attr("stats",e),setTimeout(function(){t.attr("spin",!1)},1e3)})},refresh:function(){this.loading()},spin:!1},helpers:{milliHumanize:function(t){return moment.duration(t()).humanize()},secondsHumanize:function(t){return moment.duration(t(),"seconds").humanize()}}}),{}});
/*$css*/
define("$css",function(e,t){"production"===steal.config("env")?t.fetch=function(e){var t=e.address,n=document.createElement("link");return n.rel="stylesheet",n.href=t,document.head.appendChild(n),""}:t.instantiate=function(e){e.metadata.deps=[],e.metadata.execute=function(){if(e.source){var t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style"),d=e.source+"/*# sourceURL="+e.address+" */";d=d.replace(/url\(['"]?([^'"\)]*)['"]?\)/g,function(t,n){return"url("+steal.joinURIs(e.address,n)+")"}),n.type="text/css",n.styleSheet?n.styleSheet.cssText=d:n.appendChild(document.createTextNode(d)),t.appendChild(n)}return System.newModule({})},e.metadata.format="css"},t.buildType="css",t.includeInBuild=!0});
/*components/page-server/db-tile/db-tile*/
define("components/page-server/db-tile/db-tile",["./db-tile.css!"],function(e){"use strict";return e&&e.__esModule||(e={"default":e}),can.Component.extend({tag:"db-tile",template:can.view("/main/components/page-server/db-tile/db-tile.stache"),scope:{selectDB:function(e){can.route.attr("db_name",e.db),can.route.attr("page","database")},toggleFave:function(){return console.log("toggleFave"),this.attr("favorite")}},events:{},helpers:{}}),{}});
/*components/page-server/db-table/db-table*/
System.define("components/page-server/db-table/db-table",'"use strict";can.Component.extend({tag:"db-table",template:can.view("/main/components/page-server/db-table/db-table.stache"),scope:{selectDB:function(e){can.route.attr("db_name",e.db),can.route.attr("page","database")},toggleFave:function(){return console.log("toggleFave"),this.attr("favorite")}},events:{},helpers:{}});',{address:"components/page-server/db-table/db-table",metadata:{deps:[],use:"strict",format:"global"}});
/*components/page-server/page-server*/
define("components/page-server/page-server",["../../appState","./server-status/server-status","./db-tile/db-tile","./db-table/db-table"],function(e,t,a,r){"use strict";e&&e.__esModule||(e={"default":e}),t&&t.__esModule||(t={"default":t}),a&&a.__esModule||(a={"default":a}),r&&r.__esModule||(r={"default":r});var n=e["default"];return can.Component.extend({tag:"page-server",template:can.view("/main/components/page-server/page-server.stache"),scope:{appState:n,gotoServer:function(){return!1},goHome:function(){can.route.removeAttr("hostname"),can.route.attr("page","home")},selectDB:function(e){can.route.attr("db_name",e.name),can.route.attr("page","database")},hasFavorites:function(){var e=!1;return n.attr("databases").forEach(function(t){t.favorite&&(e=!0)}),e}},events:{},helpers:{}}),{}});
/*components/page-database/page-database*/
define("components/page-database/page-database",["../../appState"],function(e){"use strict";e&&e.__esModule||(e={"default":e});var t=e["default"];return can.Component.extend({tag:"page-database",template:can.view("/main/components/page-database/page-database.stache"),scope:{appState:t,goHome:function(){can.route.removeAttr("db_name"),can.route.removeAttr("hostname"),can.route.attr("page","home")},gotoServer:function(){can.route.removeAttr("db_name"),can.route.attr("page","server")},openCollection:function(e){can.route.attr("coll_name",e.name),can.route.attr("page","collection")}},events:{},helpers:{number:function(e){return e()?e().toString().replace(/,/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,","):void 0},index:function(e){return e()+1},hasFavorites:function(){var e=!1;return t.attr("databases").forEach(function(t){t.favorite&&(e=!0)}),e}}}),{}});
/*components/page-collection/query-builder/query-builder*/
define("components/page-collection/query-builder/query-builder",["./query-builder.css!"],function(e){"use strict";return e&&e.__esModule||(e={"default":e}),can.Component.extend({tag:"query-builder",template:can.view("/main/components/page-collection/query-builder/query-builder.stache"),scope:{},events:{},helpers:{}}),{}});
/*components/page-collection/code-editor/code-editor*/
define("components/page-collection/code-editor/code-editor",["./code-editor.css!"],function(e){"use strict";e&&e.__esModule||(e={"default":e});var o=0;return can.Component.extend({tag:"code-editor",template:can.view("/main/components/page-collection/code-editor/code-editor.stache"),scope:{count:++o,id:'ObjectID("5359550868cc9b2b372e2ea1")',editor:null},events:{},helpers:{index:function(e){return e()+1},codemirror:function(e){var o=this;return function(t){o.editor=CodeMirror(t,{value:JSON.stringify(e().attr(),null,2),mode:{name:"javascript",json:!0},indentUnit:4,lineNumbers:!0,autoClearEmptyLines:!0,matchBrackets:!0,theme:"monokai"}),setTimeout(function(){$(".CodeMirror").each(function(e,o){o.CodeMirror.refresh()})},0)}}}}),{}});
/*components/page-collection/page-collection*/
define("components/page-collection/page-collection",["./query-builder/query-builder","./code-editor/code-editor","../../appState"],function(e,t,o){"use strict";e&&e.__esModule||(e={"default":e}),t&&t.__esModule||(t={"default":t}),o&&o.__esModule||(o={"default":o});var a=o["default"];return can.Component.extend({tag:"page-collection",template:can.view("/main/components/page-collection/page-collection.stache"),scope:{appState:a,goHome:function(){can.route.removeAttr("db_name"),can.route.removeAttr("coll_name"),can.route.attr("page","home")},gotoServer:function(){can.route.removeAttr("db_name"),can.route.removeAttr("coll_name"),can.route.attr("page","server")},gotoDB:function(){can.route.removeAttr("coll_name"),can.route.attr("page","database")}},events:{},helpers:{}}),{}});
/*components/servers-sidebar/servers-sidebar*/
define("components/servers-sidebar/servers-sidebar",["../../appState","./servers-sidebar.css!"],function(e,s){"use strict";e&&e.__esModule||(e={"default":e}),s&&s.__esModule||(s={"default":s});var r=e["default"];return can.Component.extend({tag:"servers-sidebar",template:can.view("/main/components/servers-sidebar/servers-sidebar.stache"),scope:{appState:r,selectServer:function(e){r.attr("hostname",e.name),r.attr("page","server")}},helpers:{}}),{}});
/*node_modules/mongodb-uri/mongodb-uri*/
define("node_modules/mongodb-uri/mongodb-uri",[],function(){"use strict";var e={};e.parse=function(e){var o={},n=e.indexOf("://");if(0>n)throw new Error("No scheme found in URI "+e);if(o.scheme=e.substring(0,n),this.scheme&&this.scheme!==o.scheme)throw new Error("URI must begin with "+this.scheme+"://");var s=e.substring(n+3);if(n=s.indexOf("@"),n>=0){var t=s.substring(0,n);s=s.substring(n+1),n=t.indexOf(":"),n>=0?(o.username=decodeURIComponent(t.substring(0,n)),o.password=decodeURIComponent(t.substring(n+1))):o.username=decodeURIComponent(t)}if(n=s.indexOf("?"),n>=0){var r=s.substring(n+1);s=s.substring(0,n),o.options={},r.split("&").forEach(function(e){var n=e.indexOf("=");o.options[decodeURIComponent(e.substring(0,n))]=decodeURIComponent(e.substring(n+1))})}return n=s.indexOf("/"),n>=0&&(n<s.length-1&&(o.database=decodeURIComponent(s.substring(n+1))),s=s.substring(0,n)),this._parseAddress(s,o),o},e._parseAddress=function(e,o){o.hosts=[],e.split(",").forEach(function(e){var n=e.indexOf(":");o.hosts.push(n>=0?{host:decodeURIComponent(e.substring(0,n)),port:parseInt(e.substring(n+1))}:{host:decodeURIComponent(e)})})},e.format=function(e){if(!e)return(this.scheme||"mongodb")+"://localhost";if(this.scheme&&e.scheme&&this.scheme!==e.scheme)throw new Error("Scheme not supported: "+e.scheme);var o=(this.scheme||e.scheme||"mongodb")+"://";return e.username&&(o+=encodeURIComponent(e.username),e.password&&(o+=":"+encodeURIComponent(e.password)),o+="@"),o+=this._formatAddress(e),e.database&&(o+="/"+encodeURIComponent(e.database)),e.options&&Object.keys(e.options).forEach(function(n,s){o+=0===s?"?":"&",o+=encodeURIComponent(n)+"="+encodeURIComponent(e.options[n])}),o},e._formatAddress=function(e){var o="";return e.hosts.forEach(function(e,n){n>0&&(o+=","),o+=encodeURIComponent(e.host),e.port&&(o+=":"+encodeURIComponent(e.port))}),o},e.formatMongoose=function(e){var o=this;if("string"==typeof e&&(e=o.parse(e)),!e)return o.format(e);var n="";return e.hosts.forEach(function(s,t){t>0&&(n+=",");var r=Object.create(e);r.hosts=[s],n+=o.format(r)}),n};var e;return{get MongodbUriParser(){return e},__esModule:!0}});
/*components/add-server/add-server*/
define("components/add-server/add-server",["../../appState","../../models/models","../../../node_modules/mongodb-uri/mongodb-uri"],function(e,n,o){"use strict";e&&e.__esModule||(e={"default":e}),n&&n.__esModule||(n={"default":n}),o&&o.__esModule||(o={"default":o});var t=(e["default"],n.Server),r=o.MongodbUriParser;return can.Component.extend({tag:"add-server",template:can.view("/main/components/add-server/add-server.stache"),scope:{connectionString:"mongodb://localhost:27017/amity",saveServer:function(){var e=r.parse(this.attr("connectionString")),n=new t({connectionString:this.attr("connectionString"),hostname:e.hosts[0].host,type:"mongodb"});n.save(function(){console.log("saved")})}}}),{}});
/*main*/
define("main",["stache-helpers","routes","fixtures/collections","fixtures/documents","components/page-home/page-home","components/page-server/page-server","components/page-database/page-database","components/page-collection/page-collection","components/servers-sidebar/servers-sidebar","components/add-server/add-server","models/models","appState"],function(e,a,t,s,o,d,n,r,l,u,c,p){"use strict";e&&e.__esModule||(e={"default":e}),a&&a.__esModule||(a={"default":a}),t&&t.__esModule||(t={"default":t}),s&&s.__esModule||(s={"default":s}),o&&o.__esModule||(o={"default":o}),d&&d.__esModule||(d={"default":d}),n&&n.__esModule||(n={"default":n}),r&&r.__esModule||(r={"default":r}),l&&l.__esModule||(l={"default":l}),u&&u.__esModule||(u={"default":u}),c&&c.__esModule||(c={"default":c}),p&&p.__esModule||(p={"default":p});var _=c.Server,f=io("",{transports:["websocket"]});can.Feathers.connect(f);var i=p["default"];return $(document.body).append(can.view("main/site.stache",i)),_.findAll({}).done(function(e){i.attr("servers").replace(e),i.bind("page",function(e,a){if(a){var t="<page-"+a+"></page-"+a+">";$("#content").html(can.stache(t)(i))}}),_.bind("created",function(e,a){i.attr("servers").push(a)}),can.route.ready()}),{}});
