import Taro from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import './index.scss'
export default class GoodsInfo extends Taro.Component {
    render() {
        const { shopname, list } = this.props.data
        return (
            <View className="confirmorder__goods">
                <View className="confirmorder__goods__shopname">
                    {shopname}
                </View>
                {list.map((item, index) => {
                    return (
                        <View className="at-row at-row--wrap" key={index}>
                            <View className='at-col at-col-3'>
                                <Image src={item.image} className="confirmorder__goods__img"></Image>
                            </View>
                            <View className='at-col at-col-9'>
                                <View className="confirmorder__goods__label">商品名称:{item.name}</View>
                                <View className="confirmorder__goods__label">商品描述:{item.desc}</View>
                                <View className="confirmorder__goods__label">商品规格:{item.unit}</View>
                                <View className="confirmorder__goods__label">商品价格:{item.price}</View>
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
    }
}