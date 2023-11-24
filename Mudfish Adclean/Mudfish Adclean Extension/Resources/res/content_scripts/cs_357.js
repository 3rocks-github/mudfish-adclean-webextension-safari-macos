
function mudfish_adclean_9653c924ce9e9091588da97c573590e8() {
  try {
    Sizzle(`iframe[src^="https://googleads.g.doubleclick.net/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9653c924ce9e9091588da97c573590e8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9653c924ce9e9091588da97c573590e8, function (items) {
  if (mudfish_adclean_g_conf_9653c924ce9e9091588da97c573590e8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9653c924ce9e9091588da97c573590e8();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_9653c924ce9e9091588da97c573590e8();
    });
  }
});
