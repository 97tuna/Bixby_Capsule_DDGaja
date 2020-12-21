/*
 * Last Update : 2019. 10. 12 (Saturday)
 * Made By     : JongHeonLEE
 * Description : 가독성을 위해 변수명 수정 및 구조 개선
 *               예외처리 수정
 */

/************************************************************************/
/*                               Requires                               */
/************************************************************************/
var http = require("http");
var console = require("console");
var tool = require('tool/tool.js');

module.exports.function = function searchWayNearby(location, ArrivalCity) {

  const tmX = location.longitude;
  const tmY = location.latitude;

  let DepartCity = tool.SearchCity(tmX, tmY)

  const baseurl = "http://xxxxxx:xxxx/searchWay?";

  var options = {
    Start: DepartCity,
    End: ArrivalCity
  };
  var ret = http.getUrl(baseurl + http.makeQueryString(options), { format: 'json' });
  // if (ret.Airplane[0] == undefined) {
  //   if (ret.ExpressBus[0] == undefined) {
  //     if (ret.IntercityBus[0] == undefined) {
  //       if (ret.Train[0] == undefined) {
  //         return
  //       }
  //     }
  //   }
  // }
  return ret;
}