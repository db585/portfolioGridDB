'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src(['./scss/style.scss'])
    // , './scss/bootstrap.scss'])

    .pipe(sass().on('error', sass.logError)) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('./css'))
});

// Gulp watch syntax
// gulp.watch('app/scss/**/*.scss', ['sass']); 

// More often though, we'll want to watch more than one type of file at once. To do so, we can group together multiple watch processes into a watch task:

gulp.task('watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
  // Other watchers 
});

// sources
//  https://www.npmjs.com/package/gulp-sass
// https://github.com/gulpjs/gulp/blob/v3.9.1/docs/API.md