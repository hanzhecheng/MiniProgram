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
