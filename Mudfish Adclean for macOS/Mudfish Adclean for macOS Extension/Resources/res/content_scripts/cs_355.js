
function mudfish_adclean_1ca66eef9f15848b58ad34625270549c() {
  try {
    Sizzle(`ins.adsbyadop`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1ca66eef9f15848b58ad34625270549c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1ca66eef9f15848b58ad34625270549c, function (items) {
  if (mudfish_adclean_g_conf_1ca66eef9f15848b58ad34625270549c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1ca66eef9f15848b58ad34625270549c();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
