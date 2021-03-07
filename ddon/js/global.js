
function SelectInit(id, value) {
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
            resData.items.forEach(({ value, text }) => {
                var frameOption = document.createElement("option");
                frameOption.value = value;
                frameOption.innerHTML = text;
                document.getElementById(id).appendChild(frameOption);
            });
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
    $("#warning").html("<strong>警告:</strong>" + text);
    $("#warning").addClass("show");
    setTimeout(function () {
        $("#warning").removeClass("show");
    }, 1000);
}

function ShowSuccess(text) {
    let ac = document.getElementById("alert-container");
    if (!ac) {
        let elementDiv = document.createElement("div");
        elementDiv.id = "alert-container";
        elementDiv.style = "position:absolute;width:300px;right:30px;top:20px;"
        document.body.appendChild(elementDiv);
        ac = document.getElementById("alert-container");
    }

    let alert = document.createElement("div");
    alert.className = "alert alert-success alert-dismissible fade show"
    alert.innerHTML = "<strong>成功：</strong>" + text;
    ac.appendChild(alert);
    setTimeout(function () {
        ac.removeChild(alert);
    }, 1500);
}
