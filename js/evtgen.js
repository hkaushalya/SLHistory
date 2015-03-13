//Generate Contents from text file
console.log("Loading evtgen.js");
/*var event = {
    year:"",
    img:"",
    text:""
};
*/
var fileName = "sample.json";
//var reader = new FileReader();
//var allText = reader.readAsText(fileName);
//console.log("blob=", blob);
$.getJSON(fileName, function(data) {
    console.log('It worked!');
});

//var allTextLines = allText.split('/\r/n|\n/');
//var lines=[];
//var events = [];
/*for (var i=0; i< allTextLines.length; ++i) {
    var data = allTextLines[i].split(',');
    console.log(data);
    var evt = new event();
    evt.year = data[0];
    evt.img = data[1];
    evt.text = data[2];
    events.push(data)
}
console.log("Number of records read:" + events.length);
*/