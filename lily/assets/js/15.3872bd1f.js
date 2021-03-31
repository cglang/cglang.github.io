(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{368:function(s,a,t){"use strict";t.r(a);var e=t(45),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"使用-ssh-远程连接登录-linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-ssh-远程连接登录-linux"}},[s._v("#")]),s._v(" 使用 SSH 远程连接登录 Linux")]),s._v(" "),t("h2",{attrs:{id:"使用密码的方式登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用密码的方式登录"}},[s._v("#")]),s._v(" 使用密码的方式登录")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" remote_username@server_ip_address\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输入密码之后可进行登录")]),s._v("\n")])])]),t("h2",{attrs:{id:"配置-ssh-连接免密码登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-ssh-连接免密码登录"}},[s._v("#")]),s._v(" 配置 SSH 连接免密码登录")]),s._v(" "),t("h3",{attrs:{id:"生成秘钥对"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成秘钥对"}},[s._v("#")]),s._v(" 生成秘钥对")]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("ssh-keygen")]),s._v(" 命令生成秘钥对")]),s._v(" "),t("p",[t("strong",[s._v("常用的命令")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ssh-keygen -f "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"file_name"')]),s._v("\nssh-keygen -t rsa -b "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" -C "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"your_email@domain.com"')]),s._v(" -f "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"file_name"')]),s._v("\n")])])]),t("h3",{attrs:{id:"为远程主机配置公钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为远程主机配置公钥"}},[s._v("#")]),s._v(" 为远程主机配置公钥")]),s._v(" "),t("p",[t("strong",[s._v("1. 使用 "),t("code",[s._v("ssh-copy-id")]),s._v(" 命令")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ssh-copy-id remote_username@server_ip_address\n")])])]),t("p",[t("strong",[s._v("2. 手动配置")])]),s._v(" "),t("ol",[t("li",[s._v("首先先连接远程主机。")]),s._v(" "),t("li",[s._v("使用文本编辑工具打开 "),t("code",[s._v("~/.ssh/authorized_keys")])]),s._v(" "),t("li",[s._v("将生成的 "),t("code",[s._v("*.pub")]),s._v(" 公钥文件的内容复制到 "),t("code",[s._v("authorized_keys")]),s._v(" 文件内，可以配置多个公钥，每行一个公钥。")])]),s._v(" "),t("h3",{attrs:{id:"使用私钥远程连接主机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用私钥远程连接主机"}},[s._v("#")]),s._v(" 使用私钥远程连接主机")]),s._v(" "),t("p",[s._v("使用指定私钥进行登录")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"private_key"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user_name@server_ip"')]),s._v("\n")])])]),t("p",[s._v("可编辑 "),t("code",[s._v("~/.ssh/config")]),s._v(" 添加下列让 ssh 默认使用指定的私钥进行登录。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("IdentityFile "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("私钥位置"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 例如")]),s._v("\nIdentityFile ~/.ssh/private_key\n")])])]),t("h2",{attrs:{id:"可能会遇到的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可能会遇到的问题"}},[s._v("#")]),s._v(" 可能会遇到的问题")]),s._v(" "),t("h3",{attrs:{id:"权限问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#权限问题"}},[s._v("#")]),s._v(" 权限问题")]),s._v(" "),t("p",[t("code",[s._v("authorized_keys")]),s._v(" 文件需要严格的权限，查看此文件的权限是不是 "),t("code",[s._v("600")]),s._v("，不是的话重新设置。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("700")]),s._v(" ~/.ssh\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),s._v(" ~/.ssh/authorized_keys\n")])])]),t("h3",{attrs:{id:"ssh-配置文件问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssh-配置文件问题"}},[s._v("#")]),s._v(" ssh 配置文件问题")]),s._v(" "),t("p",[s._v("老版本的 ssh 需要进行配置，配置 "),t("code",[s._v("/etc/ssh/sshd_config")]),s._v("，将下列两项取消注释。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("PubkeyAuthentication yes\nAuthorizedKeysFile     .ssh/authorized_keys .ssh/authorized_keys2\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);