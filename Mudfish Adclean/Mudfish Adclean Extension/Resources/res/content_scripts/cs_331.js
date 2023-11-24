
function mudfish_adclean_136e240547e4fe1b14e26b249f39b37d() {
  try {
    Sizzle(`iframe[src*="//coupa.ng/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_136e240547e4fe1b14e26b249f39b37d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_136e240547e4fe1b14e26b249f39b37d, function (items) {
  if (mudfish_adclean_g_conf_136e240547e4fe1b14e26b249f39b37d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_136e240547e4fe1b14e26b249f39b37d();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_136e240547e4fe1b14e26b249f39b37d();
    });
  }
});
