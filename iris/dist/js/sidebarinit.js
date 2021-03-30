
var mh = `<li class="nav-header">{headname}</li>`;
var mi = `<li class="nav-item"><a href="javascript:;" class="nav-link" url="{url}" onclick="MenuClick(this)"><i class="nav-icon fas {ico}"></i><p>{name}</p></a></li>`
var mt = `<li class="nav-item"><a href="javascript:;" class="nav-link"><i class="nav-icon fas {ico}"></i><p>{name}<i class="right fas fa-angle-left"></i></p></a><ul class="nav nav-treeview">{link}</ul></li>`
$(function () {
    $.get(globalConfig.sidebarapi, function (data) {
        InitMenu(data)
    });
});

function InitMenu(data) {
    data.forEach((element) => {
        var header = element.group ? mh.replace("{headname}", element.group) : "";
        var items = Menu(element.items);
        $("#sidebar").append(header + items);
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
        // 更换样式
        $(".nav-link.active").removeClass("active");
        a.classList.add("active");

        let pageurl = a.getAttribute("url");
        let pagedata = localStorage.getItem(pageurl);
        if (pagedata) {
            let data = JSON.parse(pagedata);
            SetPage(data);
            console.log("走的缓存");
        } else {
            $.get(pageurl, (html) => {
                let data = {
                    title: a.getElementsByTagName("p")[0].innerText,
                    header: a.getElementsByTagName("p")[0].innerText,
                    html: html
                }
                localStorage.setItem(pageurl, JSON.stringify(data));
                SetPage(data);
            });
        }
    }
}

function SetPage(data) {
    document.getElementById("pageHeader").innerText = data.header;
    document.title = data.title;
    $("#app").html(data.html);
}