import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss'
const NUMBER = 20, ARR = [];

export default class Border extends Taro.Component {
    componentWillMount() {
        for (let index = 0; index < NUMBER; index++) {
            ARR.push(index)
        }
    }
    render() {
        return (
            <View className='hb__border'>
                <View className="hb__border__area">
                    {ARR.map((item, index) => {
                        return (
                            <View className="hb__border__top" key={index}></View>
                        )

                    })}
                </View>
                {this.props.children}
                <View className="hb__border__area">
                    {ARR.map((item, index) => {
                        return (
                            <View className="hb__border__top" key={index}></View>
                        )

                    })}
                </View>
            </View>
        );
    }
}
