
function mudfish_adclean_297456b56eb9f36679434e6e7f1ce5cd() {
  try {
    Sizzle(`iframe[src*="//ad.ajitad.co.kr/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_297456b56eb9f36679434e6e7f1ce5cd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_297456b56eb9f36679434e6e7f1ce5cd, function (items) {
  if (mudfish_adclean_g_conf_297456b56eb9f36679434e6e7f1ce5cd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_297456b56eb9f36679434e6e7f1ce5cd();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
