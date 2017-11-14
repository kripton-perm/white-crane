"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var gcmq = require('gulp-group-css-media-queries');
var sourcemaps = require('gulp-sourcemaps');
var config = {
    src: './src',
    css: {
        watch: '/sass/**/*.scss',
        src: '/sass/styles.scss',
        dest: '/css'
    },
    html: {
        src: '/*.html'
    }
};

gulp.task("style", function() {
  gulp.src(config.src + config.css.src)
    //.pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass())
    .pipe(gcmq())
    .pipe(postcss([
      autoprefixer()
    ]))
    //.pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.src + config.css.dest))
    .pipe(server.reload({
      stream: true
    }));
});

gulp.task("serve", ["style"], function() {
  server.init({
    server: config.src,
    //notify: false,
    open: false,
    cors: true//,
    //ui: false
  });

  gulp.watch(config.src + config.css.watch, ["style"]);
  //gulp.watch(config.src + config.html.src).on("change", server.reload);
  gulp.watch(config.src + config.html.src, server.reload);
});
