var mgr = new Oidc.UserManager(globalConfig.oidcConfig);

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
