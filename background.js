// background.js
var selected = 0;

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	if(message === -1)
	{
		//alert("get: "+selected);
		sendResponse(selected);
	}
	else
	{
		//alert("set: "+message);
		selected = message;
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, selected, function(old) {
				if(old === 2 || old === 3 || old === 4 || old === 5 || old === 7 || old === 8 || old === 9 || old === 10 || old === 11 || old === 12 || old === 13 || old === 14 || selected === 0)
				{
					chrome.tabs.reload(null, null, null);
				}
			});
		});
	}
});

chrome.tabs.onActivated.addListener(function(activeInfo) {
	chrome.tabs.sendMessage(activeInfo.tabId, selected, function(old) {
		if(old === 2 || old === 3 || old === 4 || old === 5 || old === 7 || old === 8 || old === 9 || old === 10 || old === 11 || old === 12 || old === 13 || old === 14 || (selected === 0 && old > 0 && old < 14))
		{
			if(old !== selected)
				chrome.tabs.reload(null, null, null);
		}
	});
});