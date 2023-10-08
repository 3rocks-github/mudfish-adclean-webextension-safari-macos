
function mudfish_adclean_f03872fa2bbaea26bac41e5c58ea58ec() {
  try {
    Sizzle(`#hotPlace.myBox`).forEach(element => {
      element.style.marginLeft = "calc(50% - 65px) !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f03872fa2bbaea26bac41e5c58ea58ec = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f03872fa2bbaea26bac41e5c58ea58ec, function (items) {
  if (mudfish_adclean_g_conf_f03872fa2bbaea26bac41e5c58ea58ec.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f03872fa2bbaea26bac41e5c58ea58ec();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});