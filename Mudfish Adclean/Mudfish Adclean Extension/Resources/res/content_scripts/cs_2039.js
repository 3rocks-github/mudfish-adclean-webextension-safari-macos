
function mudfish_adclean_9c36692c46eaca38feaeb87866bb5dc8() {
  try {
    Sizzle(`div[class$="_ad_prodlist"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9c36692c46eaca38feaeb87866bb5dc8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9c36692c46eaca38feaeb87866bb5dc8, function (items) {
  if (mudfish_adclean_g_conf_9c36692c46eaca38feaeb87866bb5dc8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9c36692c46eaca38feaeb87866bb5dc8();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});