import Taro from '@tarojs/taro';
import { View, Radio, Image } from '@tarojs/components';
import { AtSwipeAction, AtInputNumber } from 'taro-ui'
import './index.scss';

export default class CartGoods extends Taro.Component {
    onHandleChange(index, value) {
        this.props.onChangeNum(this.props.goodsIndex, index, value)
    }
    render() {
        return (
            <View className="cart__goods">
                {this.props.items.map((item, index) => {
                    return (
                        <AtSwipeAction
                            key={index}
                            isOpened={item.isOpened}
                            onOpened={this.props.onHandleSingle.bind(this, this.props.goodsIndex, index)}
                            onClick={this.props.onHandleClick.bind(this, this.props.goodsIndex, index)}
                            options={[
                                {
                                    text: '删除',
                                    style: {
                                        backgroundColor: '#FF4949'
                                    }
                                }
                            ]}>
                            <View className='at-row at-row--wrap'>
                                <View className='at-col at-col-1 cart--center'>
                                    <Radio className="cart__radio"></Radio>
                                </View>
                                <View className='at-col at-col-3'>
                                    <Image className="cart__goods__img" src={item.image} />
                                </View>
                                <View className='at-col at-col-8'>
                                    <View className="cart__goods__label">商品名称:{item.name}</View>
                                    <View className="cart__goods__label">商品描述:{item.desc}</View>
                                    <View className="cart__goods__label">商品规格:{item.unit}</View>
                                    <View className="cart__goods__label">商品价格:{item.price}</View>
                                    <View>
                                        <AtInputNumber
                                            min={0}
                                            step={1}
                                            value={item.num}
                                            onChange={this.onHandleChange.bind(this, index)}
                                        />
                                    </View>
                                </View>
                            </View>

                        </AtSwipeAction>
                    )
                })}
            </View>


        )
    }
}
