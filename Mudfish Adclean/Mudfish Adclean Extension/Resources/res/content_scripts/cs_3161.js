
function mudfish_adclean_0716ce11a8fc2d032ffa90453df8a7b2() {
  try {
    Sizzle(`div[class*="-banner"] div[class*=" "][style=" "]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0716ce11a8fc2d032ffa90453df8a7b2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0716ce11a8fc2d032ffa90453df8a7b2, function (items) {
  if (mudfish_adclean_g_conf_0716ce11a8fc2d032ffa90453df8a7b2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0716ce11a8fc2d032ffa90453df8a7b2();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
