
chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON
	console.log("Script Executed .. ");
	function exportToFile() {
    var myString = "BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nDTSTART:20170517T233000Z\nDTEND:20170518T010000Z\nSUMMARY:Your Event\nDESCRIPTION:\nLOCATION:Your Location\nEND:VEVENT\nEND:VCALENDAR";
    var selected = window.getSelection().toString();
    myString += selected;
    console.log(selected);
    window.open('data:ics/;charset=utf-8,' + escape(myString));
}
	exportToFile();
});