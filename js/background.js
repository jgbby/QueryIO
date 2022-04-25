//background.js

// Listen for commands
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

   // User STARTED_TIMER
   if (request.cmd === 'WAKE') {
      console.log("REC: WAKE");
      chrome.tabs.create({ url: request.url, active: true });
      console.log("CREATED TAB")
  } 
});
