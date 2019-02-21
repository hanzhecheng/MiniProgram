import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss'
class UserGrid extends Component {
    render() {
        return (
            <View className="user__grid">
                <View className="user__grid__title">
                    <View className="user__grid__title__mine">{this.props.main}</View>
                    {this.props.all && <View className="user__grid__title__all" onClick={this.props.onRedirect.bind(this,'')}>{this.props.all}<View className='at-icon at-icon-chevron-right'></View></View>}
                </View>
                <View className="user__grid__colums">
                    {this.props.datas.map((item,index) => {
                        return (
                            <View key={index} className="user__grid__colums__item" onClick={this.props.onRedirect.bind(this,item.value)}>
                                <Image src={item.image} className={`${this.props.big ? 'user__grid__colums__item__img--big' : 'user__grid__colums__item__img'}`}></Image>
                                <Label className="user__grid__colums__item__desc">{item.value}</Label>
                            </View>
                        )
                    })}
                </View>

            </View>
        )
    }
}
export default UserGrid