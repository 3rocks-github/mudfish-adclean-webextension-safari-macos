
function mudfish_adclean_5840dcd98fcfb596485f2e097b051075() {
  try {
    Sizzle(`iframe[src*="//deepdive.zum.com/widget/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5840dcd98fcfb596485f2e097b051075 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5840dcd98fcfb596485f2e097b051075, function (items) {
  if (mudfish_adclean_g_conf_5840dcd98fcfb596485f2e097b051075.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5840dcd98fcfb596485f2e097b051075();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_5840dcd98fcfb596485f2e097b051075();
    });
  }
});
