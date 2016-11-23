(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("clappr"));
	else if(typeof define === 'function' && define.amd)
		define(["clappr"], factory);
	else if(typeof exports === 'object')
		exports["AudioSelector"] = factory(require("clappr"));
	else
		root["AudioSelector"] = factory(root["Clappr"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "<%=baseUrl%>/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports['default'] = __webpack_require__(1);module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _createClass=(function(){function defineProperties(target,props){for(var i=0;i < props.length;i++) {var descriptor=props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if('value' in descriptor)descriptor.writable = true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};})();var _get=function get(_x,_x2,_x3){var _again=true;_function: while(_again) {var object=_x,property=_x2,receiver=_x3;_again = false;if(object === null)object = Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc === undefined){var parent=Object.getPrototypeOf(object);if(parent === null){return undefined;}else {_x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;}}else if('value' in desc){return desc.value;}else {var getter=desc.get;if(getter === undefined){return undefined;}return getter.call(receiver);}}};function _interopRequireDefault(obj){return obj && obj.__esModule?obj:{'default':obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function');}}function _inherits(subClass,superClass){if(typeof superClass !== 'function' && superClass !== null){throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__ = superClass;}var _clappr=__webpack_require__(2);var _publicLevelSelectorHtml=__webpack_require__(3);var _publicLevelSelectorHtml2=_interopRequireDefault(_publicLevelSelectorHtml);var _publicStyleScss=__webpack_require__(4);var _publicStyleScss2=_interopRequireDefault(_publicStyleScss);var AUTO=-1;var LevelSelector=(function(_UICorePlugin){_inherits(LevelSelector,_UICorePlugin);function LevelSelector(){_classCallCheck(this,LevelSelector);_get(Object.getPrototypeOf(LevelSelector.prototype),'constructor',this).apply(this,arguments);}_createClass(LevelSelector,[{key:'bindEvents',value:function bindEvents(){this.listenTo(this.core,_clappr.Events.CORE_READY,this.bindPlaybackEvents);this.listenTo(this.core.mediaControl,_clappr.Events.MEDIACONTROL_CONTAINERCHANGED,this.reload);this.listenTo(this.core.mediaControl,_clappr.Events.MEDIACONTROL_RENDERED,this.render);this.listenTo(this.core.mediaControl,_clappr.Events.MEDIACONTROL_HIDE,this.hideContextMenu);}},{key:'unBindEvents',value:function unBindEvents(){this.stopListening(this.core,_clappr.Events.CORE_READY);this.stopListening(this.core.mediaControl,_clappr.Events.MEDIACONTROL_CONTAINERCHANGED);this.stopListening(this.core.mediaControl,_clappr.Events.MEDIACONTROL_RENDERED);this.stopListening(this.core.mediaControl,_clappr.Events.MEDIACONTROL_HIDE);this.stopListening(this.core.getCurrentPlayback(),_clappr.Events.PLAYBACK_LEVELS_AVAILABLE);this.stopListening(this.core.getCurrentPlayback(),_clappr.Events.PLAYBACK_LEVEL_SWITCH_START);this.stopListening(this.core.getCurrentPlayback(),_clappr.Events.PLAYBACK_LEVEL_SWITCH_END);this.stopListening(this.core.getCurrentPlayback(),_clappr.Events.PLAYBACK_BITRATE);}},{key:'bindPlaybackEvents',value:function bindPlaybackEvents(){var currentPlayback=this.core.getCurrentPlayback();this.listenTo(currentPlayback,_clappr.Events.PLAYBACK_PLAY,this.onPlay);}},{key:'reload',value:function reload(){this.unBindEvents();this.bindEvents();this.bindPlaybackEvents();}},{key:'shouldRender',value:function shouldRender(){if(!this.core.getCurrentContainer())return false;var currentPlayback=this.core.getCurrentPlayback();if(!currentPlayback)return false;var hls=currentPlayback._hls;if(!hls)return false; // Only care if we have at least 2 to choose from
	var hasMultipleTracks=!!(this.tracks && this.tracks.length > 1);return hasMultipleTracks;}},{key:'render',value:function render(){if(this.shouldRender()){var style=_clappr.Styler.getStyleFor(_publicStyleScss2['default'],{baseUrl:this.core.options.baseUrl});this.$el.html(this.template({'tracks':this.tracks,'title':this.getTitle()}));this.$el.append(style);this.core.mediaControl.$('.media-control-right-panel').append(this.el);this.highlightCurrentTrack();}return this;}},{key:'onPlay',value:function onPlay(){this.fillTracks();this.render();}},{key:'fillTracks',value:function fillTracks(){var hls=this.core.getCurrentPlayback()._hls;if(hls){this.tracks = hls.audioTracks;this.current = hls.audioTrack;}}},{key:'onTrackSelect',value:function onTrackSelect(event){var hls=this.core.getCurrentPlayback()._hls;if(!hls)return;this.current = parseInt(event.target.dataset.audioSelectorSelect,10);hls.audioTrack = this.current;this.toggleContextMenu();this.highlightCurrentTrack();event.stopPropagation();return false;}},{key:'onButtonClick',value:function onButtonClick(event){this.toggleContextMenu();}},{key:'hideContextMenu',value:function hideContextMenu(){this.$('.audio_selector ul').hide();}},{key:'toggleContextMenu',value:function toggleContextMenu(){this.$('.audio_selector ul').toggle();}},{key:'buttonElement',value:function buttonElement(){return this.$('.audio_selector button');}},{key:'trackElement',value:function trackElement(id){return this.$('.audio_selector ul a' + (!isNaN(id)?'[data-audio-selector-select="' + id + '"]':'')).parent();}},{key:'getTitle',value:function getTitle(){return (this.core.options.audioSelectorConfig || {}).title;}},{key:'updateText',value:function updateText(){if(this.current != null && this.tracks[this.current]){this.buttonElement().text(this.tracks[this.current].name);}}},{key:'highlightCurrentTrack',value:function highlightCurrentTrack(){this.trackElement().removeClass('current');this.current && this.trackElement(this.current).addClass('current');this.updateText();}},{key:'name',get:function get(){return 'audio_selector';}},{key:'template',get:function get(){return (0,_clappr.template)(_publicLevelSelectorHtml2['default']);}},{key:'attributes',get:function get(){return {'class':this.name,'data-audio-selector':''};}},{key:'events',get:function get(){return {'click [data-audio-selector-select]':'onTrackSelect','click [data-audio-selector-button]':'onButtonClick'};}}],[{key:'version',get:function get(){return VERSION;}}]);return LevelSelector;})(_clappr.UICorePlugin);exports['default'] = LevelSelector;module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<button data-audio-selector-button>\n  Auto\n</button>\n<ul>\n  <% if (title) { %>\n  <li data-title><%= title %></li>\n  <% }; %>\n  <% for (var i = 0; i < tracks.length; i++) { %>\n    <li><a href=\"#\" data-audio-selector-select=\"<%= i %>\"><%= tracks[i].name %></a></li>\n  <% }; %>\n</ul>\n";

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".audio_selector[data-audio-selector] {\n  float: right;\n  margin-top: 5px;\n  position: relative; }\n  .audio_selector[data-audio-selector] button {\n    background-color: transparent;\n    color: #fff;\n    font-family: Roboto,\"Open Sans\",Arial,sans-serif;\n    -webkit-font-smoothing: antialiased;\n    border: none;\n    font-size: 10px; }\n    .audio_selector[data-audio-selector] button:hover {\n      color: #c9c9c9; }\n    .audio_selector[data-audio-selector] button.changing {\n      -webkit-animation: pulse 0.5s infinite alternate; }\n  .audio_selector[data-audio-selector] > ul {\n    list-style-type: none;\n    position: absolute;\n    bottom: 25px;\n    border: 1px solid black;\n    display: none;\n    background-color: #e6e6e6; }\n  .audio_selector[data-audio-selector] li {\n    font-size: 10px; }\n    .audio_selector[data-audio-selector] li[data-title] {\n      background-color: #c3c2c2;\n      padding: 5px; }\n    .audio_selector[data-audio-selector] li a {\n      color: #444;\n      padding: 2px 10px;\n      display: block;\n      text-decoration: none; }\n      .audio_selector[data-audio-selector] li a:hover {\n        background-color: #555;\n        color: white; }\n        .audio_selector[data-audio-selector] li a:hover a {\n          color: white;\n          text-decoration: none; }\n    .audio_selector[data-audio-selector] li.current a {\n      color: #f00; }\n\n@-webkit-keyframes pulse {\n  0% {\n    color: #fff; }\n  50% {\n    color: #ff0101; }\n  100% {\n    color: #B80000; } }\n", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }
/******/ ])
});
;