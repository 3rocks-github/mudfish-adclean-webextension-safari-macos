
function mudfish_adclean_34b06423b9642d632e6c8d48f1cdd15e() {
  try {
    Sizzle(`iframe[src*="//js.newsmobile.co.kr/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_34b06423b9642d632e6c8d48f1cdd15e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_34b06423b9642d632e6c8d48f1cdd15e, function (items) {
  if (mudfish_adclean_g_conf_34b06423b9642d632e6c8d48f1cdd15e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_34b06423b9642d632e6c8d48f1cdd15e();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_34b06423b9642d632e6c8d48f1cdd15e();
    });
  }
});
