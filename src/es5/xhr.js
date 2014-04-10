window.XMLHttpRequest = window.XMLHttpRequest || function () {
/*global ActiveXObject*/
try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); } catch (e1) { }
try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); } catch (e2) { }
try { return new ActiveXObject("Msxml2.XMLHTTP"); } catch (e3) { }
throw new Error("This browser does not support XMLHttpRequest.");
};
XMLHttpRequest.UNSENT = 0;
XMLHttpRequest.OPENED = 1;
XMLHttpRequest.HEADERS_RECEIVED = 2;
XMLHttpRequest.LOADING = 3;
XMLHttpRequest.DONE = 4;
