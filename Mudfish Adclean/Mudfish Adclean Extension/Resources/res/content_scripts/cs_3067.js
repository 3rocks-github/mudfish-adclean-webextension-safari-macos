
function mudfish_adclean_d726fe71ece93f00f179bdb59abd53a6() {
  try {
    Sizzle(`.ad_wrapper`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d726fe71ece93f00f179bdb59abd53a6 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d726fe71ece93f00f179bdb59abd53a6, function (items) {
  if (mudfish_adclean_g_conf_d726fe71ece93f00f179bdb59abd53a6.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d726fe71ece93f00f179bdb59abd53a6();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
