
// 创建 axios 实例
const request = axios.create({
    baseURL: globalConfig.baseURL,// API 请求的默认前缀
    timeout: 6000 // 请求超时时间
})

// 请求拦截器
request.interceptors.request.use(function (config) {
    config.headers['Accept-Language'] = 'zh-Hans,en';
    const token = localStorage.getItem("access_token");
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
    } else {
        login();
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});


// 响应拦截器
request.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    console.log("响应错误");
    if (error.response.status === 401) {
        login();
    }
    return Promise.reject(error);
});