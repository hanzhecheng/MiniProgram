import Taro, { Component } from '@tarojs/taro';
import { View, SwiperItem, Image } from '@tarojs/components';
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
            tabList: [{ title: '女士' }, { title: '母婴' }],
            recommond: [
                { image: 'https://img.hbunion.com/upload/image/201810/1539667680540.jpg' },
                { image: 'http://img.hbunion.com/upload/image/201811/1541665683631.jpg' },
                { image: 'http://img.hbunion.com/upload/image/201811/1541579952866.jpg' },
                { image: 'http://img.hbunion.com/upload/image/201811/1541493391947.jpg' },
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
        Taro.navigateTo({
            url: "/pages/search/index"
        })
    }
    handleClick = (currentTab) => {
        this.setState({ currentTab })
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
                    <View style='height:35vh;'>
                        <Image className="home__img" src="http://img.hbunion.com/upload/image/201901/1547191557819.jpg"></Image>
                    </View>
                    <View style='height:20vh;padding:10px 60px;margin:20px 0;'>
                        <Image className="home__img" src="http://img.hbunion.com/upload/image/201901/1546928195687.svg"></Image>
                    </View>
                    <View style='height:30vh;'>
                        <AtTabs current={this.state.currentTab} tabList={this.state.tabList} onClick={this.handleClick}>
                            <AtTabsPane current={this.state.currentTab} index={0} >
                                <Image className="home__img" src="http://img.hbunion.com/upload/image/201901/1547191557819.jpg"></Image>
                            </AtTabsPane>
                            <AtTabsPane current={this.state.currentTab} index={1}>
                                <Image className="home__img" src="http://img.hbunion.com/upload/image/201901/1547191557819.jpg"></Image>
                            </AtTabsPane>
                        </AtTabs>
                    </View>
                    <View style='height:20vh;padding:10px 60px;margin:20px 0;'>
                        <Image className="home__img" src="http://img.hbunion.com/upload/image/201901/1546928213926.svg"></Image>
                    </View>
                    <View className='at-row  at-row--wrap'>
                        {this.state.recommond.map((item,index) => {
                            return (
                                <View className='at-col at-col-6 home__recommend' key={index}>
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