/*
 * Last Update : 2019. 10. 13 (Sunday)
 * Made By     : JongHeon LEE
 * Description : on-click를 위한 js
 *               
 */
var http    = require("http");
var console = require("console");

module.exports.function = function thirdAirplane (startStationName,endStationName,startmap,endmap,AirplaneStation) {
  let result = {'startStationName' : startStationName,'endStationName' : endStationName,
  'startmap' : startmap,'endmap' : endmap, 'AirplaneStation' : AirplaneStation}
  return result
}
