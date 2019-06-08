import { injectCustomScript } from "./inject-script";
import { CUSTOM_EVENT } from "../shared/custom-events";

const injectableUrl = chrome.extension.getURL("./js/inject.js");
injectCustomScript(injectableUrl);

document.addEventListener(CUSTOM_EVENT, () => {
    console.log("script intialized");
});
