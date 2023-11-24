
function mudfish_adclean_4b2dd5d9eb46bde7151ed547913b295b() {
  try {
    Sizzle(`img[src^="/bannerpop/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4b2dd5d9eb46bde7151ed547913b295b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4b2dd5d9eb46bde7151ed547913b295b, function (items) {
  if (mudfish_adclean_g_conf_4b2dd5d9eb46bde7151ed547913b295b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4b2dd5d9eb46bde7151ed547913b295b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_4b2dd5d9eb46bde7151ed547913b295b();
    });
  }
});
