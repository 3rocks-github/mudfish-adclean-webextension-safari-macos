
function mudfish_adclean_a233d60d02b7b6a0d779ea001e4918b4() {
  try {
    Sizzle(`iframe[src*="//ai.onepx.kr/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a233d60d02b7b6a0d779ea001e4918b4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a233d60d02b7b6a0d779ea001e4918b4, function (items) {
  if (mudfish_adclean_g_conf_a233d60d02b7b6a0d779ea001e4918b4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a233d60d02b7b6a0d779ea001e4918b4();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
