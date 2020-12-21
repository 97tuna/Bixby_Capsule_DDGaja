/*
 * Last Update : 2019. 10. 12 (Saturday)
 * Made By     : JongHeonLEE
 * Description : 가독성을 위해 변수명 수정 및 구조 개선
 *               예외처리 수정
 */

/************************************************************************/
/*                               Requires                               */
/************************************************************************/
var http    = require("http");
var console = require("console");

module.exports.SearchCity = function SearchCity(tmX, tmY) {
  var options = {
    format: 'json',
    query: {
      appkey: 'AccessKey',
    },
    headers: {
      Authorization: 'KakaoAK AccessKey'
    }
  }
  const urlParameter = { 'x': tmX, 'y': tmY };
  var url = 'https://dapi.kakao.com/v2/local/geo/coord2address.json?input_coord=WGS84' + "&" + http.makeQueryString(urlParameter);

  var UserPoint = http.getUrl(url, options)
  let City = UserPoint.documents[0].address.region_1depth_name    //[0] type : B(법정동) 
  console.log(City)
  if (City == '서울' || City == '부산' || City == '대구' || City == '대전' || City == '울산' ||
    City == '인천' || City == '광주') {
    let City = UserPoint.documents[0].address.region_1depth_name
  }
  else {
    let SplitCity = UserPoint.documents[0].address.region_2depth_name.split(' ')[0]
    let City = SplitCity.replace('시', '').replace('군', '')
  }

  return City
}

module.exports.MapImage = function mapimage (tmX,tmY) {
    const BASEURL = "https://apis.openapi.sk.com/tmap/staticMap"
    const urlParameter = {
    'version': '1',
    'apiKey': '{bxxxxxxxxx}',
    'zoom': '19',
    'longitude': 'tmX',
    'latitude' : 'tmY',
  };
  const url = BASEURL + "?appkey=xxxxxxxxx" 
  + "&" + http.makeQueryString(urlParameter);
  let xml = http.getUrl(url, { format: 'json' });
  return xml
}