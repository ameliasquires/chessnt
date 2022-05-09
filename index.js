const { app, BrowserWindow } = require('electron')

const path = require('path')
const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      autoHideMenuBar: true,
      icon: __dirname + '/icon.png',
      frame: false
    })
  
    win.loadFile('index.html')
   
  }
  app.whenReady().then(() => {
    createWindow()
  })