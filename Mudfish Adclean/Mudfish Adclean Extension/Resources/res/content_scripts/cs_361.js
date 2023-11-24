
function mudfish_adclean_1a33b911cd2f06ac9716a30676b21a47() {
  try {
    Sizzle(`ins.kakao_ad_area`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1a33b911cd2f06ac9716a30676b21a47 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1a33b911cd2f06ac9716a30676b21a47, function (items) {
  if (mudfish_adclean_g_conf_1a33b911cd2f06ac9716a30676b21a47.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1a33b911cd2f06ac9716a30676b21a47();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_1a33b911cd2f06ac9716a30676b21a47();
    });
  }
});
