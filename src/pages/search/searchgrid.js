import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtTag } from 'taro-ui'
import './index.scss'
class SearchGrid extends Component {
    render() {
        return (
            <View className="search__hot">
                {this.props.tags.length > 0 && <View className="search__hot__top">
                    <View className="search__hot__top__title">{this.props.title}</View>
                    {this.props.hot && <View className="search__hot__top__change" onClick={this.props.onChangeHot}>换一批</View>}
                    {this.props.his && <View className="search__hot__top__change" onClick={this.props.onClearHistory}>清除</View>}
                </View>}
                {this.props.tags.map((item,index) => {
                    return (
                        <AtTag key={index} className="search__tag" name={item} onClick={this.props.onClick}>{item}</AtTag>
                    )
                })}
            </View>
        )
    }
}
export default SearchGrid