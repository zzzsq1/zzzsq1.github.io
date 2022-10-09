(function(e){function t(t){for(var l,r,i=t[0],n=t[1],o=t[2],c=0,p=[];c<i.length;c++)r=i[c],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l]);d&&d(t);while(p.length)p.shift()();return u.push.apply(u,o||[]),a()}function a(){for(var e,t=0;t<u.length;t++){for(var a=u[t],l=!0,i=1;i<a.length;i++){var n=a[i];0!==s[n]&&(l=!1)}l&&(u.splice(t--,1),e=r(r.s=a[0]))}return e}var l={},s={app:0},u=[];function r(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=l,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)r.d(a,l,function(t){return e[t]}.bind(null,l));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],n=i.push.bind(i);i.push=t,i=i.slice();for(var o=0;o<i.length;o++)t(i[o]);var d=n;u.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"46e9":function(e,t){e.exports=[{title:"火车车次",rule:/^[GCDZTSPKXLY1-9]\d{1,4}$/,examples:["G1868","D102","D9","Z5","Z24","Z17"]},{title:"手机机身码(IMEI)",rule:/^\d{15,17}$/,examples:["123456789012345","1234567890123456","12345678901234567"]},{title:"必须带端口号的网址(或ip)",rule:/^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/,examples:["https://www.qq.com:8080","127.0.0.1:5050","baidu.com:8001","http://192.168.1.1:9090"],counterExamples:["192.168.1.1","https://www.jd.com"]},{title:"网址(URL)",rule:/^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/,examples:["www.qq.com","https://vuejs.org/v2/api/#v-model","www.qq.99","//www.qq.com","www.腾讯.cs","ftp://baidu.qq","http://baidu.com","https://www.amap.com/search?id=BV10060895&city=420111&geoobj=113.207951%7C29.992557%7C115.785782%7C31.204369&query_type=IDQ&query=%E5%85%89%E8%B0%B7%E5%B9%BF%E5%9C%BA(%E5%9C%B0%E9%93%81%E7%AB%99)&zoom=10.15","360.com:8080/vue/#/a=1&b=2"],counterExamples:["...."]},{title:"统一社会信用代码",rule:/^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/,examples:["91230184MA1BUFLT44","92371000MA3MXH0E3W"]},{title:"统一社会信用代码(宽松匹配)(15位/18位/20位数字/字母)",rule:/^(([0-9A-Za-z]{15})|([0-9A-Za-z]{18})|([0-9A-Za-z]{20}))$/,examples:["91110108772551611J","911101085923662400"]},{title:"迅雷链接",rule:/^thunderx?:\/\/[a-zA-Z\d]+=$/,examples:["thunder://QUEsICdtYWduZXQ6P3h0PXVybjpidGloOjBCQTE0RTUxRkUwNjU1RjE0Qzc4NjE4RjY4NDY0QjZFNTEyNjcyOUMnWlo="]},{title:"ed2k链接(宽松匹配)",rule:/^ed2k:\/\/\|file\|.+\|\/$/,examples:["ed2k://|file|%E5%AF%84%E7%94%9F%E8%99%AB.PARASITE.2019.HD-1080p.X264.AAC-UUMp4(ED2000.COM).mp4|2501554832|C0B93E0879C6071CBED732C20CE577A3|h=5HTKZPQFYRKORN52I3M7GQ4QQCIHFIBV|/"]},{title:"磁力链接(宽松匹配)",rule:/^magnet:\?xt=urn:btih:[0-9a-fA-F]{40,}.*$/,examples:["magnet:?xt=urn:btih:40A89A6F4FB1498A98087109D012A9A851FBE0FC"]},{title:"子网掩码(不包含 0.0.0.0)",rule:/^(254|252|248|240|224|192|128)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(255|254|252|248|240|224|192|128|0)$/,examples:["255.255.255.0","255.255.255.255","255.240.0.0"]},{title:'linux"隐藏文件"路径',rule:/^\/(?:[^/]+\/)*\.[^/]*/,examples:["/usr/ad/.dd","/root/.gitignore","/.gitignore"]},{title:"linux文件夹路径",rule:/^\/(?:[^/]+\/)*$/,examples:["/usr/ad/dd/","/","/root/","/ a a / a / a a /"]},{title:"linux文件路径",rule:/^\/(?:[^/]+\/)*[^/]+$/,examples:["/root/b.ts","/root/abc"]},{title:'window"文件夹"路径',rule:/^[a-zA-Z]:\\(?:\w+\\?)*$/,examples:["C:\\Users\\Administrator\\Desktop","e:\\m\\"]},{title:'window下"文件"路径',rule:/^[a-zA-Z]:\\(?:\w+\\)*\w+\.\w+$/,examples:["C:\\Users\\Administrator\\Desktop\\qq.link","e:\\m\\vscode.exe"]},{title:"股票代码(A股)",rule:/^(s[hz]|S[HZ])(000[\d]{3}|002[\d]{3}|300[\d]{3}|600[\d]{3}|60[\d]{4})$/,examples:["sz000858","SZ002136","sz300675","SH600600","sh601155"]},{title:"大于等于0, 小于等于150, 支持小数位出现5, 如145.5, 用于判断考卷分数",rule:/^150$|^(?:\d|[1-9]\d|1[0-4]\d)(?:\.5)?$/,examples:[150,100.5]},{title:"html注释",rule:/<!--[\s\S]*?-->/g,examples:['\x3c!--<div class="_bubble"></div>--\x3e<div>chenguzhen87</div><div class="_bubble"></div>--\x3e']},{title:"md5格式(32位)",rule:/^[a-fA-F0-9]{32}$/,examples:["21fe181c5bfc16306a6828c1f7b762e8"]},{title:"GUID/UUID",rule:/^[a-f\d]{4}(?:[a-f\d]{4}-){4}[a-f\d]{12}$/i,examples:["e155518c-ca1b-443c-9be9-fe90fdab7345","41E3DAF5-6E37-4BCC-9F8E-0D9521E2AA8D","00000000-0000-0000-0000-000000000000"]},{title:"版本号(version)格式必须为X.Y.Z",rule:/^\d+(?:\.\d+){2}$/,examples:["16.3.10"]},{title:"视频(video)链接地址（视频格式可按需增删）",rule:/^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i,examples:["http://www.abc.com/video/wc.avi"]},{title:"图片(image)链接地址（图片格式可按需增删）",rule:/^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i,examples:["https://www.abc.com/logo.png","http://www.abc.com/logo.png"]},{title:"24小时制时间（HH:mm:ss）",rule:/^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/,examples:["23:34:55"]},{title:"12小时制时间（hh:mm:ss）",rule:/^(?:1[0-2]|0?[1-9]):[0-5]\d:[0-5]\d$/,examples:["11:34:55"],counterExamples:["23:34:55"]},{title:"base64格式",rule:/^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)\s*$/i,examples:["data:image/gif;base64,xxxx=="]},{title:"数字/货币金额（支持负数、千分位分隔符）",rule:/^-?\d+(,\d{3})*(\.\d{1,2})?$/,examples:[100,-.99,3,234.32,-1,900,235.09,"12,345,678.90"]},{title:"数字/货币金额 (只支持正数、不支持校验千分位分隔符)",rule:/(?:^[1-9]([0-9]+)?(?:\.[0-9]{1,2})?$)|(?:^(?:0)$)|(?:^[0-9]\.[0-9](?:[0-9])?$)/,examples:[.99,8.99,666]},{title:"银行卡号（10到30位, 覆盖对公/私账户, 参考[微信支付](https://pay.weixin.qq.com/wiki/doc/api/xiaowei.php?chapter=22_1)）",rule:/^[1-9]\d{9,29}$/,examples:[6234567890,0x565913aff8ea3400]},{title:"中文姓名",rule:/^(?:[\u4e00-\u9fa5·]{2,16})$/,examples:["葛二蛋","凯文·杜兰特","德克·维尔纳·诺维茨基"]},{title:"英文姓名",rule:/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/,examples:["James","Kevin Wayne Durant","Dirk Nowitzki"]},{title:"车牌号(新能源)",rule:/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z](?:((\d{5}[A-HJK])|([A-HJK][A-HJ-NP-Z0-9][0-9]{4}))|[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳])$/,examples:["京AD92035","甘G23459F","京AA92035"]},{title:"车牌号(非新能源)",rule:/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]$/,examples:["京A00599","黑D23908"]},{title:"车牌号(新能源+非新能源)",rule:/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/,examples:["京A12345D","京A00599","京AD92035","甘G23459F","京AA92035"],counterExamples:["宁AD1234555555","浙苏H6F681"]},{title:"手机号(mobile phone)中国(严谨), 根据工信部2019年最新公布的手机号段",rule:/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/,examples:["008618311006933","+8617888829981","19119255642"]},{title:"手机号(mobile phone)中国(宽松), 只要是13,14,15,16,17,18,19开头即可",rule:/^(?:(?:\+|00)86)?1[3-9]\d{9}$/,examples:["008618311006933","+8617888829981","19119255642"]},{title:"手机号(mobile phone)中国(最宽松), 只要是1开头即可, 如果你的手机号是用来接收短信, 优先建议选择这一条",rule:/^(?:(?:\+|00)86)?1\d{10}$/,examples:["008618311006933","+8617888829981","19119255642"]},{title:"日期(宽松)",rule:/^\d{1,4}(-)(1[0-2]|0?[1-9])\1(0?[1-9]|[1-2]\d|30|31)$/,examples:["1990-12-12","1-1-1","0000-1-1"],counterExamples:["2020-00-01"]},{title:"日期(严谨, 支持闰年判断)",rule:/^(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)$/,examples:["1990-12-12","2000-02-29"],counterExamples:["2021-02-29"]},{title:"中国省",rule:/^浙江|上海|北京|天津|重庆|黑龙江|吉林|辽宁|内蒙古|河北|新疆|甘肃|青海|陕西|宁夏|河南|山东|山西|安徽|湖北|湖南|江苏|四川|贵州|云南|广西|西藏|江西|广东|福建|台湾|海南|香港|澳门$/,examples:["浙江","台湾"],counterExamples:["哈尔滨"]},{title:"可以被moment转化成功的时间 YYYYMMDD HH:mm:ss",rule:/^\d{4}([/:-\S])(1[0-2]|0?[1-9])\1(0?[1-9]|[1-2]\d|30|31) (?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/,examples:["2020/01/01 23:59:59","2020-01-01 00:00:00","20200101 11:11:11"],counterExamples:["2020/00/01 23:59:59","2020-01/01 23:59:59","2020-01-01 23:59:61","2020-01-0100:00:00"]},{title:"email(邮箱)",rule:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,examples:["90203918@qq.com","nbilly@126.com","汉字@qq.com"]},{title:"座机(tel phone)电话(国内),如: 0341-86091234",rule:/^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/,examples:["0936-4211235","89076543","010-12345678-1234"]},{title:"身份证号(1代,15位数字)",rule:/^[1-9]\d{7}(?:0\d|10|11|12)(?:0[1-9]|[1-2][\d]|30|31)\d{3}$/,examples:["123456991010193"]},{title:"身份证号(2代,18位数字),最后一位是校验位,可能为数字或字符X",rule:/^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/,examples:["12345619991205131x"]},{title:"身份证号, 支持1/2代(15位/18位数字)",rule:/^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/,examples:["622223199912051311","12345619991205131x","123456991010193"]},{title:"护照（包含香港、澳门）",rule:/(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/,examples:["s28233515","141234567","159203084","MA1234567","K25345719"]},{title:"帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线组合",rule:/^[a-zA-Z]\w{4,15}$/,examples:["justin","justin1989","justin_666"]},{title:"中文/汉字",rule:/^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/,examples:["正则","前端"]},{title:"小数",rule:/^\d+\.\d+$/,examples:["0.0","0.09"]},{title:"只包含数字",rule:/^\d+$/,examples:[12345678]},{title:"html标签(宽松匹配)",rule:/<(\w+)[^>]*>(.*?<\/\1>)?/,examples:['<div id="app"> 2333 </div>','<input type="text">',"<br>"]},{title:"匹配中文汉字和中文标点",rule:/[\u4e00-\u9fa5|\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/,examples:["匹配中文汉字以及中文标点符号 。 ？ ！ ， 、 ； ： “ ” ‘ ' （ ） 《 》 〈 〉 【 】 『 』 「 」 ﹃ ﹄ 〔 〕 … — ～ ﹏ ￥"]},{title:"qq号格式正确",rule:/^[1-9][0-9]{4,10}$/,examples:[903013545,9020304]},{title:"数字和字母组成",rule:/^[A-Za-z0-9]+$/,examples:["james666","haha233hi"]},{title:"英文字母",rule:/^[a-zA-Z]+$/,examples:["Russel"]},{title:"小写英文字母组成",rule:/^[a-z]+$/,examples:["russel"]},{title:"大写英文字母",rule:/^[A-Z]+$/,examples:["ABC","KD"]},{title:"密码强度校验，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符",rule:/^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/,examples:["Kd@curry666"]},{title:"用户名校验，4到16位（字母，数字，下划线，减号）",rule:/^[a-zA-Z0-9_-]{4,16}$/,examples:["xiaohua_qq"]},{title:"ip-v4[:端口]",rule:/^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])(?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$/,examples:["172.16.0.0","172.16.0.0:8080","127.0.0.0","127.0.0.0:998"]},{title:"ip-v6[:端口]",rule:/(^(?:(?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$)|(^\[(?:(?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))\](?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$)/i,examples:["2031:0000:130f:0000:0000:09c0:876a:130b","[2031:0000:130f:0000:0000:09c0:876a:130b]:8080"]},{title:"16进制颜色",rule:/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,examples:["#f00","#F90","#000","#fe9de8"]},{title:"微信号(wx)，6至20位，以字母开头，字母，数字，减号，下划线",rule:/^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/,examples:["github666","kd_-666"]},{title:"邮政编码(中国)",rule:/^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/,examples:["734500","100101"]},{title:"中文和数字",rule:/^((?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])|(\d))+$/,examples:["哈哈哈","你好6啊"]},{title:"不能包含字母",rule:/^[^A-Za-z]*$/,examples:["你好6啊","@¥()！"]},{title:"java包名",rule:/^([a-zA-Z_]\w*)+([.][a-zA-Z_]\w*)+$/,examples:["com.bbb.name"]},{title:"mac地址",rule:/^((([a-f0-9]{2}:){5})|(([a-f0-9]{2}-){5}))[a-f0-9]{2}$/i,examples:["38:f9:d3:4b:f5:51","00-0C-29-CA-E4-66"]},{title:"匹配连续重复的字符",rule:/(.)\1+/,examples:["我我我","112233","11234"]},{title:"数字和英文字母组成，并且同时含有数字和英文字母",rule:/^(?=.*[a-zA-Z])(?=.*\d).+$/,examples:["我a我1我","a对1"]},{title:"香港身份证 ",rule:/^[a-zA-Z]\d{6}\([\dA]\)$/,examples:["K034169(1)"]},{title:"澳门身份证 ",rule:/^[1|5|7]\d{6}\(\d\)$/,examples:["5686611(1)"]},{title:"台湾身份证 ",rule:/^[a-zA-Z][0-9]{9}$/,examples:["U193683453"]},{title:"大写字母，小写字母，数字，特殊符号 `@#$%^&*`~()-+=` 中任意3项密码",rule:/^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]/,examples:["a1@","A1@","Aa@"]},{title:"ASCII码表中的全部的特殊字符",rule:/[\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E]+/,examples:["[",".","^","&3%"]},{title:"正整数，不包含0",rule:/^\+?[1-9]\d*$/,examples:[1231]},{title:"负整数，不包含0",rule:/^-[1-9]\d*$/,examples:[-1231]},{title:"整数",rule:/^(?:0|(?:-?[1-9]\d*))$/,examples:[-1231,123,0],counterExamples:["01"]},{title:"浮点数",rule:/^(-?[1-9]\d*\.\d+|-?0\.\d*[1-9]\d*|0\.0+)$/,examples:["1.23","-1.01","0.00"]},{title:"浮点数(严格)",rule:/^(-?[1-9]\d*\.\d+|-?0\.\d*[1-9])$/,examples:["1.23","-1.01"]},{title:"email(支持中文邮箱)",rule:/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,examples:["90203918@qq.com","nbilly@126.com","啦啦啦@126.com"]},{title:"域名(非网址, 不包含协议)",rule:/^([0-9a-zA-Z-]{1,}\.)+([a-zA-Z]{2,})$/,examples:["www.baidu.com","baidu.com","baidu.com.cn","api.baidu.com","nodejs.org","nodejs.cn"],counterExamples:["http://baidu.com","https://baidu.com","www.百度.com"]}]},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var l=a("2b0e"),s=(a("386d"),function(){var e=this,t=e._self._c;return t("main",[t("article",{staticClass:"fixed"},[t("a",{staticClass:"message",attrs:{onclick:"_hmt.push(['_trackEvent', '交互', '提问'])",href:"https://github.com/any86/any-rule/issues/new",target:"_blank"}},[t("svg",{staticStyle:{"margin-right":"8px"},attrs:{height:"24",width:"24",viewBox:"0 0 16 16",version:"1.1","aria-hidden":"true"}},[t("path",{attrs:{"fill-rule":"evenodd",fill:"#fff",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})]),e._v("\n            提问")])]),t("header",[e._m(0),t("iframe",{staticStyle:{display:"block","margin-top":"15px"},attrs:{src:"https://ghbtns.com/github-btn.html?user=any86&repo=any-rule&type=star&count=true",frameborder:"0",scrolling:"0",width:"170px",height:"20px"}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.keyword,expression:"keyword"}],ref:"searchInput",staticClass:"search-input",attrs:{autofocus:"",placeholder:"搜索关键词, 如'手机'",type:"text"},domProps:{value:e.keyword},on:{keyup:e.search,mouseenter:e.selectSearchInputText,focus:e.selectSearchInputText,input:function(t){t.target.composing||(e.keyword=t.target.value)}}})]),t("article",[0<e.rules.length?t("ul",{staticClass:"list"},e._l(e.rules,(function(a,l){var s=a.title,u=a.rule,r=(a.events,a.examples),i=a.counterExamples;return t("li",{key:s,staticClass:"row",on:{mouseenter:function(t){return e.mouseenterHandler(l)}}},[t("i",{staticClass:"border"}),t("h2",[e._v(e._s(s))]),t("p",{staticClass:"rule"},[t("span",{staticClass:"btn-copy",attrs:{"data-clipboard-text":u}},[e._v("点击复制")]),t("a",{staticClass:"btn-better",attrs:{href:"https://github.com/any86/any-rule/issues/new?title=我有更好的正则: ".concat(s),target:"_blank"}},[e._v("我有更好的正则")]),t("code",{ref:"code",refInFor:!0,staticClass:"javascript"},[e._v(e._s(u))])]),t("section",{staticClass:"verification"},[t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.list[l].value,expression:"list[index].value"}],key:s,ref:"input",refInFor:!0,attrs:{placeholder:e.parseExample(r,i)},domProps:{value:e.list[l].value},on:{compositionstart:function(t){return e.check(l,"blur")},compositionupdate:function(t){return e.check(l,"blur")},compositionend:function(t){return e.check(l,"blur")},blur:function(t){return e.check(l,"blur")},keyup:function(t){return e.check(l,"keyup")},input:function(t){t.target.composing||e.$set(e.list[l],"value",t.target.value)}}}),t("span",{staticClass:"btn-clear",on:{click:function(t){return e.reset(l)}}},[e._v("清空")])]),t("div",{staticClass:"tip"},[void 0!==e.list[l].isOk?[e.list[l].isOk?t("p",{staticClass:"success"},[e._v("通过")]):t("p",{staticClass:"error"},[e._v("不通过")])]:e._e()],2)]),t("section",{staticClass:"trigger"},[t("h3",[e._v("验证时机")]),t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.list[l].events.blur,expression:"list[index].events.blur"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.list[l].events.blur)?e._i(e.list[l].events.blur,null)>-1:e.list[l].events.blur},on:{change:function(t){var a=e.list[l].events.blur,s=t.target,u=!!s.checked;if(Array.isArray(a)){var r=null,i=e._i(a,r);s.checked?i<0&&e.$set(e.list[l].events,"blur",a.concat([r])):i>-1&&e.$set(e.list[l].events,"blur",a.slice(0,i).concat(a.slice(i+1)))}else e.$set(e.list[l].events,"blur",u)}}}),e._v(" blur ")]),t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.list[l].events.keyup,expression:"list[index].events.keyup"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.list[l].events.keyup)?e._i(e.list[l].events.keyup,null)>-1:e.list[l].events.keyup},on:{change:function(t){var a=e.list[l].events.keyup,s=t.target,u=!!s.checked;if(Array.isArray(a)){var r=null,i=e._i(a,r);s.checked?i<0&&e.$set(e.list[l].events,"keyup",a.concat([r])):i>-1&&e.$set(e.list[l].events,"keyup",a.slice(0,i).concat(a.slice(i+1)))}else e.$set(e.list[l].events,"keyup",u)}}}),e._v(" keyup ")])])])})),0):t("p",{attrs:{align:"center"}},[e._v("无数据")])])])}),u=[function(){var e=this,t=e._self._c;return t("a",{staticClass:"github",attrs:{onclick:"_hmt.push(['_trackEvent', '交互', '点击github', '头部'])",href:"https://github.com/any86/any-rule",target:"_blank"}},[t("h1",[e._v("🦕正则大全")])])}],r=(a("0d6d"),a("46e9")),i=a.n(r),n=a("b311"),o=a.n(n),d={name:"app",components:{},data:function(){return Object.freeze(i.a),{token:"",timer:null,keyword:"",rules:i.a,list:i.a.map((function(){return{value:"",isOk:void 0,events:{blur:!0,keyup:!0}}}))}},mounted:function(){var e=new o.a(".btn-copy");this.$on("hook:destroyed",(function(){e.destroy()}));var t=null;e.on("success",(function(e){clearTimeout(t);var a=e.trigger;a.classList.contains("success")&&a.classList.remove("success"),a.classList.add("success"),t=setTimeout((function(){a.classList.remove("success")}),1e3)}))},methods:{parseExample:function(e,t){var a=["例如: ".concat(e.join(", "))];return void 0!==t&&a.push("反例: ".concat(t.join(", "))),a.join(" , ")},search:function(){var e=this;""!==this.keyword?this.rules=this.rules.filter((function(t){var a=t.title;return-1!==a.toLowerCase().indexOf(e.keyword.toLowerCase())})):this.rules=i.a,_hmt.push(["_trackEvent","交互","搜索","关键词",this.keyword])},selectSearchInputText:function(){this.$refs.searchInput.select()},autoFocus:function(e){this.$refs.input[e].focus()},mouseenterHandler:function(e){},reset:function(e){var t=this;this.$nextTick((function(){t.list[e].value="",t.list[e].isOk=void 0}))},check:function(e,t){var a=this.list[e],l=a.events,s=a.value;if(""===s&&this.reset(e),l[t]){var u=this.rules[e].rule,r=this.list[e];r.isOk=u.test(r.value)}"blur"===t&&_hmt.push(["_trackEvent","input框",this.rules[e].title,this.list[e].value])}}},c=d,p=(a("590d"),a("2877")),m=Object(p["a"])(c,s,u,!1,null,"1436a222",null),f=m.exports;l["a"].config.productionTip=!1,"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("./sw.js")})),new l["a"]({render:function(e){return e(f)}}).$mount("#app")},"590d":function(e,t,a){"use strict";a("7e37")},"7e37":function(e,t,a){}});
//# sourceMappingURL=app.4d3ce75f.js.map