var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('concat', function() {
	gulp.src(["./src/es5/html5elements.js", "node_modules/es5-shim/es5-shim.min.js", "node_modules/es5-shim/es5-sham.min.js"])
		.pipe(concat("es5-compat.js"))
        .pipe(gulp.dest('dist/'));
    gulp.src(["node_modules/es6-shim/es6-shim.js"])
        .pipe(concat("es6-compat.js"))
        .pipe(gulp.dest('dist/'));
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['concat']);


gulp.task('build', ['concat']);