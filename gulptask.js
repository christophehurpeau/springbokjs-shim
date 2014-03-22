module.exports = function(gulp) {
    var concat = require('gulp-concat');
    var uglify = require('gulp-uglify');

    gulp.task('springbokjs-shim', function() {
        gulp.src(["node_modules/springbokjs-shim/src/es5/html5elements.js",
                "node_modules/springbokjs-shim/node_modules/douglascrockford-JSON-js/json2.js", // IE < 8, iOS < 4.0.
                "node_modules/springbokjs-shim/node_modules/es5-shim/es5-shim.js",
                "node_modules/springbokjs-shim/node_modules/es5-shim/es5-sham.js"])
            .pipe(concat("es5-compat.js"))
            .pipe(uglify())
            .pipe(gulp.dest('dist/'));
        gulp.src(["node_modules/springbokjs-shim/node_modules/es6-shim/es6-shim.js"])
            .pipe(concat("es6-compat.js"))
            .pipe(uglify())
            .pipe(gulp.dest('dist/'));
    });
};