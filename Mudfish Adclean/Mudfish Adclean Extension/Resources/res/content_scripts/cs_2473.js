
function mudfish_adclean_c9a7317eec1b69571c77baa7deb3d4b1() {
  try {
    Sizzle(`.Ui-Hotels-Results-List-Components-RheaLiteWrapper-container div:not([class]):has(div[class$="-sponsored"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c9a7317eec1b69571c77baa7deb3d4b1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c9a7317eec1b69571c77baa7deb3d4b1, function (items) {
  if (mudfish_adclean_g_conf_c9a7317eec1b69571c77baa7deb3d4b1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c9a7317eec1b69571c77baa7deb3d4b1();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});