import Taro, { Component } from '@tarojs/taro'
import '@tarojs/async-await'
import Login from './pages/login'
import Home from './pages/home'
import models from './models'
import './app.scss'
import 'taro-ui/dist/style/index.scss' //taro-ui组件的样式
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5') {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/login/index',
      'pages/home/index',
      'pages/user/index',
      'pages/category/index',
      'pages/cart/index',
      'pages/search/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
   
        <Login />
    
    )
  }
}

Taro.render(< App />, document.getElementById('app'))
