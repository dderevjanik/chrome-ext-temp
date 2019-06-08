import { CUSTOM_EVENT } from "../shared/custom-events";

setTimeout(function() {
    // on script ready
    document.dispatchEvent(
      new CustomEvent(CUSTOM_EVENT, {}) // payload
    );
}, 0);
