import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import GoodsInfo from './goodsinfo'
import './index.scss'
export default class Index extends Taro.Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: 0,
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
    config = {
        navigationBarTitleText: '确认订单'
    }
    onConfirm = () => {

    }
    toAddress = () => {
        Taro.navigateTo({
            url: "/pages/shippingaddress/index"
        })
    }
    render() {
        return (
            <View className="confirmorder">
                <View className="confirmorder__address" onClick={this.toAddress}>
                    <Text className="confirmorder__address__title">收货信息</Text>
                    <View className='at-row at-row--wrap'>
                        <View className='at-col at-col-4 confirmorder__address__name'>韩喆成</View>
                        <View className='at-col at-col-8 confirmorder__address__phone'>156****1281</View>
                        <View className='at-col at-col-12 confirmorder__address__detail'>江苏/苏州市/姑苏区/阔巷22号</View>
                    </View>
                    <View className='at-icon at-icon-chevron-right confirmorder__address__icon'></View>
                </View>
                {this.state.goodsList.map((item, index) => {
                    return (
                        <GoodsInfo data={item} key={index}></GoodsInfo>
                    )
                })}

                <View className="confirmorder__amount">
                    <View className='at-row at-row--wrap'>
                        <View className='at-col at-col-2 confirmorder__amount__title'>应付金额:</View>
                        <View className='at-col at-col-7 confirmorder__amount__real'>{this.state.amount}</View>
                        <View className='at-col at-col-3 '>
                            <Button className="confirmorder__amount__btn" onClick={this.onConfirm}>确认订单</Button>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
