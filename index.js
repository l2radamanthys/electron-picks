'use strict'

const { app, BrowserWindow } = require('electron')

console.dir(app)

app.on('before-quit', () => {
  console.log('saliendo')
});

app.on('ready', () => {
  let win = new BrowserWindow()
  win.on('close', () => {
    win = null
    app.quit()
  })
})

// 