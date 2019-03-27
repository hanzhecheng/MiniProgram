import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { parseMoney } from '../../utils/utils'
import './index.scss'

class SearchResult extends Component {
   
    render() {
        return (
            <View className="search__result">
                
                    {this.props.goods.map((item, index) => {
                        return (
                            <View key={index} className="at-row at-row--wrap">
                                {item.map((subitem, subindex) => {
                                    return (
                                        <View key={index + subindex} className="at-col at-col-6 search__result__goods" onClick={this.props.onRedirect}>
                                            <Image className="search__result__goods__image" src={subitem.image}></Image>
                                            <View className="search__result__goods__name">{subitem.name}</View>
                                            <View className="search__result__goods__desc">{subitem.desc}</View>
                                            <View className="search__result__goods__price">¥{parseMoney(subitem.price)}</View>
                                        </View>
                                    )
                                })}
                            </View>

                        )


                    })}
                
            </View>
        )
    }
}
SearchResult.defaultProps = {
    goods: [],
    onRedirect: () => { }
}
export default SearchResult