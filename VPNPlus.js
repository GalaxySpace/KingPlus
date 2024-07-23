var url = $request.url;
var body = $response.body;
var obj = JSON.parse(body);
const tmp1 = '/receipt/apple';

if (url.indexOf(tmp1) != -1) {
	body.ExpireTime = '992503620603';
}
$done({body});
