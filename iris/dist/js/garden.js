window.onload = function () {
    let route = GetRoute();
    let path = GetPathByRoute(route);
    RouterBeforeEach(path);
}

// href 变化时
window.onhashchange = () => {
    let route = GetRoute();
    let path = GetPathByRoute(route);
    RouterBeforeEach(path);
};

// 修改 href
function ChangeRouter(path, kvs) {
    if (kvs)
        location.href = location.href.replace(/#.*/g, "") + "#" + path + "?" + kvs;
    location.href = location.href.replace(/#.*/g, "") + "#" + path
}

function GetRoute() {
    var href = window.location.href;
    let index = href.lastIndexOf("#");
    if (index === -1 || index + 1 === href.length) {
        return "/"
    }
    return href.substring(index + 1, href.length);
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
function RouterBeforeEach(route) {
    if (route === "/") {
        AjaxGet("pages/dashboard/", (html) => {
            $("#app").html(html);
        });
    } else {
        let path = GetPathByRoute(route);
        AjaxGet(path, (html) => {
            $("#app").html(html);
        });
    }
}


var mh = `<li class="nav-header">{headname}</li>`;
var mi = `<li class="nav-item"><a href="javascript:;" class="nav-link" url="{url}" onclick="MenuClick(this)"><i class="nav-icon fas {ico}"></i><p>{name}</p></a></li>`
var mt = `<li class="nav-item"><a href="javascript:;" class="nav-link"><i class="nav-icon fas {ico}"></i><p>{name}<i class="right fas fa-angle-left"></i></p></a><ul class="nav nav-treeview">{link}</ul></li>`

AjaxGet(globalConfig.sidebarapi, (data) => {
    InitMenu(data);
});

function InitMenu(data) {
    data.forEach((element) => {
        var header = element.group ? mh.replace("{headname}", element.group) : "";
        var items = Menu(element.items);

        let box = document.createElement('div');
        let frag = document.createDocumentFragment();
        box.innerHTML = header + items;
        while (box.firstElementChild) {
            frag.appendChild(box.firstElementChild);
        }
        document.getElementById("sidebar").appendChild(frag);
    })
}

function Menu(items) {
    var htmlitems = "";
    items.forEach((item) => {
        if (item.items) {
            html = mt.replace("{url}", item.url).replace("{ico}", item.ico).replace("{name}", item.name);
            htmlitems += html.replace("{link}", Menu(item.items));
        } else {
            htmlitems += mi.replace("{url}", item.url).replace("{ico}", item.ico).replace("{name}", item.name);
        }
    })
    return htmlitems;
}

function MenuClick(a) {
    if (a.getAttribute("class").search("active") === -1) {
        ChangeRouter(a.getAttribute("url"));
        UpdateSidebarStyle(a.getAttribute("url"));
    }
}

function UpdateSidebarStyle(route) {
    $(".nav-link.active").removeClass("active");
    document.querySelector("a[url='" + route + "']").classList.add("active");
}