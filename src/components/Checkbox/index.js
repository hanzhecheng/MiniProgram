import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss'
export default class Checkbox extends Taro.Component {
    
    onClick = () => {
        this.props.onChange(!this.props.checked)
    }
    render() {
        return (
            <View className="hb__checkbox__area" onClick={this.onClick}>
                <View className={`hb__checkbox ${this.props.checked ? 'hb__checkbox--check' : ''}`} >
                </View>
                <View className="hb__checkbox__label">{this.props.label ? this.props.label : ''}</View>
            </View>

        );
    }
}
