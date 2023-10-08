
function mudfish_adclean_d5e6f5367411a5a843642937bfd4f481() {
  try {
    Sizzle(`iframe[src*="//ad.a-ads.com/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d5e6f5367411a5a843642937bfd4f481 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d5e6f5367411a5a843642937bfd4f481, function (items) {
  if (mudfish_adclean_g_conf_d5e6f5367411a5a843642937bfd4f481.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d5e6f5367411a5a843642937bfd4f481();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
