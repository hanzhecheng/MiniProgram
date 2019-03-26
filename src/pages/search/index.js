import Taro, { Component } from '@tarojs/taro';
import { View, ScrollView } from '@tarojs/components';
import { AtSearchBar } from 'taro-ui'
import SearchGrid from './searchgrid'
import SearchResult from './searchResult'
import SearchCondition from './searchCondition'

import './index.scss';
const GOODS = [
    { image: 'http://pic11.secooimg.com/product/240/240/54/50/625b8cfe7eb84906b3c437c788768bd7.jpg', name: '商品1', desc: '说的是打开房间啊', price: '2500' },
    { image: 'http://pic11.secooimg.com/product/240/240/98/97/ba7e8521f6484f7dbb0ecc15d2c890c1.jpg', name: '商品2', desc: '卡拉圣诞节发酵的发', price: '23650' },
    { image: 'http://pic11.secooimg.com/product/240/240/55/53/75f8f7069ac8442b8951db32cf3e97c2.jpg', name: '商品3', desc: '撒旦苦涩的风景啊', price: '125' },
    { image: 'http://pic11.secooimg.com/product/240/240/53/54/5676144383aa4d03b233a286b15eec08.jpg', name: '商品4', desc: '啊打发打发打发', price: '3654' },
    { image: 'http://pic11.secooimg.com/product/240/240/97/57/a968072218bd46baaa640eaff95058f0.jpg', name: '商品5', desc: '啊打发打发打发的是发放打发法', price: '235641' },
    { image: 'http://pic11.secooimg.com/product/240/240/97/48/a026021664c547f4931db91014f07d36.jpg', name: '商品6', desc: '啊打发法大师傅发射点发射点法发法大师傅', price: '102541' },
    { image: 'http://pic11.secooimg.com/product/240/240/51/54/3685eb719b694ceca88ffda0aa36ce4d.jpg', name: '商品1', desc: '说的是打开房间啊', price: '2500' },
    { image: 'http://pic11.secooimg.com/product/240/240/98/54/b6df3eaa07c24e339d284dec717b36a1.jpg', name: '商品2', desc: '卡拉圣诞节发酵的发', price: '23650' },
    { image: 'http://pic11.secooimg.com/product/240/240/56/56/88d6fac1329d4398baa438eda5f8fe32.jpg', name: '商品3', desc: '撒旦苦涩的风景啊', price: '125' },
    { image: 'http://pic11.secooimg.com/product/240/240/54/50/625b8cfe7eb84906b3c437c788768bd7.jpg', name: '商品4', desc: '啊打发打发打发', price: '3654' },
    { image: 'http://pic11.secooimg.com/product/240/240/48/51/034054b0943c4a42a34106447703bd04.jpg', name: '商品5', desc: '啊打发打发打发的是发放打发法', price: '235641' },
    { image: 'http://pic11.secooimg.com/product/240/240/55/53/75f8f7069ac8442b8951db32cf3e97c2.jpg', name: '商品6', desc: '啊打发法大师傅发射点发射点法发法大师傅', price: '102541' },
    { image: 'http://pic11.secooimg.com/product/240/240/53/54/5676144383aa4d03b233a286b15eec08.jpg', name: '商品1', desc: '说的是打开房间啊', price: '2500' },
    { image: 'http://pic11.secooimg.com/product/240/240/97/57/a968072218bd46baaa640eaff95058f0.jpg', name: '商品2', desc: '卡拉圣诞节发酵的发', price: '23650' },
    { image: 'http://pic11.secooimg.com/product/240/240/97/48/a026021664c547f4931db91014f07d36.jpg', name: '商品3', desc: '撒旦苦涩的风景啊', price: '125' },
    { image: 'http://pic11.secooimg.com/product/240/240/51/54/3685eb719b694ceca88ffda0aa36ce4d.jpg', name: '商品4', desc: '啊打发打发打发', price: '3654' },
    { image: 'http://pic11.secooimg.com/product/240/240/98/54/b6df3eaa07c24e339d284dec717b36a1.jpg', name: '商品5', desc: '啊打发打发打发的是发放打发法', price: '235641' },
    { image: 'http://pic11.secooimg.com/product/240/240/48/51/034054b0943c4a42a34106447703bd04.jpg', name: '商品6', desc: '啊打发法大师傅发射点发射点法发法大师傅', price: '102541' }
]
class Index extends Component {
    config = {
        navigationBarTitleText: '搜索',
        enablePullDownRefresh: true,
        backgroundTextStyle: 'dark'
    }
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            searchTags: [],
            showSearchResult: false,
            goodsList: [],
            hotTags: ['iPhone', 'iMac', 'MacBook Pro', 'MacBook Air', '拉杆箱', '运动背心', '笔记本', '点烟器', '电脑', '华为', 'vivo'],
            currentPage: 0
        }
    }

    componentWillMount() {
        let searchTags = Taro.getStorageSync("searchTags"), showSearchResult = !!Taro.getStorageSync("showgoods");
        this.setState({ showSearchResult })
        if (searchTags && searchTags.length > 0) {
            this.setState({ searchTags })
        }
        if (showSearchResult) {
            this.onActionClick()
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
        this.setState({
            showSearchResult: true
        })
        this.state.goodsList[0] = GOODS
        this.forceUpdate()
        console.log(this.state.goodsList)
    }
    onReSort = () => {
        let random = Math.floor((Math.random()) * 10) + 1
        let goodsList = GOODS.reverse().filter((item, index) => index < random)
        this.setState({ goodsList })
    }
    onChange = (value) => {
        this.setState({
            value: value
        })
    }
    onClickTag = (value) => {
        this.onChange(value.name)
        this.onActionClick()
    }
    onFocus = () => {
        this.setState({
            showSearchResult: false
        })
    }
    toGoosInfo = () => {
        Taro.navigateTo({
            url: "/pages/goodsinfo/index"
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
    onPullDownRefresh() {
        setTimeout(function () {
            Taro.stopPullDownRefresh()
        }, 1000)

    }
    onBottom() {
        let arr = [...this.state.goodsList[0]]
        this.setState((prestate) => ({
            currentPage: prestate.currentPage + 1
        }))
        this.state.goodsList[this.state.currentPage] = arr
        this.forceUpdate()
      
    }

    render() {
        return (
            <View>
                <AtSearchBar
                    focus={!this.state.showSearchResult}
                    fixed
                    value={this.state.value}
                    onChange={this.onChange}
                    onFocus={this.onFocus}
                    onActionClick={this.onActionClick}
                    onConfirm={this.onActionClick}
                />
                {this.state.showSearchResult && <SearchCondition onReSort={this.onReSort}></SearchCondition>}
                <ScrollView
                    className={`search__result__scrollview ${this.state.showSearchResult ? 'search__result__scrollview--uncondition' : ''}`}
                    scrollY
                    onScrollToLower={this.onBottom}
                    scrollWithAnimation
                    scrollTop='0'
                    enableBackToTop
                >
                    {
                        this.state.showSearchResult &&
                        <View>
                            <SearchResult goods={this.state.goodsList} onRedirect={this.toGoosInfo}></SearchResult>
                        </View>
                    }
                    {
                        !this.state.showSearchResult &&
                        <View>
                            <SearchGrid title="搜索历史" his
                                tags={this.state.searchTags}
                                onClearHistory={this.clearHistory}
                                onClick={this.onClickTag}
                            >
                            </SearchGrid>
                            <SearchGrid title="热门搜索" hot
                                tags={this.state.hotTags}
                                onChangeHot={this.changeHot}
                                onClick={this.onClickTag}
                            >
                            </SearchGrid>
                        </View>
                    }
                </ScrollView>


            </View>
        )
    }
}
export default Index