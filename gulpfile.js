/**
 * Created by fernandorocha on 13/06/16.
 */
var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync');

gulp.task('minify-css', function() {
    return gulp.src('styles/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("assets/styles/css/*.css", ['minify-css']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('watch', ['minify-css','browser-sync']);