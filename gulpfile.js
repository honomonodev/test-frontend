const gulp = require("gulp");
const less = require("gulp-less");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

// Compile LESS to CSS
gulp.task("styles", function () {
  return gulp.src("src/styles.less").pipe(less()).pipe(gulp.dest("dist"));
});

// Compile TypeScript to JavaScript
gulp.task("scripts", function () {
  return tsProject.src().pipe(tsProject()).pipe(gulp.dest("dist"));
});

// Watch for changes
gulp.task("watch", function () {
  gulp.watch("src/**/*.less", gulp.series("styles"));
  gulp.watch("src/**/*.ts", gulp.series("scripts"));
});

// Default task
gulp.task("default", gulp.series("styles", "scripts", "watch"));
