# [chatopera-sample-node](https://github.com/chatopera/chatopera-sample-node)

企业聊天机器人-Node.js 端示例程序

本教程介绍如何使用 Chatopera 机器人开发者平台的[Node.js SDK](https://www.npmjs.com/package/@chatopera/sdk)与机器人进行集成，阅读本教程需要 20 分钟时间。

[获取源码](#获取源码)

[安装](#安装)

[创建机器人](#创建机器人)

[执行程序](#执行程序)

[帮助](#帮助)

[更多 SDK](#更多SDK)

[开源许可协议](#开源许可协议)

## 获取源码

```
git clone https://github.com/chatopera/chatopera-sample-node.git
```

## 安装

```
cd chatopera-sample-node
npm install
```

## 创建机器人

<p align="center">
  <b>登录 Chatopera 聊天机器人平台</b><br>
  <a href="http://bot.chatopera.com/" target="_blank">
      <img src="https://user-images.githubusercontent.com/3538629/48039685-e35fcc00-e1b0-11e8-81a9-f26d744fcd1d.png" width="800">
  </a>
</p>

### 点击“立即使用”

第一登录输入“邮箱”和“密码”，点击“回车键”，完成账户创建。

### 创建聊天机器人

点击“创建机器人”，并填入下面各项：

| 项目       | 值         | 描述                                           |
| ---------- | ---------- | ---------------------------------------------- |
| 机器人名称 | 小松       | 机器人的名字                                   |
| 描述       | 机器人示例 | 机器人的描述                                   |
| 语言       | zh_CN      | 机器人的语言，目前支持中文(zh_CN)和英文(en_US) |

【提示】其它项如兜底回复，问候语可以在创建后，设置页面修改。

### 下载知识库文件

下载知识库示例文件[保全作业中常见问题.xlsx](https://github.com/chatopera/chatbot-sales/raw/master/%E4%BF%9D%E9%99%A9/faq/%E4%BF%9D%E5%85%A8%E4%BD%9C%E4%B8%9A%E4%B8%AD%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.xlsx)，保存文件名为*保全作业中常见问题.xlsx*。

### 导入知识库

<p align="center">
  <b>上传知识库文件</b><br>
  <a href="http://bot.chatopera.com/" target="_blank">
      <img src="https://user-images.githubusercontent.com/3538629/48044619-c97db380-e1c7-11e8-841b-b00ca6e29185.png" width="500">
  </a>
</p>

选择*保全作业中常见问题.xlsx*，这时，会显示问答对列表，点击“提交”，在进度条完成后，知识库导入成功。

### 测试知识库

<p align="center">
  <b>知识库测试窗口</b><br>
  <a href="http://bot.chatopera.com/" target="_blank">
      <img src="https://user-images.githubusercontent.com/3538629/48043965-5161be80-e1c4-11e8-99c6-53f36fc5e29a.png" width="300">
  </a>
</p>

**输入：** 保全作业中常见问题

确认得到回复。

### 获取*ClientId*和*Secret*

集成机器人服务的方式是通过 SDK，每个机器人实例需要通过*ClientId*和*Secret*初始化，完成认证和授权。打开机器人【设置】页面，拷贝*ClientId*和*Secret*。

<p align="center">
  <b>显示Secret</b><br>
  <a href="http://bot.chatopera.com/" target="_blank">
      <img src="https://user-images.githubusercontent.com/3538629/48044641-f4680780-e1c7-11e8-889e-01df6b0cbd7f.png" width="800">
  </a>
</p>

## 执行程序

假设您已经准备好**ClientId**和**Secret**了，进入项目路径然后执行下面命令。

```
cd chatopera-sample-node
node index.js *ClientId* *Secret*
```

如果想查看机器人平台返回结果的日志：

```
cd chatopera-sample-node
DEBUG=chatopera:sample:node node index.js *ClientId* *Secret*
```

<p align="center">
  <b>与机器人对话</b><br>
  <a href="http://bot.chatopera.com/" target="_blank">
      <img src="https://user-images.githubusercontent.com/3538629/48044246-edd89080-e1c5-11e8-9a28-ebb65dc496da.png" width="800">
  </a>
</p>

## 程序介绍

[index.js](https://github.com/chatopera/chatopera-sample-node/blob/master/index.js)是主要程序脚本，核心如下：

```
var Chatopera = require('@chatopera/sdk'); # 引入SDK
var client = new Chatopera(clientId, secret); # 创建机器人实例
client.conversation('用户唯一标识', '用户输入').then( // 返回值为 Promise 类型
    (resp) => {
        resp.string // 机器人回复
    },
    (err) =>  {
        console.log(err) // 异常返回
    }
);
```

更多接口介绍请访问[SDK 文档](https://www.npmjs.com/package/@chatopera/sdk)。

## 帮助

获得命令提示信息。

```
node index.js --help
```

## 更多 SDK

<p align="center">
  <b>集成面板</b><br>
  <a href="http://bot.chatopera.com/" target="_blank">
      <img src="https://user-images.githubusercontent.com/3538629/48044669-1e212e80-e1c8-11e8-918c-8e6fdf4e95c0.png" width="800">
  </a>
</p>

## 开源许可协议

Copyright (2018) [北京华夏春松科技有限公司](https://www.chatopera.com/)

[Apache License Version 2.0](./LICENSE)

Copyright 2017-2018, [北京华夏春松科技有限公司](https://www.chatopera.com/). All rights reserved. This software and related documentation are provided under a license agreement containing restrictions on use and disclosure and are protected by intellectual property laws. Except as expressly permitted in your license agreement or allowed by law, you may not use, copy, reproduce, translate, broadcast, modify, license, transmit, distribute, exhibit, perform, publish, or display any part, in any form, or by any means. Reverse engineering, disassembly, or decompilation of this software, unless required by law for interoperability, is prohibited.

[![chatoper banner][co-banner-image]][co-url]

[co-banner-image]: https://user-images.githubusercontent.com/3538629/42383104-da925942-8168-11e8-8195-868d5fcec170.png
[co-url]: https://www.chatopera.com
