/*************************************

项目名称：Nicegram
下载地址：https://t.cn/A6ou0MCe
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/restore-access\.indream\.app\/restoreAccess url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/nicegram.js

[mitm]
hostname = restore-access.indream.app

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023 = {
  "data" : {
    "premiumAccess" : true
  }
};

const isQX = typeof $task != "undefined";
const isSurge = typeof $httpClient != "undefined" && !isQX;
const isLoon = typeof $loon != "undefined";
const isShad = typeof $rocket !== "undefined";
const isStash = typeof $stash !== "undefined";

console.log('已操作成功🎉\n叮当猫の分享频道: https://t.me/chxm1023');
if (isQX && isStash) { chxm1024 = "HTTP/1.1 200 OK";} else {chxm1024 = 200;}
$done({status: (chxm1024), headers: $response.headers, body : JSON.stringify(chxm1023)});
