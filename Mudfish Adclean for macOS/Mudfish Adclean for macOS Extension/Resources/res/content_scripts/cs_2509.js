
function mudfish_adclean_3a3e215433e8c67879b865c0c7749864() {
  try {
    Sizzle(`content li[role="presentation"]:has(a[href*="://trendpick.shopping.naver.com/"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3a3e215433e8c67879b865c0c7749864 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3a3e215433e8c67879b865c0c7749864, function (items) {
  if (mudfish_adclean_g_conf_3a3e215433e8c67879b865c0c7749864.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3a3e215433e8c67879b865c0c7749864();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
