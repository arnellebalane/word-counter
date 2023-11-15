(async () => {
  const [tab] = await chrome.tabs.query({
    active: true,
  });

  const response = await chrome.tabs.sendMessage(tab.id, { command: 'getWordCount' });
  document.querySelector('span').textContent = response.wordCount;
})();
