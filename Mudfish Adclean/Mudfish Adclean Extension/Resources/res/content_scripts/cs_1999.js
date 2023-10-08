
function mudfish_adclean_5465d10f53557b7835f71903dbb895ef() {
  try {
    Sizzle(`.ISSUE-BANNER-AD`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5465d10f53557b7835f71903dbb895ef = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5465d10f53557b7835f71903dbb895ef, function (items) {
  if (mudfish_adclean_g_conf_5465d10f53557b7835f71903dbb895ef.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5465d10f53557b7835f71903dbb895ef();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});