
/**
 * 用于初始化下拉框
 */

// 用固定格式数据初始化下拉框
function SelectInit(id, value) {
    document.getElementById(id).innerHTML = "";

    value.forEach(({ value, text }) => {
        var frameOption = document.createElement("option");
        frameOption.value = value;
        frameOption.innerHTML = text;
        document.getElementById(id).appendChild(frameOption);
    });
}

// 请求 url 获取数据初始化下拉框
function SelectInitByUrl(url, id) {
    request.get(url)
        .then(function (resData) {
            SelectInit(id, resData.items);
        })
        .catch(function (error) {
            console.error(`下拉框Id:${id},请求赋值错误;`, error);
        });
}

/**
 * 处理ajax 要发送的数据
 */

// 获取要发送的数据 根据 get post 获取不同格式数据
function GetSeedData(type, value) {
    switch (type) {
        case "get":
            return value;
        case "post":
            return Qs.parse(value);
        case "put": break;
        case "delete": break;
    }
}

/**
 * 显示提示信息
 */

// 显示警告框
function ShowWarning(text) {
    ShowAlert("warning", text);
}

// 显示成功框
function ShowSuccess(text) {
    ShowAlert("succes", text);
}

// 根据自定义的提示
function ShowAlert(type, text) {
    let ac = document.getElementById("alert-container");

    if (!ac) {
        let elementDiv = document.createElement("div");
        elementDiv.id = "alert-container";
        elementDiv.style = "position:absolute;width:300px;right:30px;top:20px;"
        document.body.appendChild(elementDiv);
        ac = document.getElementById("alert-container");
    }
    let alert = document.createElement("div");

    switch (type) {
        case "succes":
            alert.innerHTML = "<strong>成功：</strong>" + text;
            alert.className = "alert alert-success alert-dismissible fade show";
            break;
        case "warning":
            alert.innerHTML = "<strong>警告：</strong>" + text;
            alert.className = "alert alert-warning alert-dismissible fade show";
            break;
        default:
            alert.innerHTML = "<strong>成功：</strong>" + text;
            alert.className = "alert alert-success alert-dismissible fade show";
            break;
    }
    ac.appendChild(alert);
    setTimeout(function () {
        ac.removeChild(alert);
    }, 2000);
}


/**
 * 获取URL中的参数名及参数值的集合
 * 示例URL:"http://test/getIndex/indexRequest.html?uid=admin&passWord=123456&fid=1314&name=阿豪";
 * @param {[string]} urlStr [当该参数不为空的时候，则解析该url中的参数集合]
 * @return {[string]}       [参数集合]
 */
 function GetRequest(urlStr) {
    if (typeof urlStr == "undefined") {
        // 获取url中"?"符后的字符串
        var url = decodeURI(location.search);
    } else {
        var url = "?" + urlStr.split("?")[1];
    }
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

/**
 * 通过参数名获取url中的参数值
 * 示例URL:"http://test/getIndex/indexRequest.html?uid=admin&passWord=123456&fid=1314&name=阿豪";
 * @param  {[string]} queryName [参数名]
 * @return {[string]}           [参数值]
 */
 function GetQueryValue(queryName) {
    debugger;
    var query = decodeURI('window.location.search'.substring(1));
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == queryName) {
            return pair[1];
        }
    }
    return null;
}