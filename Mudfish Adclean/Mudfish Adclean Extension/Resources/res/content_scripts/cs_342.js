
function mudfish_adclean_e5a3e96ea30a534329ff7f13fd6c31ae() {
  try {
    Sizzle(`iframe[src*="//ad.linkprice.com/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e5a3e96ea30a534329ff7f13fd6c31ae = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e5a3e96ea30a534329ff7f13fd6c31ae, function (items) {
  if (mudfish_adclean_g_conf_e5a3e96ea30a534329ff7f13fd6c31ae.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e5a3e96ea30a534329ff7f13fd6c31ae();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
