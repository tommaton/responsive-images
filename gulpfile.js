var gulp = require('gulp'); 

var jshint = require('gulp-jshint');

// Lint Task
gulp.task('lint', function() {
    gulp.src('./js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('default', ['lint']);