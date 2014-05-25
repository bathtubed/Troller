var selected = 0;
var characters = null;

window.onload = function() {
	characters = document.getElementsByTagName("ul")[0].getElementsByTagName("li");
	selected = chrome.extension.getBackgroundPage().selected;
	for(i = 0; i < characters.length; i++)
	{
		characters[i].onclick = selectionMade;
	}
	characters[selected].className = "selected";
};

selectionMade = function() {
	characters[selected].className = "";
	this.className = "selected";
	for(var i = 0; i < characters.length; i++)
	{
		if(characters[i] == this)
		{
			selected = i;
			chrome.extension.getBackgroundPage().selected = selected;
			break;
		}
	}
	chrome.runtime.sendMessage(null, selected, function(boop) {return boop;});
};