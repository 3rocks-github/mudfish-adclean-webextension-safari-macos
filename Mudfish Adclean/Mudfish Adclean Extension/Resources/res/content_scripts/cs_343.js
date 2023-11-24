
function mudfish_adclean_cc8c2960428601ddefd49f679943a6bd() {
  try {
    Sizzle(`iframe[src*="//kitweb.tadapi.info/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_cc8c2960428601ddefd49f679943a6bd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_cc8c2960428601ddefd49f679943a6bd, function (items) {
  if (mudfish_adclean_g_conf_cc8c2960428601ddefd49f679943a6bd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_cc8c2960428601ddefd49f679943a6bd();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_cc8c2960428601ddefd49f679943a6bd();
    });
  }
});
