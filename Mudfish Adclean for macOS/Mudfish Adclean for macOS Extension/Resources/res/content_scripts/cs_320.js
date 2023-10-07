
function mudfish_adclean_55a290f46278b228438e2c7678ae18e9() {
  try {
    Sizzle(`img[src*="//static.stax.kr/resource/banner/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_55a290f46278b228438e2c7678ae18e9 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_55a290f46278b228438e2c7678ae18e9, function (items) {
  if (mudfish_adclean_g_conf_55a290f46278b228438e2c7678ae18e9.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_55a290f46278b228438e2c7678ae18e9();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
