
function mudfish_adclean_7f6d6c14638757e155f8a8956a4137b3() {
  try {
    Sizzle(`.revenue_unit_item.dable`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7f6d6c14638757e155f8a8956a4137b3 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7f6d6c14638757e155f8a8956a4137b3, function (items) {
  if (mudfish_adclean_g_conf_7f6d6c14638757e155f8a8956a4137b3.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7f6d6c14638757e155f8a8956a4137b3();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
