chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.url) {
      // Modify the URL as needed
      let newUrl = modifyUrl(request.url);
      console.log('Modified URL:', newUrl); // Debugging
      // Open the new tab with the modified URL
      chrome.tabs.create({ url: newUrl });


    }
  });
  
  function modifyUrl(url) {
    // Modify the URL as needed. Example: add a query parameter
    let newUrl = new URL(url);
    // newUrl.searchParams.set('modified', 'true');
    return newUrl.toString();
  }
  