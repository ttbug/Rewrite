/*************************************

项目名称：录屏
下载地址：https://t.cn/A6pvVCrS
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/apis\.videoshowiosglobalserver\.com\/zone\/.+\/iosPayClient\/payVerify url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Luping.js

[mitm]
hostname = apis.videoshowiosglobalserver.com

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023 = {
  "is_trial_period" : "true"
  "isBlacklist" : "0",
  "retCode" : "1",
  "status" : "0",
  "transaction_id" : "666666666666666",
  "retMsg" : "success",
  "isRepeatBind" : "0",
  "isUsedPromocode" : "0",
  "subscrib_type" : "2",
  "current_date" : "2023-05-20 13:14:00",
  "isReportPrice" : "0",
  "product_id" : "vrecorder_vip_yearly_3",
  "purchase_date" : "2023-05-20 13:14:05",
  "original_transaction_id" : "666666666666666",
  "cancellation_date" : "",
  "promotional_offer_id" : "",
  "recallLabelType" : "0",
  "is_in_intro_offer_period" : "false",
  "msg" : "验证成功",
  "expires_date" : "2099-09-09 09:09:09",
};

$done({body : JSON.stringify(chxm1023)});
