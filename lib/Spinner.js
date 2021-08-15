var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
var r = 40;
function getXOffset(deg) {
    return r * Math.sin(deg / 180 * Math.PI);
}
function getYOffset(deg) {
    return r * (1 - Math.cos(deg / 180 * Math.PI));
}
/**
 * @param {boolean} clockwise Clockwise flag.
 * @param {boolean} fill Fill flag.
 * @param {number} deg The degree value in 360°.
 */
function getD(clockwise, fill, deg) {
    var ret = (fill ? "M 50 50 l 0 " + -r : "M 50 " + (50 - r))
        + (" a " + r + " " + r + " 0 ")
        + (((deg >= 180) === clockwise ? 1 : 0) + " " + (clockwise ? 1 : 0))
        + (" " + getXOffset(deg) + " " + getYOffset(deg) + " M 50 50 Z");
    return ret;
}
function Spinner(_a) {
    var size = _a.size, width = _a.width, fill = _a.fill, colors = _a.colors;
    var _b = useState(1), deg = _b[0], setDeg = _b[1];
    var _c = useState(0), colorInd = _c[0], setColorInd = _c[1];
    var spinnerSize = (size ? size : '40px');
    var spinnerWidth = (width ? width : '4');
    var style = {
        display: 'inline-flex',
        width: spinnerSize,
        height: spinnerSize,
    };
    useEffect(function () {
        var handler = setInterval(function () {
            setDeg(function (deg) {
                var nextVal = (deg + 3);
                if (nextVal >= 360) {
                    nextVal %= 360;
                    setColorInd((colorInd + 1) % colors.length);
                }
                return nextVal;
            });
        }, 16);
        return function () { clearInterval(handler); };
    }, [colors, colorInd]);
    return (_jsxs("svg", __assign({ style: style, width: '100%', height: '100%', viewBox: '0 0 100 100' }, { children: [_jsx("path", { d: getD(true, fill, deg), strokeWidth: fill ? '0' : spinnerWidth, stroke: colors[colorInd], fill: (fill ? colors[colorInd] : 'none') }, void 0), colors.length > 1 &&
                _jsx("path", { d: getD(false, fill, deg), strokeWidth: fill ? '0' : spinnerWidth, stroke: (colorInd === 0 ? colors[colors.length - 1] : colors[colorInd - 1]), fill: (fill ? (colorInd === 0 ? colors[colors.length - 1] : colors[colorInd - 1]) : 'none') }, void 0)] }), void 0));
}
export { Spinner as default, getD };
