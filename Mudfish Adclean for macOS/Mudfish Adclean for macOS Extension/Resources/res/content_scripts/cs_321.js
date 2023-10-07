
function mudfish_adclean_9d8160dc7093430a4efeaf47f60f816d() {
  try {
    Sizzle(`iframe[src*="//ad.phaserep.com/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9d8160dc7093430a4efeaf47f60f816d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9d8160dc7093430a4efeaf47f60f816d, function (items) {
  if (mudfish_adclean_g_conf_9d8160dc7093430a4efeaf47f60f816d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9d8160dc7093430a4efeaf47f60f816d();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
