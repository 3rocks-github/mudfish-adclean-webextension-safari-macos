
function mudfish_adclean_cf3a6865d9f03e776c265bdc61252662() {
  try {
    Sizzle(`iframe[src*="//cdn.interworksmedia.co.kr/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_cf3a6865d9f03e776c265bdc61252662 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_cf3a6865d9f03e776c265bdc61252662, function (items) {
  if (mudfish_adclean_g_conf_cf3a6865d9f03e776c265bdc61252662.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_cf3a6865d9f03e776c265bdc61252662();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
