
function mudfish_adclean_795d139b6b51d2f66606b1bf661b8bf2() {
  try {
    Sizzle(`iframe[src*="//io.smartmyd.com/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_795d139b6b51d2f66606b1bf661b8bf2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_795d139b6b51d2f66606b1bf661b8bf2, function (items) {
  if (mudfish_adclean_g_conf_795d139b6b51d2f66606b1bf661b8bf2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_795d139b6b51d2f66606b1bf661b8bf2();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});