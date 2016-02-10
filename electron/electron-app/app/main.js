var app = require('app');
var BrowserWindow = require('browser-window');

require('crash-reporter').start({
	productName: 'Clauber Stipkovic',
	companyName: 'Bratstvo Inc.',
	submitURL: 'http://Bratstvoinc.com',
	autoSubmit: true
});

var mainWindow = null;

app.on('window-all-closed', function() {
	if (process.plataform !== 'darwin') {
		app.quit();
	}
});

app.on('ready', function() {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600
	});

	mainWindow.loadURL('file://' + __dirname + '/index.html');

	mainWindow.openDevTools();

	mainWindow.on('closed', function() {
		mainWindow = null;
	});
})
