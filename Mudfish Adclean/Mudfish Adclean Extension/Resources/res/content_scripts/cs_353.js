
function mudfish_adclean_2b1ed62d08fa02b3011bcb36d8c60e21() {
  try {
    Sizzle(`iframe[src*=".contentsfeed.com/RealMedia/ads/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2b1ed62d08fa02b3011bcb36d8c60e21 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2b1ed62d08fa02b3011bcb36d8c60e21, function (items) {
  if (mudfish_adclean_g_conf_2b1ed62d08fa02b3011bcb36d8c60e21.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2b1ed62d08fa02b3011bcb36d8c60e21();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_2b1ed62d08fa02b3011bcb36d8c60e21();
    });
  }
});
