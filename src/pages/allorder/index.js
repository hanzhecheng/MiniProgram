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
                    shopname: "MATRO GBJ 珠宝旗舰店",
                    statusname: '已取消',
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
                    statusname: '代发货',
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
                },
                {
                    shopname: "MATRO GBJ 珠宝旗舰店",
                    statusname: '已取消',
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
                    statusname: '代发货',
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
                },
                {
                    shopname: "MATRO GBJ 珠宝旗舰店",
                    statusname: '已取消',
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
                    statusname: '代发货',
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
                },
                {
                    shopname: "MATRO GBJ 珠宝旗舰店",
                    statusname: '已取消',
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
                    statusname: '代发货',
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
                },
                {
                    shopname: "MATRO GBJ 珠宝旗舰店",
                    statusname: '已取消',
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
                    statusname: '代发货',
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
        navigationBarTitleText: '全部订单'
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
