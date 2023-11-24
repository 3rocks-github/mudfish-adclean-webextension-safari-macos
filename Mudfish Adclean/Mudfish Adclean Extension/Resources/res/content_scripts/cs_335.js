
function mudfish_adclean_3349951e092dd20b56c36a891e7a4b7e() {
  try {
    Sizzle(`iframe[src*="//img.mrep.kr/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3349951e092dd20b56c36a891e7a4b7e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3349951e092dd20b56c36a891e7a4b7e, function (items) {
  if (mudfish_adclean_g_conf_3349951e092dd20b56c36a891e7a4b7e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3349951e092dd20b56c36a891e7a4b7e();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_3349951e092dd20b56c36a891e7a4b7e();
    });
  }
});
