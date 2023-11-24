
function mudfish_adclean_09dfaf7d498d59e313aaaf4f20097d5d() {
  try {
    Sizzle(`iframe[src*="://ad.ad4989.co.kr/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_09dfaf7d498d59e313aaaf4f20097d5d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_09dfaf7d498d59e313aaaf4f20097d5d, function (items) {
  if (mudfish_adclean_g_conf_09dfaf7d498d59e313aaaf4f20097d5d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_09dfaf7d498d59e313aaaf4f20097d5d();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_09dfaf7d498d59e313aaaf4f20097d5d();
    });
  }
});
