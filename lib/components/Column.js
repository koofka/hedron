'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: block;\n  ', '\n  box-sizing: border-box;\n  padding: ', ';\n  width: 100%;\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  display: block;\n  ', '\n  box-sizing: border-box;\n  padding: ', ';\n  width: 100%;\n  ', '\n  ', '\n  ', '\n  ', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

var _BreakpointProvider = require('./BreakpointProvider');

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
/* eslint-disable no-unused-vars */


function ColumnContainer(props) {
  var children = props.children,
      tagName = props.tagName,
      debug = props.debug,
      divisions = props.divisions,
      fluid = props.fluid,
      xs = props.xs,
      sm = props.sm,
      md = props.md,
      lg = props.lg,
      theme = props.theme,
      xsShift = props.xsShift,
      smShift = props.smShift,
      mdShift = props.mdShift,
      lgShift = props.lgShift,
      breakpoints = props.breakpoints,
      rest = _objectWithoutProperties(props, ['children', 'tagName', 'debug', 'divisions', 'fluid', 'xs', 'sm', 'md', 'lg', 'theme', 'xsShift', 'smShift', 'mdShift', 'lgShift', 'breakpoints']);

  var newChildren = (0, _utils.passOn)(children, [_Row2.default], function (child) {
    return {
      debug: typeof child.props.debug === 'undefined' ? debug : child.props.debug
    };
  });
  return _react2.default.createElement(tagName || 'div', rest, newChildren);
}

ColumnContainer.propTypes = {
  children: require('prop-types').node,
  className: require('prop-types').string,
  tagName: require('prop-types').string,
  theme: require('prop-types').object,
  debug: require('prop-types').bool,
  divisions: require('prop-types').number,
  fluid: require('prop-types').bool,
  xs: require('prop-types').number,
  sm: require('prop-types').number,
  md: require('prop-types').number,
  lg: require('prop-types').number,
  xsShift: require('prop-types').any,
  smShift: require('prop-types').any,
  mdShift: require('prop-types').any,
  lgShift: require('prop-types').any,
  breakpoints: require('prop-types').object
};
ColumnContainer.defaultProps = {
  divisions: 12
};

var compute = function compute(name) {
  return (0, _utils.breakpoint)(name, function (props, name) {
    return function (divisions, size, shift) {
      return '\n      ' + (size ? 'width: ' + (0, _utils.divvy)(divisions, size) + '%;' : '') + '\n      ' + (shift ? 'margin-left: ' + (0, _utils.divvy)(divisions, shift) + '%;' : '') + '\n    ';
    }(props.divisions, props[name], props[name + 'Shift']);
  });
};

var Column = (0, _styledComponents2.default)(ColumnContainer)(_templateObject, function (props) {
  return props.debug ? 'background-color: rgba(50, 50, 255, .1);\n       outline: 1px solid #fff;' : '';
}, function (props) {
  return props.fluid ? '0' : '20px';
}, compute('xs'), compute('sm'), compute('md'), compute('lg'));

exports.default = (0, _BreakpointProvider.withBreakpoints)(Column);