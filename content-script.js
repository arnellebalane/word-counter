chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.command === 'getWordCount') {
    const wordCount = document.body.innerText.split(/\s+/g).length;
    sendResponse({ wordCount });
  }
});
