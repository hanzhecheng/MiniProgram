import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import GoodsInfo from '../../components/GoodsList/index'
import './index.scss'

export default class Index extends Taro.Component {
    constructor(props) {
        super(props)
        this.state = {
            goodsList: [
                {
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
            ]
        }
    }
    config = {
        navigationBarTitleText: '浏览历史',
        enablePullDownRefresh: true,
        backgroundTextStyle: 'dark',
    }
    onPullDownRefresh() {
        setTimeout(function () {
            Taro.stopPullDownRefresh() // 停止下拉刷新
        }, 2000)
    }
    onReachBottom() {
        Taro.showLoading().then(res => {
            setTimeout(function () {
                Taro.hideLoading()
            }, 1500)

        })
    }
    onRedirect = () => {
        Taro.navigateTo({
            url: "/pages/goodsinfo/index"
        })
    }
    render() {

        return (
            <View className="viewhistory">
                {this.state.goodsList.map((item, index) => {
                    return (
                        <GoodsInfo data={item} key={index} type="history" onClick={this.onRedirect}></GoodsInfo>
                    )
                })}
            </View>
        );
    }
}
