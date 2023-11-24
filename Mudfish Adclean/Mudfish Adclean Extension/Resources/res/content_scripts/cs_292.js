
function mudfish_adclean_3146b0f6965d1886f2432a870b577536() {
  try {
    Sizzle(`iframe[src*="//ad.planbplus.co.kr/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3146b0f6965d1886f2432a870b577536 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3146b0f6965d1886f2432a870b577536, function (items) {
  if (mudfish_adclean_g_conf_3146b0f6965d1886f2432a870b577536.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3146b0f6965d1886f2432a870b577536();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_3146b0f6965d1886f2432a870b577536();
    });
  }
});
