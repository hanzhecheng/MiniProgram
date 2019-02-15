import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';

import './index.scss'

class SearchResult extends Component {
    render() {
        return (
            <View className="search__result">
                <View className="at-row at-row--wrap">
                    {this.props.goods.map((item, index) => {
                        return (
                            <View key={index} className="at-col at-col-6 search__result__goods" onClick={this.props.onRedirect}>
                                <Image className="search__result__goods__image" src={item.image}></Image>
                                <View className="search__result__goods__name">{item.name}</View>
                                <View className="search__result__goods__desc">{item.desc}</View>
                                <View className="search__result__goods__price">¥{item.price}</View>
                            </View>
                        )
                    })}
                </View>
            </View>
        )
    }
}
export default SearchResult