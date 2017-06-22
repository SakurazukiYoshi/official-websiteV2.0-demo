

'use strict';

var gulp=require("gulp");  //载入gulp包，提供一些API
var less=require("gulp-less");  //载入gulp-less包，提供一些API
var cssnano=require("gulp-cssnano");  //载入gulp-cssnano包，提供一些API


//-LESS编译 压缩 合并
gulp.task("css",function(){
    //这里是在执行style任务时自动执行的
    gulp.src(["less/*.less"])//找到文件下的less文件,[]多种形式，！排除这个类型的
        .pipe(less())   //将less文件转化为css文件
        .pipe(cssnano())   //将css文件压缩
        .pipe(gulp.dest("css")); //将转化成的css文件放在dist/styles中
});




gulp.task('s', ['css']);