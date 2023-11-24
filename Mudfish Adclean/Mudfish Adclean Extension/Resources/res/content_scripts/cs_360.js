
function mudfish_adclean_0e2dc16384a03d4f74dc65c3c9c13ab5() {
  try {
    Sizzle(`iframe[src^="https://ads-partners.coupang.com/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0e2dc16384a03d4f74dc65c3c9c13ab5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0e2dc16384a03d4f74dc65c3c9c13ab5, function (items) {
  if (mudfish_adclean_g_conf_0e2dc16384a03d4f74dc65c3c9c13ab5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0e2dc16384a03d4f74dc65c3c9c13ab5();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_0e2dc16384a03d4f74dc65c3c9c13ab5();
    });
  }
});
