const{ src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass');
const nodemon = require('gulp-nodemon');
const size = require('gulp-size');
const notify = require('gulp-notify');

function sass2css(done) {
    src("./public/sass/app.scss")
        .pipe(sass({
            outputStyle:'compressed'
        }).on('error', sass.logError))
        .pipe(dest("./dist/css/"))

    done();
}
function startnodemon(done) {
    var started = false;
    return nodemon({
        script: './bin/www'
    }).on('start', function() {
        if (!started) {
            done();
            started=true;
        }
    })
    
}
function sizing(done) {
    const kb = size();
    src("./app.js")
    .pipe(kb)
    .pipe(dest('./'))
    .pipe(notify ({
        onLast:true,
        message: () => `Total size = ${kb.prettySize}`
        
    }));
    
}

watch('./public/sass/**/*.scss', sass2css);


module.exports.default = parallel(startnodemon, sass2css, sizing);
