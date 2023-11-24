
function mudfish_adclean_8951d64950682e734d61f05ccc6de1f0() {
  try {
    Sizzle(`iframe[src^="https://api.dable.io/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8951d64950682e734d61f05ccc6de1f0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8951d64950682e734d61f05ccc6de1f0, function (items) {
  if (mudfish_adclean_g_conf_8951d64950682e734d61f05ccc6de1f0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8951d64950682e734d61f05ccc6de1f0();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_8951d64950682e734d61f05ccc6de1f0();
    });
  }
});
