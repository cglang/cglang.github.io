(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{365:function(s,a,t){"use strict";t.r(a);var e=t(45),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"启动常用的一些容器服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动常用的一些容器服务"}},[s._v("#")]),s._v(" 启动常用的一些容器服务")]),s._v(" "),t("h2",{attrs:{id:"mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[s._v("#")]),s._v(" MySQL")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker run -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(":3306 -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("33060")]),s._v(":33060 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /data/docker/mysql/lib:/var/lib/mysql "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("000000 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--restart"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--name mysql "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-d mysql:latest "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--lower_case_table_names"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])])]),t("ul",[t("li",[t("code",[s._v("-v")]),s._v(" 参数是将主机磁盘目录挂载到容器中的指定目录")]),s._v(" "),t("li",[t("code",[s._v("-e")]),s._v(" 在启动容器时设置一些程序的初始变量,这里是设置 root 密码")]),s._v(" "),t("li",[t("code",[s._v("--restart=always")]),s._v(" 容器随 Docker 一同启动")]),s._v(" "),t("li",[t("code",[s._v("--name mysql")]),s._v(" 设置启动容器的名称")]),s._v(" "),t("li",[t("code",[s._v("-d mysql:latest")]),s._v(" 启动容器时要使用的镜像")]),s._v(" "),t("li",[t("code",[s._v("--lower_case_table_names=1")]),s._v(" 设置 MySQL 大小写为不敏感,即关闭大小写敏感")])]),s._v(" "),t("p",[s._v("可能需要的一些命令")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在容器 mysql 中开启一个交互模式的终端")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it mysql /bin/bash\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 登录 mysql 数据库")]),s._v("\nmysql -uroot -p000000\n\nGRANT ALL PRIVILEGES ON *.* TO "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),s._v(" IDENTIFIED BY "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'000000'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nGRANT ALL PRIVILEGES ON *.* TO "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" IDENTIFIED BY "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'000000'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h2",{attrs:{id:"mariadb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mariadb"}},[s._v("#")]),s._v(" Mariadb")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker run -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(":3306 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /data/docker/mariadb:/var/lib/mysql "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("000000 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--restart"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--name mariadb "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-d mariadb:latest "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--lower_case_table_names"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])])]),t("blockquote",[t("p",[s._v("同 MySql")])]),s._v(" "),t("h2",{attrs:{id:"postgresql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#postgresql"}},[s._v("#")]),s._v(" PostgreSQL")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker run -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5432")]),s._v(":5432 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--restart"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /data/docker/postgresql:/var/lib/postgresql/data "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("POSTGRES_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("000000 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("postgresql "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-d postgresql\n")])])]),t("h2",{attrs:{id:"redis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[s._v("#")]),s._v(" Redis")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker run -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(":6379 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--restart"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /data/docker/redis/conf:/etc/redis "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /data/docker/redis/data:/data\n--name redis "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-d redis "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nredis-server --appendonly "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n")])])]),t("ul",[t("li",[t("code",[s._v("redis-server --appendonly yes")]),s._v(" 在容器执行redis-server启动命令，并打开 redis 持久化配置")])])])}),[],!1,null,null,null);a.default=r.exports}}]);