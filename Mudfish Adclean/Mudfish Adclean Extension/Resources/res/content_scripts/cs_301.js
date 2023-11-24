
function mudfish_adclean_994b596079efe72bef5318eb4a4a1457() {
  try {
    Sizzle(`ins.viewus-ad`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_994b596079efe72bef5318eb4a4a1457 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_994b596079efe72bef5318eb4a4a1457, function (items) {
  if (mudfish_adclean_g_conf_994b596079efe72bef5318eb4a4a1457.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_994b596079efe72bef5318eb4a4a1457();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_994b596079efe72bef5318eb4a4a1457();
    });
  }
});
