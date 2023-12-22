/******************************
[rewrite_local]

https?:\/\/imdrq\.(cn|com)\/api\/.*get_user url script-response-body


[mitm] 

hostname = .*imdrq.cn,.*imdrq.com

/*******************************/

var obj = JSON.parse($response.body);

obj.data.vip = "1";

$done({
  body: JSON.stringify(obj),
});
