
function mudfish_adclean_9489f31c2b6e32752e025dc5ff978789() {
  try {
    Sizzle(`iframe[src*="//ads.mncmedia.co.kr/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9489f31c2b6e32752e025dc5ff978789 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9489f31c2b6e32752e025dc5ff978789, function (items) {
  if (mudfish_adclean_g_conf_9489f31c2b6e32752e025dc5ff978789.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9489f31c2b6e32752e025dc5ff978789();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
