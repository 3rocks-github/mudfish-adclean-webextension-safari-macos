
function mudfish_adclean_ed4ba318f17bffdddd76d4375445271a() {
  try {
    Sizzle(`a[href*="//ad.planbplus.co.kr/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ed4ba318f17bffdddd76d4375445271a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ed4ba318f17bffdddd76d4375445271a, function (items) {
  if (mudfish_adclean_g_conf_ed4ba318f17bffdddd76d4375445271a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ed4ba318f17bffdddd76d4375445271a();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_ed4ba318f17bffdddd76d4375445271a();
    });
  }
});
