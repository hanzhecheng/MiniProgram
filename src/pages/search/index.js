import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtSearchBar, AtTag } from 'taro-ui'
import SearchGrid from './searchgrid'
import './index.scss';
class Index extends Component {
    config = {
        navigationBarTitleText: '搜索'
    }
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            searchTags: [],
            hotTags: ['iPhone', 'iMac', 'MacBook Pro', 'MacBook Air', '拉杆箱', '运动背心', '笔记本', '点烟器', '电脑', '华为', 'vivo']
        }
    }

    componentDidMount() {
        let searchTags = Taro.getStorageSync("searchTags")
        if (searchTags && searchTags.length > 0) {
            this.setState({ searchTags })
        }
    }

    onActionClick = () => {
        if (this.state.value) {
            let searchTags = this.state.searchTags
            if (!searchTags.includes(this.state.value)) {
                searchTags.push(this.state.value)
            }
            this.setState({ searchTags })
            Taro.setStorageSync("searchTags", this.state.searchTags)
        }
    }

    onChange = (value) => {
        this.setState({
            value: value
        })
    }
    changeHot = () => {
        let hotTags = this.state.hotTags;
        hotTags = hotTags.reverse()
        this.setState({ hotTags })
    }
    clearHistory = () => {
        let searchTags = []
        this.setState({ searchTags })
        Taro.setStorageSync("searchTags", this.state.searchTags)
    }
    render() {
        return (
            <View>
                <AtSearchBar
                    focus
                    value={this.state.value}
                    onChange={this.onChange}
                    onActionClick={this.onActionClick}
                    onConfirm={this.onActionClick}
                />
                <SearchGrid title="搜索历史" his tags={this.state.searchTags} onClearHistory={this.clearHistory}></SearchGrid>
                <SearchGrid title="热门搜索" hot tags={this.state.hotTags} onChangeHot={this.changeHot}></SearchGrid>
            </View>
        )
    }
}
export default Index