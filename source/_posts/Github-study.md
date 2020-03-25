---
title: Github使用学习
copyright: true
visitor: true
comment_count: true
date: 2020-03-09 19:40:00
id: github-study
tags: github
categories: Coding
description: 正是在学习Github的时候，才知道还可以用来搭博客。
---
> **<font color=#499ae0>注：以后听视频课，一定要同时做笔记</font>**
## 一、常用Linix语句

1. `ls` --> 查看目录中的文件
2. `pwd` --> 显示当前工作路径
3. `mkdir [文件名]` --> 新建一个文件夹
4. `git config --global user.name '[用户名]'` --> 设置用户名
5. `git config --global user.email '[邮箱地址]'` --> 设置用户邮箱
6. `git config --list` --> 查看设置
7. `git init` --> 初始化一个仓库（生成一个`.git`文件夹，用于存储本地仓库的信息）
8. `touch [文件名]` --> 新建一个文件
9. `vim [文件名]` --> 进入vim编辑器进行修改文件
10. 在vim编辑器中，按下`i`进入输入模式，按下`esc`键退出输入模式，输入`:wq`或`:x`可进行保存并退出（或按下快捷键`shift + z z`）
11. `cat [文件名]`  --> 从第一个字节开始正向查看文件的内容 
12. `git status` --> 查看当前所有文件的状况（所在的位置，是工作区还是暂存区）
13. `git diff` --> 对比查看工作区被跟踪的文件的修改详情（ 只有在版本区中存在的文件才是被跟踪文件 ）
14. `git add [文件名]` --> 把文件从工作区添加到暂存区
15. `git reset -- [文件名]`  --> 撤回暂存区中对某文件的修改（若不写文件名，则全部撤回）
16. `git rm [文件名]` --> 从暂存区中删除文件
17. `git commit -m '[提交描述]'` --> 把文件从暂存区提交到本地仓库
18. `git push` --> 将文件从本地仓库同步到Github
19. `rm -f file1` 删除一个叫做 ‘file1′ 的文件’ 
20. `rm -rf dir1` 删除一个叫做 ‘dir1’ 的目录并同时删除其子文件
21. `git clone [仓库地址] `  --> 将远程仓库复制到本地
22. `git log` --> 查看版本区(本地仓库)的历史提交记录（倒序）
    `git log --reverse`    -->  查看时间正序排列的历史提交信记录
    `git log [分支名]`   --> 查看某分支的提交历史，不写分支名查看当前所在分支
    `git log --oneline`   --> 一行显示提交历史
    `git log -n`   --> 其中 n 是数字，查看最近 n 个提交
    `git log --author [贡献者名字]`   --> 查看指定贡献者的提交记录
    `git log --graph  --> ` 图示法显示提交历史
23. `git reflog` --> 查看所有版本记录（可用于历史记录回滚）
24. `git reset --hard [历史版本号]` --> 回滚到历史某一个版本
25. `git branch ` -->  查看本地全部分支信息；
	`git branch -r` --> 查看远程所有分支；
    `git branch -a` --> 查看本地和远程所有分支（仅显示分支名）
    `git branch -v` --> 显示本地分支名、版本号、本地分支与远程分支的提交同步状态、最新的提交信息
    `git branch -vv` --> 比上一个多显示出远程分支名

<div align=center><img src="https://i.loli.net/2020/03/13/xP9R34UV7Xadj5k.png" width="100%" height="100%"></div>

运行后有三行信息，依次说明:

- 第一行，开头的星号表示**当前所在本地分支**，绿色的 master 是分支名，之所以是绿色，也是因为它是当前所在分支。后面第二项是版本号，第三项中括号里面蓝色的字，表示此分支跟踪的远程分支的名字，当然啦，这也是克隆远程仓库到本地时的默认设置 -- 创建 master 分支并自动跟踪远程同名分支；冒号后面的 ahead 1 表示**本地分支<font color=#499ae0>领先</font>**其跟踪的**远程分支**一个提交。最后一项是提交时填写的备注信息。
- 第二行，是 Git 指针信息，它指向远程仓库的 master 分支，这行信息暂不重要。
- 第三行，远程分支信息，详见第一行的解释。（remote分支名、版本号、提交信息）

 <font color=#499ae0>**PS：**</font> github中README.md关联图片的图片地址是有一定的格式的，其格式如下： 
` https://github.com/用户名/repository仓库名/raw/分支名master/图片文件夹名称/.png or.jpg `

26. `git reset --soft HEAD^` --> 撤销最近的一次提交，将修改还原到暂存区。`--soft` 表示软退回，对应的还有 `--hard` 硬退回，后面会讲到，`HEAD^` 表示撤销一次提交，`HEAD^^` 表示撤销两次提交，撤销 n 次可以简写为 `HEAD~n`。
27. ` git remote -v  ` -->  查看当前远程的版本 
28. `git fetch origin master` --> 从远程的origin仓库的master分支下载代码到本地的origin master 
29. `git pull origin` --> 
30. `git merge origin master ` --> 
31. `git merge --abort` --> Undo a merge
32. `git push origin ` --> 

**<font color=#499ae0>注：`git fetch`、`git merge`、`git pull` 三者之间的区别与联系</font>**

