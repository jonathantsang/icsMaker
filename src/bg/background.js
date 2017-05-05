
chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON
	console.log("Script Executed .. ");
	function exportToFile() {
    var myString = "BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nDTSTART:20170517T233000Z\nDTEND:20170518T010000Z\nSUMMARY:Your Event\nDESCRIPTION:\nLOCATION:Your Location\nEND:VEVENT\nEND:VCALENDAR";
    var selected = window.getSelection().toString();

    //var newText = parseText(selected);

    myString += selected;
    console.log(selected);
    var d = new Date();
	var date = d.toISOString();
	console.log(d);
	console.log(date);
    window.open('data:ics/;charset=utf-8,' + escape(myString));
}
	//exportToFile();
	window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;
	function onInitFs(fs) {

  fs.root.getFile('log.txt', {create: true}, function(fileEntry) {

    // Create a FileWriter object for our FileEntry (log.txt).
    fileEntry.createWriter(function(fileWriter) {

      fileWriter.onwriteend = function(e) {
        console.log('Write completed.');
      };

      fileWriter.onerror = function(e) {
        console.log('Write failed: ' + e.toString());
      };

      // Create a new Blob and write it to log.txt.
      var blob = new Blob(['Lorem Ipsum'], {type: 'text/plain'});

      fileWriter.write(blob);

    }, errorHandler);

  }, errorHandler);

}
	function errorHandler(e) { console.log(e);}

	window.webkitStorageInfo.requestQuota(PERSISTENT, 1024*1024, function(grantedBytes) {
  window.requestFileSystem(PERSISTENT, grantedBytes, onInitFs, errorHandler);
}, errorHandler);
});

function parseText(text){
// Construct the time using regex, hardcoded days and months
    var res = monday.replace("monday", "01");

}