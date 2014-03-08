module.exports = function(grunt) {
    // 配置
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        concat : {
			css : {
				src: ['src/css/reset.css','src/css/base.css','src/css/main.css','src/css/animate.css'],
				dest: 'dest/all.css'
			},
            domop : {
                src: ['src/js/prototype1.7.1.js', 'src/js/hammer.js'],
                dest: 'dest/ph.js'
            }
        },
		cssmin: {
			css: {
				src: 'dest/all.css',
				dest: 'dest/all-min.css'
			}
		},
        uglify : {
            options : {
                banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build : {
                src : 'dest/ph.js',
                dest : 'dest/ph.min.js'
            }
        }
    });
    //载入concat和uglify插件，分于合并和压缩
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-css');
	
    // 注册任务
    grunt.registerTask('default', ['concat', 'uglify','cssmin']);
	
	grunt.registerTask('mytasktest','一个最简单的任务演示，根据参数打印不同的输出.',function(arg1,arg2){
		if(arguments.length === 0){
			grunt.log.writeln('任务'+this.name+",没有参数");
		} else if (arguments.length === 1){
			grunt.log.writeln('任务' + this.name + ", 有一个参数是" + arg1);
		} else {
			 grunt.log.writeln('任务' + this.name + ", 有两个参数分别是" + arg1 + ", " + arg2);
		}
	});
	
	grunt.registerTask('taskcalltask', '任务调用任务', function() {
        // 调用mytasktest
        grunt.task.run('mytasktest:param1:param2');
		//调用多个
		//grunt.task.run('mytask1', 'mytask2');
    });
	
	
};