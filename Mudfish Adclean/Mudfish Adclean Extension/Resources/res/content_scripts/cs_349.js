
function mudfish_adclean_64ec783f6f610de5d598531274b178a1() {
  try {
    Sizzle(`iframe[src*="veta.naver.com/fxshow?"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_64ec783f6f610de5d598531274b178a1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_64ec783f6f610de5d598531274b178a1, function (items) {
  if (mudfish_adclean_g_conf_64ec783f6f610de5d598531274b178a1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_64ec783f6f610de5d598531274b178a1();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
