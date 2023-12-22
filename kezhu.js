[rewrite_local]

^https?:\/\/imdrq\.(cn|com)\/api\/.*get_user_(subject|info|setting).* url script-response-body https://raw.githubusercontent.com/kiyihuhu/quanx/main/kezhul.js


[mitm] 

hostname = .*imdrq.cn,.*imdrq.com
