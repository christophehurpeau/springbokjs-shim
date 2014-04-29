var S_loadSyncScript = function(path) {
    path = (window.basepath || '/') + path;
    var s = document.createElement('script');
    s.type = "text/javascript";
    if (s.async) {
        s.async = false;
        s.src = path;
    } else {
        var xhr=new XMLHttpRequest;
        xhr.open('GET', path , false);
        xhr.send('');
        if(xhr.status !== 200) new Error('Unable to load: '+path+'.js');
        s.text = xhr.responseText;
    }
    document.getElementsByTagName('head')[0].appendChild(s);
};
//http://kangax.github.io/es5-compat-table/
//http://kangax.github.io/es5-compat-table/es6/ Promise: FF >= 30, Chrome >= 33
if (!Object.keys || !(typeof Promise !== 'undefined' && typeof Promise.all === 'function') || !String.prototype.startsWith) {
    (Object.keys && window.CustomEvent) || S_loadSyncScript('dist/es5-compat.js');
    S_loadSyncScript('dist/es6-compat.js');
}
