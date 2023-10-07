
function mudfish_adclean_1f0932b68cf71b43ab7c88ba2cfb9e48() {
  try {
    Sizzle(`.nplr div[class=""] li:has(li:contains(AD))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1f0932b68cf71b43ab7c88ba2cfb9e48 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1f0932b68cf71b43ab7c88ba2cfb9e48, function (items) {
  if (mudfish_adclean_g_conf_1f0932b68cf71b43ab7c88ba2cfb9e48.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1f0932b68cf71b43ab7c88ba2cfb9e48();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
