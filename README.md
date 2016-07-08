# react_test实验笔记
###NO.1初始化项目,并建立远程仓库
####第一步:初始化git
1.新建一个仓库(repositories)<br>
2.勾上Initialize this repository with a README复选框<br>
3.点击Create repository按钮<br>
####第二步:拉取github上的代码到本地
1.新建一个本地仓库(文件)<br>
2.打开本地命令行窗口,到本地仓库<br>
3.使用 git clone https://github.com/Ramosy/react_test.git<br>
4.用编辑器打开这个本地仓库即可<br>
####第三步:上传本地代码到远程仓库
1.建立.gitignore文件,忽略不上传的文件或者目录
2.用webstorm的VCS一键上传(多人协作，请先VCS下载避免冲突)<br>
3.使用命令行上传,这里不再叙述，请自行google或百度<br>
####第四步:建立nodejs服务器，这里使用koa框架
1.初始化package.json    npm init
2.npm install koa@next
3.启动koa参见https://github.com/koajs/koa/tree/v2.x
####第五步:学习react基础
1.学习阮一峰大神的教程https://github.com/ruanyf/react-demos
2.每一个demo自己先仿照写，并且理解后融会贯通

####通过官网学习，使用webpack+koa使用react
1.react官网https://facebook.github.io/react/docs