const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('ipc', {
    send: (...args) => {
        ipcRenderer.send(...args);
    }
});