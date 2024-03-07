# 维护指南


## 如何在本地构建？

如你所见，本文档使用 [mkdocs](https://www.mkdocs.org/) 构建，并使用了 [material](https://squidfunk.github.io/mkdocs-material/) 第三方主题，你需要在本地依次序安装 [Python](https://python.org)、mkdocs、material 主题。

### Python 安装

官网[安装指导](https://wiki.python.org/moin/BeginnersGuide/Download)已经给出各系统安装方式，根据官网内容安装即可。

### mkdocs、material 主题

均可以通过 [pip](https://pypi.org/project/pip/)进行安装。

```bash
$ pip install mkdocs
$ pip install mkdocs-material
```
conda同理。

具体地，你可以分别查看 [mkdocs 的安装指导](https://www.mkdocs.org/getting-started/#installation) 与 [material 的安装指导](https://squidfunk.github.io/mkdocs-material/getting-started/#installation)。

### 本地构建

你只需要将本仓库拉至本地，后使用 `mkdocs serve` 部署即可。

```bash
# 拉取仓库，两者皆可
$ git clone git@github.com:Hzeristo/SSoCKC.git
$ git clone https://github.com/Hzeristo/SSoCKC.git
# 构建
$ cd ./SSoCKC
$ mkdocs serve
```

## 如何编辑办公主页？

### 网站结构

### 上传文件

### 直接创建和编辑网页

完成以上工作后，请发起PR。管理员会进一步处理。


## 建议

本人水平有限，文档难免有错误以及排布不合理之处。

如果你：

TODO

欢迎提交 Issue 或直接沟通。

非常期待得到你的反馈！