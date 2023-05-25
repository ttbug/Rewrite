/*************************************

项目名称：乐秀
下载地址：https://t.cn/A6p7XAT4
项目名称：多功能视频剪辑
下载地址：https://t.cn/A6p7XyPT
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/.*\.enjoy-mobi\.com\/zone\/.+\/(startPageAd\/getAds|iosPayClient\/payVerify) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/VideoShow.js

[mitm]
hostname = *.enjoy-mobi.com

*************************************/


var body = $response.body;
var chxm1023 = JSON.parse(body);
const ad = '/startPageAd/getAds';
const ua = $request.headers['User-Agent'] || $request.headers['user-agent'];

if ($request.url.indexOf(ad) != -1){
  chxm1023 = {};
}

if (ua.indexOf('多功能视频剪辑') != -1) {
  chxm1023 = {
  "is_trial_period" : "true",
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
  "product_id" : "vip_yearly_3",
  "purchase_date" : "2023-05-20 13:14:05",
  "original_transaction_id" : "666666666666666",
  "cancellation_date" : "",
  "promotional_offer_id" : "",
  "recallLabelType" : "0",
  "is_in_intro_offer_period" : "false",
  "msg" : "验证成功",
  "expires_date" : "2099-09-09 09:09:09"
};}

if (ua.indexOf('VideoShow') != -1) {
  chxm1023 = {
  "is_trial_period" : "true",
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
  "product_id" : "vip_privilege_yearly_3",
  "purchase_date" : "2023-05-20 13:14:05",
  "original_transaction_id" : "666666666666666",
  "cancellation_date" : "",
  "promotional_offer_id" : "",
  "recallLabelType" : "0",
  "is_in_intro_offer_period" : "false",
  "msg" : "验证成功",
  "expires_date" : "2099-09-09 09:09:09"
};}

$done({body : JSON.stringify(chxm1023)});
