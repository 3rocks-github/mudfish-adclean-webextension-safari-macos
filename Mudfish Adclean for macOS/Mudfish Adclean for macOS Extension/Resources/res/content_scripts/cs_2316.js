
function mudfish_adclean_25cb38b6757da9bede326e8cffb0b496() {
  try {
    Sizzle(`#fullscreen-overlay`).forEach(element => {
      element.style.display = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_25cb38b6757da9bede326e8cffb0b496 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_25cb38b6757da9bede326e8cffb0b496, function (items) {
  if (mudfish_adclean_g_conf_25cb38b6757da9bede326e8cffb0b496.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_25cb38b6757da9bede326e8cffb0b496();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
