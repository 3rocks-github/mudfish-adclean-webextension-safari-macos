
function mudfish_adclean_0d9ce8a6add1446719fc0b0944631b7c() {
  try {
    Sizzle(`ins.adsbygoogle`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0d9ce8a6add1446719fc0b0944631b7c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0d9ce8a6add1446719fc0b0944631b7c, function (items) {
  if (mudfish_adclean_g_conf_0d9ce8a6add1446719fc0b0944631b7c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0d9ce8a6add1446719fc0b0944631b7c();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_0d9ce8a6add1446719fc0b0944631b7c();
    });
  }
});
