import Taro, { Component } from '@tarojs/taro';
import { View, Image, Swiper, SwiperItem, Label } from '@tarojs/components';
import { AtBadge } from 'taro-ui'
import './index.scss';
class Index extends Component {
    config = {
        navigationBarTitleText: '商品信息',
    }
    constructor(props) {
        super(props)
        this.state = {
            name: "诺贝能/Nutrilon",
            desc: "诺贝能奶粉(测试商品,仅供内部人员购买)",
            price: "200",
            artno: '3077101',
            store: '苏州美罗百货',
            brand: '诺贝能',
            spec: '',
            images: [
                'http://img.hbunion.com/upload/image/201810/1539075406293.jpg',
                'http://img.hbunion.com/upload/image/201811/1541747611194.jpg',
                'http://img.hbunion.com/upload/image/201811/1541747029694.jpg'
            ],
            operator_short: [
                { name: '购物袋', icon: 'at-icon-shopping-bag' },
                { name: '店铺', icon: 'at-icon-settings' },
                { name: '关注', icon: 'at-icon-heart' }
            ],
            cartCount: 0
        }
    }
    componentDidMount() {
        Taro.onUserCaptureScreen(() => {
            Taro.showToast({
                title: '成功',
                icon: 'success',
                duration: 2000
            })
        })
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
                    <View className="goodsinfo__price">¥{this.state.price}</View>
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
                    </View>
                </View>

                <View className="goodsinfo__operator">
                    <View className='at-row'>
                        {this.state.operator_short.map(item => {
                            return (
                                <View className='at-col at-col-2 goodsinfo__operator__short' key={item.name}>
                                    {item.name == '购物袋' && <AtBadge value={this.state.cartCount} maxValue={99}>
                                        <View className={`at-icon ${item.icon} goodsinfo__operator__icon`} onClick={this.redirectCart}>
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