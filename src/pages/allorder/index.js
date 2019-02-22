import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import OrderList from '../../components/OrderList/index'
import './index.scss'
export default class Index extends Taro.Component {
    constructor(props) {
        super(props)
        this.state = {
            goodsList: [
                {
                    shopname: "真闪亮珠宝店",
                    statusname:'待付款',
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
                    statusname:'待发货',
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
                },
                {
                    shopname: "真闪亮珠宝店",
                    statusname:'待付款',
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
                    statusname:'待收货',
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
                },
                {
                    shopname: "真闪亮珠宝店",
                    statusname:'待评价',
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
                    statusname:'待发货',
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
                },
                {
                    shopname: "真闪亮珠宝店",
                    statusname:'待付款',
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
                    statusname:'待评价',
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
                },
            ]
        }
    }
    config = {
        navigationBarTitleText: '全部订单'
    }
    componentWillMount() {
        let { goodsList } = this.state
        let orderStatus = Taro.getStorageSync("orderstatus")
        if (orderStatus) {
            goodsList = goodsList.filter(item => item.statusname == orderStatus)
            this.setState({ goodsList })
            Taro.setNavigationBarTitle({ title: orderStatus })
        } else {
            Taro.setNavigationBarTitle({ title: '全部订单' })
        }

    }
    render() {
        return (
            <View className="allorder">
                {this.state.goodsList.map((item, index) => {
                    return (
                        <OrderList key={index} data={item}></OrderList>
                    )
                })}
            </View>
        );
    }
}
