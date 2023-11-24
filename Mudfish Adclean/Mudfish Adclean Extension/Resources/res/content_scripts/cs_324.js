
function mudfish_adclean_616dece74e9ca185d70f0a12c1f8ed2f() {
  try {
    Sizzle(`iframe[src*="//www.kodcad.kr/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_616dece74e9ca185d70f0a12c1f8ed2f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_616dece74e9ca185d70f0a12c1f8ed2f, function (items) {
  if (mudfish_adclean_g_conf_616dece74e9ca185d70f0a12c1f8ed2f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_616dece74e9ca185d70f0a12c1f8ed2f();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_616dece74e9ca185d70f0a12c1f8ed2f();
    });
  }
});
