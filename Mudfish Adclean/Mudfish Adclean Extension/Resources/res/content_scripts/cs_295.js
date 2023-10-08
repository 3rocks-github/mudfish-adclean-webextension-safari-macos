
function mudfish_adclean_0c3dfc0f240e8688125bcf5fea15963f() {
  try {
    Sizzle(`iframe[src*="//ads.mtgroup.kr/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0c3dfc0f240e8688125bcf5fea15963f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0c3dfc0f240e8688125bcf5fea15963f, function (items) {
  if (mudfish_adclean_g_conf_0c3dfc0f240e8688125bcf5fea15963f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0c3dfc0f240e8688125bcf5fea15963f();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
