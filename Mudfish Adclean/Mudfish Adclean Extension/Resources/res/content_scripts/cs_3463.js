
function mudfish_adclean_5c311976776f8fdcef742dce354b1d65() {
  try {
    Sizzle(`iframe[src*="//authanalysis.com/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5c311976776f8fdcef742dce354b1d65 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5c311976776f8fdcef742dce354b1d65, function (items) {
  if (mudfish_adclean_g_conf_5c311976776f8fdcef742dce354b1d65.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5c311976776f8fdcef742dce354b1d65();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_5c311976776f8fdcef742dce354b1d65();
    });
  }
});
