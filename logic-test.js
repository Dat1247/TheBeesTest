"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgb = void 0;
var changeToHex = function (num) {
    var numChange;
    if (num < 0) {
        numChange = 0;
    }
    else if (num > 255) {
        numChange = 255;
    }
    else {
        numChange = num;
    }
    var hex = numChange.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
};
function rgb(r, g, b) {
    return "#" + changeToHex(r) + changeToHex(g) + changeToHex(b);
}
exports.rgb = rgb;
