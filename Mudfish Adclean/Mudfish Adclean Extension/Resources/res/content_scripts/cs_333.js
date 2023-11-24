
function mudfish_adclean_621f382fa587dad5dcc177a57abef76b() {
  try {
    Sizzle(`iframe[src*="//ads.priel.co.kr/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_621f382fa587dad5dcc177a57abef76b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_621f382fa587dad5dcc177a57abef76b, function (items) {
  if (mudfish_adclean_g_conf_621f382fa587dad5dcc177a57abef76b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_621f382fa587dad5dcc177a57abef76b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_621f382fa587dad5dcc177a57abef76b();
    });
  }
});
