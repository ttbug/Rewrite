/****************************************

项目名称：Chat AI：中文-人工智能聊天
下载工具：https://t.cn/A6p1ANqR
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

*****************************************

[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/chatai.js

[mitm]
hostname = api.revenuecat.com

****************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023 = {
  "request_date_ms" : 1688103683707,
  "request_date" : "2023-06-30T05:41:23Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2023-06-30T05:41:19Z",
    "original_application_version" : null,
    "entitlement" : {

    },
    "other_purchases" : {

    },
    "management_url" : null,
    "subscriptions" : {
      "com.palligroup.gpt3.yearlyyy" : {
        "Author" : "chxm1023",
        "ownership_type" : "PURCHASED",
        "expires_date" : "2099-09-09T09:09:09Z",
        "warning" : "仅供学习，禁止转载或售卖",
        "original_purchase_date" : "2022-09-09T09:09:09Z",
        "Telegram" : "https://t.me/chxm1023",
        "purchase_date" : "2022-09-09T09:09:09Z"
      }
    },
    "entitlements" : {
      "Advanced" : {
        "Author" : "chxm1023",
        "ownership_type" : "PURCHASED",
        "product_identifier" : "com.palligroup.gpt3.yearlyyy",
        "expires_date" : "2099-09-09T09:09:09Z",
        "warning" : "仅供学习，禁止转载或售卖",
        "original_purchase_date" : "2022-09-09T09:09:09Z",
        "Telegram" : "https://t.me/chxm1023",
        "purchase_date" : "2022-09-09T09:09:09Z"
      }
    },
    "original_purchase_date" : null,
    "original_app_user_id" : "$RCAnonymousID:2aa6b94e60984cd7ad40a8c995f54646",
    "last_seen" : "2023-06-30T05:41:19Z"
  }
};

$done({body : JSON.stringify(chxm1023)});
