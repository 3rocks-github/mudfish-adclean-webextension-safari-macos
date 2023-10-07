
function mudfish_adclean_64369e5ead8a2e3b0cd830d7b8625e93() {
  try {
    Sizzle(`iframe[src*="//ad.adinc.kr/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_64369e5ead8a2e3b0cd830d7b8625e93 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_64369e5ead8a2e3b0cd830d7b8625e93, function (items) {
  if (mudfish_adclean_g_conf_64369e5ead8a2e3b0cd830d7b8625e93.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_64369e5ead8a2e3b0cd830d7b8625e93();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
