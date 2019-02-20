import Taro, {
  Component
} from '@tarojs/taro'
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
//
class App extends Component {

  config = {
    pages: [
      'pages/home/index',
      'pages/login/index',
      'pages/user/index',
      'pages/category/index',
      'pages/cart/index',
      'pages/search/index',
      'pages/goodsinfo/index',
      'pages/confirmorder/index',
      'pages/shippingaddress/index',
      'pages/addaddress/index',
      'pages/viewhistory/index',
      'pages/allorder/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    "permission": {
      "scope.userLocation": {
        "desc": "您的位置将用于收货地址筛选"
      }
    }

  }

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return ( <
      Home / >
    )
  }
}

Taro.render( < App / > , document.getElementById('app'))
