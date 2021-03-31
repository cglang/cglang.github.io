
// href 变化时
window.onhashchange = function () {
    let href = window.location.href;
    let index = href.lastIndexOf("#");
    let route = href.substring(index + 1, href.length);
    //let menu = document.querySelector("a[url='" + href + "']");    
    let path = GetPathByRoute(route);
    RouterBeforeEach(path);
};

// 修改 href
function ChangeRouter(path, kvs) {
    location.href = location.href.replace(/#.*/g, "") + "#" + path + "?" + kvs;
}

// 通过路由找到path
function GetPathByRoute(route) {
    //TODO: 这里应改根据路由去找到页面
    return route;
}

// 获取指定的页面
function AjaxGet(pageurl, then) {
    var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            try {
                then(JSON.parse(xmlhttp.responseText));
            } catch {
                then(xmlhttp.responseText);
            }
        }
    }
    xmlhttp.open("GET", pageurl, true);
    xmlhttp.send();
}


// 路由拦截器
function RouterBeforeEach(path) {
    AjaxGet(path, (html) => {
        document.getElementById("app").innerHTML = html;
    });
}