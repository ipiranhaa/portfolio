var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('default', ['sass-compile', 'browser-sync'], function() {
	gulp.watch(['**/*.html'], browserSync.reload);
    gulp.watch(['./build/**/*.css'], browserSync.reload);

	gulp.watch("./style/**/*.scss", ['sass-compile']);
});
 
gulp.task('sass-compile', function () {
  return gulp.src('./style/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build'));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});
