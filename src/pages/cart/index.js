import Taro, { Component } from '@tarojs/taro';
import { View, Radio, ScrollView, Button } from '@tarojs/components';
import { AtButton } from 'taro-ui'
import TabBar from '../../components/TabBar/index'
import CartGoods from './cartgoods'
import './index.scss';
class Index extends Component {
    config = {
        navigationBarTitleText: '购物车'
    }
    constructor(props) {
        super(props)
        this.state = {
            current: 2,
            goodsList: [
                {
                    shopname: "MATRO GBJ 珠宝旗舰店",
                    list: [
                        {
                            image: 'http://img.hbunion.com/upload/image/201901/1547188839089.png',
                            name: '奶粉',
                            unit: '瓶',
                            desc: '高级奶粉，品质好，价格低',
                            price: '12000',
                            isOpened: false,
                            num: 1
                        },
                        {
                            image: 'http://img.hbunion.com/upload/image/201901/1547188839089.png',
                            name: '奶粉',
                            unit: '瓶',
                            desc: '高级奶粉，品质好，价格低',
                            price: '12000',
                            isOpened: false,
                            num: 1
                        },
                        {
                            image: 'http://img.hbunion.com/upload/image/201901/1547188839089.png',
                            name: '奶粉',
                            unit: '瓶',
                            desc: '高级奶粉，品质好，价格低',
                            price: '12000',
                            isOpened: false,
                            num: 1
                        },
                        {
                            image: 'http://img.hbunion.com/upload/image/201901/1547188839089.png',
                            name: '奶粉',
                            unit: '瓶',
                            desc: '高级奶粉，品质好，价格低',
                            price: '12000',
                            isOpened: false,
                            num: 1
                        },
                        {
                            image: 'http://img.hbunion.com/upload/image/201901/1547188839089.png',
                            name: '奶粉',
                            unit: '瓶',
                            desc: '高级奶粉，品质好，价格低',
                            price: '12000',
                            isOpened: false,
                            num: 1
                        }
                    ]
                },
                {
                    shopname: "食甲天下",
                    list: [
                        {
                            image: 'http://img.hbunion.com/upload/image/201901/1546934715988.jpg?x-image-process=image/resize,w_220',
                            name: '夹心饼',
                            unit: '瓶',
                            desc: '高级夹心饼，品质好，价格低',
                            price: '12000',
                            isOpened: false,
                            num: 1
                        },
                        {
                            image: 'http://img.hbunion.com/upload/image/201901/1546934715988.jpg?x-image-process=image/resize,w_220',
                            name: '夹心饼',
                            unit: '瓶',
                            desc: '高级夹心饼，品质好，价格低',
                            price: '12000',
                            isOpened: false,
                            num: 1
                        },
                        {
                            image: 'http://img.hbunion.com/upload/image/201901/1546934715988.jpg?x-image-process=image/resize,w_220',
                            name: '夹心饼',
                            unit: '瓶',
                            desc: '高级夹心饼，品质好，价格低',
                            price: '12000',
                            isOpened: false,
                            num: 1
                        },
                        {
                            image: 'http://img.hbunion.com/upload/image/201901/1546934715988.jpg?x-image-process=image/resize,w_220',
                            name: '夹心饼',
                            unit: '瓶',
                            desc: '高级夹心饼，品质好，价格低',
                            price: '12000',
                            isOpened: false,
                            num: 1
                        },
                        {
                            image: 'http://img.hbunion.com/upload/image/201901/1546934715988.jpg?x-image-process=image/resize,w_220',
                            name: '夹心饼',
                            unit: '瓶',
                            desc: '高级夹心饼，品质好，价格低',
                            price: '12000',
                            isOpened: false,
                            num: 1
                        }
                    ]
                }
            ]
        }
    }
    goToCategory = () => {
        Taro.navigateTo({
            url: "/pages/category/index"
        })
    }
    handleClick = (shopindex, googsindex) => {

        let goodsList = this.state.goodsList
        goodsList[shopindex].list.splice(googsindex, 1)
        this.setState({ goodsList })
        Taro.showToast({
            title: '删除成功',
            icon: 'success',
            duration: 1000
        })
    }
    handleSingle = (shopindex, goodsindex) => {
        let goodsList = this.state.goodsList
        goodsList[shopindex].list.forEach(item => {
            item.isOpened = false
        })
        goodsList[shopindex].list[goodsindex].isOpened = true
        this.setState({ goodsList })
    }
    changeNum = (shopindex, googsindex, value) => {
        let goodsList = this.state.goodsList
        goodsList[shopindex].list[googsindex].num = value
        this.setState({ goodsList })
    }

    render() {
        return (

            <View className="cart">
                {this.state.goodsList.length === 0 &&
                    <View>
                        <View className="at-icon at-icon-shopping-cart cart__icon"></View>
                        <AtButton type='secondary' className="cart__button" onClick={this.goToCategory}>去逛逛</AtButton>
                    </View>
                }
                {this.state.goodsList.length > 0 &&
                    <View className="cart__detail">
                        <ScrollView
                            scrollY
                            scrollWithAnimation
                            scrollTop='0'
                            style='height: 84vh'
                            lowerThreshold='20'
                            upperThreshold='20'>
                            {this.state.goodsList.map((item, index) => {
                                return (
                                    <View key={index} className="cart__info">
                                        <View className="cart__shop">
                                            <Radio className="cart__radio"></Radio>
                                            {item.shopname}
                                        </View>
                                        <CartGoods
                                            items={item.list}
                                            goodsIndex={index}
                                            onChangeNum={this.changeNum}
                                            onHandleClick={this.handleClick}
                                            onHandleSingle={this.handleSingle}
                                        ></CartGoods>
                                    </View>
                                )
                            })}
                        </ScrollView>
                    </View>
                }
                <View className="cart__calc">
                    <View className='at-row at-row--wrap' >
                        <View className='at-col at-col-2'>
                            <Radio className="cart__radio">全选</Radio>
                        </View>
                        <View className='at-col at-col-7'>
                            共计:
                        </View>
                        <View className='at-col at-col-3'>
                            <Button className="cart__calc__button">结算</Button>
                        </View>
                    </View>
                </View>
                <TabBar current={this.state.current}></TabBar>
            </View>

        )
    }
}
export default Index