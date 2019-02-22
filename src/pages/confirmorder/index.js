import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import GoodsInfo from '../../components/GoodsList/index'
import Border from '../../components/Boder/index'
import { parseMoney } from '../../utils/utils'
import './index.scss'
export default class Index extends Taro.Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: 0,
            moneys: [
                { name: '商品金额', money: 20032 },
                { name: '运费合计', money: 0 },
                { name: '店铺VIP折扣', money: 0 },
                { name: '代金券优惠', money: 0 },
                { name: '优惠券', money: 0 },
                { name: '满减优惠', money: 0 },
                { name: '应付总额', money: 20032 },
            ],
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
                <Border>
                    <View className="confirmorder__address" onClick={this.toAddress}>
                        <Text className="confirmorder__address__title">收货信息</Text>
                        <View className='at-row at-row--wrap'>
                            <View className='at-col at-col-4 confirmorder__address__name'>路人甲</View>
                            <View className='at-col at-col-8 confirmorder__address__phone'>156****1281</View>
                            <View className='at-col at-col-12 confirmorder__address__detail'>河南省/濮阳市/华龙区/绿城花园</View>
                        </View>
                        <View className='at-icon at-icon-chevron-right confirmorder__address__icon'></View>
                    </View>
                </Border>

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
                                <Text>¥{parseMoney(item.money)}</Text>
                            </View>
                        )
                    })}
                </View>
                <View className="confirmorder__amount">
                    <View className='at-row at-row--wrap'>
                        <View className='at-col at-col-2 confirmorder__amount__title'>应付金额:</View>
                        <View className='at-col at-col-7 confirmorder__amount__real'>¥{parseMoney(this.state.amount)}</View>
                        <View className='at-col at-col-3 '>
                            <Button className="confirmorder__amount__btn" onClick={this.onConfirm}>确认订单</Button>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
