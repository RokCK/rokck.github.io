// Preload script kept intentionally minimal for security.
// No APIs are exposed to the renderer at this time.

const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  isElectron: true
});
