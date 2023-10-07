
function mudfish_adclean_7df1f4a9df1581ffc8863d3ac1b7bd89() {
  try {
    Sizzle(`aside > .obituaries-wrapper.recent_news_inner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7df1f4a9df1581ffc8863d3ac1b7bd89 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7df1f4a9df1581ffc8863d3ac1b7bd89, function (items) {
  if (mudfish_adclean_g_conf_7df1f4a9df1581ffc8863d3ac1b7bd89.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7df1f4a9df1581ffc8863d3ac1b7bd89();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
