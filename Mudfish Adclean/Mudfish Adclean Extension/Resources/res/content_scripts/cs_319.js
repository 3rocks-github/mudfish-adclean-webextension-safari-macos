
function mudfish_adclean_3aa7e77e039754bd3013d209e8b6b3b8() {
  try {
    Sizzle(`div[class^="__staxbn"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3aa7e77e039754bd3013d209e8b6b3b8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3aa7e77e039754bd3013d209e8b6b3b8, function (items) {
  if (mudfish_adclean_g_conf_3aa7e77e039754bd3013d209e8b6b3b8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3aa7e77e039754bd3013d209e8b6b3b8();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_3aa7e77e039754bd3013d209e8b6b3b8();
    });
  }
});
