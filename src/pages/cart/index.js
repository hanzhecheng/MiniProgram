import Taro, { Component } from '@tarojs/taro';
import { View, Input, Button } from '@tarojs/components';
import { AtButton } from 'taro-ui'
import TabBar from '../../components/TabBar/index'
import './index.scss';
class Index extends Component {
    config = {
        navigationBarTitleText: '购物车'
    }
    constructor(props) {
        super(props)
        this.state = {
            current: 2
        }
    }
    goToCategory = () => {
        Taro.navigateTo({
            url:"/pages/category/index"
        })
    }
    render() {
        return (
            <View className="cart">
                <View className="at-icon at-icon-shopping-cart cart__icon"></View>
                <AtButton type='secondary' className="cart__button" onClick={this.goToCategory}>去逛逛</AtButton>
                <TabBar current={this.state.current}></TabBar>
            </View>

        )
    }
}
export default Index