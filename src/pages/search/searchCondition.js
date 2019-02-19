import { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import './index.scss'

class SearchCondition extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: 0,
            condition: [
                { name: '综合', sort: false },
                { name: '销量', sort: false },
                { name: '价格', sort: true },
                { name: '仅看有货', sort: false }
            ]
        }
    }
    setCurrent = (selectedIndex) => {
        this.setState({ selectedIndex })
    }
    render() {
        return (
            <View className="search__result__condition">
                {this.state.condition.map((item, index) => {
                    return (
                        <View
                            onClick={this.setCurrent.bind(this, index)}
                            className={`search__result__condition__item ${this.selectedIndex == index ? 'search__result__condition__item--selected' : ''}`}
                            key={index}>
                            {item.name}
                        </View>
                    )
                })}
            </View>
        )
    }
}
export default SearchCondition