## 先上效果图

![demo.gif](https://upload-images.jianshu.io/upload_images/1339729-acf6038470db895e.gif?imageMogr2/auto-orient/strip)
源码已上传 github

### 思路

使用两张图片拼起来，数字就是
0、1、2、3、4、5、6、7、8、9、0、1、2、3、4、5、6、7、8、9 1.使用偏移量移动化的方式往上偏移 2.当偏移的数字大于上次的数组就正常偏移 3.第二次数字小于上次的数字，就要持续往上偏移到指定数字 4.之后再把偏移的位置设置到最初的位置上

目前是一直往上滚动切换数字

## 实现

利用 transform 的 translateY 偏移和 transition 动画来实现

## 具体实现

代码中注释很清楚，不懂的可以评论区或者私信我
![截屏2021-06-28 下午12.29.56.png](https://upload-images.jianshu.io/upload_images/1339729-ef2eede9f18ced51.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 更多阅读

还有一种实现方式是使用
transform: transationY + background-position 锚点来实现，具体实现可以自己尝试下

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# numberical-card-flipper
