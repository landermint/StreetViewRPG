var crunch = [
"http://www.mapcrunch.com/p/43.484275_23.677259_-344.92_-5_0",
"http://www.mapcrunch.com/p/16.676968_98.622109_-148.92_-5_0",
"http://www.mapcrunch.com/p/47.520679_8.762192_52.08_-5_0"
];
var newcrunch = [];
for (i = 0; i < crunch.length; i++){
  newcrunch[i] = crunch[i].split("/");
}
for (i = 0; i < crunch.length; i++){
  newcrunch[i][4] = newcrunch[i][4].split("_");
  console.log("\""+newcrunch[i][4][0]+","+newcrunch[i][4][1]+"\",");

}
