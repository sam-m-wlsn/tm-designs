const { src, dest, parallel, series, watch }  = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const reload      = browserSync.reload;
const injectPartials = require('gulp-inject-partials');

const paths = {
  src: {
    styles:   'src/scss/**/*.scss',
    scripts:  'src/js/**/*.js',
    markup:   'src/html/**/*.html',
    images:   'src/images/**/*.{gif,jpg,png,svg}'
  },
  dest: {
    styles:   'dist/css/',
    scripts:  'dist/js/',
    markup:   'dist/',
    images:   'dist/images/'
  }
}
const build = parallel(markup, images, scripts, styles);

function markup() {
  return src(paths.src.markup)
  .pipe(injectPartials())
  .pipe(dest(paths.dest.markup));
}

function scripts() {
  return src(paths.src.scripts)
    .pipe(dest(paths.dest.scripts));
}

function styles() {
  return src(paths.src.styles)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write('../maps'))
    .pipe(dest(paths.dest.styles))
    .pipe(reload({stream: true}));
}

function images() {
  return src(paths.src.images)
    .pipe(dest(paths.dest.images));
}

function serve(cb) {
  browserSync.init({
    server: "./dist"
  });

  watch(paths.src.styles, styles);
  watch(paths.src.scripts, scripts);
  watch(paths.src.markup, markup).on('change', reload);
  cb();
}

exports.serve = serve;
exports.build = build;
exports.default = series(build, serve);