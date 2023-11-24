
function mudfish_adclean_f0c0e0c3bb7ba54d87d35de0db19b5eb() {
  try {
    Sizzle(`div[id^="div-gpt-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f0c0e0c3bb7ba54d87d35de0db19b5eb = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f0c0e0c3bb7ba54d87d35de0db19b5eb, function (items) {
  if (mudfish_adclean_g_conf_f0c0e0c3bb7ba54d87d35de0db19b5eb.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f0c0e0c3bb7ba54d87d35de0db19b5eb();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f0c0e0c3bb7ba54d87d35de0db19b5eb();
    });
  }
});
