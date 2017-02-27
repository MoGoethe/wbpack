'use strict';

/*
	webpack  开发环境下编译
	webpack -p 生产环境下编译
	webpakc -w 监听文件改动
	webpack -d 开启source maps(方便调试)
	webpack -wd同时开启
*/

module.exports = {
	entry:'./index.js',		//入口文件
	output:{
		filename:'boundle.js',//输出文件
		dist:'/'			//输出目录
	},
	devtool:'source-map',		//参数设置，
	module:{
		loader:[
			{
				test:/\.css$/,
				loader:'style!css' //css加载
			}, {
				test:/\.js$/,
				loader:'babel',			
				exclude:/node_modules/  //排除某些目录
			}

		]
	}

}
