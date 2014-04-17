module.exports = function(gulp, dist) {
    var concat = require('gulp-concat');
    var uglify = require('gulp-uglify');
    var insert = require('gulp-insert');

    gulp.task('springbokjs-shim', function() {
        gulp.src(["node_modules/springbokjs-shim/src/es5/html5elements.js",
                "node_modules/springbokjs-shim/node_modules/douglascrockford-JSON-js/json2.js", // IE < 8, iOS < 4.0.
                "node_modules/springbokjs-shim/node_modules/es5-shim/es5-shim.js",
                "node_modules/springbokjs-shim/node_modules/es5-shim/es5-sham.js",
                "node_modules/springbokjs-shim/src/es5/addEventListener.js",
                "node_modules/springbokjs-shim/src/es5/xhr.js",
                "node_modules/springbokjs-shim/src/es5/dom.js"
            ])
            .pipe(concat("es5-compat.js"))
            .pipe(uglify({
                compress: false,
                mangle: false,
                output: {beautify: true },
            }))
            .pipe(gulp.dest(dist || 'dist/'));
        gulp.src(["node_modules/springbokjs-shim/node_modules/es6-shim/es6-shim.js"])
            .pipe(concat("es6-compat.js"))
            .pipe(uglify({
                compress: false,
                mangle: false,
                output: {beautify: true },
            }))
            .pipe(gulp.dest(dist || 'dist/'));
        gulp.src([
                //http://dean.edwards.name/weblog/2007/03/yet-another/
                "node_modules/springbokjs-shim/vendor/base2-dom-fp.js",
                "node_modules/springbokjs-shim/vendor/IE9.js"
            ])
            .pipe(concat("IE9.js"))
            .pipe(insert.prepend("var divTestIsIeLt9 = document.createElement('div'); "
                            + "divTestIsIeLt9.innerHTML = '<!--[if lt IE 9]><i></i><![endif]-->';"
                            + " if(divTestIsIeLt9.getElementsByTagName('i').length == 1){window.console && console.log('Shim for IE lt 9');\n"))
            .pipe(insert.append("\nbase2.DOM.bind(document);\n}\ndivTestIsIeLt9=null;"))
            .pipe(gulp.dest(dist || 'dist/'));
    });
};