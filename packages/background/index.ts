chrome.runtime.onConnect.addListener(function (port) {
    console.log(`[APP] '${port.name.toUpperCase()}' connected`);
    console.log(JSON.stringify(port));
    port.onMessage.addListener(function (msg) {
       console.log(`[${port.name.toUpperCase()}]`, msg);
    });
});
