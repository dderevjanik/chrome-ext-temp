export function injectCustomScript(url: string) {
    const injectScript = document.createElement("script");
    injectScript.src = url;
    injectScript.onload = function () {
        injectScript.remove();
    }

    const el = document.head || document.documentElement;
    if (el) {
      el.appendChild(injectScript);
    } else {
      throw new Error(
        "document.head or document.documentElement doesn't exists. You are probably not running inside browser"
      );
    }
}

