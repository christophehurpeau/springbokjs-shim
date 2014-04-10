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
                "node_modules/springbokjs-shim/src/es5/xhr.js"])
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
        gulp.src(["node_modules/springbokjs-shim/vendor/IE9.js"])
            .pipe(insert.prepend("if(window.msie && window.msie < 9){\n"))
            .pipe(insert.append("\n}"))
            .pipe(gulp.dest(dist || 'dist/'));
    });
};