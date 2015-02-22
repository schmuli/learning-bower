var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var config = {
    destination: 'dist'
};

gulp.task('build', function () {
   gulp.src('src/**/*.js')
    .pipe(concat('out.js'))
    .pipe(babel())
    .pipe(gulp.dest(config.destination))
    .pipe(rename('out.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.destination));
});
