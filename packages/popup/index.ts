const popupport = chrome.runtime.connect({ name: "popup" });
popupport.postMessage({ msg: "Popup page opened" });
