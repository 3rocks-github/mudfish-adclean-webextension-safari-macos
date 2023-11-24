
function mudfish_adclean_d87e02acbe1e3fc301b287e2d7f357f5() {
  try {
    Sizzle(`iframe[src*="//api.ezadsystem.com/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d87e02acbe1e3fc301b287e2d7f357f5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d87e02acbe1e3fc301b287e2d7f357f5, function (items) {
  if (mudfish_adclean_g_conf_d87e02acbe1e3fc301b287e2d7f357f5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d87e02acbe1e3fc301b287e2d7f357f5();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_d87e02acbe1e3fc301b287e2d7f357f5();
    });
  }
});
