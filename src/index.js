'use strict'

const { app, BrowserWindow } = require('electron')

console.dir(app)

app.on('before-quit', () => {
  console.log('saliendo')
});

app.on('ready', () => {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    title: 'Hola Mundo',
    center: true,
    maximizable: false,
    show: false,
  })

  win.removeMenu() //borrar menu

  win.once('ready-to-show', () => {
    win.show()
  });

  win.on('close', () => {
    win = null
    app.quit()
  })

  win.loadURL(`file://${__dirname}/renderer/index.html`)
})
