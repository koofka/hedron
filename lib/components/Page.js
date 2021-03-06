'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

var _Hidden = require('./Hidden');

var _Hidden2 = _interopRequireDefault(_Hidden);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
/* eslint-disable no-unused-vars */


function PageContainer(props) {
  var children = props.children,
      tagName = props.tagName,
      debug = props.debug,
      fluid = props.fluid,
      rest = _objectWithoutProperties(props, ['children', 'tagName', 'debug', 'fluid']);

  var newChildren = (0, _utils.passOn)(children, [_Row2.default, _Hidden2.default], function (child) {
    return {
      debug: typeof child.props.debug === 'undefined' ? debug : child.props.debug
    };
  });
  return _react2.default.createElement(tagName || 'div', rest, newChildren);
}

PageContainer.propTypes = {
  children: require('prop-types').node,
  className: require('prop-types').string,
  tagName: require('prop-types').string,
  debug: require('prop-types').bool,
  fluid: require('prop-types').bool,
  width: require('prop-types').string
};
var Page = (0, _styledComponents2.default)(PageContainer)(_templateObject, function (props) {
  return props.fluid ? 'width: 100%;' : '\n      margin: 0 auto;\n      max-width: 100%;\n      ' + (props.width ? 'width: ' + props.width + ';' : 'width: 960px;') + '\n    ';
});

exports.default = Page;