/* DOM-shim : https://github.com/Raynos/DOM-shim/tree/master/src/all/interfaces */

var shim=function(name,shim){
    var constructor = window[name];
    if (!constructor)
        constructor = window[name] = shim.interface;
    delete shim.interface;
    var proto = constructor && constructor.prototype;
    if (shim.prototype) {
        proto = constructor.prototype = shim.prototype;
        delete shim.prototype;
    }
    
    console&&console.log("adding interface ", name);
    
    if (shim.hasOwnProperty("constructor")) {
        window[name] = constructor = shim.constructor;
        proto && (shim.constructor.prototype = proto);
        delete shim.constructor;
    }
};

shim('Event',{
    constructor: function(type, dict){
        var e = document.createEvent("Event");
        dict = dict || {};
        dict.bubbles = dict.bubbles || false;
        dict.catchable = dict.catchable || false;
        e.initEvent(type, dict.bubbles, dict.catchable);
        return e;
    }
});

shim('EventTarget',{
    interface: window.Node || window.Element
});

shim('CustomEvent',{
    interface: window.Event,
    constructor: function(type, dict){
        var e = document.createEvent("CustomEvent");
        dict = dict || {};
        dict.detail = dict.detail || null;
        dict.bubbles = dict.bubbles || false;
        dict.catchable = dict.catchable || false;
        if (e.initCustomEvent) {
            e.initCustomEvent(type, dict.bubbles, dict.catchable, dict.detail);
        } else {
            e.initEvent(type, dict.bubbles, dict.catchable);
            e.detail = dict.detail;
        }
        return e;
    }
});