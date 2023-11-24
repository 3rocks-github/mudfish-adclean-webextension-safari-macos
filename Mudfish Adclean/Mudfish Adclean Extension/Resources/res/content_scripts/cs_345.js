
function mudfish_adclean_807ce94398a39d0404c5e166f66ee5ca() {
  try {
    Sizzle(`iframe[src*="//io1.innorame.com/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_807ce94398a39d0404c5e166f66ee5ca = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_807ce94398a39d0404c5e166f66ee5ca, function (items) {
  if (mudfish_adclean_g_conf_807ce94398a39d0404c5e166f66ee5ca.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_807ce94398a39d0404c5e166f66ee5ca();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_807ce94398a39d0404c5e166f66ee5ca();
    });
  }
});
