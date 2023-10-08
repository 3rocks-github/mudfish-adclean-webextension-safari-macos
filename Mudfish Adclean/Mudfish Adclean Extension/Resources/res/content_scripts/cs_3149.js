
function mudfish_adclean_384cbd7584a4030604e9c404e16e7dc1() {
  try {
    Sizzle(`a[href^="/go/"][target="_blank"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_384cbd7584a4030604e9c404e16e7dc1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_384cbd7584a4030604e9c404e16e7dc1, function (items) {
  if (mudfish_adclean_g_conf_384cbd7584a4030604e9c404e16e7dc1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_384cbd7584a4030604e9c404e16e7dc1();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
