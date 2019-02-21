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
            }
        }
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
