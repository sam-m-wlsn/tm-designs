const { src, dest, parallel, series, watch }  = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const reload      = browserSync.reload;

const paths = {
  src: {
    styles:   'src/scss/**/*.scss',
    scripts:  'src/js/**/*.js',
    markup:   'src/html/**/*.html'
  },
  dest: {
    styles:   'dist/css/',
    scripts:  'dist/js/',
    markup:   'dist/'
  }
}

function markup() {
  console.log(`Processing Markup => ${paths.src.markup} => ${paths.dest.markup}`);
  return src(paths.src.markup)
  .pipe(dest(paths.dest.markup));
}

function scripts() {
  console.log(`Processing Scripts => ${paths.src.scripts} => ${paths.dest.scripts}`);
  return src(paths.src.scripts)
    .pipe(dest(paths.dest.scripts));
}

function styles() {
  console.log(`Processing Styles => ${paths.src.styles} => ${paths.dest.styles}`);
  return src(paths.src.styles)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write('../maps'))
    .pipe(dest(paths.dest.styles))
    .pipe(reload({stream: true}));
}

function build(cb) {
  parallel(markup, scripts, styles);
  cb();
}

function serve(cb) {
  parallel(build);

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
exports.default = serve;