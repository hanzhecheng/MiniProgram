import Taro, { Component } from '@tarojs/taro';
import { View, ScrollView, Image } from '@tarojs/components';
import { AtTabs, AtTabsPane } from 'taro-ui'
import './index.scss';
import TabBar from '../../components/TabBar/index'
class Index extends Component {
    config = {
        navigationBarTitleText: '首页'
    }
    constructor(props) {
        super(props)
        this.state = {
            current: 0,
            currentTab: 0,
            tabList: [{ title: '国际品牌' }, { title: '热门推荐' }],
            recommond: [
                { image: '//pic11.secooimg.com/product/300/300/51/50/32ea0f1b2b5a4a53bf50c718079d0353.jpg' },
                { image: '//pic11.secooimg.com/product/300/300/99/55/c7c52761822b4e299f87eb75800c3594.jpg' },
                { image: '//pic11.secooimg.com/product/300/300/99/57/c9d8a373cb7d43b39f3c664a70c38074.jpg' },
                { image: '//pic11.secooimg.com/product/300/300/56/49/81884b533dfd402b97938df776fad82f.jpg' },
            ]
        }
    }
    handleClick = (value) => {
        this.setState({
            current: value
        })
        if (value) {

        }
        Taro.redirectTo({
            url: `/pages/user/index`
        })
    }
    onScrolltoupper = () => {

    }
    onChange = () => {
        Taro.setStorageSync("showgoods", false)
        Taro.navigateTo({
            url: "/pages/search/index"
        })
    }
    handleClick = (currentTab) => {
        this.setState({ currentTab })
    }
    toSearchResult = () => {
        Taro.setStorageSync("showgoods", true)
        Taro.navigateTo({
            url: "/pages/search/index"
        })
    }
    render() {

        return (
            <View>
                <View onClick={this.onChange} className="home__search">
                    <View className='at-icon at-icon-search'>搜索</View>
                </View>
                <ScrollView
                    className='home__scrollview'
                    scrollY
                    scrollWithAnimation
                    scrollTop='0'
                    enableBackToTop
                >
                    <View style='height:35vh;' onClick={this.toSearchResult}>
                        <Image className="home__img" src="//pic10.secooimg.com/push/18/11/31870faf4d624ab7873c02f59da6004b.jpg"></Image>
                    </View>
                   
                    <View style='height:30vh;'>
                        <AtTabs current={this.state.currentTab} tabList={this.state.tabList} onClick={this.handleClick}>
                            <AtTabsPane current={this.state.currentTab} index={0} >
                                <Image className="home__img" src="//pic13.secooimg.com/push/18/11/ad48819e0e524d72a31dfb902561f744.jpg" onClick={this.toSearchResult}></Image>
                            </AtTabsPane>
                            <AtTabsPane current={this.state.currentTab} index={1} >
                                <Image className="home__img" src="//pic12.secooimg.com/push/18/11/ab8194828ffc4a5a91202b5ac17c241d.jpg" onClick={this.toSearchResult}></Image>
                            </AtTabsPane>
                        </AtTabs>
                    </View>
                 
                    <View className='at-row  at-row--wrap'>
                        {this.state.recommond.map((item, index) => {
                            return (
                                <View className='at-col at-col-6 home__recommend' key={index} onClick={this.toSearchResult}>
                                    <Image className="home__img" src={item.image}></Image>
                                </View>
                            )
                        })}
                    </View>
                </ScrollView>

                <TabBar current={this.state.current}></TabBar>
            </View>

        )
    }
}
export default Index