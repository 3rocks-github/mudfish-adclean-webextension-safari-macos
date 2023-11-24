
function mudfish_adclean_abb3b231427d6a887d709fe632f69407() {
  try {
    Sizzle(`iframe[src*="//adex.ednplus.com/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_abb3b231427d6a887d709fe632f69407 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_abb3b231427d6a887d709fe632f69407, function (items) {
  if (mudfish_adclean_g_conf_abb3b231427d6a887d709fe632f69407.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_abb3b231427d6a887d709fe632f69407();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_abb3b231427d6a887d709fe632f69407();
    });
  }
});
