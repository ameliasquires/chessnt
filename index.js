const { app, BrowserWindow } = require('electron')

const path = require('path')
const createWindow = () => {
    const win = new BrowserWindow({
      
      autoHideMenuBar: true,
      icon: __dirname + '/icon.png',
      frame: false
    })
    win.maximize()
    win.loadFile('index.html')
   
  }
  app.whenReady().then(() => {
    createWindow()
    
  })

  //npm exec electron-packager .