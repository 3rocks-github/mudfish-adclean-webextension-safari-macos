
function mudfish_adclean_7a9aadd88c114e1246e455bd35b2c070() {
  try {
    Sizzle(`iframe[src*="https://media.adpnut.com/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7a9aadd88c114e1246e455bd35b2c070 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7a9aadd88c114e1246e455bd35b2c070, function (items) {
  if (mudfish_adclean_g_conf_7a9aadd88c114e1246e455bd35b2c070.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7a9aadd88c114e1246e455bd35b2c070();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
