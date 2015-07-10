var gulp = require( 'gulp' );

var jshint = require( 'gulp-jshint' );
var less = require( 'gulp-less' );
var livereload = require( 'gulp-livereload' );
var concat = require( 'gulp-concat' );
var uglify = require( 'gulp-uglify' );
var rename = require( 'gulp-rename' );
var autoprefixer = require( 'gulp-autoprefixer' );

// Lint Task
gulp.task( 'lint', function () 
{
    return gulp.src( 'js/*.js' )
        .pipe( jshint() )
        .pipe( jshint.reporter( 'default' ) )
        .pipe( livereload() );
} );

// Compile LESS
gulp.task( 'less', function () 
{
    return gulp.src( 'less/*.less' )
        .pipe( less() )
        .pipe( autoprefixer ( { browsers: [ '> 5%' ], cascade: false } ) )
        .pipe( gulp.dest( 'html/css' ) )
        .pipe( livereload() );
} );

// Concat and minify JS
gulp.task( 'scripts', function () 
{
    return gulp.src( 'js/*.js' )
        .pipe( concat( 'all.js' ) )
        .pipe( gulp.dest( 'dist' ) )
        .pipe( rename( 'all.min.js' ) )
        .pipe( uglify() )
        .pipe( gulp.dest( 'dist' ) )
        .pipe( livereload() );
} );

// Watch files for changes
gulp.task( 'watch', function () 
{
    livereload.listen();
    gulp.watch( 'js/*.js', [ 'lint', 'scripts' ] );
    gulp.watch( 'less/*.less', [ 'less' ] );
} );

// Set default task
gulp.task( 'default', [ 'lint', 'less', 'scripts', 'watch' ] );