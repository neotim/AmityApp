/*[system-bundles-config]*/
System.paths["bundles/*.css"] ="../assets/*css";
System.paths["bundles/*"] = "../assets/*.js";
System.bundles = {};
/*@config*/
System.define("@config",'!function(){var e=!1;!function(){try{var t=document.createElement("a");t.innerHTML="<xyz></xyz>",e=1==t.childNodes.length||function(){document.createElement("a");var e=document.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(s){e=!0}}(),System.config({map:{"jquery/jquery":"jquery"},paths:{jquery:"bower_components/jquery/dist/jquery.js","theme/*":"bower_components/jquery-ui/themes/base/jquery.ui.*css","ui/*":"bower_components/jquery-ui/ui/jquery.ui.*.js",bootstrap:"bower_components/bootstrap/dist/js/bootstrap.js","bootstrap.css":"bower_components/bootstrap/dist/css/bootstrap.csscss"},meta:{jquery:{exports:"jQuery",deps:e?void 0:["can/lib/html5shiv.js"]},"ui/core":{deps:["jquery","theme/core.css!","theme/theme.css!"]},"ui/widget":{deps:["jquery"]},"ui/accordion":{deps:["ui/core","ui/widget","theme/accordion.css!"]}},ext:{ejs:"can/view/ejs/system",mustache:"can/view/mustache/system",stache:"can/view/stache/system"},bundlesPath:"assets"})}(),System.buildConfig={map:{"can/util/util":"can/util/domless/domless"}};',{address:"@config",metadata:{deps:[],format:"global"}});
/*mustache-helpers*/
System.define("mustache-helpers",'"use strict";can.stache.registerHelper("linkTo",function(e){return can.stache.safeString(can.route.link(e,{page:e}))}),can.stache.registerHelper("hrefTo",function(e){return can.stache.safeString(can.route.url({page:e}))}),can.stache.registerHelper("money$",function(e){return accounting.formatMoney(e()/100)}),can.stache.registerHelper("money",function(e){return accounting.formatMoney(e()/100,"")}),can.stache.registerHelper("depositOrWithdrawal",function(e){return e()<0?"withdrawal":"deposit"}),can.stache.registerHelper("blackOrRed",function(e){return e()<0?"red":"black"}),can.stache.registerHelper("shortPrettyDate",function(e){if(e()){var r=moment(e()),t=moment();return r.format(r.year()===t.year()?"MMM D":"MMM D, YYYY")}return""});',{address:"mustache-helpers",metadata:{deps:[],use:"strict",format:"global"}});
/*routes*/
System.define("routes",'can.route("passwordemail/:email",{page:"passwordemail"}),can.route("passwordchange/:secret",{page:"passwordchange"}),can.route("verify/:secret",{page:"verify"}),can.route("",{page:"server"}),can.route("settings",{page:"settings"}),can.route("help",{page:"help"}),can.route(":db_name",{page:"database"}),can.route(":db_name/:col_name",{page:"collection"}),can.route(":db_name/:col_name/:doc_id",{page:"document"});',{address:"routes",metadata:{deps:[],format:"global"}});
/*fixtures/databases*/
System.define("fixtures/databases",'var databases=[{name:"bchm",collections:13,favorite:!0},{name:"bchm-old",collections:11},{name:"e-store",collections:56},{name:"feathers",collections:5},{name:"kardon-db",collections:7},{name:"mma-db",collections:21,favorite:!0},{name:"tv-guide",collections:31}];can.fixture({"GET /api/databases":function(){return databases}});',{address:"fixtures/databases",metadata:{deps:[],format:"global"}});
/*fixtures/collections*/
System.define("fixtures/collections",'var collections=[{name:"account_shared_names",documents:2},{name:"accounts",documents:19},{name:"assets",documents:1242},{name:"budget",documents:855},{name:"calendar",documents:57},{name:"categories",documents:411},{name:"contacts",documents:1001},{name:"credit_scores",documents:141},{name:"debt",documents:144},{name:"labels",documents:1},{name:"planning",documents:55},{name:"preferences",documents:991},{name:"reports",documents:1444},{name:"sessions",documents:144242},{name:"system.indexes",documents:555},{name:"system.users",documents:155},{name:"trash",documents:0}];can.fixture({"GET /api/collections":function(){return collections}});',{address:"fixtures/collections",metadata:{deps:[],format:"global"}});
/*fixtures/documents*/
System.define("fixtures/documents",'var documents=[{_id:\'ObjectID("5359550868cc9b2b372e2ea1")\',text:""},{_id:\'ObjectID("5359550868cc9b2b372e2ea2")\',text:""},{_id:\'ObjectID("5359550868cc9b2b372e2ea3")\',text:""},{_id:\'ObjectID("5359550868cc9b2b372e2ea4")\',text:""},{_id:\'ObjectID("5359550868cc9b2b372e2ea5")\',text:""},{_id:\'ObjectID("5359550868cc9b2b372e2ea6")\',text:""},{_id:\'ObjectID("5359550868cc9b2b372e2ea7")\',text:""},{_id:\'ObjectID("5359550868cc9b2b372e2ea8")\',text:""},{_id:\'ObjectID("5359550868cc9b2b372e2ea9")\',text:""},{_id:\'ObjectID("5359550868cc9b2b372e2e10")\',text:""}];can.fixture({"GET /api/documents":function(){return documents}});',{address:"fixtures/documents",metadata:{deps:[],format:"global"}});
/*models/models*/
define("models/models",[],function(){"use strict";var e=can.Model.extend("Database",{resource:"/api/databases"},{}),t=can.Model.extend("Collection",{resource:"/api/collections"},{}),c=can.Model.extend("Doc",{resource:"/api/documents"},{});return{get Database(){return e},get Collection(){return t},get Doc(){return c},__esModule:!0}});
/*appState*/
define("appState",["../../models/models"],function(e){"use strict";e&&e.__esModule||(e={"default":e});var t=new can.Deferred,a=can.Map.extend({define:{databases:{value:new Database.List,serialize:!1},db_name:{set:function(e){for(var t=this.attr("databases").length-1;t>=0;t--)e==this.attr("databases")[t].name&&this.attr("database",this.attr("databases")[t]);return e},remove:function(){this.attr("database",{})}},database:{set:function(e){var t=this;return console.log("database: "),console.log(e),Collection.findAll({database:e.name},function(e){t.attr("collections",e)}),e},serialize:!1},collections:{set:function(e){return console.log("collections"),console.log(e),console.log("resolving colDef"),t.resolve(e),e},serialize:!1},col_name:{set:function(e){var a=this;return t.done(function(t){for(var n=t.length-1;n>=0;n--)e==t[n].name&&a.attr("collection",t[n])}),e},remove:function(){this.attr("collection",{}),this.attr("page","database")}},collection:{value:{},set:function(e){return e},serialize:!1},docs:{set:function(e){console.log(e)},serialize:!1},doc_id:{}}}),n=new a,o=n;return window.appState=n,can.route.map(n),{get default(){return o},__esModule:!0}});
/*components/page-server/page-server*/
define("components/page-server/page-server",["../../appState"],function(e){"use strict";e&&e.__esModule||(e={"default":e});var a=e["default"];return can.Component.extend({tag:"page-server",template:can.view("/main/components/page-server/page-server.stache"),scope:{appState:a,selectDB:function(e){can.route.attr("db_name",e.name),can.route.attr("page","database")}},events:{},helpers:{}}),{}});
/*components/page-database/page-database*/
define("components/page-database/page-database",["../../appState"],function(e){"use strict";e&&e.__esModule||(e={"default":e});var t=e["default"];return can.Component.extend({tag:"page-database",template:can.view("/main/components/page-database/page-database.stache"),scope:{appState:t,home:function(){can.route.removeAttr("db_name"),can.route.attr("page","server")},openCollection:function(e,t,a){a.preventDefault(),can.route.attr("page","collection"),can.route.attr("collection",e),can.route.attr("col_name",e.name)}},events:{},helpers:{number:function(e){return e().toString().replace(/,/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,",")},index:function(e){return e()+1}}}),{}});
/*components/page-collection/page-collection*/
System.define("components/page-collection/page-collection",'"use strict";can.Component.extend({tag:"page-collection",template:can.view("/main/components/page-collection/page-collection.stache"),scope:{goHome:function(){can.route.removeAttr("db_name"),can.route.removeAttr("col_name"),can.route.attr("page","server")},gotoDB:function(){can.route.removeAttr("col_name")}},events:{},helpers:{}});',{address:"components/page-collection/page-collection",metadata:{deps:[],use:"strict",format:"global"}});
/*components/server-status/server-status*/
System.define("components/server-status/server-status",'"use strict";can.Component.extend({tag:"server-status",template:can.view("/main/components/server-status/server-status.stache"),scope:{stats:{},loading:function(){var s=this;can.$.ajax({url:"api/status"}).done(function(t){console.log("success"),s.attr("stats",t)})},refresh:function(){this.loading()}},events:{},helpers:{}});',{address:"components/server-status/server-status",metadata:{deps:[],use:"strict",format:"global"}});
/*components/query-builder/query-builder*/
System.define("components/query-builder/query-builder",'"use strict";can.Component.extend({tag:"query-builder",template:can.view("/main/components/query-builder/query-builder.stache"),scope:{},events:{},helpers:{}});',{address:"components/query-builder/query-builder",metadata:{deps:[],use:"strict",format:"global"}});
/*components/code-editor/code-editor*/
System.define("components/code-editor/code-editor",'"use strict";var count=0;can.Component.extend({tag:"code-editor",template:can.view("/main/components/code-editor/code-editor.stache"),scope:{count:++count,id:\'ObjectID("5359550868cc9b2b372e2ea1")\'},events:{},helpers:{}});',{address:"components/code-editor/code-editor",metadata:{deps:[],use:"strict",format:"global"}});
/*main*/
define("main",["mustache-helpers","routes","fixtures/databases","fixtures/collections","fixtures/documents","components/page-server/page-server","components/page-database/page-database","components/page-collection/page-collection","components/server-status/server-status","components/query-builder/query-builder","components/code-editor/code-editor","models/models","appState"],function(e,t,a,s,d,o,u,l,n,c,r,_,f){"use strict";e&&e.__esModule||(e={"default":e}),t&&t.__esModule||(t={"default":t}),a&&a.__esModule||(a={"default":a}),s&&s.__esModule||(s={"default":s}),d&&d.__esModule||(d={"default":d}),o&&o.__esModule||(o={"default":o}),u&&u.__esModule||(u={"default":u}),l&&l.__esModule||(l={"default":l}),n&&n.__esModule||(n={"default":n}),c&&c.__esModule||(c={"default":c}),r&&r.__esModule||(r={"default":r}),_&&_.__esModule||(_={"default":_}),f&&f.__esModule||(f={"default":f});var i=_.Database,p=f["default"];return $(document.body).append(can.view("main/site.stache",p)),i.findAll({},function(e){p.attr("databases").replace(e),p.bind("page",function(e,t){if(t){var a="<page-"+t+"></page-"+t+">";$("#content").html(can.stache(a)(p))}}),can.route.ready()}),{}});