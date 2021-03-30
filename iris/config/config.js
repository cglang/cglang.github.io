var servicehost = document.location.hostname === "localhost" ? "https://localhost:44308" : "https://www.cglang.com:29";

var globalConfig = {
    baseURL: servicehost + "/api",
    sidebarapi: "/iris/config/menu.json",
    oidcConfig: {
        authority: servicehost,
        client_id: "Gardener_App",
        redirect_uri: document.location.origin + "/ddon/pages/oidc/callback.html",
        response_type: "code",
        scope: "offline_access openid profile role email phone Gardener"
    }
}