module.exports = {
	publicPath:"/",
	outputDir: 'dist', // 构建输出目录
	assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
	lintOnSave: false, // 是否开启eslint保存检测，有效值：ture | false | 'error'
	runtimeCompiler: true, // 运行时版本是否需要编译
	transpileDependencies: [], // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
	productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
	css: { // 配置高于chainWebpack中关于css loader的配置
		requireModuleExtension: true, // 是否开启支持‘foo.module.css’样式
			extract: true, // 是否使用css分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用<style>方式内联至html文件中
			 sourceMap: false, // 是否在构建样式地图，false将提高构建速度
			 loaderOptions: { // css预设器配置项
					 sass: {
							 data: ''//`@import "@/assets/scss/mixin.scss";`
					 }
			 }
	 },
	parallel: require('os').cpus().length > 1, // 构建时开启多进程处理babel编译
	pluginOptions: { // 第三方插件配置
	},
	pwa: { // 单页插件相关配置 https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
	},
	devServer: {
			open: true,
			host: 'localhost',
			port: 8080,
			https: false,
			hotOnly: false,
			proxy: {
					 //配置跨域
					 '/api': {
							 target: 'http://zb.txdou.com', //test
							 ws: true,// 是否启用websockets
							 changeOrigin: true, //是否開啟代理
							 pathRewrite: {
									'^/api': ''
							 }
					 }
			
			 },
			before: app => {}
	},
	configureWebpack: {
		resolve: {
			alias: {
				'assets': '@/assets',
				'components': '@/components',
				'views': '@/views',
				'common': '@/common'
			}
		}
	}
}