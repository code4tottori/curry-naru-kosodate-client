/* eslint-disable node/no-unpublished-require */
"use strict";

const gulp = require("gulp");
const $ = require("gulp-load-plugins")();
const del = require("del");
const browserify = require("browserify");
const babelify = require("babelify");
const watchify = require("watchify");
const licensify = require("licensify");
const browserSync = require("browser-sync").create();
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");

gulp.task("clean", () => {
  return del(["build"]);
});

gulp.task("html", () => {
  return gulp.src("src/index.html")
    .pipe(gulp.dest("build"));
});

gulp.task("sass", () => {
  return gulp
    .src("src/sass/main.scss")
    .pipe($.plumber({ errorHandler: $.notify.onError("Error: <%= error.message %>") }))
    .pipe($.sourcemaps.init())
    .pipe($.sass())
    .pipe($.autoprefixer({
      browsers: ["> 5% in JP", "ios_saf 8.4"],
      cascade: false
    }))
    .pipe($.cssnano())
    .pipe($.sourcemaps.write("."))
    .pipe(gulp.dest("build"))
    .pipe(browserSync.stream());
});

function buildJS(watch) {
  const b = browserify({
    entries: [
      require.resolve("babel-polyfill"),
      "src/scripts/main.js"
    ],
    cache: {},
    packageCache: {},
    transform: [babelify],
    plugin: [licensify].concat(watch ? [watchify] : []),
    debug: true
  });

  b.on("update", bundle);
  bundle();

  function bundle() {
    b.bundle()
      .pipe($.plumber({ errorHandler: $.notify.onError("Error: <%= error.message %>") }))
      .pipe(source("main.js"))
      .pipe(buffer())
      .pipe($.sourcemaps.init({
        loadMaps: true
      }))
      .pipe($.uglify({
        preserveComments: "license"
      }))
      .pipe($.sourcemaps.write("."))
      .pipe(gulp.dest("build"))
      .pipe(browserSync.reload({ stream: true }));
  }
}

gulp.task("js", () => buildJS(false));

gulp.task("js:watch", () => buildJS(true));

gulp.task("images", () => {
  return gulp.src("src/images/**/*", { base: "src/images" })
		.pipe($.changed("build/images"))
    .pipe(gulp.dest("build/images"))
    .pipe(browserSync.stream());
});

gulp.task("build", ["html", "sass", "js", "images"]);

gulp.task("release", ["clean", "build"]);

gulp.task("serve", ["html", "sass", "js:watch", "images"], () => {
  browserSync.init({
    server: {
      baseDir: "build"
    }
  });
  gulp.watch("src/index.html", ["html"]).on("change", browserSync.reload);
  gulp.watch("src/sass/**/*", ["sass"]);
  gulp.watch("src/images/**/*", ["images"]);
});

gulp.task("default", ["serve"]);
