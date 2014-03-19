module.exports = function(gulp) {
    var concat = require('gulp-concat');

    gulp.task('springbokjs-shim', function() {
        gulp.src(["node_modules/springbokjs-shim/src/es5/html5elements.js",
                    "node_modules/springbokjs-shim/node_modules/es5-shim/es5-shim.min.js",
                    "node_modules/springbokjs-shim/node_modules/es5-shim/es5-sham.min.js"])
            .pipe(concat("es5-compat.js"))
            .pipe(gulp.dest('dist/'));
        gulp.src(["node_modules/springbokjs-shim/node_modules/es6-shim/es6-shim.js"])
            .pipe(concat("es6-compat.js"))
            .pipe(gulp.dest('dist/'));
    });
};