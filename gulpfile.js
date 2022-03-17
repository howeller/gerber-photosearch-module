// Node & NPM packages
const del = require('del'),
	fs = require('fs'),
	merge = require('merge-stream'),
	path = require('path'),
	gulp = require('gulp'),
	sass = require('gulp-sass')(require('sass')),
	gcmq = require('gulp-group-css-media-queries'),
	autoprefixer = require('gulp-autoprefixer'),
	rename = require('gulp-rename'),
	uglifycss = require('gulp-uglifycss');

// Directory structure
const dir = {
	html:'./src/html/',
	js:'./src/js/',
	scss:'./src/scss/',
	dist:'./build/html/Gerber_Responsive_Homepage_Banner/',
	images:'./src/images/'
}

const prefixerPrefs = {
	cascade: false
}
// const { html, css, dist, images  } = dir;

// gulp.task('sass')	
function buildStyles() {
  return gulp.src(dir.scss+'style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(prefixerPrefs))
    .pipe(gcmq())
    .pipe(gulp.dest(dir.dist));
}

function build() {

	let _html = gulp.src(dir.html+'*.html').pipe(rename('index.html'))

	let _assets = gulp.src([dir.images+'**', dir.js+'**'])

	return merge(_html, _assets).pipe(gulp.dest(dir.dist));
}

gulp.task('clean', () => { return del(dir.dist+'**/*'); });
gulp.task('build', build);
gulp.task('sass', buildStyles);
gulp.task('default', gulp.series('sass', 'build'));
// gulp.task('watch', function(callback) { return gulp.watch(dir.src+'**/**', gulp.series('default')); callback(); });
gulp.task('watch', () => { return gulp.watch(['src/*/**'], gulp.series('default'))});


