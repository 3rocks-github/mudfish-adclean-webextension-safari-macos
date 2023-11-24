
function mudfish_adclean_e36e28b5c38d12080a87fc771a345095() {
  try {
    Sizzle(`#livereAdWrapper`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e36e28b5c38d12080a87fc771a345095 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e36e28b5c38d12080a87fc771a345095, function (items) {
  if (mudfish_adclean_g_conf_e36e28b5c38d12080a87fc771a345095.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e36e28b5c38d12080a87fc771a345095();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e36e28b5c38d12080a87fc771a345095();
    });
  }
});
