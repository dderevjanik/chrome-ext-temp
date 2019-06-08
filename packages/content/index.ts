import { injectCustomScript } from "./inject-script";
import { CUSTOM_EVENT } from "../shared/custom-events";

// inject script

const injectableUrl = chrome.extension.getURL("./js/inject.js");
injectCustomScript(injectableUrl);

document.addEventListener(CUSTOM_EVENT, () => {
    console.log("script intialized");
});

// messaging

const port = chrome.runtime.connect({ name: "content", includeTlsChannelId: true });
port.postMessage({ msg: "Content script connected" });
