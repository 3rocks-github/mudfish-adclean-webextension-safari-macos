
function mudfish_adclean_0cf3866a3884209e7f5cee6815a0a827() {
  try {
    Sizzle(`.top_logo .top_logo_img`).forEach(element => {
      element.style.marginLeft = "200px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0cf3866a3884209e7f5cee6815a0a827 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0cf3866a3884209e7f5cee6815a0a827, function (items) {
  if (mudfish_adclean_g_conf_0cf3866a3884209e7f5cee6815a0a827.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0cf3866a3884209e7f5cee6815a0a827();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
