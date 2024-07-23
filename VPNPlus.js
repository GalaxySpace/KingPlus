/***********************************
> 應用名稱：VPNPlus
> 軟件版本：x.2
> 腳本作者：KingPlus
> 更新時間：2024-07-23
> 腳本功能：⛔无限体验⛔
> 特别說明：本腳本僅供學習交流使用，禁止售賣
 
[rewrite_local]

# VPNPlus（2022-08-26)
^https?:\/\/206\.189\.78\.230\/receipt\/apple url script-response-body https://raw.githubusercontent.com/GalaxySpace/KingPlus/main/VPNPlus.js

[mitm] 
hostname = 206.189.78.230

***********************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);
const tmp1 = '/receipt/apple';

if (url.indexOf(tmp1) != -1) {
	obj.ExpireTime = 992503620603;
	body = JSON.stringify(obj);
}
$done({body});
