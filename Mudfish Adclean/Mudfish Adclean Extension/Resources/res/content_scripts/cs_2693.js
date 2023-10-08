
function mudfish_adclean_0264c85a80bdca418decec80c1af6e09() {
  try {
    Sizzle(`.videoAdWrap`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0264c85a80bdca418decec80c1af6e09 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0264c85a80bdca418decec80c1af6e09, function (items) {
  if (mudfish_adclean_g_conf_0264c85a80bdca418decec80c1af6e09.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0264c85a80bdca418decec80c1af6e09();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});