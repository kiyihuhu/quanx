/******************************
[rewrite_local]

https?:\/\/imdrq\.(cn|com)\/api\/.*get_user url script-response-body https://raw.githubusercontent.com/kiyihuhu/quanx/main/kezhu.js


[mitm] 

hostname = .*imdrq.cn,.*imdrq.com

/*******************************/

var obj = JSON.parse($response.body);

obj.data.vip = "1";

$done({
  body: JSON.stringify(obj),
});
