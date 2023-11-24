
function mudfish_adclean_4920896bac9347d9dd2c078b74ea1ddb() {
  try {
    Sizzle(`a[href*="//adv.imadrep.co.kr/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4920896bac9347d9dd2c078b74ea1ddb = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4920896bac9347d9dd2c078b74ea1ddb, function (items) {
  if (mudfish_adclean_g_conf_4920896bac9347d9dd2c078b74ea1ddb.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4920896bac9347d9dd2c078b74ea1ddb();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_4920896bac9347d9dd2c078b74ea1ddb();
    });
  }
});
