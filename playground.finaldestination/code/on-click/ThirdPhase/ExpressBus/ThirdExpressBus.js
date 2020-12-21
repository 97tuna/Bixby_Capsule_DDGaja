/*
 * Last Update : 2019. 10. 13 (Sunday)
 * Made By     : JongHeon LEE
 * Description : on-click를 위한 js
 *               
 */
var http    = require("http");
var console = require("console");

module.exports.function = function thirdExpressBus (ExpressStation,startmap,endmap) {
  let result = {'ExpressStation' : ExpressStation,'startmap' : startmap,'endmap' : endmap,}
  console.log(result)
  return result
}
