
function mudfish_adclean_efd2659094abf2904865d50c1871e2d0() {
  try {
    Sizzle(`iframe[src*="//ad.reople.co.kr/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_efd2659094abf2904865d50c1871e2d0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_efd2659094abf2904865d50c1871e2d0, function (items) {
  if (mudfish_adclean_g_conf_efd2659094abf2904865d50c1871e2d0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_efd2659094abf2904865d50c1871e2d0();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
