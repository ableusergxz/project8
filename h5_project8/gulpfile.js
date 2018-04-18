var gulp = require("gulp");
var connect = require("gulp-connect");

gulp.task("server",function(){
    connect.server({
        root:'src',
        port:1122,
        livereload:true
    })
})
gulp.task("default",["server"]);