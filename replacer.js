var mode = 0;
var doit = true;

chrome.runtime.sendMessage(null, -1, function(selected) {mode = selected;});

var formatPage = function() {
	var elements = document.getElementsByTagName("body")[0].getElementsByTagName("*");
	for(var p in elements)
	{
		if(mode === 0)
			break;
		switch(mode)
		{
		case 1: // Karkat
			elements[p].style.color = "grey";
			elements[p].style.textTransform = "uppercase";
			break;
		case 2: // Aradia
			elements[p].style.color = "#a10000";
			elements[p].style.textTransform = "none";
			var textNodes = [];
			var walk = document.createTreeWalker(elements[p],NodeFilter.SHOW_TEXT,null,false);
			var n;
			while(n=walk.nextNode()) 
				textNodes.push(n);
			for(var i = 0; i < textNodes.length; i++)
				textNodes[i].textContent = textNodes[i].textContent.replace(/[oO]/g, '0');
			break;
		case 3: // Tavros
			elements[p].style.color = "#a15000";
			elements[p].style.textTransform = "none";
			var textNodes = [];
			var walk = document.createTreeWalker(elements[p],NodeFilter.SHOW_TEXT,null,false);
			var n;
			while(n=walk.nextNode()) 
				textNodes.push(n);
			for(var i = 0; i < textNodes.length; i++)
			{
				var processed = "";
				textNodes[i].textContent = textNodes[i].textContent.toUpperCase();
				processed += textNodes[i].textContent.substring(0, 1).toLowerCase();
				for(var c = 1; c < textNodes[i].textContent.length; c++)
				{
					if(textNodes[i].textContent.charAt(c-1) === ' ')
						processed += textNodes[i].textContent.substring(c, c+1).toLowerCase();
					else
						processed += textNodes[i].textContent.substring(c, c+1);
				}
				textNodes[i].textContent = processed;
			}
			break;
		case 4: // Sollux
			elements[p].style.color = "#a1a100";
			elements[p].style.textTransform = "none";
			var textNodes = [];
			var walk = document.createTreeWalker(elements[p],NodeFilter.SHOW_TEXT,null,false);
			var n;
			while(n=walk.nextNode()) 
				textNodes.push(n);
			for(var i = 0; i < textNodes.length; i++)
			{
				textNodes[i].textContent = textNodes[i].textContent.replace(/(i(?!i))|(ii)/g, "~~");
				textNodes[i].textContent = textNodes[i].textContent.replace(/(I(?!I))|(II)/g, "@@");
				textNodes[i].textContent = textNodes[i].textContent.replace(/~~/g, "ii");
				textNodes[i].textContent = textNodes[i].textContent.replace(/@@/g, "II");
				textNodes[i].textContent = textNodes[i].textContent.replace(/[sS]/g, "2");
				textNodes[i].textContent = textNodes[i].textContent.replace(/( to | too )/g, " two ");
				textNodes[i].textContent = textNodes[i].textContent.replace(/( To | Too )/g, " Two ");
			}
			break;
		case 5: // Nepeta
			elements[p].style.color = "#416600";
			elements[p].style.textTransform = "none";
			var textNodes = [];
			var walk = document.createTreeWalker(elements[p],NodeFilter.SHOW_TEXT,null,false);
			var n;
			while(n=walk.nextNode()) 
				textNodes.push(n);
			for(var i = 0; i < textNodes.length; i++)
			{
				textNodes[i].textContent = textNodes[i].textContent.replace(/^(?=[a-zA-Z0-9])/g, ":33 < *");
				textNodes[i].textContent = textNodes[i].textContent.replace(/\*\*/g, "*");
				textNodes[i].textContent = textNodes[i].textContent.replace(/ee|EE/g, "33");
				textNodes[i].textContent = textNodes[i].textContent.replace(/for/g, "fur");
				textNodes[i].textContent = textNodes[i].textContent.replace(/paus/g, "paws");
				textNodes[i].textContent = textNodes[i].textContent.replace(/per/g, "purr");
			}
			break;
		case 6: // Kanaya
			elements[p].style.color = "#008141";
			elements[p].style.textTransform = "capitalize";
			break;
		case 7: // Terezi
			elements[p].style.color = "#008282";
			elements[p].style.textTransform = "uppercase";
			var textNodes = [];
			var walk = document.createTreeWalker(elements[p],NodeFilter.SHOW_TEXT,null,false);
			var n;
			while(n=walk.nextNode()) 
				textNodes.push(n);
			for(var i = 0; i < textNodes.length; i++)
			{
				textNodes[i].textContent = textNodes[i].textContent.replace(/[aA]/g, "4");
				textNodes[i].textContent = textNodes[i].textContent.replace(/[eE]/g, "3");
				textNodes[i].textContent = textNodes[i].textContent.replace(/[iI]/g, "1");
			}
			break;
		case 8: // Vriska
			elements[p].style.color = "#005682";
			elements[p].style.textTransform = "none";			var textNodes = [];
			var walk = document.createTreeWalker(elements[p],NodeFilter.SHOW_TEXT,null,false);
			var n;
			while(n=walk.nextNode()) 
				textNodes.push(n);
			for(var i = 0; i < textNodes.length; i++)
			{
				textNodes[i].textContent = textNodes[i].textContent.replace(/[bB]/g, "8");
				//textNodes[i].textContent = textNodes[i].textContent.replace(/[aA]/g, "8");
			}
			break;
		case 9: // Equius
			elements[p].style.color = "#000056";
			elements[p].style.textTransform = "none";			var textNodes = [];
			var walk = document.createTreeWalker(elements[p],NodeFilter.SHOW_TEXT,null,false);
			var n;
			while(n=walk.nextNode()) 
				textNodes.push(n);
			for(var i = 0; i < textNodes.length; i++)
			{
				textNodes[i].textContent = textNodes[i].textContent.replace(/[xX]/g, "%");
				textNodes[i].textContent = textNodes[i].textContent.replace(/oo|OO/g, "00");
				textNodes[i].textContent = textNodes[i].textContent.replace(/^(?=[a-zA-Z0-9](?! -->))/g, "D --> ");
			}
			break;
		case 10: // Eridan
			elements[p].style.color = "#6a006a";
			elements[p].style.textTransform = "none";
			var textNodes = [];
			var walk = document.createTreeWalker(elements[p],NodeFilter.SHOW_TEXT,null,false);
			var n;
			while(n=walk.nextNode()) 
				textNodes.push(n);
			for(var i = 0; i < textNodes.length; i++)
			{
				textNodes[i].textContent = textNodes[i].textContent.replace(/(v(?!v))|(vv)/g, "~~");
				textNodes[i].textContent = textNodes[i].textContent.replace(/(V(?!V))|(VV)/g, "@@");
				textNodes[i].textContent = textNodes[i].textContent.replace(/(w(?!w))|(ww)/g, "&&");
				textNodes[i].textContent = textNodes[i].textContent.replace(/(W(?!W))|(WW)/g, "%%");
				textNodes[i].textContent = textNodes[i].textContent.replace(/~~/g, "vv");
				textNodes[i].textContent = textNodes[i].textContent.replace(/@@/g, "VV");
				textNodes[i].textContent = textNodes[i].textContent.replace(/&&/g, "ww");
				textNodes[i].textContent = textNodes[i].textContent.replace(/%%/g, "WW");
			}
			break;
		case 11: // Feferi
			elements[p].style.color = "#77003c";
			elements[p].style.textTransform = "none";
			var textNodes = [];
			var walk = document.createTreeWalker(elements[p],NodeFilter.SHOW_TEXT,null,false);
			var n;
			while(n=walk.nextNode()) 
				textNodes.push(n);
			for(var i = 0; i < textNodes.length; i++)
			{
				textNodes[i].textContent = textNodes[i].textContent.replace(/[Hh]/g, ")(");
				textNodes[i].textContent = textNodes[i].textContent.replace(/[E]/g, "-E");
				textNodes[i].textContent = textNodes[i].textContent.replace(/--/g, "-");
			}
			break;
		case 12: // Gamzee
			elements[p].style.color = "#2b0057";
			elements[p].style.textTransform = "none";
			var textNodes = [];
			var walk = document.createTreeWalker(elements[p],NodeFilter.SHOW_TEXT,null,false);
			var n;
			while(n=walk.nextNode()) 
				textNodes.push(n);
			for(var i = 0; i < textNodes.length; i++)
			{
				var processed = "";
				for(var c = 0; c < textNodes[i].textContent.length; c++)
				{
					if(c % 2 === 0)
						processed += textNodes[i].textContent.substring(c, c+1).toLowerCase();
					else
						processed += textNodes[i].textContent.substring(c, c+1).toUpperCase();
				}
				textNodes[i].textContent = processed;
			}
			break;		
		case 13: // Owataneese
			elements[p].style.color = "initial";
			elements[p].style.textTransform = "none";
			var textNodes = [];
			var walk = document.createTreeWalker(elements[p],NodeFilter.SHOW_TEXT,null,false);
			var n;
			while(n=walk.nextNode()) 
				textNodes.push(n);
			for(var i = 0; i < textNodes.length; i++)
			{
				var processed = "";
				var d;
				for(var c = 0; c < textNodes[i].textContent.length; c++)
				{
					switch(textNodes[i].textContent.charAt(c))
					{
						case 'a':
							d = 'o';
							break;
						case 'A':
							d = 'O';
							break;
						case 'o':
							d = 'a';
							break;
						case 'O':
							d = 'A';
							break;
						case 'b':
							d = 'd';
							break;
						case 'd':
							d = 'b';
							break;
						case 'B':
							d = 'D';
							break;
						case 'D':
							d = 'B';
							break;
						case 'c':
							d = 's';
							break;
						case 's':
							d = 'c';
							break;
						case 'C':
							d = 'S';
							break;
						case 'S':
							d = 'C';
							break;
						case 'e':
							d = 'i';
							break;
						case 'i':
							d = 'u';
							break;
						case 'u':
							d = 'e';
							break;
						case 'E':
							d = 'I';
							break;
						case 'I':
							d = 'U';
							break;
						case 'U':
							d = 'E';
							break;
						case 'f':
							d = 'h';
							break;
						case 'F':
							d = 'H';
							break;
						case 'g':
							d = 'j';
							break;
						case 'j':
							d = 'g';
							break;
						case 'G':
							d = 'J';
							break;
						case 'J':
							d = 'G';
							break;
						case 'h':
							d = '/';
							break;
						case 'k':
							d = 'q';
							break;
						case 'q':
							d = 'k';
							break;
						case 'K':
							d = 'Q';
							break;
						case 'Q':
							d = 'K';
							break;
						case 'l':
							d = 'r';
							break;
						case 'r':
							d = 'l';
							break;
						case 'L':
							d = 'R';
							break;
						case 'R':
							d = 'L';
							break;
						case 'm':
							d = 'n';
							break;
						case 'n':
							d = 'm';
							break;
						case 'M':
							d = 'N';
							break;
						case 'N':
							d = 'M';
							break;
						case 'p':
							d = 't';
							break;
						case 't':
							d = 'p';
							break;
						case 'P':
							d = 'T';
							break;
						case 'T':
							d = 'P';
							break;
						case 'v':
							d = 'w';
							break;
						case 'w':
							d = 'y';
							break;
						case 'y':
							d = 'v';
							break;
						case 'V':
							d = 'W';
							break;
						case 'W':
							d = 'Y';
							break;
						case 'Y':
							d = 'V';
							break;
						case 'x':
							d = 'z';
							break;
						case 'z':
							d = 'x';
							break;
						case 'X':
							d = 'Z';
							break;
						case 'Z':
							d = 'X';
							break;
						default:
							d = textNodes[i].textContent.charAt(c);
							break;
					}
					processed += d;
				}
				
				textNodes[i].textContent = processed;
			}
			break;
		case 14:
			elements[p].style.textTransform = "none";
			elements[p].style.fontFamily = '"Comic Sans MS", cursive, sans-serif';
			elements[p].style.fontWeight = "bold";
			elements[p].style.textDecoration = "underline";
			elements[p].style.color = "red";
			elements[p].style.fontStyle = "italic";
			break;
		default:
			break;
		}
	}
};

window.onload = function() {if(mode != 13) formatPage();};//();

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	var old = mode;
	mode = message;
	sendResponse(old);
});

setInterval(function() {
/*
	var nah = false;
	chrome.runtime.sendMessage(null, -2, function(na, selected) {
		nah = na;
		if(rel === false)
		{
			if(selected !== mode && !(mode === 0 || mode === 1 || mode === 6))
				rel = true;
		}
		return rel && nah;
	});
	if(!nah)
		return;
	chrome.runtime.sendMessage(null, -1, function(selected) {mode = selected;});
*/
	if(mode != 13)
	{
		doit = true;
		formatPage();
	}
	else if(doit==true)
	{
		doit = false;
		formatPage();
	}
}, 1000);