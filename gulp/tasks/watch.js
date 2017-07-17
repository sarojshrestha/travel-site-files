var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync');

gulp.task('watch', function(){
    browserSync.init({
        server:{
            baseDir:"app"
        }
    });
    watch('./app/index.html',function(){
        browserSync.reload();
    })

    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('cssInject');
    })
})
gulp.task('cssInject',['style'], function(){
gulp.src('./app/temp/styles/style.css')
.pipe(browserSync.stream());

});