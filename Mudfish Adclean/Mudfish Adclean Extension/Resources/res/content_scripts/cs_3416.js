
function mudfish_adclean_102ab386d5a9dff88c210774d3fa0abb() {
  try {
    Sizzle(`amp-embed`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_102ab386d5a9dff88c210774d3fa0abb = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_102ab386d5a9dff88c210774d3fa0abb, function (items) {
  if (mudfish_adclean_g_conf_102ab386d5a9dff88c210774d3fa0abb.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_102ab386d5a9dff88c210774d3fa0abb();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_102ab386d5a9dff88c210774d3fa0abb();
    });
  }
});
