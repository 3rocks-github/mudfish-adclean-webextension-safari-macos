
function mudfish_adclean_1e942fd5a5b896c822e232ba654ad62c() {
  try {
    Sizzle(`iframe[src*="//ads.mobitree.co.kr/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1e942fd5a5b896c822e232ba654ad62c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1e942fd5a5b896c822e232ba654ad62c, function (items) {
  if (mudfish_adclean_g_conf_1e942fd5a5b896c822e232ba654ad62c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1e942fd5a5b896c822e232ba654ad62c();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_1e942fd5a5b896c822e232ba654ad62c();
    });
  }
});
