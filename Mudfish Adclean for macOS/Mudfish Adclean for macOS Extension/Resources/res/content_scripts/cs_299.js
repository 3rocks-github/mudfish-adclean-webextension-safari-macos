
function mudfish_adclean_c0930473a01bebdfee1f09ea2660cfa0() {
  try {
    Sizzle(`tenping[tenping-ad-display-type]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c0930473a01bebdfee1f09ea2660cfa0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c0930473a01bebdfee1f09ea2660cfa0, function (items) {
  if (mudfish_adclean_g_conf_c0930473a01bebdfee1f09ea2660cfa0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c0930473a01bebdfee1f09ea2660cfa0();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
