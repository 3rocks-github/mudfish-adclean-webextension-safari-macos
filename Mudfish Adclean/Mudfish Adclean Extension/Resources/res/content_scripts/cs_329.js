
function mudfish_adclean_7ff6940068f3eba4140f2fdbf2740bbf() {
  try {
    Sizzle(`iframe[src*="//adsrv-up.mcrony.com/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7ff6940068f3eba4140f2fdbf2740bbf = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7ff6940068f3eba4140f2fdbf2740bbf, function (items) {
  if (mudfish_adclean_g_conf_7ff6940068f3eba4140f2fdbf2740bbf.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7ff6940068f3eba4140f2fdbf2740bbf();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_7ff6940068f3eba4140f2fdbf2740bbf();
    });
  }
});
