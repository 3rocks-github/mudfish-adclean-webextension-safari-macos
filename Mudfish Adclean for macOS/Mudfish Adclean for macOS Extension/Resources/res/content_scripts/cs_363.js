
function mudfish_adclean_a1ef96b91d5d8d39054cdaab5f13fee2() {
  try {
    Sizzle(`div[id^="targetpushAd_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a1ef96b91d5d8d39054cdaab5f13fee2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a1ef96b91d5d8d39054cdaab5f13fee2, function (items) {
  if (mudfish_adclean_g_conf_a1ef96b91d5d8d39054cdaab5f13fee2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a1ef96b91d5d8d39054cdaab5f13fee2();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
