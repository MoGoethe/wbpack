#前端自动化工程配置文件
<font style="color:red">*只说明各配置文件主要字段值*</font>	
##package.json
#####package.json 是项目中包含各种所需模块以及项目的配置信息（名称、版本、许可证等）meta 信息。
#####scripts：可以配置各类命令，例如：

<pre><code> "scripts": {
		"start": "webpack -w",
		"build": "rm -rf ./build/* && webpack --config ./webpack.production.config.js --progress && ls ./build"
	},
</code></pre>
* npm start 则会执行 webpack -w (也可配置其他的命令，如：webpack-dev-server --progress)
* npm build 则执行build：对应的值命令 上述命令可以解释为：先删除 ./build下的所有文件，然后执行命令 webpack --progress 并且使用：  ./webpack.production.config.js作为本次webpack命令的配置文件，最后再列出 ./build目录下的目录文件

#####dependencies：项目应用运行依赖模块 ，npm i moduleName --save （例如 react）
#####devDependencies：项目应用开发环境依赖，npm i moduleName --save -d(例如 mocha，babel-cli，babel-preset-es2015，autoprefixer之类的文件就应该放在开发依赖中)

##webpack.config.js
wbepack默认使用的配置文件
<pre><code>
var config = require('./w.config');	//参照本目录代码
module.exports = {
	devtool: config.devtool,  //生产环境下的工具 ，一般为：'source-map' 主要用于js错误的源文件追踪
	entry: config.entry,	//入口文件
	output: {//输出配置
		path: __dirname + '/server', //__dirname为当前目录
		filename: 'app.js',	//输出文件名
	},
	eslint: config.eslint,		//js语法检测，参照下一模块
	module: {
		loaders: config.loaders 	//模块加载器
	},
	plugins: config.devPlugins,		//插件
	devServer: config.devServer		//本地服务器配置
};
</code></pre>

##.eslintrc.js 
* js语法检测插件 eslint 配置文件
* 原本不应该是js文件，但是为了使用配合webpack，则使用了.js可是使用require()以方便配置
<pre><code>
module.exports = {
	"extends": "airbnb",//编码规范，意思是继承airbnb编码规范
	"installedESLint": true,
	"plugins": [
		"react"
	],
	"rules": {
		"react/jsx-filename-extension": [2, { extensions: ['.js','.jsx'] }],
		"func-names": [0],
		"new-cap": [2, { newIsCap: true ,capIsNew: true, capIsNewExceptions: ['List', 'Map']}],
		"linebreak-style": [0]
	},
	"env": {
		"browser": true
	}
};
</code></pre>

#####参考文档  [airbnb文档1](http://www.tuicool.com/articles/NjAVB3A "airbnb")，[airbnb文档2](https://segmentfault.com/a/1190000005984309 "airbnb")，[airbnb文档3](http://pastebin.com/EZCun2hL "airbnb")

##.babelrc
#####主要用于配置 babel 转译使用，自动使用
例如react的babel配置：
<pre><code>{
		"presets":[
			'es2015',
			'react',
			'stage-2'
		],
		plugin:[]
	}
</code></pre>

##.gitignore
在使用git做版本控制的使用配置，例如
<pre><code>
	/node_module
	/build
	# Logs
	/logs
	#log
	.log
	debug.log*
</code></pre>
其中：忽略node_module；build两个目录的文件 ，忽略所有的.log日志文件，除开debug.log文件（？？）


* 以斜杠“/”开头表示目录；
* 以星号“*”通配多个字符；
* 以问号“?”通配单个字符
* 以方括号“[]”包含单个字符的匹配列表；

如：
/*<br />
!.gitignor<br />
!/fw/bin<br />
!/fw/sf/

说明：忽略全部内容，但是不忽略 .gitignore 文件、根目录下的 /fw/bin/ 和 /fw/sf/ 目录；
