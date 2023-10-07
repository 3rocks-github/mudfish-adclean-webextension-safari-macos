
function mudfish_adclean_5232ce8c766ac6087ccfc629d3878f47() {
  try {
    Sizzle(`iframe[src*=".clickmon.co.kr/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5232ce8c766ac6087ccfc629d3878f47 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5232ce8c766ac6087ccfc629d3878f47, function (items) {
  if (mudfish_adclean_g_conf_5232ce8c766ac6087ccfc629d3878f47.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5232ce8c766ac6087ccfc629d3878f47();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
