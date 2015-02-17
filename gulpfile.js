var gulp = require('gulp'),
    path = require('path'),
    plugins = require('gulp-load-plugins')();

// Source Paths
var src = {
    "js" : "src/js/**/*.js",
    "sass" : "src/sass/*.scss"
};

// Destination Paths
var dest = {
    "css" : "../assets/css",
    "images" : "../assets/images",
    "js" : "assets/js",
    "js_file" : "application.js"
};

// Compass
gulp.task('css', function() {
    return gulp.src(src.sass)
        .pipe(plugins.compass({
            project: path.join(__dirname, 'src'),
            style: "compressed",
            css: dest.css,
            generated_images_path: dest.images
        }))
        .on('error', function(error) {
            console.log(error);
            this.emit('end');
        })
        .pipe(gulp.dest(dest.css));
});

// Concatenate and Minify Javascript Files
gulp.task('js', function() {
   return gulp.src(src.js)
       .pipe(plugins.concat(dest.js_file))
       .pipe(plugins.uglify())
       .pipe(gulp.dest(dest.js));
});

// Watch for Javascript files only
gulp.task('watch:js', function() {
    gulp.watch(src.js, ['js'])
});

// Watch for CSS files only
gulp.task('watch:css', function() {
    gulp.watch(src.sass, ['css'])
});

// Watch for CSS and Javascript files
gulp.task('watch', ['watch:css', 'watch:js']);

// Watch for CSS and Javascript files via default task
gulp.task('default', ['watch']);