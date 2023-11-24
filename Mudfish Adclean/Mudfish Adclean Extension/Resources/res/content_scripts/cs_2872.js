
function mudfish_adclean_c167f323d7e287e29d853b09473cd18d() {
  try {
    Sizzle(`iframe[src*="//api.linkmine.co.kr/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c167f323d7e287e29d853b09473cd18d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c167f323d7e287e29d853b09473cd18d, function (items) {
  if (mudfish_adclean_g_conf_c167f323d7e287e29d853b09473cd18d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c167f323d7e287e29d853b09473cd18d();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c167f323d7e287e29d853b09473cd18d();
    });
  }
});
