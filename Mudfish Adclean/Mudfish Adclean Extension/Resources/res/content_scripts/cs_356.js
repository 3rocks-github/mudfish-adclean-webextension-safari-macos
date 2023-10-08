
function mudfish_adclean_35940fde1ca31645f58258267fb163e1() {
  try {
    Sizzle(`iframe[src^="https://realdsp.realclick.co.kr"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_35940fde1ca31645f58258267fb163e1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_35940fde1ca31645f58258267fb163e1, function (items) {
  if (mudfish_adclean_g_conf_35940fde1ca31645f58258267fb163e1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_35940fde1ca31645f58258267fb163e1();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
