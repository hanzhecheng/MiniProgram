import Taro, {
  Component
} from '@tarojs/taro'
import '@tarojs/async-await'
import Home from './pages/home'
import './app.scss'
import 'taro-ui/dist/style/index.scss' //taro-ui组件的样式

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
      'pages/allorder/index',
      'pages/myfocus/index'
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

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (<
      Home />
    )
  }
}

Taro.render(< App />, document.getElementById('app'))
