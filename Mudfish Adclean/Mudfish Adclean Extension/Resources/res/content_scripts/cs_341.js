
function mudfish_adclean_7e8d97cf344fb43f77c1d0e5192bd2f8() {
  try {
    Sizzle(`iframe[src*="//minishop.linkprice.com/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7e8d97cf344fb43f77c1d0e5192bd2f8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7e8d97cf344fb43f77c1d0e5192bd2f8, function (items) {
  if (mudfish_adclean_g_conf_7e8d97cf344fb43f77c1d0e5192bd2f8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7e8d97cf344fb43f77c1d0e5192bd2f8();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_7e8d97cf344fb43f77c1d0e5192bd2f8();
    });
  }
});
