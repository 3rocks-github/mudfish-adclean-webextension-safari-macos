
function mudfish_adclean_4bcaa24b3226b5c09ef139ba2ba1e73b() {
  try {
    Sizzle(`ins[class^="MediaIndex_AD_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4bcaa24b3226b5c09ef139ba2ba1e73b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4bcaa24b3226b5c09ef139ba2ba1e73b, function (items) {
  if (mudfish_adclean_g_conf_4bcaa24b3226b5c09ef139ba2ba1e73b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4bcaa24b3226b5c09ef139ba2ba1e73b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_4bcaa24b3226b5c09ef139ba2ba1e73b();
    });
  }
});
