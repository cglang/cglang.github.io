
var config = {
    authority: "https://localhost:44308",
    client_id: "Gardener_App",
    redirect_uri: "http://garden.localhost/ddon/pages/oidc/callback.html",
    response_type: "code",
    scope: "offline_access Gardener"
};
var mgr = new Oidc.UserManager(config);

function login() {
    mgr.signinRedirect();
}

function logout() {
    mgr.signoutRedirect();
}

if (!localStorage.getItem("access_token")) {
    login();
} else {
    // console.log("有token");
}
