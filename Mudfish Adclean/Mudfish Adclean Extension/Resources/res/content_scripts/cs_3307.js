
function mudfish_adclean_bad936d351c6965ebfebc55db79cce73() {
  try {
    Sizzle(`div[id^="ad_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_bad936d351c6965ebfebc55db79cce73 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_bad936d351c6965ebfebc55db79cce73, function (items) {
  if (mudfish_adclean_g_conf_bad936d351c6965ebfebc55db79cce73.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_bad936d351c6965ebfebc55db79cce73();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
