import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import GoodsInfo from '../../components/GoodsList/index'
import './index.scss'
export default class Index extends Taro.Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: 0,
            moneys: [
                { name: '商品金额', money: 20032 },
                { name: '运费合计', money: 0 },
                { name: '换购优惠', money: 0 },
                { name: '店铺VIP折扣', money: 0 },
                { name: '代金券优惠', money: 0 },
                { name: '优惠券', money: 0 },
                { name: '赠送券', money: 0 },
                { name: '本金券', money: 0 },
                { name: '满减优惠', money: 0 },
                { name: '应付总额', money: 20032 },
            ],
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
    componentDidMount() {
        let { moneys } = this.state
        let amount = moneys.reduce((origin, item) => {
            origin += item.money
            return origin
        }, 0)
        this.setState({ amount })
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
                        <GoodsInfo showRemark={true} data={item} key={index}></GoodsInfo>
                    )
                })}
                <View className="confirmorder__money">
                    {this.state.moneys.map((item, index) => {
                        return (
                            <View className="confirmorder__money__item" key={index}>
                                <Text>{item.name}</Text>
                                <Text>¥{item.money.toFixed(2)}</Text>
                            </View>
                        )
                    })}
                </View>
                <View className="confirmorder__amount">
                    <View className='at-row at-row--wrap'>
                        <View className='at-col at-col-2 confirmorder__amount__title'>应付金额:</View>
                        <View className='at-col at-col-7 confirmorder__amount__real'>¥{this.state.amount}</View>
                        <View className='at-col at-col-3 '>
                            <Button className="confirmorder__amount__btn" onClick={this.onConfirm}>确认订单</Button>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
