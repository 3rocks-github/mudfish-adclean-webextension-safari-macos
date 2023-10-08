
function mudfish_adclean_0f85f9a5026765d5de0a779e5477e46f() {
  try {
    Sizzle(`#viewarea ~ br ~ div[style*="height:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0f85f9a5026765d5de0a779e5477e46f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0f85f9a5026765d5de0a779e5477e46f, function (items) {
  if (mudfish_adclean_g_conf_0f85f9a5026765d5de0a779e5477e46f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0f85f9a5026765d5de0a779e5477e46f();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
