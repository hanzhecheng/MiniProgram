import Taro, { Component } from '@tarojs/taro';
import { View, Image, Swiper, SwiperItem, Label } from '@tarojs/components';
import { AtBadge } from 'taro-ui'
import { parseMoney } from '../../utils/utils'
import './index.scss';
class Index extends Component {
    config = {
        navigationBarTitleText: '商品信息',
    }
    constructor(props) {
        super(props)
        this.state = {
            name: "善宁/Shineing",
            desc: "18K金排戒群镶钻石戒指时尚女戒钻戒首饰",
            price: "1399",
            artno: '3077101',
            store: '真闪亮珠宝店',
            brand: '真闪亮',
            spec: '',
            images: [
                'http://pic11.secooimg.com/product/500/500/53/51/5382c1805a0448d2b88e3b6fac546a27.jpg',
                'http://pic11.secooimg.com/product/500/500/10/97/da66483c8d224ee58b8ef7e9cf21413c.jpg',
                'http://pic11.secooimg.com/product/500/500/50/97/2a5b58fa98f54ddb9225199abe548974.jpg'
            ],
            operator_short: [
                { name: '购物袋', icon: 'at-icon-shopping-bag' },
                { name: '店铺', icon: 'at-icon-settings' },
                { name: '关注', icon: 'at-icon-heart' }
            ],
            cartCount: 0,
            introductionImgage: [
                'http://pic12.secooimg.com/imgextra/1/4CAQ/52/49/1ZdGu941f2b4b4679c4c05a9f1aace91e6acba.jpg',
                'http://pic12.secooimg.com/imgextra/1/4CAQ/97/49/1ZdGuaa16f0e40f1de429c9d70e2878a1a48ac.jpg',
                'http://pic12.secooimg.com/imgextra/1/4CAQ/54/55/1ZdGua6719ffe4c7cb49309e5a46eff8b14cc1.jpg',
                'http://pic12.secooimg.com/imgextra/1/4CAQ/55/51/1ZdGua73ed16b970cb43c193ced84c9999524a.jpg',
                'http://pic12.secooimg.com/imgextra/1/4CAQ/51/10/1ZdGub3ed88e4d781941d4acf4af7db09b3ffc.jpg'
            ]
        }
    }
  
    previewImage = (index) => {
        Taro.previewImage({
            current: this.state.images[index], // 当前显示图片的http链接
            urls: this.state.images // 需要预览的图片http链接列表
        })
    }
    addToCart = () => {
        this.setState((preState) => ({
            cartCount: preState.cartCount + 1
        }))
    }
    redirectCart = () => {
        Taro.navigateTo({
            url: "/pages/cart/index"
        })
    }
    render() {
        return (
            <View className="goodsinfo">
                <View className="goodsinfo__main">
                    <Swiper
                        className="goodsinfo__swiper"
                        indicatorColor='#999'
                        indicatorActiveColor='#333'
                        circular
                        indicatorDots
                        autoplay>
                        {this.state.images.map((item, index) => {
                            return (
                                <SwiperItem key={index}>
                                    <Image className="goodsinfo__swiper__img" src={item} onClick={this.previewImage.bind(this, index)}></Image>
                                </SwiperItem>
                            )
                        })}

                    </Swiper>
                    <View className="goodsinfo__name">{this.state.name}</View>
                    <View className="goodsinfo__desc">{this.state.desc}</View>
                    <View className="goodsinfo__price">¥{parseMoney(this.state.price)}</View>
                </View>

                <View className="goodsinfo__spec">
                    <View className="at-row at-row--wrap">
                        <View className="at-col at-col-3">商品规格</View>
                        <View className="at-col at-col-3 goodsinfo__spec__info">{this.state.spec}</View>
                    </View>
                </View>

                <View className="goodsinfo__info">
                    <View className="goodsinfo__info__title">商品信息</View>
                    <View className="at-row at-row--wrap">
                        <View className="at-col at-col-3 goodsinfo__info__label">商品名称:</View>
                        <View className="at-col at-col-9 goodsinfo__info__label">{this.state.name}</View>

                        <View className="at-col at-col-3 goodsinfo__info__label">商品货号:</View>
                        <View className="at-col at-col-9 goodsinfo__info__label">{this.state.artno}</View>

                        <View className="at-col at-col-3 goodsinfo__info__label">店铺:</View>
                        <View className="at-col at-col-9 goodsinfo__info__label">{this.state.store}</View>

                        <View className="at-col at-col-3 goodsinfo__info__label">产品品牌:</View>
                        <View className="at-col at-col-9 goodsinfo__info__label">{this.state.brand}</View>
                    </View>
                </View>

                <View className="goodsinfo__spec">
                    <View className="at-row at-row--wrap">
                        <View className="at-col at-col-3">用户评论(0)</View>
                    </View>
                </View>

                <View className="goodsinfo__spec goodsinfo__spac--last">
                    <View className="at-row at-row--wrap">
                        <View className="at-col at-col-3">商品介绍</View>
                        {this.state.introductionImgage.map((item, index) => {
                            return (
                                <Image key={index} src={item} className="goodsinfo__introduction"></Image>
                            )
                        })}
                    </View>
                </View>

                <View className="goodsinfo__operator">
                    <View className='at-row'>
                        {this.state.operator_short.map(item => {
                            return (
                                <View className='at-col at-col-2 goodsinfo__operator__short' key={item.name}>
                                    {item.name == '购物袋' && <AtBadge value={this.state.cartCount} maxValue={99}>
                                        <View className={`at-icon ${item.icon} goodsinfo__operator__icon goodsinfo__operator--badge`} onClick={this.redirectCart}>
                                            <Label className="goodsinfo__operator__label">{item.name}</Label>
                                        </View>
                                    </AtBadge>}
                                    {item.name != '购物袋' && <View className={`at-icon ${item.icon} goodsinfo__operator__icon`}>
                                        <Label className="goodsinfo__operator__label">{item.name}</Label>
                                    </View>}

                                </View>
                            )
                        })}

                        <View className='at-col at-col-3 goodsinfo__operator__long goodsinfo__operator--black' onClick={this.addToCart}>
                            加入购物袋
                        </View>
                        <View className='at-col at-col-3 goodsinfo__operator__long goodsinfo__operator--red'>
                            立即购买
                        </View>
                    </View>
                </View>
            </View>

        )
    }
}
export default Index