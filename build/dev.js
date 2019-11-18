const gulp = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-clean-css');
const rename = require('gulp-rename');
const path = require('path');

const src = path.resolve(__dirname, '../lib');
const outDir = path.resolve(__dirname, '../examples/dist/');

gulp.task('compile-css', () => {
    return gulp.src([`${src}/**/*.less`, `!${src}/**/_*.less`])
        .pipe(less())
        .pipe(cssmin())
        .pipe(rename((path) => {
            path.extname = '.wxss';
        }))
        .pipe(gulp.dest(outDir));
});

gulp.task('compile-js', () => {
    return gulp.src([`${src}/**/*.js`])
        .pipe(gulp.dest(outDir));
});

gulp.task('compile-json', () => {
    return gulp.src([`${src}/**/*.json`])
        .pipe(gulp.dest(outDir));
});

gulp.task('compile-wxml', () => {
    return gulp.src([`${src}/**/*.wxml`])
        .pipe(gulp.dest(outDir));
});

gulp.task('auto', () => {
    gulp.watch(`${src}/**/*.less`, ['compile-css']);
    gulp.watch(`${src}/**/*.js`, ['compile-js']);
    gulp.watch(`${src}/**/*.json`, ['compile-json']);
    gulp.watch(`${src}/**/*.wxml`, ['compile-wxml']);
});

gulp.task('default', ['compile-css', 'compile-js', 'compile-json', 'compile-wxml', 'auto']);
