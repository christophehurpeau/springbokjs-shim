var gulp = require('gulp');
require('./gulptask.js')(gulp);

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['springbokjs-shim']);