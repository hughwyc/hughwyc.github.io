var spawn = require('child_process').exec;
hexo.on('new', function(data){
  spawn('start  "D:\Softwares\Typora\bin\typora.exe" ' + data.path);
});