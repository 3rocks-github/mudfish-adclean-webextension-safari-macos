
function mudfish_adclean_93e4984c0a51ae2716296544b3fba603() {
  try {
    Sizzle(`div[id^="google_ads_iframe_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_93e4984c0a51ae2716296544b3fba603 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_93e4984c0a51ae2716296544b3fba603, function (items) {
  if (mudfish_adclean_g_conf_93e4984c0a51ae2716296544b3fba603.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_93e4984c0a51ae2716296544b3fba603();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_93e4984c0a51ae2716296544b3fba603();
    });
  }
});
