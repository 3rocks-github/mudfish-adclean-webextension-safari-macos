
function mudfish_adclean_4695c786933c49ad85a9e344f6f91d02() {
  try {
    Sizzle(`iframe[src*="//www.mediacategory.com/servlet/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4695c786933c49ad85a9e344f6f91d02 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4695c786933c49ad85a9e344f6f91d02, function (items) {
  if (mudfish_adclean_g_conf_4695c786933c49ad85a9e344f6f91d02.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4695c786933c49ad85a9e344f6f91d02();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
