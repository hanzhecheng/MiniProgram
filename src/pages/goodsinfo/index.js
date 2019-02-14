import Taro, { Component } from '@tarojs/taro';
import { View, Image, Swiper, SwiperItem } from '@tarojs/components';
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
            ]
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
                <View className="goodsinfo__spec">
                    <View className="at-row at-row--wrap">
                        <View className="at-col at-col-3">商品介绍</View>
                    </View>
                </View>
            </View>

        )
    }
}
export default Index