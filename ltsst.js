/*************************************

项目名称：旅途随身听
下载地址：https://t.cn/A60UTceU
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/www\.1314zhilv\.com\/ltsstnew\/(user\/getInfo|guideScenic\/getScenicAllMarkerList) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/ltsst.js

[mitm]
hostname = www.1314zhilv.com

*************************************/


var chxm1023 = $response.body.replace(/\"identityType":\d+/g, '\"identityType":2').replace(/\"levDesc":".*?"/g,'\"levDesc":"永久会员"').replace(/\"isActivate":\d+/g,'\"isActivate":1').replace(/\"audioType":\d+/g, '\"audioType":1').replace(/\"isShowMap":\d+/g, '\"isShowMap":1').replace(/\"isMustVisit":\d+/g, '\"isMustVisit":2').replace(/\"isAudition":\d+/g, '\"isAudition":2');$done(chxm1023);
