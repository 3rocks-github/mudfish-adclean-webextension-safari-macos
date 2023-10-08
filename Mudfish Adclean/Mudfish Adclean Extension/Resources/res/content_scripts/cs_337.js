
function mudfish_adclean_366d1e0cc1ad8d9c53cadeae76781f41() {
  try {
    Sizzle(`iframe[src*="//ad.aceplanet.co.kr/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_366d1e0cc1ad8d9c53cadeae76781f41 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_366d1e0cc1ad8d9c53cadeae76781f41, function (items) {
  if (mudfish_adclean_g_conf_366d1e0cc1ad8d9c53cadeae76781f41.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_366d1e0cc1ad8d9c53cadeae76781f41();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
