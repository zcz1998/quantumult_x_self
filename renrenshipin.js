/*******************************




*******************************

[rewrite_local]

^http[s]?:\/\/api.hujuvod.com\/user\/personal\/information url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/hujuvod.js

^https:\/\/mi-eo\.gdt\.qq\.com\/gdt_mview\.fcg\?spsa= url reject-dict



[mitm] 

hostname = api.hujuvod.com
hostname = mi-eo.gdt.qq.com

*******************************/

var body = $response.body.replace(/level":"\d+"/g,'level":"1"')
.replace(/expiredTime":\d+/g,'expiredTime":4090470693000')
.replace(/valid":\w+/g,'valid":true')
$done({ body });
