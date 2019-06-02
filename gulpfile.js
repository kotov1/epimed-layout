var syntax        = 'sass';


var gulp          = require('gulp'),
		gutil         = require('gulp-util' ),
		sass          = require('gulp-sass'),
		browserSync   = require('browser-sync'),
		concat        = require('gulp-concat'),
		uglify        = require('gulp-uglify'),
		cleancss      = require('gulp-clean-css'),
		rename        = require('gulp-rename'),
		autoprefixer  = require('gulp-autoprefixer'),
		notify        = require('gulp-notify');

gulp.task('browser-sync', function() {
	// browserSync({
	// 	server: {
	// 		baseDir: 'app'
	// 	},
	// 	notify: false
	// });
	browserSync({
		proxy: "epimed/index.php",
		notify: false
	});
});

gulp.task('styles', function() {
	return gulp.src('app/'+syntax+'/**/*.'+syntax+'')
	.pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))
	.pipe(autoprefixer(['last 15 versions']))
	// .pipe(rename({ suffix: '.min', prefix : '' }))
	// .pipe(cleancss( {level: { 1: { specialComments: 0 } } }))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.stream());
});

gulp.task('scripts', function() {
	return gulp.src([
		'app/libs/slick-carousel/slick/slick.min.js',
		'app/libs/fancybox-master/dist/jquery.fancybox.min.js',
		'app/libs/wow.min.js',
		'app/libs/twentytwenty-master/js/jquery.event.move.js',
		'app/libs/twentytwenty-master/js/jquery.twentytwenty.js',
		'app/libs/ProgressButtonStyles/js/classie.js',
		'app/libs/ProgressButtonStyles/js/progressButton.js',
		'app/libs/DialogEffects/js/dialogFx.js',
		'app/js/common.js',
		])
	.pipe(concat('scripts.js'))
	// .pipe(uglify())
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({ stream: true }));
});

gulp.task('code', function() {
	return gulp.src('app/*.php')
	.pipe(browserSync.reload({ stream: true }));
});


gulp.task('watch', function() {
	gulp.watch('app/'+syntax+'/**/*.'+syntax+'', gulp.parallel('styles'));
	gulp.watch(['libs/**/*.js', 'app/js/common.js'], gulp.parallel('scripts'));
	gulp.watch('app/*.php', gulp.parallel('code'));
});

gulp.task('default', gulp.parallel('watch', 'styles', 'scripts', 'browser-sync'));