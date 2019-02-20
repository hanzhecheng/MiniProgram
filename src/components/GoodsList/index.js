import Taro from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import './index.scss'
export default class GoodsInfo extends Taro.Component {
    render() {
        const { shopname, list } = this.props.data
        return (
            <View className="hb__goods">
                {shopname && <View className="hb__goods__shopname">
                    {shopname}
                </View>}
                {list.map((item, index) => {
                    return (
                        <View onClick={this.props.onClick.bind(this, index, item)} className={`at-row at-row--wrap ${this.props.type === 'history' ? 'hb__googds__divider' : ''}`} key={index}>
                            <View className='at-col at-col-3'>
                                <Image src={item.image} className="hb__goods__img"></Image>
                            </View>
                            <View className='at-col at-col-9'>
                                <View className="hb__goods__label">商品名称:{item.name}</View>
                                <View className="hb__goods__label">商品描述:{item.desc}</View>
                                <View className="hb__goods__label">商品规格:{item.unit}</View>
                                <View className="hb__goods__label">商品价格:{item.price}</View>
                            </View>
                        </View>
                    )
                })}

            </View>
        );
    }
}
GoodsInfo.defaultProps = {
    data: {
        shopname: '',
        list: []
    },
    type: ''
}