import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.scss'

export default class OrderList extends Taro.Component {
    render() {
        const { shopname, statusname, list } = this.props.data
        return (
            <View className="hb__order">
                <View className="hb__order__shopname">
                    <Text>{shopname}</Text>
                    <Text>{statusname}</Text>
                </View>
                <View className="at-row at-row--wrap">
                    <View className="at-col at-col-10">
                        <View className="at-row at-row--wrap">
                            {list.filter((item, index) => index < 3).map((item, index) => {
                                return (
                                    <View className='at-col at-col-4' key={index}>
                                        <Image src={item.image} className="hb__order__img"></Image>
                                    </View>
                                )
                            })}
                        </View>

                    </View>

                    <View className='at-col at-col-2 hb__order__count hb__order--center'>
                        共{list.length + 1}件<View className='at-icon at-icon-chevron-right'></View>
                    </View>
                </View>
            </View>
        );
    }
}

OrderList.defaultProps = {
    data: {
        shopname: '',
        statusname: '',
        list: []
    }
}
