import Taro, { Component } from '@tarojs/taro';
import { View, ScrollView, Button } from '@tarojs/components';
import { AtButton } from 'taro-ui'
import TabBar from '../../components/TabBar/index'
import CartGoods from './cartgoods'
import HBCheckbox from '../../components/Checkbox/index'
import { parseMoney } from '../../utils/utils'
import './index.scss';
class Index extends Component {
    config = {
        navigationBarTitleText: '购物车'
    }
    constructor(props) {
        super(props)
        this.state = {
            current: 2,
            allChecked: false,
            calcBtnDisabled: true,
            totalAmount: 0,
            goodsList: [
                {
                    shopname: "真闪亮珠宝店",
                    list: [
                        {
                            image: 'http://pic11.secooimg.com/product/240/240/54/50/625b8cfe7eb84906b3c437c788768bd7.jpg',
                            name: '钻石女士耳钉',
                            unit: '个',
                            desc: '耳钉/耳饰/首饰',
                            price: '12000',
                            isOpened: false,
                            num: 1
                        },
                        {
                            image: 'http://pic11.secooimg.com/product/240/240/98/97/ba7e8521f6484f7dbb0ecc15d2c890c1.jpg',
                            name: '10分18K金钻石',
                            unit: '个',
                            desc: '耳钉/耳饰/首饰',
                            price: '12000',
                            isOpened: false,
                            num: 1
                        },
                        {
                            image: 'http://pic11.secooimg.com/product/240/240/55/53/75f8f7069ac8442b8951db32cf3e97c2.jpg',
                            name: '珍珠开口手镯/手圈',
                            unit: '个',
                            desc: '耳钉/耳饰/首饰',
                            price: '12000',
                            isOpened: false,
                            num: 1
                        },
                        {
                            image: 'http://pic11.secooimg.com/product/240/240/53/54/5676144383aa4d03b233a286b15eec08.jpg',
                            name: '时尚潮人女指环',
                            unit: '个',
                            desc: '耳钉/耳饰/首饰',
                            price: '12000',
                            isOpened: false,
                            num: 1
                        },
                        {
                            image: 'http://pic11.secooimg.com/product/240/240/97/57/a968072218bd46baaa640eaff95058f0.jpg',
                            name: '简约时尚项坠女锁骨链',
                            unit: '个',
                            desc: '耳钉/耳饰/首饰',
                            price: '12000',
                            isOpened: false,
                            num: 1
                        }
                    ]
                },
                {
                    shopname: "真舒服鞋靴店",
                    list: [
                        {
                            image: 'http://pic11.secooimg.com/product/240/240/97/48/a026021664c547f4931db91014f07d36.jpg',
                            name: '女士靴子 短靴',
                            unit: '双',
                            desc: '女鞋 女士靴',
                            price: '12000',
                            isOpened: false,
                            num: 1
                        },
                        {
                            image: 'http://pic11.secooimg.com/product/240/240/51/54/3685eb719b694ceca88ffda0aa36ce4d.jpg',
                            name: '女士小白鞋牛皮马丁鞋',
                            unit: '双',
                            desc: '女鞋 女士靴',
                            price: '12000',
                            isOpened: false,
                            num: 1
                        },
                        {
                            image: 'http://pic11.secooimg.com/product/240/240/98/54/b6df3eaa07c24e339d284dec717b36a1.jpg',
                            name: '牛皮细跟女士靴子',
                            unit: '双',
                            desc: '女鞋 女士靴',
                            price: '12000',
                            isOpened: false,
                            num: 1
                        },
                        {
                            image: 'http://pic11.secooimg.com/product/240/240/56/56/88d6fac1329d4398baa438eda5f8fe32.jpg',
                            name: '羊皮经典纽扣短靴',
                            unit: '双',
                            desc: '女鞋 女士靴',
                            price: '12000',
                            isOpened: false,
                            num: 1
                        },
                        {
                            image: 'http://pic11.secooimg.com/product/240/240/48/51/034054b0943c4a42a34106447703bd04.jpg',
                            name: '牛皮拉链搭扣女士靴子',
                            unit: '双',
                            desc: '女鞋 女士靴',
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
        this.calcTotalAmount()
    }
    handleSingle = (shopindex, goodsindex) => {
        let goodsList = this.state.goodsList
        goodsList[shopindex].list.forEach(item => {
            item.isOpened = false
        })
        goodsList[shopindex].list[goodsindex].isOpened = true
        this.setState({ goodsList })
        this.calcTotalAmount()
    }
    changeNum = (shopindex, googsindex, value) => {
        let goodsList = this.state.goodsList
        goodsList[shopindex].list[googsindex].num = value
        this.setState({ goodsList })
        this.calcTotalAmount()
    }
    onCheckAllChange = (index, checked) => {
        let goodsList = this.state.goodsList;
        goodsList[index].checked = checked;
        goodsList[index].list.forEach(item => {
            item.checked = checked
        })
        this.setState({ goodsList })
        this.calcTotalAmount()
    }
    onChangeChecked = (shopindex, goodsindex, checked) => {
        let goodsList = this.state.goodsList
        goodsList[shopindex].list[goodsindex].checked = checked
        if (goodsList[shopindex].list.some(item => !item.checked)) {
            goodsList[shopindex].checked = false
        } else {
            goodsList[shopindex].checked = true
        }
        this.setState({ goodsList })
        this.calcTotalAmount()
    }
    onClosed = (shopindex, goodsindex) => {
        let goodsList = this.state.goodsList
        goodsList[shopindex].list[goodsindex].isOpened = false
        this.setState({ goodsList })
        this.calcTotalAmount()
    }
    onCheckAll = (checked) => {
        this.setState({
            allChecked: checked
        })
        let goodsList = this.state.goodsList
        goodsList.forEach(item => {
            item.checked = checked;
            item.list.forEach(items => {
                items.checked = checked
            })
        })
        this.setState({ goodsList })
        this.calcTotalAmount()
    }

    calcTotalAmount() {
        let goodsList = this.state.goodsList
        let totalAmount = 0, calcBtnDisabled = false;
        goodsList.forEach(item => {
            item.list.forEach(items => {
                totalAmount += (items.checked ? items.price * items.num : 0)
            })
        })
        calcBtnDisabled = totalAmount === 0
        this.setState({ totalAmount, calcBtnDisabled })
    }
    onSettle = () => {
        Taro.navigateTo({
            url: "/pages/confirmorder/index"
        })
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
                                            <HBCheckbox
                                                size="small"
                                                checked={item.checked}
                                                onChange={this.onCheckAllChange.bind(this, index)}
                                                label={item.shopname}>
                                            </HBCheckbox>
                                        </View>
                                        <CartGoods
                                            onChangeChecked={this.onChangeChecked}
                                            items={item.list}
                                            goodsIndex={index}
                                            onClosed={this.onClosed}
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
                        <View className='at-col at-col-3 cart__padding'>
                            <HBCheckbox
                                label="全选"
                                size="small"
                                checked={allChecked}
                                onChange={this.onCheckAll}
                            >全选</HBCheckbox>
                        </View>
                        <View className='at-col at-col-6 cart--center'>
                            共计:{parseMoney(this.state.totalAmount)}
                        </View>
                        <View className='at-col at-col-3'>
                            <Button className="cart__calc__button" disabled={this.state.calcBtnDisabled} onClick={this.onSettle}>结算</Button>
                        </View>
                    </View>
                </View>
                <TabBar current={this.state.current}></TabBar>
            </View>

        )
    }
}
export default Index