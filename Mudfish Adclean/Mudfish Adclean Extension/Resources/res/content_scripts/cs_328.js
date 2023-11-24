
function mudfish_adclean_7d3aef0b49efafe1ade9f01950c02d78() {
  try {
    Sizzle(`[id^="div-gpt-ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7d3aef0b49efafe1ade9f01950c02d78 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7d3aef0b49efafe1ade9f01950c02d78, function (items) {
  if (mudfish_adclean_g_conf_7d3aef0b49efafe1ade9f01950c02d78.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7d3aef0b49efafe1ade9f01950c02d78();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_7d3aef0b49efafe1ade9f01950c02d78();
    });
  }
});
