import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
export default class Index extends Taro.Component {
    constructor(props) {
        super(props)
        this.state = {
            addresslist: [
                {
                    name: '路人甲',
                    phone: '156****1281',
                    address: '河南省/濮阳市/华龙区/绿城花园',
                    isDefault: true
                },
                {
                    name: '路人乙',
                    phone: '138****4382',
                    address: '江苏省/淮安市/洪泽市/万达中心',
                    isDefault: false
                },
                {
                    name: '路人丙',
                    phone: '180****7359',
                    address: '江苏省/苏州市/姑苏区/保利国际',
                    isDefault: false
                },
                {
                    name: '路人丁',
                    phone: '156****7568',
                    address: '天津市/和平区/南市街道/恒大中心',
                    isDefault: false
                },

            ]
        }
    }
    config = {
        navigationBarTitleText: '收货地址'
    }
  
    addAddress = () => {
        Taro.setStorageSync("addressinfo", '')
        Taro.navigateTo({
            url: "/pages/addaddress/index"
        })
    }
    editAddress = (index) => {
        Taro.setStorageSync("addressinfo", this.state.addresslist[index])
        Taro.navigateTo({
            url: "/pages/addaddress/index"
        })
    }
    render() {
        let { addresslist } = this.state
        return (
            <View className="shipping">
                <ScrollView
                    className="shipping__list"
                    scrollY
                    scrollWithAnimation
                    scrollTop='0'
                    lowerThreshold='20'
                    upperThreshold='20'>

                    {addresslist.map((item, index) => {
                        return (
                            <View className="at-row at-row--wrap" key={index}>
                                <View className='at-col at-col-8'>
                                    <View>
                                        <Text className="shipping__name__phone">{item.name}</Text>
                                        <Text className="shipping__name__phone">{item.phone}</Text>
                                    </View>
                                    <View className="shipping__address">
                                        {item.address}
                                    </View>
                                </View>
                                <View className='at-col at-col-2 shipping__center'>
                                    <Text className="shipping__default">{item.isDefault ? '默认地址' : ''}</Text>
                                </View>
                                <View className='at-col at-col-2 shipping__center' onClick={this.editAddress.bind(this, index)}>
                                    <Text className="shipping__edit">编辑</Text>
                                </View>
                            </View>
                        )
                    })}
                </ScrollView>
                <View className="shipping__addnew" onClick={this.addAddress}>
                    新增收货地址
                </View>
            </View>
        );
    }
}
