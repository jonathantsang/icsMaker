console.log("popup.js");

function hello() {
	console.log("hello")	
  	chrome.tabs.executeScript({
    	file: 'src/browser_action/alert.js'
    }); 
}

console.log("popup.js");

document.getElementById('clickme').addEventListener('click', hello);