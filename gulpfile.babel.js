// const gulp = require("gulp");
import gulp from "gulp";
import pug from "gulp-pug";

const routes = {
  pug:{
    src:"src/*.pug",
    dest:"build"
  }
}

export const pug = () => gulp.src(routes.pug.src).pipe(pug()).pipe(gulp.dest());

export const dev = () => console.log("I will dev");
