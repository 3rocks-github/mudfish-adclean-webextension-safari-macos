
function mudfish_adclean_d2d2eb2b36fae52634d6e63f90725dae() {
  try {
    Sizzle(`a[href*="//ad-api.enuri.info/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d2d2eb2b36fae52634d6e63f90725dae = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d2d2eb2b36fae52634d6e63f90725dae, function (items) {
  if (mudfish_adclean_g_conf_d2d2eb2b36fae52634d6e63f90725dae.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d2d2eb2b36fae52634d6e63f90725dae();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_d2d2eb2b36fae52634d6e63f90725dae();
    });
  }
});
