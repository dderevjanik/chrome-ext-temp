const optionport = chrome.runtime.connect({ name: "option" });
optionport.postMessage({ msg: "Option page opened" });
