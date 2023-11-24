
function mudfish_adclean_bcb755594a98a81c44218d8a014b923b() {
  try {
    Sizzle(`iframe[src*="//adv.imadrep.co.kr/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_bcb755594a98a81c44218d8a014b923b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_bcb755594a98a81c44218d8a014b923b, function (items) {
  if (mudfish_adclean_g_conf_bcb755594a98a81c44218d8a014b923b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_bcb755594a98a81c44218d8a014b923b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_bcb755594a98a81c44218d8a014b923b();
    });
  }
});
