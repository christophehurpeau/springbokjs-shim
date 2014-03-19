var S_loadSyncScript=function(path){
    var xhr=new XMLHttpRequest;
    xhr.open('GET', path , false);
    xhr.send();
    if(xhr.status !== 200) new Error('Unable to load: '+path+'.js');
    var s = document.createElement('script');
    s.type = "text/javascript";
    s.text = xhr.responseText;
    document.getElementsByTagName('head')[0].appendChild(s);
};
//http://kangax.github.io/es5-compat-table/
//http://kangax.github.io/es5-compat-table/es6/ Promise: FF >= 30, Chrome >= 33
if (!Object.keys || !(typeof Promise !== 'undefined' && typeof Promise.all === 'function')) {
    Object.keys || S_loadSyncScript('dist/es5-compat.js');
    S_loadSyncScript('dist/es6-compat.js');
}