
function SelectInit(id, value) {
    document.getElementById(id).innerHTML = "";

    value.forEach(({ value, text }) => {
        var frameOption = document.createElement("option");
        frameOption.value = value;
        frameOption.innerHTML = text;
        document.getElementById(id).appendChild(frameOption);
    });
}

function SelectInitByUrl(url, id) {
    request.get(url)
        .then(function (resData) {
            SelectInit(id, resData.items);
        })
        .catch(function (error) {
            console.error(`下拉框Id:${id},请求赋值错误;`, error);
        });
}

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

function ShowWarning(text) {
    ShowAlert("warning", text);
}

function ShowSuccess(text) {
    ShowAlert("succes", text);
}

function ShowAlert(type, text) {
    let ac = document.getElementById("alert-container");

    if (!ac) {
        let elementDiv = document.createElement("div");
        elementDiv.id = "alert-container";
        elementDiv.style = "position:absolute;width:300px;right:30px;top:80px;"
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
