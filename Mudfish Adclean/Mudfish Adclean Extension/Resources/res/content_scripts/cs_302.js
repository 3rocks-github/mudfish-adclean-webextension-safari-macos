
function mudfish_adclean_bd85397bf76e45e5e30dd9c2da3c055a() {
  try {
    Sizzle(`iframe[src*="//stt.pltapad.com/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_bd85397bf76e45e5e30dd9c2da3c055a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_bd85397bf76e45e5e30dd9c2da3c055a, function (items) {
  if (mudfish_adclean_g_conf_bd85397bf76e45e5e30dd9c2da3c055a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_bd85397bf76e45e5e30dd9c2da3c055a();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_bd85397bf76e45e5e30dd9c2da3c055a();
    });
  }
});
