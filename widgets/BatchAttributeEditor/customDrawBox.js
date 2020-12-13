// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/BatchAttributeEditor/customDrawBox.html":'\x3cdiv style\x3d"position:relative;width:100%;"\x3e\r\n    \x3cdiv class\x3d"draw-items"\x3e\r\n        \x3cdiv title\x3d"${nls.point}" data-geotype\x3d"POINT" data-commontype\x3d"point" class\x3d"draw-item point-icon" data-dojo-attach-point\x3d"toolPoint" tabIndex\x3d0 role\x3d"button"\x3e\x3c/div\x3e\r\n        \x3cdiv title\x3d"${nls.line}" data-geotype\x3d"LINE" data-commontype\x3d"polyline" class\x3d"draw-item line-icon" data-dojo-attach-point\x3d"toolLine" tabIndex\x3d0 role\x3d"button"\x3e\x3c/div\x3e\r\n        \x3cdiv title\x3d"${nls.polyline}" data-geotype\x3d"POLYLINE" data-commontype\x3d"polyline" class\x3d"draw-item polyline-icon" data-dojo-attach-point\x3d"toolPolyline" tabIndex\x3d0 role\x3d"button"\x3e\x3c/div\x3e\r\n        \x3cdiv title\x3d"${nls.freehandPolyline}" data-geotype\x3d"FREEHAND_POLYLINE" data-commontype\x3d"polyline" class\x3d"draw-item freehand-polyline-icon" data-dojo-attach-point\x3d"toolFreehandPolyline" tabIndex\x3d0 role\x3d"button"\x3e\x3c/div\x3e\r\n        \x3cdiv title\x3d"${nls.extent}" data-geotype\x3d"EXTENT" data-commontype\x3d"polygon" class\x3d"draw-item extent-icon" data-dojo-attach-point\x3d"toolExtent" tabIndex\x3d0 role\x3d"button"\x3e\x3c/div\x3e\r\n        \x3cdiv title\x3d"${nls.polygon}" data-geotype\x3d"POLYGON" data-commontype\x3d"polygon" class\x3d"draw-item polygon-icon" data-dojo-attach-point\x3d"toolPolygon" tabIndex\x3d0 role\x3d"button"\x3e\x3c/div\x3e\r\n        \x3cdiv title\x3d"${nls.freehandPolygon}" data-geotype\x3d"FREEHAND_POLYGON" data-commontype\x3d"polygon" class\x3d"draw-item freehand-polygon-icon" data-dojo-attach-point\x3d"toolFreehandPolygon" tabIndex\x3d0 role\x3d"button"\x3e\x3c/div\x3e\r\n        \x3cspan class\x3d"drawings-clear jimu-float-trailing" data-dojo-attach-point\x3d"btnClear" tabIndex\x3d0 role\x3d"button"\x3e${nls.clear}\x3c/span\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./customDrawBox.html dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/query dojo/keys esri/graphic esri/toolbars/draw esri/symbols/jsonUtils".split(" "),function(q,r,t,u,v,e,g,h,k,f,l,w,n,m){return q([r,t,u],{templateString:v,baseClass:"custom-draw-box",nls:null,config:null,types:null,pointSymbol:null,polylineSymbol:null,polygonSymbol:null,textSymbol:null,map:null,drawToolBar:null,
showClear:!1,postMixInProperties:function(){this.nls=window.jimuNls.drawBox},postCreate:function(){this.inherited(arguments);this._initDefaultSymbols();this._initTypes();var a=f(".draw-item",this.domNode);this.own(a.on("click",e.hitch(this,this._onItemClick)));this.own(a.on("keydown",e.hitch(this,function(b){b.keyCode!==l.ENTER&&b.keyCode!==l.SPACE||this._onItemClick(b)})));this.own(k(this.btnClear,"click",e.hitch(this,this.clear)));this.own(k(this.btnClear,"keydown",e.hitch(this,function(b){b.keyCode!==
l.ENTER&&b.keyCode!==l.SPACE||this.clear()})));this.map&&this.setMap(this.map);g.setStyle(this.btnClear,"display",!0===this.showClear?"block":"none")},disableWebMapPopup:function(){if(this.map&&this.map.webMapResponse){var a=this.map.webMapResponse.clickEventHandle;a&&(a.remove(),this.map.webMapResponse.clickEventHandle=null)}},enableWebMapPopup:function(){if(this.map&&this.map.webMapResponse){var a=this.map.webMapResponse.clickEventHandle,b=this.map.webMapResponse.clickEventListener;b&&!a&&(this.map.webMapResponse.clickEventHandle=
k(this.map,"click",e.hitch(this.map,b)))}},destroy:function(){this.drawToolBar&&this.drawToolBar.deactivate();this.map=this.drawToolBar=null;this.inherited(arguments)},setMap:function(a){a&&(this.map=a,this.drawToolBar=new n(this.map),this.drawToolBar.setMarkerSymbol(this.pointSymbol),this.drawToolBar.setLineSymbol(this.polylineSymbol),this.drawToolBar.setFillSymbol(this.polygonSymbol),this.own(k(this.drawToolBar,"draw-end",e.hitch(this,this._onDrawEnd))))},setPointSymbol:function(a){this.pointSymbol=
a;this.drawToolBar.setMarkerSymbol(this.pointSymbol)},setLineSymbol:function(a){this.polylineSymbol=a;this.drawToolBar.setLineSymbol(a)},setPolygonSymbol:function(a){this.polygonSymbol=a;this.drawToolBar.setFillSymbol(a)},setTextSymbol:function(a){this.textSymbol=a},clear:function(){this.onClear()},deactivate:function(){this.enableWebMapPopup();this.drawToolBar&&this.drawToolBar.deactivate();f(".draw-item",this.domNode).removeClass("selected")},onIconSelected:function(a,b,c){},onDrawEnd:function(a,
b,c){},onClear:function(){},_initDefaultSymbols:function(){var a={style:"esriSMSCircle",color:[0,0,128,128],name:"Circle",outline:{color:[0,0,128,255],width:1},type:"esriSMS",size:18},b={style:"esriSLSSolid",color:[79,129,189,255],width:3,name:"Blue 1",type:"esriSLS"},c={style:"esriSFSSolid",color:[79,129,189,128],type:"esriSFS",outline:{style:"esriSLSSolid",color:[54,93,141,255],width:1.5,type:"esriSLS"}};this.pointSymbol||(this.pointSymbol=m.fromJson(a));this.polylineSymbol||(this.polylineSymbol=
m.fromJson(b));this.polygonSymbol||(this.polygonSymbol=m.fromJson(c))},_initTypes:function(){this.types instanceof Array||(this.types=["point","polyline","polygon"]);var a=f(".draw-item",this.domNode);a.style("display","none");h.forEach(a,e.hitch(this,function(b){var c=b.getAttribute("data-commontype"),d=b.getAttribute("data-geotype");c=this.config.hasOwnProperty("drawTools")?0<this.config.drawTools.length?0<=h.indexOf(this.config.drawTools,d)?"block":"none":0<=h.indexOf(this.types,c)?"block":"none":
0<=h.indexOf(this.types,c)?"block":"none";g.setStyle(b,"display",c)}))},_onItemClick:function(a){a=a.target||a.srcElement;var b=f(".draw-item",this.domNode);if(g.hasClass(a,"selected"))this.deactivate();else{b.removeClass("selected");g.addClass(a,"selected");b=a.getAttribute("data-geotype");var c=a.getAttribute("data-commontype"),d=n[b];this.disableWebMapPopup();this.drawToolBar.activate(d);this.onIconSelected(a,b,c)}},_onDrawEnd:function(a){var b=f(".draw-item.selected",this.domNode)[0],c=b.getAttribute("data-geotype");
b=b.getAttribute("data-commontype");a=a.geometry;var d=a.type,p=null;p="point"===d||"multipoint"===d?this.pointSymbol:"line"===d||"polyline"===d?this.polylineSymbol:this.polygonSymbol;a=new w(a,p,null,null);this.deactivate();this.onDrawEnd(a,c,b)}})});