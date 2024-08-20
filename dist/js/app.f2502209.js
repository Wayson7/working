(function(){"use strict";var t={5417:function(t,n,o){var e=o(5130),i=o(6768);const a={id:"logo"},r={style:{"text-align":"center"}};function c(t,n,o,e,c,l){const s=(0,i.g2)("HuaShu");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.Lk)("div",a,[(0,i.Lk)("div",r,[(0,i.Lk)("button",{id:"clear",onClick:n[0]||(n[0]=(...t)=>l.clearCache&&l.clearCache(...t))},"清除缓存")])]),(0,i.bF)(s)],64)}var l=o(4232);const s=t=>((0,i.Qi)("data-v-1638eeda"),t=t(),(0,i.jt)(),t),u={id:"hello"},p={key:0,class:"progress-bar-container"},g=s((()=>(0,i.Lk)("span",{style:{position:"absolute"}},"图片加载中...",-1))),d={class:"title"},m=["onClick"],h=["src"],w=s((()=>(0,i.Lk)("li",{style:{"list-style":"none",clear:"both"}},null,-1))),f=s((()=>(0,i.Lk)("div",{style:{clear:"both",height:"300px"}},null,-1)));function k(t,n,o,a,r,c){return(0,i.uX)(),(0,i.CE)("div",u,[r.loading?((0,i.uX)(),(0,i.CE)("div",p,[g,(0,i.Lk)("div",{class:"progress-bar",style:(0,l.Tr)({width:r.loadProgress+"%"})},null,4)])):(0,i.Q3)("",!0),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(t.allItems,((t,o)=>((0,i.uX)(),(0,i.CE)("ul",{key:o},[(0,i.Lk)("div",d,[(0,i.Lk)("span",null,(0,l.v_)(r.titles[o]),1)]),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(t,((t,o)=>((0,i.uX)(),(0,i.CE)("li",{class:"box",key:o,onClick:n=>c.copyImageOrTextToClipboard(t,n)},["开发票"==t.title?((0,i.uX)(),(0,i.CE)("a",{key:0,class:"fapiao",href:"http://fapiao.wayson.work/",target:"_blank",onClick:n[0]||(n[0]=(0,e.D$)((t=>c.copyImageOrTextToClipboard()),["stop"]))},(0,l.v_)(r.fapiao),1)):(0,i.Q3)("",!0),(0,i.Lk)("span",null,(0,l.v_)(t.title),1),t.img?((0,i.uX)(),(0,i.CE)("img",{key:1,src:t.img,onLoad:n[1]||(n[1]=t=>c.handleImageLoadAndError(!0)),onError:n[2]||(n[2]=t=>c.handleImageLoadAndError(!1)),style:{display:"none"}},null,40,h)):(0,i.Q3)("",!0)],8,m)))),128)),w])))),128)),f])}var b=o(782),S={data(){return{fapiao:">>> 点击开发票 <<<",titles:["日常使用","软件问题","iOS & iPad","Windows","macOS","Android"],loading:!0,loadProgress:0,totalImages:0,loadedImages:0,isCopying:!1}},computed:{...(0,b.L8)(["allItems"])},created(){this.totalImages=this.allItems.flat().filter((t=>t.img)).length,this.cacheAllImages()},mounted(){console.log("页面已加载...")},methods:{async cacheAllImages(){for(const t of this.allItems.flat())t.img&&await this.cacheImage(t.img)},async cacheImage(t){if(!("caches"in window))return console.error("当前浏览器不支持 Cache API"),null;try{const n=await caches.open("image-cache"),o=await fetch(t);if(o.ok)return await n.put(t,o.clone()),console.log(`图片已缓存: ${t}`),o.blob();throw new Error("网络请求失败")}catch(n){return console.error("缓存图片失败:",n),null}},async getImageBlob(t){if(!("caches"in window))return console.error("当前浏览器不支持 Cache API"),null;const n=await caches.open("image-cache"),o=await n.match(t);return o?(console.log(`从缓存中读取图片: ${t}`),o.blob()):(console.log(`缓存中没有图片，开始下载并缓存: ${t}`),await this.cacheImage(t))},handleImageLoadAndError(t){t?(console.log("图片加载成功"),this.handleImageFunc()):(console.error("图片加载错误"),this.handleImageFunc())},handleImageFunc(){this.loadedImages++,this.loadProgress=this.loadedImages/this.totalImages*100,this.loadedImages===this.totalImages&&(this.loading=!1)},async copyToClipboard(t){try{if(!navigator.clipboard)return void console.error("当前浏览器不支持 Clipboard API");await navigator.clipboard.writeText(t),console.log("内容已成功复制到剪贴板")}catch(n){console.error("复制到剪贴板失败：",n)}},async copyImageOrTextToClipboard(t,n){if(!this.isCopying){this.isCopying=!0;try{if(""===t.content){if(""===t.img)return void console.error("无可复制内容");const n=await this.getImageBlob(t.img);if(!n)return void console.error("无法获取图片");const o=new ClipboardItem({"image/png":n});await navigator.clipboard.write([o]),console.log("图片已成功复制到剪贴板")}else await this.copyToClipboard(t.content);const o=n.target;o.style.backgroundColor="red",setTimeout((()=>{o.style.backgroundColor=""}),500)}catch(o){console.error("复制到剪贴板失败：",o)}finally{setTimeout((()=>{this.isCopying=!1}),500)}}}}},I=o(1241);const y=(0,I.A)(S,[["render",k],["__scopeId","data-v-1638eeda"]]);var v=y,C={name:"App",components:{HuaShu:v},methods:{async clearCache(){try{await caches.delete("image-cache"),console.log("缓存已清除")}catch(t){console.error("清除缓存失败：",t)}}}};const T=(0,I.A)(C,[["render",c]]);var P=T,O="\n永久域名: https://cloudupup.net\n官网网址: https://cloudupup.cc\n  备用网址1: cloudupup.org\n  备用网址2: up15.cloudupup15.com\n问题指南: help.cloudupup.net\n⚠️ 不要直接点击打开 ⚠️\n⚠️请手动复制去浏览器⚠️";const x=(0,b.y$)({state(){return{allItems:[],domains:{"cloudupup.net":["UPUP永久导航","待检测"],"cloudupup.org":["UPUP官网","待检测"],"up14.cloudupup14.com":["UPUP备用官网","待检测"],"up15.cloudupup15.com":["UPUP备用官网","待检测"],"help.cloudupup.net":["UPUP帮助文档","待检测"],"banana-fast.com":["香蕉官网","待检测"],"web.yakoo.one":["香蕉购买商城","待检测"],"go.bananapro.club":["香蕉下载","待检测"],"help.bprolink.com":["香蕉帮助文档","待检测"]},items:[{title:"官网下载",content:String.raw`请登陆并以下官网:`+O+"\n\n~新用户~\n注册、购买套餐、下载软件、导入订阅地址\n~老用户~\n官网续费、更新订阅/线路、下载新客户端",img:""},{title:"GPT等账号销售",content:String.raw`这边有GPT3.5和4.0 / 谷歌账号 / Apple ID
https://idinshop.com/`,img:""},{title:"开发票",content:String.raw`因为这边是海外公司, 所以无法开大陆发票, 但这边可以给您开invoice, 如果您需要的话, 写下您的 (公司全称) 和 (收款邮箱) 以及 (支付截图), 这边记录一下, 24小时内给您开, 请您耐心等待~`,img:""},{title:"年卡七折/优惠",content:String.raw`实在抱歉, 最近没什么活动
          
年卡:190元--月卡22元*12=264元
年卡是月卡的7折，可以冲

我们有专线独享套餐,比其他产品的公网服务成本要高7-8倍
稳定性也是最好的，可以放心使用
同类产品价格基本都是翻倍，主打品质，感谢您的支持~
大流量和超大流量套餐 折扣更是划算~`,img:""},{title:"邀请返利",content:String.raw`您可以登陆官网 => 我的账号 => 邀请返利
把邀请返利有个"链接地址", 发给朋友注册
如果对方无法打开 请使用新域名去打开
确保链接用的是最新的域名`+O+"\n\n每次朋友购买都会有20%返利到您的账户,\n满300可以提现也可以发工单,\n或者转成余额,抵扣套餐费用哦~\n\n感谢您的支持和关注~~我们会继续加油的\n提供更好品质的服务！！",img:""},{title:"注销/邮箱不存在",content:String.raw`为了用户的账户安全, 我们会在套餐过期一个月后会自动注销, 可以保障用户的个人信息安全, 您可以用原有的账号重新注册并购买即可~`,img:""},{title:"toDesk远程",content:String.raw`您这边现在方便远程吗?
我可以给您远程操作一下
下载toDesk, 然后发 设备代码 给我
https://www.todesk.com/download.html
❗windows电脑不用设置
❗mac电脑需要要把三个权限都打开, todesk首页有红色提示引导`,img:""},{title:"推荐关注",content:String.raw`我们有官方推特和Facebook账号了，上面会不定时更新如何注册及使用外网app的教程。 
如果有需要的教程，可对我们提出 会给大家安排。
推特账号: cloudupupvpn （https://x.com/cloudupupvpn）
Facebook账号: cloudupupvpn 
https://www.facebook.com/profile.php?id=61559661946393`,img:""}],app:[{title:"iOS无法使用TK",content:String.raw`解决办法的操作步骤如下：
(必要条件: 可以正常访问 youtube.com)

第1️⃣步: 拔手机Sim卡（ iOS 16.4 以上系统 及 平板设备 可以忽略 ）
第2️⃣步: 由于tiktok识别到国内的sim卡后，会屏蔽。 
  设置语言:将手机的语言切换成 非简体中文 即可。 
第3️⃣步: 
完成上述步骤后即可正常使用tik tok了。
            
注1：每次打开tiktok都需要拔掉手机卡，打开后可以正常插卡使用
  ( iOS 16.4 以上系统 及 平板设备 可以忽略 )
注2：香港、印度、加拿大三个区域因 Tiktok 停止运营，所以连接上述三个区域依旧不能观看`,img:""},{title:"Tiktok安卓办法",content:String.raw`
1️⃣ 拔出手机Sim卡（平板设备可忽略） ;  
2️⃣ 修改系统语言与地区（建议语言和国家一致，英国：英文；日本：日语） ; 
3️⃣ 更改语言： 安卓设备：手机设置→ 语言和时区→ 改成想访问内容的国家和语言 ; 
4️⃣ 修改系统时区（建议时区和国家一致，英国：英文；日本：日语） ; 
5️⃣ 更改时区： 安卓 → 设置 → 系统设置 → 日期和时间 → 时区 ; 
6️⃣ 关闭WLAN 和蓝牙的自动扫描功能，和系统的定位功能 ; 
7️⃣ 打开Cloudupup → 选择线路 → 日本或美国区域连接 → 设置为路由为全局; 
8️⃣ 完成以上设置后重启下设备即可

注：香港、印度、加拿大三个区域因 Tiktok 停止运营，所以连接上述三个区域依旧不能观看`,img:""},{title:"ins等软件风控",content:String.raw`ins、推特、tiktok、pinterest等软件的风控:
1️⃣ios手机确认 shadowrocket软件里第二行全局路由设置代理模式
2️⃣安卓、pc设备软件里规则设置全局模式、global模式
3️⃣如果之前您是台湾线路 以后一直用台湾来访问，不要一会台湾一会美国日本，频繁切换，也不要频繁不同设备不同过来来访问，都会触发风控，误以为你被盗号等
4️⃣长时间不活跃的账号也会容易被平台风控。

解决方法，去平台申诉验证您的邮箱信息等等，修改密码解决。如果不行，重新注册一个，然后遵守1-4来使用。`,img:""},{title:"Whats电脑无法使用",content:String`这里有来自网上很详细的教程
关于whatsAPP在clash中无法使用的情况: 
链接: https://www.bilibili.com/read/cv33297180/`},{title:"Whats无法收验证码",content:String.raw`前往浏览器访问 youtube.com 看看网络是否正常
您可以尝试打开全局模式后
用美国或日本的线路去发送验证码
一切正常且发送验证码成功了但仍无法收到
这可能是您的当地运营商给屏蔽了
您可以选择过段时间试试
或
上网进行查询下网络大神的解决办法
例如: https://www.bilibili.com/read/cv26605529/`,img:""},{title:"GPT无法使用",content:String.raw`GPT对大陆比较严格
需要选择 日本或美国节点
以及 代理软件打开 全局模式

(如果是Shadowrocket 把全局路由 改成 代理模式)`,img:""},{title:"telegram转圈圈",content:String.raw`Telegram 群组不断转圈
说明：此情况是 Telegram 的限制，一天内若访问超过200个群组或者频道（点击打开就算访问，不需要加入），则会被限制24小时，被限制后无法通过链接打开任何群组或者频道

解决办法：只能等待24小时后再尝试访问或加入。
Ps: 以上提示为 Telegram 本身自带问题，并非Cloudupup跳出的错误提示或是限制`,img:""},{title:"telegram连接中",content:String.raw`Telegram 群组显示连接中
说明：若您 Telegram 加入过多群组或是存在大量下载的进程，可能会导致访问时群组上方显示连接中，无法马上看见信息内容

解决办法：找到 Telegram 导航 → 找到到右下角的 “settings” 选项卡 → data and storage  → automatic media download → 将里面的内容全部关闭即可。
Ps: 以上提示为 Telegram 本身自带问题，并非Cloudupup跳出的错误提示或是限制`,img:""},{title:"X收到验证码",content:String.raw`登入帐号时收不到验证码 解决办法：
方法1️⃣：您可以在电脑设备连接快连后在浏览器中访问推特官网登录您的账号，再重新登入手机即可。
方法2️⃣：若以上方法无效，麻烦请您将系统语言更改为英文，再重新尝试一下就能够正常使用了`,img:""}],ios:[{title:"iOS安装教程",content:String.raw`美区ID切换教程及安装小火箭教程:
1️⃣ 先登陆以下官网：`+O+'\n\n2️⃣ 然后在主页 => 找到"iOS/iPad安装(美区共享ID)" 点击打开\n    往下拉可以看到我们官网提供的 美区共享ID\n3️⃣ 在app store登陆美区ID后\n4️⃣ 会弹出安全验证, 选 其他选项 => 不升级\n(请不要在 手机设置 或其他地方登陆)\n❗这里很重要❗\n\n✅成功登陆后后✅\n5️⃣ 搜索shadowrocket（或您想要的其他软件）下载\n6️⃣ 下载完成后退出共享id （因为20分钟后会自动修改密码）\n\nps. 步骤看起来多是因为非常的详细\n    有任何问题随时联系客服',img:""},{title:"(图) iOS安装小火箭",content:"",img:o(806)},{title:"iOS更新订阅",content:String.raw`1️⃣ 关闭Shadowrocket连接。
2️⃣ 将全局路由改为 代理 模式
3️⃣ 删除全部节点线路
4️⃣ 使用苹果自带浏览器(safari)登录以下官网:`+O+'\n5️⃣ 在官网找到"订阅更新", 直接点击后导入\n  (或者 在官网拉到底部找到 Shadowrocket订阅 => 一键导入)\n  ⚠️微信直接打开的官网无法导入, 请使用safari\n\n注: 在选择国家的节点后 , 再打开连接即可使用',img:""},{title:"(图) iOS更新订阅",content:"",img:o(6161)},{title:"美区ID无法登录",content:String.raw`美区id无法登录：
1️⃣如果是安全问题，您选择 => 其他选项 => 不升级
    (请不要直接点击!!继续!!)
2️⃣如果是无法登录, 换个id登陆尝试即可
    (刷新网页即可出现新ID)
3️⃣您需要手机用数据流量(或用手机开热点给ipad连接)
    因为美国app store是苹果内网，对大陆的宽带网络不友好，被中国限制，手机流量4g/5g网络可以
    (关闭代理软件)

ps: 美区共享ID在30分钟内退出(每30分钟更改一次密码)
在30分钟后官网重新登陆刷新一下, 页面就会刷新出新的共享ID 
(使用新美区共享ID重新去登陆试试)`,img:""},{title:"(图) 官网共享ID位置",content:"",img:o(8324)},{title:"iOS更新软件问题",content:String.raw`iOS、iPadOS 如果在更新软件（绝大多数是Shadowrocket）时提示 '你的账户已在App Store和iTunes中被禁用'。
这个错误与你当前登录至App Store的Apple ID无关，这是最初下载软件时使用的账号被禁用了。

目前苹果新规则不允许旧的ID更新软件了, 您卸载重新下载即可
(有担心更新后没有聊天记录的问题, 可以提前备份)`,img:""}],windows:[{title:"(图) upup使用教程",content:"",img:o(2685)},{title:"V2ray更新upup",content:String.raw`推荐使用新的客户端:cloudupup
新客户端更简洁的页面, 更方便的操作
自动化更新, 内含永久客服, 官网账号密码登录即可。

前往官网下载安装即可立刻使用:`+O+"\n\n1️⃣ 进入官网后 往下拉 找到Windows\n2️⃣ 点击 下载地址1 (地址2也可以)\n3️⃣ 下载后安装时选择 所有用户可用!\n4️⃣ 建议安装到默认地址c盘，不要改!",img:""},{title:"upup'连接'无反应",content:String.raw`尝试一下以下办法:
1️⃣关闭并卸载所有安全软件和杀毒软件
2️⃣尝试进入设置 => 关闭防火墙
3️⃣尝试重装软件后 => 重启电脑
    (*把软件安装在C盘后)
4️⃣换个浏览器打开网站, 或 尝试无痕模式
5️⃣打开任务管理器并结束cloudupup进程
    在电脑右下角状态栏右键cloudupup小图标
    并选"重启并清除配置"

如果还是不行, 这边可以给您远程看一下
下载toDesk, 发我 设备代码, 这边帮您排查下
https://www.todesk.com/download.html
(*windows电脑不用设置)
(*mac电脑需要要把三个权限都打开, todesk首页有红色提示的`,img:""},{title:"设置电脑代理",content:String.raw`1️⃣ 进入电脑设置 => 网络与Internet => 代理 => 将代理服务器的
-- 代理ip 设置为: 127️⃣0.0.1
-- 端口   设置为: 7890
2️⃣ 保存成功后 尝试下网络是否恢复正常
  *重新进入第一步, 看看是否保存成功`,img:""},{title:"更改DNS设置",content:"",img:o(3840)},{title:"Clash更新教程",content:String.raw`Clash教程:
1️⃣进入以下官网：`+O+"\n\n2️⃣登陆个人账号后 -> 官网首页右下边 -> 点击 Clash订阅 -> 使用一键导入即可\n  *也可以使用复制订阅手动导入, 看图片教程",img:""},{title:"(图) Clash更新使用教程",content:"",img:o(2634)}],mac:[{title:"(图) upup使用教程",content:"",img:o(2685)},{title:"Mac安装使用upup",content:String.raw`推荐使用新的客户端:cloudupup
新客户端更简洁的页面, 更方便的操作
自动化更新, 内含永久客服, 官网账号密码登录即可。`+O+"\n\n❗如果无法安装根据图片步骤来",img:""},{title:"(图) mac无法安装使用",content:"",img:o(3101)},{title:"mac安装使用clash",content:String.raw`mac电脑安装/更新clash教程:
1️⃣ 先登陆官网后`+O+"\n2️⃣ 往下拉找到mac的clash下载地址, 下载安装\n\n✅安装完成后✅: \n3️⃣ 在官网首页找到clash订阅地址\n      点击clash订阅 => 一键导入即可\n4️⃣ 右键clash后, 出站规则改为 全局模式 以及 global选一个节点\n   *(确保把 设置为系统代理 勾上)",img:""},{title:"(图) mac更新导入clash",content:"",img:o(9457)},{title:"(图) mac打开代理",content:String.raw``,img:o(6350)}],android:[{title:"(图) Android使用教程",content:"",img:o(8601)},{title:"Android安装下载",content:String.raw`使用新的客户端:cloudupup
自动化更新, 内含永久客服, 更简单方便
官网账号密码登录即可`+O+"\n\n1️⃣ 登陆官网后, 找到安卓下载\n2️⃣ 点击下载地址1 (下载地址2也可以)\n3️⃣ 安装即可马上使用"},{title:"安卓无法使用",content:String.raw`安卓无法使用：
1️⃣多个软件冲突，造成权限被其他软件无法使用
解决：删除所有代理软件后，重启手机重装
下载地址: `+O+"\n2️⃣套餐过期\n解决：登陆后查看套餐或者流量是否过期，购买套餐即可\n3️⃣切换4g或者wifi试试，可能是路由器或者本地宽带有一些限制，或者第三方代理\n4️⃣设备时间设置北京时间自动同步即可\n5️⃣卸载反炸app等安全软件\n\n如果还解决不了，请提供更多的信息或截图以及视频，客服会尽快帮您解决！"},{title:"Android海外应用",content:String.raw`可以访问链接进行下载海外应用
打开代理软件才能访问
https://apkpure.com
(以上网址请复制去浏览器打开~)`,img:""},{title:"小米无法安装",content:String.raw`请您根据以下步骤完成设置即可安装成功：
1️⃣ 在手机找到设置 ; 
2️⃣ 找到更多设置后，找到开发者选项 ; 
3️⃣ 关闭开发者选项里的最下面的 "MIUI优化" 高风险功能提醒 ; 
4. 若安装有提示需要输入密码，请输入自己的小米帐号密码即可`,img:""},{title:"华为无法安装",content:String.raw`请您根据以下步骤完成设置即可安装成功：
1️⃣ 找到在手机设置 ; 
2️⃣ 找到 系统和更新 ; 
3️⃣ 找到 纯净模式 ; 
4️⃣ 点击 退出 `,img:""},{title:"华为手机闪退掉线",content:String.raw`一、检查以下设置，避免 Cloudupup 被系统清理
1️⃣ 允许应用后台运行：进入设置 → 搜索进入 应用启动管理 → 关闭 Cloudupup 的 自动管理 开关 → 在弹框中勾选 允许后台活动
2️⃣ 避免应用被电池优化程序清理：进入设置 → 搜索进入电池优化 → 不允许 →选择所有应用 → 找到无法后台运行的应用 → 设置为不允许
3️⃣ 关闭省电模式：进入设置 → 电池 → 关闭 省电模式 开关
4️⃣ 保持设备网络连接：进入设置  → 电池 → 更多电池设置 → 开启 休眠时始终保持网络连接 开关。
5️⃣ 给后台运行的应用加锁：打开应用后 → 进入多任务界面 → 下拉选中的卡片进行加锁 → 然后点击清理图标清理其他不经常使用的应用
6️⃣ 设置开发人员选项中相关开关：进入设置 → 搜索进入 开发人员选项 → 找到 不保留活动 开关后关闭 → 并在 后台进程限制 选择 标准限制`,img:""}]}},getters:{domains:t=>t.domains,allItems(t){return[t.items,t.app,t.ios,t.windows,t.mac,t.android]}},mutations:{},actions:{}});var A=x;const D=(0,e.Ef)(P);D.use(A),D.mount("#app")},8601:function(t,n,o){t.exports=o.p+"img/android_cloudupup.c7c1a5c1.png"},2685:function(t,n,o){t.exports=o.p+"img/cloudupup.8ccb2c2f.png"},806:function(t,n,o){t.exports=o.p+"img/ios_shadowrocket.40c887f9.png"},8324:function(t,n,o){t.exports=o.p+"img/ios_storeid.e460ab2a.png"},6161:function(t,n,o){t.exports=o.p+"img/ios_update.6cef4e57.png"},9457:function(t,n,o){t.exports=o.p+"img/mac_clash.ae75bbb9.png"},3101:function(t,n,o){t.exports=o.p+"img/mac_cloudupup.75a18cf1.png"},6350:function(t,n,o){t.exports=o.p+"img/mac_proxy.c051e0b1.png"},2634:function(t,n,o){t.exports=o.p+"img/win_clash.7f3e476a.png"},3840:function(t,n,o){t.exports=o.p+"img/win_dns.6ed9b91b.png"}},n={};function o(e){var i=n[e];if(void 0!==i)return i.exports;var a=n[e]={exports:{}};return t[e].call(a.exports,a,a.exports,o),a.exports}o.m=t,function(){var t=[];o.O=function(n,e,i,a){if(!e){var r=1/0;for(u=0;u<t.length;u++){e=t[u][0],i=t[u][1],a=t[u][2];for(var c=!0,l=0;l<e.length;l++)(!1&a||r>=a)&&Object.keys(o.O).every((function(t){return o.O[t](e[l])}))?e.splice(l--,1):(c=!1,a<r&&(r=a));if(c){t.splice(u--,1);var s=i();void 0!==s&&(n=s)}}return n}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[e,i,a]}}(),function(){o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,{a:n}),n}}(),function(){o.d=function(t,n){for(var e in n)o.o(n,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){o.p=""}(),function(){var t={524:0};o.O.j=function(n){return 0===t[n]};var n=function(n,e){var i,a,r=e[0],c=e[1],l=e[2],s=0;if(r.some((function(n){return 0!==t[n]}))){for(i in c)o.o(c,i)&&(o.m[i]=c[i]);if(l)var u=l(o)}for(n&&n(e);s<r.length;s++)a=r[s],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(u)},e=self["webpackChunkwork"]=self["webpackChunkwork"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=o.O(void 0,[504],(function(){return o(5417)}));e=o.O(e)})();
//# sourceMappingURL=app.f2502209.js.map