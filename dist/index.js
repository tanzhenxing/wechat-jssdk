import jweixin from '../lib/jweixin'
import sha1 from '../lib/sha1'

export default {
    debug: false,
    jsApiList: [
        'checkJsApi',
        'onMenuShareAppMessage',
        'onMenuShareTimeline',
        'updateAppMessageShareData',
        'updateTimelineShareData',
        'onMenuShareWeibo',
        'onMenuShareQZone',
        'startRecord',
        'stopRecord',
        'onVoiceRecordEnd',
        'playVoice',
        'pauseVoice',
        'stopVoice',
        'onVoicePlayEnd',
        'uploadVoice',
        'downloadVoice',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'translateVoice',
        'getNetworkType',
        'openLocation',
        'getLocation',
        'hideOptionMenu',
        'showOptionMenu',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'closeWindow',
        'scanQRCode',
        'chooseWXPay',
        'openProductSpecificView',
        'addCard',
        'chooseCard',
        'openCard'
    ],
    openTagList: [
        'wx-open-launch-weapp',
        'wx-open-launch-app',
        'wx-open-subscribe',
        'wx-open-audio'
    ],
    //判断是否在微信中
    isWechat() {
        let ua = window.navigator.userAgent.toLowerCase();
        return ua.match(/micromessenger/i) === 'micromessenger';
    },
    // 生成随机字符串
    getNonceStr(len) {
        len = len || 32;
        let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
        let maxPos = $chars.length;
        let nonceStr = '';
        for (let i = 0; i < len; i++) {
            nonceStr += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return nonceStr;
    },
    // 获取微信jssdk 签名 Signature
    setConfig(appid,ticket,jsApiList=null,openTagList=null) {
        // 是否运行在微信环境
        if (!this.isWechat()) {
            return;
        }
        // 默认配置
        if(jsApiList===null){
            jsApiList = this.jsApiList;
        }
        if(openTagList===null){
            openTagList = this.openTagList;
        }
        // 生成签名参数
        let authUrl = window.location.href.replace(/#(.*)/g, '');
        let timestamp = parseInt((new Date() * 0.001).toString());
        let nonceStr = this.getNonceStr(16);
        let str = 'jsapi_ticket=' + ticket + '&noncestr=' + nonceStr + '&timestamp=' + timestamp + '&url=' + authUrl;
        let signature = sha1(str);

        // 权限验证配置
        jweixin.config({
            debug: this.debug,
            appId: appId,
            timestamp: timestamp,
            nonceStr: nonceStr,
            signature: signature,
            jsApiList: jsApiList,
            openTagList: openTagList
        });
    },

    // 微信 Jssdk
    jsSdk(name,data={}) {
        // 返回结果
        return new Promise((resolve, reject) => {
            jweixin.ready(() => {
                switch (name) {
                    // 判断当前客户端版本是否支持指定 JS 接口
                    case "checkJsApi":
                        if(data.jsApiList===undefined){
                            data.jsApiList = this.jsApiList;
                        }
                        jweixin.checkJsApi({
                            jsApiList: data.jsApiList, // 需要检测的 JS 接口列表
                            success: (res)=> {
                                // 以键值对的形式返回，可用的 api 值true，不可用为false
                                console.log(JSON.stringify(res));
                                resolve(res)
                            }
                        });
                        break;
                    //分享给好有接口
                    case "updateAppMessageShareData":
                        jweixin.updateAppMessageShareData({
                            title: data.title, // 分享标题
                            desc: data.desc, // 分享描述
                            link: data.link, // 分享链接
                            imgUrl: data.imgUrl, // 分享图标
                            success: function () {
                                console.log('分享好友成功')
                            },
                            complete: function(){
                                console.log('分享完成')
                            },
                            fail: function(){
                                console.log('分享好友失败')
                            },
                            cancel: function () {
                                console.log('分享好友已取消')
                            },
                            trigger:function(){
                                console.log('分享按钮点击时触发')
                            }
                        });
                        break;
                    case "onMenuShareAppMessage":
                        jweixin.onMenuShareAppMessage({
                            title: data.title, // 分享标题
                            desc: data.desc, // 分享描述
                            link: data.link, // 分享链接
                            imgUrl: data.imgUrl, // 分享图标
                            success: function () {
                                // 用户确认分享后执行的回调函数
                            },
                            cancel: function () {
                                // 用户取消分享后执行的回调函数
                            },
                        });
                        break;
                    //分享到朋友圈接口
                    case "updateTimelineShareData":
                        jweixin.updateTimelineShareData({
                            title: data.title, // 分享标题
                            desc: data.desc, // 分享描述
                            link: data.link, // 分享链接
                            imgUrl: data.imgUrl, // 分享图标
                            success: function () {
                                // 用户确认分享后执行的回调函数
                            },
                            cancel: function () {
                                // 用户取消分享后执行的回调函数
                            },
                        });
                        break;
                    case "onMenuShareTimeline":
                        jweixin.onMenuShareTimeline({
                            title: data.title, // 分享标题
                            desc: data.desc, // 分享描述
                            link: data.link, // 分享链接
                            imgUrl: data.imgUrl, // 分享图标
                            success: function () {
                                // 用户确认分享后执行的回调函数
                            },
                            cancel: function () {
                                // 用户取消分享后执行的回调函数
                            },
                        });
                        break;
                    // 分享到腾讯微博(已失效)
                    case "onMenuShareWeibo":
                        jweixin.onMenuShareWeibo({
                            title: data.title, // 分享标题
                            desc: data.desc, // 分享描述
                            link: data.link, // 分享链接
                            imgUrl: data.imgUrl, // 分享图标
                            success: function () {
                                // 用户确认分享后执行的回调函数
                            },
                            cancel: function () {
                                // 用户取消分享后执行的回调函数
                            },
                        });
                        break;
                    // 分享到 QQ 空间
                    case "onMenuShareQZone":
                        jweixin.onMenuShareQZone({
                            title: data.title, // 分享标题
                            desc: data.desc, // 分享描述
                            link: data.link, // 分享链接
                            imgUrl: data.imgUrl, // 分享图标
                            success: function () {
                                // 用户确认分享后执行的回调函数
                            },
                            cancel: function () {
                                // 用户取消分享后执行的回调函数
                            },
                        });
                        break;
                    // 拍照或从手机相册中选图接口
                    case "chooseImage":
                        if(data.count===undefined || data.count>9){
                            data.count = 9;
                        }
                        if(data.sizeType===undefined){
                            data.sizeType = ['original', 'compressed'];
                        }
                        if(data.sourceType===undefined){
                            data.sourceType = ['album', 'camera'];
                        }
                        jweixin.chooseImage({
                            count: data.count, // 默认9
                            sizeType: data.sizeType,
                            sourceType: data.sourceType,
                            success: (res)=> {
                                resolve(res.localIds)
                            }
                        });
                        break;
                    // 预览图片
                    case "previewImage":
                        jweixin.previewImage({
                            current: data.current, // 当前显示图片的 http 链接
                            urls: data.urls // 需要预览的图片 http 链接列表
                        });
                        break;
                    // 上传图片
                    case "uploadImage":
                        if(data.isShowProgressTips===undefined){
                            data.isShowProgressTips = 1;
                        }
                        jweixin.uploadImage({
                            localId: data.localId, // 需要上传的图片的本地ID，由 chooseImage 接口获得
                            isShowProgressTips: data.isShowProgressTips, // 默认为1，显示进度提示
                            success: function (res) {
                                resolve(res)
                            }
                        });
                        break;
                    // 下载图片
                    case "downloadImage":
                        if(data.isShowProgressTips===undefined){
                            data.isShowProgressTips = 1;
                        }
                        jweixin.downloadImage({
                            serverId: data.serverId, // 需要下载的图片的服务器端ID，由 uploadImage 接口获得
                            isShowProgressTips: data.isShowProgressTips, // 默认为1，显示进度提示
                            success: function (res) {
                                resolve(res)
                            }
                        });
                        break;
                    // 获取本地图片
                    case "getLocalImgData":
                        jweixin.getLocalImgData({
                            localId: data.localId, // 图片的localID
                            success: function (res) {
                                resolve(res)
                            }
                        });
                        break;
                    // 开始录音
                    case "startRecord":
                        jweixin.startRecord({
                            success: function(res) {
                                // 成功返回:{"errMsg":"startRecord:ok"}
                                resolve(res)
                            }
                        });
                        break;
                    // 停止录音
                    case "stopRecord":
                        jweixin.stopRecord({
                            success: function(res) {
                                //成功返回：{"localId":"weixin://resourceid/0d19910ac0df488ac78dac209edbbaeb","errMsg":"stopRecord:ok"}
                                resolve(res)
                            },
                            fail: function(res){
                                reject(res)
                            }
                        });
                        break;
                    // 监听录音自动停止
                    case "onVoiceRecordEnd":
                        jweixin.onVoiceRecordEnd({
                            // 录音时间超过一分钟没有停止的时候会执行 complete 回调
                            complete: function(res) {
                                resolve(res)
                            }
                        });
                        break;
                    // 播放语音
                    case "playVoice":
                        // 播放录音
                        jweixin.playVoice({
                            localId: data.localId, // 需要播放的音频的本地ID，由stopRecord接口获得
                        });
                        break;
                    // 暂停播放语音
                    case "pauseVoice":
                        jweixin.pauseVoice({
                            localId: data.localId // 需要暂停的音频的本地ID，由stopRecord接口获得
                        });
                        break;
                    // 停止播放语音
                    case "stopVoice":
                        jweixin.stopVoice({
                            localId: data.localId // 需要停止的音频的本地ID，由stopRecord接口获得
                        });
                        break;
                    // 监听语音播放完毕
                    case "onVoicePlayEnd":
                        jweixin.onVoicePlayEnd({
                            success: function(res) {
                                // 成功返回：{"localId":"weixin://resourceid/58d21319115bc0c91be6736c366e5e88","errMsg":"onVoicePlayEnd:ok"}
                                resolve(res)
                            }
                        });
                        break;
                    // 上传语音
                    case "uploadVoice":
                        if(data.isShowProgressTips===undefined){
                            data.isShowProgressTips = 1;
                        }
                        jweixin.uploadVoice({
                            localId: data.localId, // 需要上传的音频的本地ID，由stopRecord接口获得
                            isShowProgressTips: data.isShowProgressTips, // 默认为1，显示进度提示
                            success: function(res) {
                                // （上传到微信服务器有效期3天）成功返回：{"serverId":"w2emIfcwiWNudahpIK1YDp7t-nkwzHLVtMilfmjHDqKhIwhLijLNwNJad73jSa55","errMsg":"uploadVoice:ok"}
                                resolve(res)
                            }
                        });
                        break;
                    // 下载语音
                    case "downloadVoice":
                        if(data.isShowProgressTips===undefined){
                            data.isShowProgressTips = 1;
                        }
                        jweixin.downloadVoice({
                            serverId: data.serverId, // 需要下载的音频的服务器端ID，由uploadVoice接口获得
                            isShowProgressTips: data.isShowProgressTips, // 默认为1，显示进度提示
                            success: function(res) {
                                //  (下载到微信本地文件) 成功返回：{"localId":"weixin://resourceid/8a9404ec18e42d9d22cc66998af533f2","errMsg":"downloadVoice:ok"}
                                // 可用微信多媒体接口下载语音到自己的服务器，此处获得的 serverId 即 media_id，多媒体文件下载接口的频率限制为10000次/天
                                resolve(res)
                            }
                        });
                        break;
                    // 多媒体文件下载链接
                    case "mediaDownloadUrl":
                        let audio_url ='https://api.weixin.qq.com/cgi-bin/media';
                        if(data.type==='speex'){
                            audio_url += '/get/jssdk?access_token=' + data.access_token + '&media_id=' + data.media_id;
                        } else {
                            audio_url += '/get?access_token=' + data.access_token + '&media_id=' + data.media_id;
                        }
                        resolve(audio_url)
                        break;
                    // 识别音频并返回识别结果
                    case "translateVoice":
                        if(data.isShowProgressTips===undefined){
                            data.isShowProgressTips = 1;
                        }
                        jweixin.translateVoice({
                            localId: data.localId, // 需要识别的音频的本地Id，由录音相关接口获得
                            isShowProgressTips: data.isShowProgressTips, // 默认为1，显示进度提示
                            success: function(res) {
                                // 成功返回：{"translateResult":"识别语音。","errMsg":"translateVoice:ok"}
                                resolve(res)
                            }
                        });
                        break;
                    // 获取网络状态
                    case "getNetworkType":
                        jweixin.getNetworkType({
                            success: function (res) {
                                // res.networkType 返回网络类型2g，3g，4g，wifi
                                resolve(res)
                            }
                        });
                        break;
                    // 使用微信内置地图查看位置
                    case "openLocation":
                        jweixin.openLocation({
                            latitude: data.latitude, // 纬度，浮点数，范围为90 ~ -90
                            longitude: data.longitude, // 经度，浮点数，范围为180 ~ -180。
                            name: data.name, // 位置名
                            address: data.address, // 地址详情说明
                            scale: data.scale, // 地图缩放级别,整型值,范围从1~28。默认为最大
                            infoUrl: data.infoUrl // 在查看位置界面底部显示的超链接,可点击跳转
                        });
                        break;
                    case "getLocation":
                        jweixin.getLocation({
                            type: 'wgs84', // 默认为wgs84的 gps 坐标，如果要返回直接给 openLocation 用的火星坐标，可传入'gcj02'
                            success: function (res) {
                                var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                                var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                                var speed = res.speed; // 速度，以米/每秒计
                                var accuracy = res.accuracy; // 位置精度
                                resolve(res)
                            }
                        });
                        break;
                    // 开启查找周边 ibeacon 设备
                    case "startSearchBeacons":
                        jweixin.startSearchBeacons({
                            ticket:"",  //摇周边的业务 ticket , 系统自动添加在摇出来的页面链接后面
                            complete:function(res){
                                //开启查找完成后的回调函数
                                resolve(res)
                            }
                        });
                        break;
                    case "stopSearchBeacons":
                        jweixin.stopSearchBeacons({
                            complete:function(res){
                                //关闭查找完成后的回调函数
                                resolve(res)
                            }
                        });
                        break;
                    // 监听周边 ibeacon 设备
                    case "onSearchBeacons":
                        jweixin.onSearchBeacons({
                            complete:function(res){
                                //回调函数，可以数组形式取得该商家注册的在周边的相关设备列表
                                resolve(res)
                            }
                        });
                        break;
                    // 关闭当前网页窗口
                    case "closeWindow":
                        jweixin.closeWindow();
                        break;
                    // 批量隐藏功能按钮
                    case "hideMenuItems":
                        jweixin.hideMenuItems({
                            menuList: data.menuList // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有 menu 项见附录3
                        });
                        break;
                    // 批量显示功能按钮
                    case "showMenuItems":
                        jweixin.showMenuItems({
                            menuList: data.menuList // 要显示的菜单项，所有 menu 项见附录3
                        });
                        break;
                    // 隐藏所有非基础按钮
                    case "hideAllNonBaseMenuItem":
                        jweixin.hideAllNonBaseMenuItem();
                        break;
                    // 显示所有功能按钮
                    case "showAllNonBaseMenuItem":
                        jweixin.showAllNonBaseMenuItem();
                        break;
                    // 调起微信扫一扫
                    case "scanQRCode":
                        jweixin.scanQRCode({
                            needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                            scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
                            success: function (res) {
                                var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                                resolve(res)
                            }
                        });
                        break;
                    // 跳转微信商品页
                    case "openProductSpecificView":
                        jweixin.openProductSpecificView({
                            productId: data.productId, // 商品id
                            viewType: data.viewType // 0.默认值，普通商品详情页1.扫一扫商品详情页2.小店商品详情页
                        });
                        break;
                    // 拉取适用卡券列表并获取用户选择信息
                    case "chooseCard":
                        // https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=ACCESS_TOKEN&type=wx_card
                        jweixin.chooseCard({
                            shopId: '', // 门店Id
                            cardType: '', // 卡券类型
                            cardId: '', // 卡券Id
                            timestamp: 0, // 卡券签名时间戳
                            nonceStr: '', // 卡券签名随机串
                            signType: '', // 签名方式，默认'SHA1'
                            cardSign: '', // 卡券签名
                            success: function (res) {
                                var cardList= res.cardList; // 用户选中的卡券列表信息
                                resolve(res)
                            }
                        });
                        break;
                    // 批量添加卡券
                    case "addCard":
                        jweixin.addCard({
                            cardList: [{
                                cardId: '',
                                cardExt: ''
                            }], // 需要添加的卡券列表
                            success: function (res) {
                                var cardList = res.cardList; // 添加的卡券列表信息
                                resolve(res)
                            }
                        });
                        break;
                    case "openCard":
                        jweixin.openCard({
                            cardList: [{
                                cardId: '',
                                code: ''
                            }]// 需要打开的卡券列表
                        });
                        break;
                    // 发起一个微信支付
                    case "chooseWXPay":
                        jweixin.chooseWXPay({
                            timestamp: data.timestamp, // 支付签名时间戳，注意微信 jssdk 中的所有使用 timestamp 字段均为小写。但最新版的支付后台生成签名使用的 timeStamp 字段名需大写其中的 S 字符
                            nonceStr: data.nonceStr, // 支付签名随机串，不长于 32 位
                            package: data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
                            signType: data.signType, // 微信支付V3的传入 RSA ,微信支付V2的传入格式与V2统一下单的签名格式保持一致
                            paySign: data.paySign, // 支付签名
                            success: function (res) {
                                // 支付成功后的回调函数
                                resolve(res)
                            }
                        });
                        break;
                    // 共享收货地址
                    case "openAddress":
                        jweixin.openAddress({
                            success: function (res) {
                                var userName = res.userName; // 收货人姓名
                                var postalCode = res.postalCode; // 邮编
                                var provinceName = res.provinceName; // 国标收货地址第一级地址（省）
                                var cityName = res.cityName; // 国标收货地址第二级地址（市）
                                var countryName = res.countryName; // 国标收货地址第三级地址（国家）
                                var detailInfo = res.detailInfo; // 详细收货地址信息
                                var nationalCode = res.nationalCode; // 收货地址国家码
                                var telNumber = res.telNumber; // 收货人手机号码
                                resolve(res)
                            }
                        });
                        break;
                }
            });
        });
    },
}
