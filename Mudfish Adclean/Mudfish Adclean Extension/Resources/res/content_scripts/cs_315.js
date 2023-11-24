
function mudfish_adclean_761c160208f150aa19d3df9a45b5275d() {
  try {
    Sizzle(`iframe[src*="//www.bodnara.co.kr/advert/advert.php"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_761c160208f150aa19d3df9a45b5275d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_761c160208f150aa19d3df9a45b5275d, function (items) {
  if (mudfish_adclean_g_conf_761c160208f150aa19d3df9a45b5275d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_761c160208f150aa19d3df9a45b5275d();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_761c160208f150aa19d3df9a45b5275d();
    });
  }
});
