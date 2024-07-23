var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);
const tmp1 = '/receipt/apple';

if (url.indexOf(tmp1) != -1) {
	obj.ExpireTime = 992503620603;
	body = JSON.stringify(obj);
}
$done({body});
