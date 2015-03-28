var crunch = [
  "http://www.mapcrunch.com/p/43.102909_-88.128501_200.61_-5_0",
  "http://www.mapcrunch.com/p/30.881514_-96.608946_323.61_-5_0",
  "http://www.mapcrunch.com/p/35.213857_-89.870512_-203.39_-5_0",
  "http://www.mapcrunch.com/p/36.151952_-86.781153_65.61_-5_0",
  "http://www.mapcrunch.com/p/33.672208_-78.995655_310.61_-5_0",
  "http://www.mapcrunch.com/p/41.363344_-81.856178_-235.39_-5_0",
  "http://www.mapcrunch.com/p/36.551345_-87.394713_-44.39_-5_0",
  "http://www.mapcrunch.com/p/40.054054_-74.947775_180.61_-5_0",
  "http://www.mapcrunch.com/p/39.137657_-77.242737_-334.39_-5_0",
  "http://www.mapcrunch.com/p/30.150718_-91.991052_-98.39_-5_0",
  "http://www.mapcrunch.com/p/41.802811_-87.915233_127.61_-5_0",
  "http://www.mapcrunch.com/p/33.938841_-84.376671_277.61_-5_0",
  "http://www.mapcrunch.com/p/27.437551_-82.466353_-331.39_-5_0",
  "http://www.mapcrunch.com/p/26.181065_-80.150186_-129.39_-5_0",
  "http://www.mapcrunch.com/p/34.004277_-118.142686_5.61_-5_0",
  "http://www.mapcrunch.com/p/46.21683_-119.148198_259.61_-5_0",
  "http://www.mapcrunch.com/p/30.310299_-97.749337_-320.39_-5_0",
  "http://www.mapcrunch.com/p/30.063311_-95.216702_-158.39_-5_0",
  "http://www.mapcrunch.com/p/32.975981_-96.822664_55.61_-5_0",
  "http://www.mapcrunch.com/p/35.026496_-89.845972_274.61_-5_0",
  "http://www.mapcrunch.com/p/33.886761_-80.416171_-311.39_-5_0",
  "http://www.mapcrunch.com/p/35.942618_-78.632821_-158.39_-5_0",
  "http://www.mapcrunch.com/p/39.031222_-94.352316_61.61_-5_0",
  "http://www.mapcrunch.com/p/37.970346_-87.476238_231.61_-5_0",
  "http://www.mapcrunch.com/p/42.022913_-88.078777_-282.39_-5_0",
  "http://www.mapcrunch.com/p/33.849257_-84.612429_-71.39_-5_0",
  "http://www.mapcrunch.com/p/28.606386_-81.196119_108.61_-5_0",
  "http://www.mapcrunch.com/p/39.703255_-104.907613_342.61_-5_0",
  "http://www.mapcrunch.com/p/39.154128_-123.202669_-133.39_-5_0",
  "http://www.mapcrunch.com/p/37.915513_-122.04119_0.61_-5_0",
  "http://www.mapcrunch.com/p/31.218086_-82.367273_255.61_-5_0",
  "http://www.mapcrunch.com/p/40.281584_-111.716172_-220.39_-5_0",
  "http://www.mapcrunch.com/p/29.781428_-95.718904_-22.39_-5_0",
  "http://www.mapcrunch.com/p/29.619543_-95.627711_246.61_-5_0",
  "http://www.mapcrunch.com/p/33.466466_-94.078891_-310.39_-5_0",
  "http://www.mapcrunch.com/p/35.11617_-81.226697_-54.39_-5_0",
  "http://www.mapcrunch.com/p/44.045372_-123.038588_131.61_-5_0",
  "http://www.mapcrunch.com/p/43.186828_-76.283418_336.61_-5_0",
  "http://www.mapcrunch.com/p/39.340486_-74.470961_-272.39_-5_0",
  "http://www.mapcrunch.com/p/37.162598_-93.239908_-181.39_-5_0",
  "http://www.mapcrunch.com/p/38.995054_-94.71997_-66.39_-5_0",
  "http://www.mapcrunch.com/p/26.052976_-80.25776_62.61_-5_0",
  "http://www.mapcrunch.com/p/38.564801_-121.72271_170.61_-5_0",
  "http://www.mapcrunch.com/p/38.581178_-121.524575_294.61_-5_0",
  "http://www.mapcrunch.com/p/32.315553_-110.880214_-268.39_-5_0",
  "http://www.mapcrunch.com/p/32.882352_-84.330785_-8.39_-5_0",
  "http://www.mapcrunch.com/p/42.848884_-106.278229_214.61_-5_0",
  "http://www.mapcrunch.com/p/37.457404_-77.506591_-258.39_-5_0",
  "http://www.mapcrunch.com/p/35.024897_-89.83987_4.61_-5_0",
  "http://www.mapcrunch.com/p/34.008082_-80.973429_263.61_-5_0"
];
var newcrunch = [];
for (i = 0; i < crunch.length; i++){
  newcrunch[i] = crunch[i].split("/");
}
for (i = 0; i < crunch.length; i++){
  newcrunch[i][4] = newcrunch[i][4].split("_");
  console.log("\""+newcrunch[i][4][0]+","+newcrunch[i][4][1]+"\",");

}
