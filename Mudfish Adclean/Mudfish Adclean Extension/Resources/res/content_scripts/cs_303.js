
function mudfish_adclean_be910aa86eff0198b56493d7feb31222() {
  try {
    Sizzle(`iframe[src*="//mediaindex.co.kr/DABanner.php"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_be910aa86eff0198b56493d7feb31222 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_be910aa86eff0198b56493d7feb31222, function (items) {
  if (mudfish_adclean_g_conf_be910aa86eff0198b56493d7feb31222.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_be910aa86eff0198b56493d7feb31222();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_be910aa86eff0198b56493d7feb31222();
    });
  }
});
