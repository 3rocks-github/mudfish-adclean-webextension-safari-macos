
function mudfish_adclean_80b682da0b8172cf5120b0f151da7d0f() {
  try {
    Sizzle(`a[href*="//click.soonwe.com/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_80b682da0b8172cf5120b0f151da7d0f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_80b682da0b8172cf5120b0f151da7d0f, function (items) {
  if (mudfish_adclean_g_conf_80b682da0b8172cf5120b0f151da7d0f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_80b682da0b8172cf5120b0f151da7d0f();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
