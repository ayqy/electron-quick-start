// webview环境
const {ipcRenderer} = require('electron')
ipcRenderer.on('our-secrets', (e, message) => {
  console.log(message);
  ipcRenderer.sendToHost('pong pong')
})
