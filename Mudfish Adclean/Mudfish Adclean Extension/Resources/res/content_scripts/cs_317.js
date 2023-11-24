
function mudfish_adclean_e8efa93f37a930cbb36817f673b6b90d() {
  try {
    Sizzle(`.revenue_unit_item.adfit`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e8efa93f37a930cbb36817f673b6b90d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e8efa93f37a930cbb36817f673b6b90d, function (items) {
  if (mudfish_adclean_g_conf_e8efa93f37a930cbb36817f673b6b90d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e8efa93f37a930cbb36817f673b6b90d();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e8efa93f37a930cbb36817f673b6b90d();
    });
  }
});
