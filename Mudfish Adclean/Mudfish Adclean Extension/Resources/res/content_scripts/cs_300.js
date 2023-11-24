
function mudfish_adclean_a64c4d3869fad0cea6f1963ee57a2270() {
  try {
    Sizzle(`.revenue_unit_item.tenping`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a64c4d3869fad0cea6f1963ee57a2270 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a64c4d3869fad0cea6f1963ee57a2270, function (items) {
  if (mudfish_adclean_g_conf_a64c4d3869fad0cea6f1963ee57a2270.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a64c4d3869fad0cea6f1963ee57a2270();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a64c4d3869fad0cea6f1963ee57a2270();
    });
  }
});
