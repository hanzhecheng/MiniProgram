import Taro from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { AtTabs, AtTabsPane } from 'taro-ui'
import GoodsInfo from '../../components/GoodsList/index'
import './index.scss'

export default class Index extends Taro.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 0,
            tabList: [{ title: '商品' }, { title: '店铺' }],
            shops: [
                'http://img.hbunion.com/upload/image/201901/1547012756719.jpg',
                'http://img.hbunion.com/upload/image/201901/1546998621843.jpg',
                'http://img.hbunion.com/upload/image/201901/1546998658992.jpg',
                'http://img.hbunion.com/upload/image/201901/1546918953296.jpg',
            ],
            goods: {
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
            }
        }
    }
    config = {
        navigationBarTitleText: '我的关注'
    }
    handleClick = (current) => {
        this.setState({ current })
    }
    render() {
        const { tabList, goods, shops } = this.state
        return (
            <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick}>
                <AtTabsPane current={this.state.current} index={0} >
                    <View className="myfocus">
                        <GoodsInfo data={goods}></GoodsInfo>
                    </View>
                </AtTabsPane>
                <AtTabsPane current={this.state.current} index={1}>
                    <View className="myfocus">
                        {shops.map((item, index) => {
                            return (
                                <Image className="myfocus__image" key={index} src={item}></Image>
                            )
                        })}
                    </View>
                </AtTabsPane>


            </AtTabs>
        )
    }
}
