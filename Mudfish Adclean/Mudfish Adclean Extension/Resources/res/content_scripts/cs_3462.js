
function mudfish_adclean_0e16d6892416fcb8dd01d4990dc0fb4f() {
  try {
    Sizzle(`amp-ad`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0e16d6892416fcb8dd01d4990dc0fb4f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0e16d6892416fcb8dd01d4990dc0fb4f, function (items) {
  if (mudfish_adclean_g_conf_0e16d6892416fcb8dd01d4990dc0fb4f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0e16d6892416fcb8dd01d4990dc0fb4f();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_0e16d6892416fcb8dd01d4990dc0fb4f();
    });
  }
});
