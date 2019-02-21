import Taro, { Component } from '@tarojs/taro';
import { View, ScrollView } from '@tarojs/components';
import { AtSearchBar } from 'taro-ui'
import SearchGrid from './searchgrid'
import SearchResult from './searchResult'
import SearchCondition from './searchCondition'
import './index.scss';
const GOODS = [
    { image: 'http://img.hbunion.com/upload/image/201810/1539075406293.jpg', name: '商品1', desc: '说的是打开房间啊', price: '2500' },
    { image: 'http://img.hbunion.com/upload/image/201811/1541747611194.jpg', name: '商品2', desc: '卡拉圣诞节发酵的发', price: '23650' },
    { image: 'http://img.hbunion.com/upload/image/201811/1541747029694.jpg', name: '商品3', desc: '撒旦苦涩的风景啊', price: '125' },
    { image: 'http://img.hbunion.com/upload/image/201810/1539075406293.jpg', name: '商品4', desc: '啊打发打发打发', price: '3654' },
    { image: 'http://img.hbunion.com/upload/image/201811/1541747611194.jpg', name: '商品5', desc: '啊打发打发打发的是发放打发法', price: '235641' },
    { image: 'http://img.hbunion.com/upload/image/201811/1541747029694.jpg', name: '商品6', desc: '啊打发法大师傅发射点发射点法发法大师傅', price: '102541' },
    { image: 'http://img.hbunion.com/upload/image/201810/1539075406293.jpg', name: '商品1', desc: '说的是打开房间啊', price: '2500' },
    { image: 'http://img.hbunion.com/upload/image/201811/1541747611194.jpg', name: '商品2', desc: '卡拉圣诞节发酵的发', price: '23650' },
    { image: 'http://img.hbunion.com/upload/image/201811/1541747029694.jpg', name: '商品3', desc: '撒旦苦涩的风景啊', price: '125' },
    { image: 'http://img.hbunion.com/upload/image/201810/1539075406293.jpg', name: '商品4', desc: '啊打发打发打发', price: '3654' },
    { image: 'http://img.hbunion.com/upload/image/201811/1541747611194.jpg', name: '商品5', desc: '啊打发打发打发的是发放打发法', price: '235641' },
    { image: 'http://img.hbunion.com/upload/image/201811/1541747029694.jpg', name: '商品6', desc: '啊打发法大师傅发射点发射点法发法大师傅', price: '102541' },
    { image: 'http://img.hbunion.com/upload/image/201810/1539075406293.jpg', name: '商品1', desc: '说的是打开房间啊', price: '2500' },
    { image: 'http://img.hbunion.com/upload/image/201811/1541747611194.jpg', name: '商品2', desc: '卡拉圣诞节发酵的发', price: '23650' },
    { image: 'http://img.hbunion.com/upload/image/201811/1541747029694.jpg', name: '商品3', desc: '撒旦苦涩的风景啊', price: '125' },
    { image: 'http://img.hbunion.com/upload/image/201810/1539075406293.jpg', name: '商品4', desc: '啊打发打发打发', price: '3654' },
    { image: 'http://img.hbunion.com/upload/image/201811/1541747611194.jpg', name: '商品5', desc: '啊打发打发打发的是发放打发法', price: '235641' },
    { image: 'http://img.hbunion.com/upload/image/201811/1541747029694.jpg', name: '商品6', desc: '啊打发法大师傅发射点发射点法发法大师傅', price: '102541' }
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
            hotTags: ['iPhone', 'iMac', 'MacBook Pro', 'MacBook Air', '拉杆箱', '运动背心', '笔记本', '点烟器', '电脑', '华为', 'vivo']
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
            showSearchResult: true,
            goodsList: GOODS
        })
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
        }, 3000)
    }
    onReachBottom() {
        Taro.showToast({
            title: '成功',
            icon: 'success',
            duration: 1500
        })
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
                    scrollWithAnimation
                    scrollTop='0'
                    enableBackToTop
                >
                    {this.state.showSearchResult && <View>
                        <SearchResult goods={this.state.goodsList} onRedirect={this.toGoosInfo}></SearchResult>
                    </View>}
                    {!this.state.showSearchResult && <View>
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
                    </View>}
                </ScrollView>


            </View>
        )
    }
}
export default Index