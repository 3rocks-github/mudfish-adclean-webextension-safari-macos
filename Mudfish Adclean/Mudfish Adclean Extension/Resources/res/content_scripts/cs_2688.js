
function mudfish_adclean_d59b6a26b11748760a55cd664e8309c6() {
  try {
    Sizzle(`._popIn_recommend_article_ad`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d59b6a26b11748760a55cd664e8309c6 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d59b6a26b11748760a55cd664e8309c6, function (items) {
  if (mudfish_adclean_g_conf_d59b6a26b11748760a55cd664e8309c6.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d59b6a26b11748760a55cd664e8309c6();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
