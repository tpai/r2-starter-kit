var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackcfg = require("./webpack.config");

gulp.task("webpack", function(callback) {
	webpack(webpackcfg, function(err, stats) {
		if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString());
		callback();
	});
});

gulp.task("webpack-watch", function(callback) {
	webpackcfg.entry = webpackcfg.entry.concat([
		"webpack-dev-server/client?http://localhost:8080",
		"webpack/hot/only-dev-server"
	]);
	webpackcfg.plugins = [ new webpack.HotModuleReplacementPlugin() ];

	new WebpackDevServer(webpack(webpackcfg), {

		publicPath: webpackcfg.output.publicPath

    }).listen(8080, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
    });
});

gulp.task("watch", ["webpack-watch"]);
gulp.task("build", ["webpack"]);