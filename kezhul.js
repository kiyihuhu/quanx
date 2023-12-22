var obj = JSON.parse($response.body);

obj.data.vip = 1;
obj.data.name = "";

$done({
  body: JSON.stringify(obj),
});
