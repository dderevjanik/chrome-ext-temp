chrome.devtools.panels.create('TEMP-CHROME-EXT', 'icon16.png', './html/devpanel.html', function (_) {
    // CALLBACK
});

const dtport = chrome.runtime.connect({ name: "devtool" });
dtport.postMessage({ msg: "Devpannel connected" });
