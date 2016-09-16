webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(34);

	var _reactDom = __webpack_require__(63);

	var _todo = __webpack_require__(201);

	var _todo2 = _interopRequireDefault(_todo);

	var _todo_list = __webpack_require__(207);

	var _todo_list2 = _interopRequireDefault(_todo_list);

	var _application = __webpack_require__(208);

	var _application2 = _interopRequireDefault(_application);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = (0, _todo2.default)();

	// This will be the presentational component

	(0, _reactDom.render)(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(_todo_list2.default, null)
	), document.getElementById('todo-list'));

/***/ }
])