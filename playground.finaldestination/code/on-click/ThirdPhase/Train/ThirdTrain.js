/*
 * Last Update : 2019. 10. 13 (Sunday)
 * Made By     : JongHeon LEE
 * Description : on-click를 위한 js
 *               
 */
var http    = require("http");
var console = require("console");

module.exports.function = function thirdTrain (startStationName,endStationName,startmap,endmap,TrainStation) {
  let result = {'startStationName' : startStationName,'endStationName' : endStationName,
  'startmap' : startmap,'endmap' : endmap, 'TrainStation' : TrainStation}
  return result
}
