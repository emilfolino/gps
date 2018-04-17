"use strict";

var m = require("mithril");

var position = {
    currentPosition: {},

    getPosition: function() {
        navigator.geolocation.getCurrentPosition(
            position.geoSuccess, position.geoError);
    },

    geoSuccess: function(pos) {
        position.currentPosition = pos.coords;
        console.log(position.currentPosition);
        m.redraw();
    },

    geoError: function(error) {
        console.log('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
};

module.exports = position;
