
function mudfish_adclean_9bd94e941c8c1f717ae58f962214acef() {
  try {
    Sizzle(`div[class$="ad"][id$="ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9bd94e941c8c1f717ae58f962214acef = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9bd94e941c8c1f717ae58f962214acef, function (items) {
  if (mudfish_adclean_g_conf_9bd94e941c8c1f717ae58f962214acef.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9bd94e941c8c1f717ae58f962214acef();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
