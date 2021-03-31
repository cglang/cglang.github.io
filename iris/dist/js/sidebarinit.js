
var mh = `<li class="nav-header">{headname}</li>`;
var mi = `<li class="nav-item"><a href="javascript:;" class="nav-link" url="{url}" onclick="MenuClick(this)"><i class="nav-icon fas {ico}"></i><p>{name}</p></a></li>`
var mt = `<li class="nav-item"><a href="javascript:;" class="nav-link"><i class="nav-icon fas {ico}"></i><p>{name}<i class="right fas fa-angle-left"></i></p></a><ul class="nav nav-treeview">{link}</ul></li>`

window.onload = () => {
    AjaxGet(globalConfig.sidebarapi, (data) => {
        InitMenu(data);
    });
}

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
        // 更换样式
        $(".nav-link.active").removeClass("active");
        a.classList.add("active");


    }
}

function SetPage(data) {
    document.getElementById("pageHeader").innerText = data.header;
    document.title = data.title;
    $("#app").html(data.html);
}