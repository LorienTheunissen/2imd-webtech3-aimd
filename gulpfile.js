const{ src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass');
const nodemon = require('gulp-nodemon');
const size = require('gulp-size');
const notify = require('gulp-notify');

// Automatisch je Sass bestanden omzetten naar CSS
function sass2css(done) {
    src("./public/sass/app.scss")
        .pipe(sass({
            outputStyle:'compressed'
        }).on('error', sass.logError))
        .pipe(dest("./dist/css/"))

    done();
}

// Nodemon: automatisch laden van een webpagina zonder server te heropstarten
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

// Afbeeldingen comprimeren zodat ze sneller geladen worden in je browser
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
