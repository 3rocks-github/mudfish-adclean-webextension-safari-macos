
function mudfish_adclean_9d67822e50c8795d4ac78093c5683c20() {
  try {
    Sizzle(`iframe[src*="//ad.3dpop.kr/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9d67822e50c8795d4ac78093c5683c20 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9d67822e50c8795d4ac78093c5683c20, function (items) {
  if (mudfish_adclean_g_conf_9d67822e50c8795d4ac78093c5683c20.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9d67822e50c8795d4ac78093c5683c20();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_9d67822e50c8795d4ac78093c5683c20();
    });
  }
});
