import Taro from '@tarojs/taro';
import { View, Button, Picker, Text } from '@tarojs/components';
import { AtInput, AtForm, AtTag } from 'taro-ui'
export default class Index extends Taro.Component {
    constructor(props) {
        super(props)
        this.state = {
            addressinfo: {
                name: '',
                phone: '',
                province: '选择',
                city: '选择',
                district: '选择',
                address: '',

            },
            provinces: ['江苏省', '河南省', '湖北省', '广东省'],
            citys: ['苏州市', '无锡市', '徐州市', '淮安市', '南京市', '常州市', '扬州市', '濮阳市'],
            districts: ['姑苏区', '虎丘区', '吴中区', '相城区', '吴江区', '昆山市', '常熟市', '张家港市', '太仓市', '华龙区'],
            tags: ['公司', '家', '学校']
        }
    }
    config = {
        navigationBarTitleText: '收货地址'
    }
    handleChange = (type, value) => {
        let { addressinfo } = this.state
        addressinfo[type] = value
        this.setState({ addressinfo })
    }
    componentWillMount() {
        let addressinfo = Taro.getStorageSync("addressinfo")
        if (addressinfo) {
            let address = addressinfo.address
            address = address.split('/')
            addressinfo.province = address[0]
            addressinfo.city = address[1]
            addressinfo.district = address[2]
            addressinfo.address = address[3]
            this.setState({ addressinfo })
        }
    }
    onChange = (arr, type, e) => {
        let addressinfo = { ...this.state.addressinfo };
        addressinfo[type] = this.state[arr][e.detail.value]
        this.setState({ addressinfo })
    }
    render() {
        const { addressinfo } = this.state
        return (
            <View className="addaddress">
                <AtForm className="addaddress__form">
                    <AtInput
                        name='name'
                        title='收货人'
                        type='text'
                        placeholder='姓名'
                        value={addressinfo.name}
                        onChange={this.handleChange.bind(this, 'name')}
                    />
                    <AtInput
                        name='phone'
                        title='联系方式'
                        type='phone'
                        placeholder='手机号码'
                        value={addressinfo.phone}
                        onChange={this.handleChange.bind(this, 'phone')}
                    />

                    <Picker mode='selector' range={this.state.provinces} onChange={this.onChange.bind(this, 'provinces', 'province')}>
                        <View className='addaddress__picker'>
                            <Text className="addaddress__picker__label">所在地区</Text>{addressinfo.province}
                        </View>
                    </Picker>

                    <Picker mode='selector' range={this.state.citys} onChange={this.onChange.bind(this, 'citys', 'city')}>
                        <View className='addaddress__picker'>
                            <Text className="addaddress__picker__label">市</Text>{addressinfo.city}
                        </View>
                    </Picker>

                    <Picker mode='selector' range={this.state.districts} onChange={this.onChange.bind(this, 'districts', 'district')}>
                        <View className='addaddress__picker'>
                            <Text className="addaddress__picker__label">区/县</Text>{addressinfo.district}
                        </View>
                    </Picker>
                    <AtInput
                        name='address'
                        border={false}
                        title='详细地址'
                        type='text'
                        placeholder='详细地址需填写楼栋楼层或房间号信息'
                        value={addressinfo.address}
                        onChange={this.handleChange.bind(this, 'address')}
                    />
                    <View className="addaddress__picker addaddress__border--top">
                        <Text className="addaddress__picker__label">地址标签</Text>
                        {this.state.tags.map((item, index) => {
                            return (
                                <AtTag className="addaddress__tag" size='small' key={index}>{item}</AtTag>
                            )
                        })}
                    </View>
                </AtForm>
                <View className="addaddress__confirm">
                    <Button className="addaddress__btn" >确认</Button>
                </View>

            </View>
        );
    }
}
