
function mudfish_adclean_5c87fa8b016dbc7199649b5c3dd11fd4() {
  try {
    Sizzle(`#login_box ~ #rightBox`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5c87fa8b016dbc7199649b5c3dd11fd4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5c87fa8b016dbc7199649b5c3dd11fd4, function (items) {
  if (mudfish_adclean_g_conf_5c87fa8b016dbc7199649b5c3dd11fd4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5c87fa8b016dbc7199649b5c3dd11fd4();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
