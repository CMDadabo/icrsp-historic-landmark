var gulp = require( "gulp" );

var autoprefixer = require( "gulp-autoprefixer" );
var concat = require( "gulp-concat" );
var del = require( "del" );
var deploy = require( "gulp-gh-pages" );
var inlinesource = require( "gulp-inline-source" );
var jade = require( "gulp-jade" );
var jshint = require( "gulp-jshint" );
var less = require( "gulp-less" );
var livereload = require( "gulp-livereload" );
var rename = require( "gulp-rename" );
var uglify = require( "gulp-uglify" );

// Clean first
gulp.task( "clean:html", function()
{
        return del([
            "html/*.html"
        ]);
} );

// Lint Task
gulp.task( "lint", function ()
{
        return gulp.src( "js/*.js" )
                .pipe( jshint() )
                .pipe( jshint.reporter( "default" ) )
                .pipe( livereload() );
} );

// Compile Jade
gulp.task("templates", function() {
        var YOUR_LOCALS = {};

        return gulp.src( [ "jade/*.jade", "jade/**/*.jade", "!jade/includes/**/*.jade" ] )
                .pipe(jade({
                        locals: YOUR_LOCALS,
                        pretty: true
                }))
                .pipe( gulp.dest( "html/" ) )
                .pipe( livereload() );
});

// Inline scripts and styles
gulp.task( "inlinesource", function ()
{
    return gulp.src( "html/*.html" )
            .pipe( inlinesource() )
            .pipe( gulp.dest( "html/" ) );
} );

// Compile LESS
gulp.task( "less", function ()
{
        return gulp.src( [ "less/main.less", "less/desktop.less" ] )
                .pipe( concat( "all.less" ) )
                .pipe( less() )
                .pipe( autoprefixer ( { browsers: [ "> 5%" ], cascade: false } ) )
                .pipe( gulp.dest( "html/css" ) )
                .pipe( livereload() );
} );

// Concat and minify JS
gulp.task( "scripts", function ()
{
        return gulp.src( "js/*.js" )
                .pipe( concat( "all.js" ) )
                .pipe( gulp.dest( "html/js" ) )
                .pipe( rename( "all.min.js" ) )
                .pipe( uglify() )
                .pipe( gulp.dest( "html/js" ) )
                .pipe( livereload() );
} );

// Send to GitHub Pages
gulp.task( "gh-pages", function ()
{
        return gulp
        .src( [ "html/*", "html/**/*" ] )
        .pipe( deploy( { force: true } ) );
} );

// Watch files for changes
gulp.task( "watch", function ()
{
        livereload.listen();
        gulp.watch( "js/*.js", [ "lint", "scripts" ] );
        gulp.watch( "less/*.less", [ "less", "inlinesource" ] );
        gulp.watch( [ "jade/*.jade", "jade/**/*.jade" ], [ "templates" ] );
} );

gulp.task( "build", [ "lint", "templates", "less", "scripts", "inlinesource" ] );

gulp.task( "deploy", [ "build", "gh-pages" ] );

// Set default task
gulp.task( "default", [ "build" , "watch" ] );
