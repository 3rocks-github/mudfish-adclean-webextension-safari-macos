
function mudfish_adclean_85a771de3948d15f4f597259ee07f467() {
  try {
    Sizzle(`ins.fastview-ad`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_85a771de3948d15f4f597259ee07f467 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_85a771de3948d15f4f597259ee07f467, function (items) {
  if (mudfish_adclean_g_conf_85a771de3948d15f4f597259ee07f467.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_85a771de3948d15f4f597259ee07f467();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_85a771de3948d15f4f597259ee07f467();
    });
  }
});
