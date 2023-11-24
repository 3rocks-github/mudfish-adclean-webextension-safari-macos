
function mudfish_adclean_e4036e54ee43b0eeef5207cabe8c1214() {
  try {
    Sizzle(`iframe[src*="//adad.z00.kr/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e4036e54ee43b0eeef5207cabe8c1214 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e4036e54ee43b0eeef5207cabe8c1214, function (items) {
  if (mudfish_adclean_g_conf_e4036e54ee43b0eeef5207cabe8c1214.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e4036e54ee43b0eeef5207cabe8c1214();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e4036e54ee43b0eeef5207cabe8c1214();
    });
  }
});
