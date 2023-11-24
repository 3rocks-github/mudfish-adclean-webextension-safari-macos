
function mudfish_adclean_1b8b33edbddb695e53df6a6c02527a85() {
  try {
    Sizzle(`iframe[src*="//shoppingbox.zum.com/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1b8b33edbddb695e53df6a6c02527a85 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1b8b33edbddb695e53df6a6c02527a85, function (items) {
  if (mudfish_adclean_g_conf_1b8b33edbddb695e53df6a6c02527a85.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1b8b33edbddb695e53df6a6c02527a85();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_1b8b33edbddb695e53df6a6c02527a85();
    });
  }
});
