var gulp = require('gulp');
var markdownpdf = require('gulp-markdown-pdf');

var opts = {
    remarkable: {
        breaks: true,
        linkify: true
    }
};

gulp.task('default', function () {
    return gulp.src('cv.md')
        .pipe(markdownpdf(opts))
        .pipe(gulp.dest(''));
});
