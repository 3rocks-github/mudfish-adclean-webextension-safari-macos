
function mudfish_adclean_701456441cc44d9ac3fcd3ec848df5ea() {
  try {
    Sizzle(`iframe[src*="//displayad.zum.com/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_701456441cc44d9ac3fcd3ec848df5ea = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_701456441cc44d9ac3fcd3ec848df5ea, function (items) {
  if (mudfish_adclean_g_conf_701456441cc44d9ac3fcd3ec848df5ea.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_701456441cc44d9ac3fcd3ec848df5ea();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
