
function mudfish_adclean_25e2ddbbdce009f4c15a5386e0d046db() {
  try {
    Sizzle(`div[id^="pp_ban_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_25e2ddbbdce009f4c15a5386e0d046db = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_25e2ddbbdce009f4c15a5386e0d046db, function (items) {
  if (mudfish_adclean_g_conf_25e2ddbbdce009f4c15a5386e0d046db.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_25e2ddbbdce009f4c15a5386e0d046db();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});