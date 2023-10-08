
function mudfish_adclean_e907b2a32c51533c147895944998a604() {
  try {
    Sizzle(`.ban_box`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e907b2a32c51533c147895944998a604 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e907b2a32c51533c147895944998a604, function (items) {
  if (mudfish_adclean_g_conf_e907b2a32c51533c147895944998a604.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e907b2a32c51533c147895944998a604();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});