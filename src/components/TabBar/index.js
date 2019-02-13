import Taro, { Component } from '@tarojs/taro';
import { View, Input, Button } from '@tarojs/components';
import { AtTabBar } from 'taro-ui'
class TabBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabToUrl:{
                0:"/pages/home/index",
                1:'/pages/category/index',
                2:'/pages/cart/index',
                3:'/pages/user/index'
            }
        }
    }
    handleClick = (value) => {
        Taro.redirectTo({
            url:this.state.tabToUrl[value]
        })
    }
    render() {
        return (
            <AtTabBar
                fixed
                tabList={[
                    { title: '首页', iconType: 'home' },
                    { title: '分类', iconType: 'bullet-list' },
                    { title: '购物车', iconType: 'shopping-cart' },
                    { title: '我的', iconType: 'user' }
                ]}
                iconSize={21}
                fontSize={10}
                onClick={this.handleClick}
                current={this.props.current}
            />
        )
    }
}
export default TabBar