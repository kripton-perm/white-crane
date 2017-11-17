"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var gcmq = require('gulp-group-css-media-queries');
var sourcemaps = require('gulp-sourcemaps');
var rigger = require('gulp-rigger');
var config = {
    src: './src',
    css: {
        watch: '/sass/**/*.scss',
        src: '/sass/style.scss',
        dest: '/css'
    },
    js: {
        watch: '/js/src/*.js',
        src: '/js/src/main.js',
        dest: '/js'
    },
    html: {
        src: '/*.html'
    }
};

// сбор js
gulp.task('js', function () {
    gulp.src(config.src + config.js.src) // получим файл main.js
        .pipe(plumber()) // для отслеживания ошибок
        .pipe(rigger()) // импортируем все указанные файлы в main.js
        //.pipe(sourcemaps.init()) //инициализируем sourcemap
        //.pipe(uglify()) // минимизируем js
        //.pipe(sourcemaps.write('./')) //  записываем sourcemap
        .pipe(gulp.dest(config.src + config.js.dest)) // положим готовый файл
        .pipe(server.reload({stream: true})); // перезагрузим сервер
});

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
  gulp.watch(config.src + config.js.watch, ["js"]);
  //gulp.watch(config.src + config.html.src).on("change", server.reload);
  gulp.watch(config.src + config.html.src, server.reload);
});
