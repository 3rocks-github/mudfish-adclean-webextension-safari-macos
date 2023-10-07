
function mudfish_adclean_f857a062f9744a3ba0593e01cd60958b() {
  try {
    Sizzle(`ins[data-aiinad-inv]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f857a062f9744a3ba0593e01cd60958b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f857a062f9744a3ba0593e01cd60958b, function (items) {
  if (mudfish_adclean_g_conf_f857a062f9744a3ba0593e01cd60958b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f857a062f9744a3ba0593e01cd60958b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
