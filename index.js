var app = require('app'),
    BrowserWindow = require('browser-window');

require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function(){
  if(process.platform != 'darwin'){
    app.quit();
  }
});

app.on('ready',function(){
  mainWindow = new BrowserWindow({fullscreen: true});

  mainWindow.loadUrl('file://'+__dirname+'/.tmp/index.html');
  mainWindow.openDevTools();
  mainWindow.on('closed', function(){
    mainWindow = null;
  });
});
