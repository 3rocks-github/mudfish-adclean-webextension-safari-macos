
function mudfish_adclean_dd926a13fd7225ee7050372e55ae412a() {
  try {
    Sizzle(`div[id$="ad"][class$="ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_dd926a13fd7225ee7050372e55ae412a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_dd926a13fd7225ee7050372e55ae412a, function (items) {
  if (mudfish_adclean_g_conf_dd926a13fd7225ee7050372e55ae412a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_dd926a13fd7225ee7050372e55ae412a();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
