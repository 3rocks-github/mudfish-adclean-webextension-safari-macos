
function mudfish_adclean_049144b9546d16138f922dee8446bbca() {
  try {
    Sizzle(`div[class$="_banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_049144b9546d16138f922dee8446bbca = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_049144b9546d16138f922dee8446bbca, function (items) {
  if (mudfish_adclean_g_conf_049144b9546d16138f922dee8446bbca.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_049144b9546d16138f922dee8446bbca();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
