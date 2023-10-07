
function mudfish_adclean_ede8db5686b0f533178b462a70b884f7() {
  try {
    Sizzle(`iframe[src*="//vod.shoppingcall.me/ad_shoppingCallme.php"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ede8db5686b0f533178b462a70b884f7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ede8db5686b0f533178b462a70b884f7, function (items) {
  if (mudfish_adclean_g_conf_ede8db5686b0f533178b462a70b884f7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ede8db5686b0f533178b462a70b884f7();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
