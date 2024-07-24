document.getElementById('modifyUrlButton').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      let activeTab = tabs[0];
      if (activeTab.url) {
        // Modify the URL as needed
        let newUrl = modifyUrl(activeTab.url);
  
        // Open the new tab with the modified URL
        chrome.tabs.create({ url: newUrl });
      }
    });
  });
  
  function modifyUrl(url) {
    // Modify the URL as needed. Example: add a query parameter
    let newUrl = new URL(url);
    // add https://12ft.io/ to the beginning of the URL
    newUrl = new URL('https://12ft.io/' + newUrl);
    newUrl.searchParams.set('modified', 'true');
    return newUrl.toString();
  }
  