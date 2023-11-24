
function mudfish_adclean_525a38dd5f484b45219f45a283dd9c68() {
  try {
    Sizzle(`iframe[src*="/ad.bidrich.com/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_525a38dd5f484b45219f45a283dd9c68 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_525a38dd5f484b45219f45a283dd9c68, function (items) {
  if (mudfish_adclean_g_conf_525a38dd5f484b45219f45a283dd9c68.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_525a38dd5f484b45219f45a283dd9c68();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_525a38dd5f484b45219f45a283dd9c68();
    });
  }
});
