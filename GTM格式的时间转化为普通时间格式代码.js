/**
 * 将GTM格式的时间转化为指定的普通时间格式
 * @param {new Date()} date  GMT格式的时间
 * @param {String} fmt  想要转化的时间格式
 */
function formatDate (date,fmt) { //author: meizz
    var o = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "H+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
    }
    
    
    var time1 = formatDate (new Date(),"yyyy-MM-dd HH:mm:ss");
    var time2 = formatDate (new Date(),"yyyy-MM-dd");
    var time3 = formatDate (new Date(),"yyyy-MM");
    var time4 = formatDate (new Date(),"yyyy");
    console.log(time1);
    console.log(time2);
    console.log(time3);
    console.log(time4);
