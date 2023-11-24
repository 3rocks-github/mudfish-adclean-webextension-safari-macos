
function mudfish_adclean_d720fd7d5e0abc0d1cca2cd00e1d6d28() {
  try {
    Sizzle(`img[src*="//ads.priel.co.kr/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d720fd7d5e0abc0d1cca2cd00e1d6d28 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d720fd7d5e0abc0d1cca2cd00e1d6d28, function (items) {
  if (mudfish_adclean_g_conf_d720fd7d5e0abc0d1cca2cd00e1d6d28.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d720fd7d5e0abc0d1cca2cd00e1d6d28();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_d720fd7d5e0abc0d1cca2cd00e1d6d28();
    });
  }
});
