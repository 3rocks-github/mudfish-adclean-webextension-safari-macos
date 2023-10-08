
function mudfish_adclean_5dc41524303aa06ef1475dd14afa76f1() {
  try {
    Sizzle(`iframe[src*="//ad.ad4989.co.kr/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5dc41524303aa06ef1475dd14afa76f1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5dc41524303aa06ef1475dd14afa76f1, function (items) {
  if (mudfish_adclean_g_conf_5dc41524303aa06ef1475dd14afa76f1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5dc41524303aa06ef1475dd14afa76f1();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
