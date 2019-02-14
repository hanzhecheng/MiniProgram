import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import QQMapWX from '../../utils/qqmap-wx-jssdk.min.js';
let qqmapsdk;
export default class Index extends Taro.Component {
    constructor(props) {
        super(props)
        this.state = {
            address: ''
        }
    }
    componentDidMount() {
        qqmapsdk = new QQMapWX({
            key: 'UWNBZ-OGBCW-I3WRI-O4YUB-BQL55-FZFYR'
        });
        //获取用户位置信息
        Taro.getSetting().then(res => {
            if (!res.authSetting['scope.userLocation']) {
                Taro.authorize({
                    scope: 'scope.userLocation'
                }).then(_ => {
                    this.getUserLocation()
                })
            } else {
                this.getUserLocation()
            }
        })
    }
    getUserLocation() {

        Taro.getLocation({
            type: 'wgs84'
        }).then(res => {
            qqmapsdk.reverseGeocoder({
                location: {
                    latitude: res.latitude,
                    longitude: res.longitude
                },
                success: function (addressRes) {
                    this.setState({
                        address: JSON.stringify(addressRes)
                    })
                }
            })
        })
    }
    render() {
        return (
            <View className="shipping">
                {this.state.address}
            </View>
        );
    }
}
