const{ src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
/*function pizza() {
    return src("./*.md")
    .pipe(dest("./markdown"));   
}*/

function sass2css(done) {
    src("./public/sass/app.scss")
        .pipe(sass({
            outputStyle:'compressed'
        }).on('error', sass.logError))
        .pipe(dest("./dist/css/"))
        .pipe(browserSync.stream());

    done();
}

watch('./public/sass/**/*.scss', sass2css);


module.exports.default = series(sass2css);
