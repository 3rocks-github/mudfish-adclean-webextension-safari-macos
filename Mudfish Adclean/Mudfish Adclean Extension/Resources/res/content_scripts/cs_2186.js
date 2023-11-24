
function mudfish_adclean_26163f96a6d30d424a0dd1821d71ede2() {
  try {
    Sizzle(`.sponsor-btns`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_26163f96a6d30d424a0dd1821d71ede2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_26163f96a6d30d424a0dd1821d71ede2, function (items) {
  if (mudfish_adclean_g_conf_26163f96a6d30d424a0dd1821d71ede2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_26163f96a6d30d424a0dd1821d71ede2();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_26163f96a6d30d424a0dd1821d71ede2();
    });
  }
});
