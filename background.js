chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.includes("codeforces.com")) {
    //   const queryParameters = tab.url.split("?")[1];
    //   const urlParameters = new URLSearchParams(queryParameters);
    //   console.log(1111,queryParameters)
      chrome.tabs.sendMessage(tabId, {
        type: "NEW",
        value:"",
        videoId: "id",
      });
    }
  });
