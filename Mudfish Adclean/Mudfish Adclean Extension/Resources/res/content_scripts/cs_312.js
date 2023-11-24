
function mudfish_adclean_b351aa47f05e5eb9de6a278bf3b71d06() {
  try {
    Sizzle(`iframe[src*="//www.mediabp.kr/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b351aa47f05e5eb9de6a278bf3b71d06 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b351aa47f05e5eb9de6a278bf3b71d06, function (items) {
  if (mudfish_adclean_g_conf_b351aa47f05e5eb9de6a278bf3b71d06.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b351aa47f05e5eb9de6a278bf3b71d06();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_b351aa47f05e5eb9de6a278bf3b71d06();
    });
  }
});
