
function mudfish_adclean_329eb353c467d209bce20e75d599f8e7() {
  try {
    Sizzle(`#sidebartop`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_329eb353c467d209bce20e75d599f8e7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_329eb353c467d209bce20e75d599f8e7, function (items) {
  if (mudfish_adclean_g_conf_329eb353c467d209bce20e75d599f8e7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_329eb353c467d209bce20e75d599f8e7();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_329eb353c467d209bce20e75d599f8e7();
    });
  }
});