- `git fetch` and `git pull`  both are used to **download** new data from a remote repository. 
-  `git fetch` really only downloads new data from a remote repository - but it doesn't integrate any of this new data into your working files. Fetch is great for getting a fresh view on all the things that happened in a remote repository. 
-  `git pull`, in contrast, is used with a different goal in mind: to update your current HEAD branch with the latest changes from the remote server. This means that pull not only downloads new data; it also directly **integrates** it into your current working copy files. This has a couple of consequences:
  - Since `git pull` tries to merge remote changes with your local ones, a so-called "merge conflict" can occur.  
  - Like for many other actions, it's highly recommended to start a `git pull` only with a clean working copy. This means that you should *not* have any uncommitted local changes before you pull.
- Dealing with "Merge Conflicts". 

## 二、Git初始化及仓库创建和操作

1. 基本信息设置 （用户名+邮箱）
2. 初始化一个新的Git仓库

## 三、向仓库中添加文件

1. 新建文件
2. 将文件从工作区添加到暂存区
3. 将文件从暂存区提交到仓库

## 四、删除文件

1. 删除文件：`rm -rf [文件名]`
2. 删除暂存区中的文件：`git rm [文件名]`
3. 将删除动作提交到本地仓库：`git coommit -m '[描述]'`

## 五、从远程仓库获取最新代码合并到本地分支

这里共展示两类三种方式。（参考自[hanchao5272](https://blog.csdn.net/hanchao5272/article/details/79162130)）

### 1.git pull：获取最新代码到本地，并自动合并到当前分支
命令展示

```shell
//查询当前远程的版本
$ git remote -v
//直接拉取并合并最新代码
$ git pull origin master [示例1：拉取远端origin/master分支并合并到当前分支]
$ git pull origin dev [示例2：拉取远端origin/dev分支并合并到当前分支]
```

分析：不推荐这种方式，因为是直接合并，无法提前处理冲突。

### 2.git fetch + merge: 获取最新代码到本地，然后手动合并分支
#### 2.1.额外建立本地分支
代码展示

```shell
//查看当前远程的版本
$ git remote -v 
//获取最新代码到本地临时分支(本地当前分支为[branch]，获取的远端的分支为[origin/branch])
$ git fetch origin master:master1  [示例1：在本地建立master1分支，并下载远端的origin/master分支到master1分支中]
$ git fetch origin dev:dev1[示例1：在本地建立dev1分支，并下载远端的origin/dev分支到dev1分支中]
//查看版本差异
$ git diff master1 [示例1：查看本地master1分支与当前分支的版本差异]
$ git diff dev1    [示例2：查看本地dev1分支与当前分支的版本差异]
//合并最新分支到本地分支
$ git merge master1    [示例1：合并本地分支master1到当前分支]
$ git merge dev1   [示例2：合并本地分支dev1到当前分支]
//删除本地临时分支
$ git branch -D master1    [示例1：删除本地分支master1]
$ git branch -D dev1 [示例1：删除本地分支dev1]
```

备注：不推荐这种方式，还需要额外对临时分支进行处理。

#### 2.2.不额外建立本地分支
代码展示

```shell
//查询当前远程的版本
$ git remote -v
//获取最新代码到本地(本地当前分支为[branch]，获取的远端的分支为[origin/branch])
$ git fetch origin master  [示例1：获取远端的origin/master分支]
$ git fetch origin dev [示例2：获取远端的origin/dev分支]
//查看版本差异
$ git log -p master..origin/master [示例1：查看本地master与远端origin/master的版本差异]
$ git log -p dev..origin/dev   [示例2：查看本地dev与远端origin/dev的版本差异]
//合并最新代码到本地分支
$ git merge origin/master  [示例1：合并远端分支origin/master到当前分支]
$ git merge origin/dev [示例2：合并远端分支origin/dev到当前分支]
```

备注：推荐这种方式

## 六、把本地仓库信息提交到远程仓库

````shell
// 建立本地仓库和远程仓库的连接
// 查看本地仓库与哪些远程仓库有连接
$ git remote -v
// 让本地仓库与远程仓库新建一个连接（origin是随便起的一个连接名，一般使用这个）
$ git remote add origin [Git远程仓库地址]
// 关闭连接
$ git remote rm origin
````

```shell
//提交之前最好先拉取(origin:连接名；master:主分支)
$ git pull origin master
//把本地代码提交到远程仓库
$ git push origin master
```

```shell
$ git clone [远程Git仓库地址] [别名(可不设置，默认为仓库名)]
//真实项目开发流程：
1. 组长或负责人先创建中央仓库（增加协作者）
2. 小组成员基于git clone，把远程仓库及其默认内容克隆到本地一份。
3. 每个组员写完自己的程序后，基于"git add ./git commit -m 'info'/git push",提交自己的代码。
```

* `git clone`解决了三件事：
  * 初始化一个本地仓库 `git init`
  * 与远程仓库保持关联 `git remote add`
  * 把远程仓库默认内容拉取到本地 `git pull`

## 七、Github Pages 搭建网站

### 1. 个人站点

访问：https://用户名.github.io

### 2. 搭建步骤

1. 创建个人站点 --> 新建仓库（注：仓库名必须是【用户名.github.io】）
2. 在仓库下新建index.html的文件，即可。

### 附：参考搭建教程

1. [超全面！如何用 GitHub 从零开始搭建一个博客 ？](https://www.cxyxiaowu.com/6407.html)
2. [Hexo博客+Next主题深度优化与定制](https://hasaik.com/posts/ab21860c.html)
3. [hexo-Next主题美化](lyxf.live/posts/2063/)
4. [基于hexo博客自定义页面样式](www.cduyzh.com/hexo-settings-3/)
5. [Hexo Next主题添加访客统计](https://blog.csdn.net/baidu_34310405/article/details/102665373)



