
function mudfish_adclean_99acc4cfecee903a3d7bf40e3a416a28() {
  try {
    Sizzle(`#admaru`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_99acc4cfecee903a3d7bf40e3a416a28 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_99acc4cfecee903a3d7bf40e3a416a28, function (items) {
  if (mudfish_adclean_g_conf_99acc4cfecee903a3d7bf40e3a416a28.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_99acc4cfecee903a3d7bf40e3a416a28();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_99acc4cfecee903a3d7bf40e3a416a28();
    });
  }
});
