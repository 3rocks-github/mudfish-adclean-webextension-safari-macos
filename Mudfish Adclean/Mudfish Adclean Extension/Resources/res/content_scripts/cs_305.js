
function mudfish_adclean_bbb077573f9e50054df81afd12031e33() {
  try {
    Sizzle(`iframe[src*="//www.mobwithad.com/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_bbb077573f9e50054df81afd12031e33 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_bbb077573f9e50054df81afd12031e33, function (items) {
  if (mudfish_adclean_g_conf_bbb077573f9e50054df81afd12031e33.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_bbb077573f9e50054df81afd12031e33();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
