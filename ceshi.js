// <reference path="../../EvaluateHtml/JS/jquery-1.9.1.js" />
$(function () {
    $("#res").click(function () {
        var obj = {
            userName: "readearth",
            downTime: "20180828194500",
            moduleEnName: "dRadioFile",
            date: "2018080100-2018080200",
            province: "上海市",
            provinceData: "上海市",
            citySite: "58376,48461",
            citySiteDetail: "[58376]徐汇区,[48461]青浦",
            elementEn: "TEM",
            elementCn: "温度",
            famat: "csv",
            timeInterval: "1天",
            insertTime: "20180828194500",
            downState: "0",
            isDown: "0"
        };
		var strObj = JSON.stringify(obj);
       // var serviceURL = "http://localhost:45990/commonHandler/PostFunctionHandler.ashx";
       var serviceURL = "http://10.228.52.82/BigDataWcf/commonHandler/PostFunctionHandler.ashx";
      //   $.ajax({
      //       url: serviceURL,
      //       data: { "funName": 'downLoadFun', "funParams": strObj },
      //       async: false,
      //       dataType: 'jsonp',
      //       type: "POST",
      //       success: function (data) {
      //           alert("调用ashx成功！");
      //       }, error: function (err) {
      //           alert("error");
      //       }
      //   });
        $.ajax({
            url: serviceURL,
            data: { "funName": 'downLoadFun', "funParams": strObj },
            async:false,
            dataType: 'json',
            type : "POST",
            success : function(data){
                alert(data.resultCode);
            },error: function (err) {
                alert("error");
            }
        });

    });
    
})