import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtTabs, AtTabsPane } from 'taro-ui'
import TabBar from '../../components/TabBar/index'
import './index.scss';
const myCategory = [{
    image: 'http://img.hbunion.com/upload/image/201810/1539075406293.jpg',
    value: '领取中心'
},
{
    image: 'http://img.hbunion.com/upload/image/201811/1541747611194.jpg',
    value: '找折扣'
},
{
    image: 'http://img.hbunion.com/upload/image/201811/1541747029694.jpg',
    value: '领会员'
},
{
    image: 'http://img.hbunion.com/upload/image/201810/1539075406293.jpg',
    value: '领取中心'
},
{
    image: 'http://img.hbunion.com/upload/image/201811/1541747611194.jpg',
    value: '找折扣'
},
{
    image: 'http://img.hbunion.com/upload/image/201811/1541747029694.jpg',
    value: '领会员'
},
{
    image: 'http://img.hbunion.com/upload/image/201810/1539075406293.jpg',
    value: '领取中心'
},
{
    image: 'http://img.hbunion.com/upload/image/201811/1541747611194.jpg',
    value: '找折扣'
},
{
    image: 'http://img.hbunion.com/upload/image/201811/1541747029694.jpg',
    value: '领会员'
}]
class Index extends Component {
    config = {
        navigationBarTitleText: '分类'
    }
    constructor(props) {
        super(props)
        this.state = {
            current: 1,
            currentTabs: 0,
            value: '',
            tabList: [
                { title: '母婴' },
                { title: '珠宝' },
                { title: '箱包' },
                { title: '洗护' },
                { title: '美妆' },
                { title: '服装' },
                { title: '鞋靴' },
                { title: '食品' }
            ],
            categorys: [],

        }
    }
    componentDidMount() {
        let random = Math.floor(Math.random() * 10) + 1;
        let arr = myCategory.filter((item, index) => {
            return index < random
        })
        this.setState({
            categorys: arr
        })
    }
    onChange = () => {
        Taro.navigateTo({
            url: "/pages/search/index"
        })
    }
    onRedirectToDetail=()=>{
        Taro.navigateTo({
            url: "/pages/goodsinfo/index"
        })
    }
    handleClick = (value) => {
        let random = Math.floor(Math.random() * 10) + 1;
        let arr = myCategory.filter((item, index) => {
            return index < random
        })
        this.setState({
            currentTabs: value,
            categorys: arr
        })
    }
    render() {

        let atgrids = this.state.tabList.map((item, index) => {
            return (
                <AtTabsPane tabDirection='vertical' key={index} current={this.state.currentTabs} index={index}>
                    <View className='at-row at-row--wrap'>
                        {this.state.categorys.map(items => {
                            return (
                                <Image className="at-col at-col-4 category__img" src={items.image} onClick={this.onRedirectToDetail}></Image>
                            )
                        })}
                    </View>
                </AtTabsPane>
            )
        })
        return (
            <View>
                <View onClick={this.onChange} className="category__search">
                    <View className='at-icon at-icon-search'>搜索</View>
                </View>

                <AtTabs
                    current={this.state.currentTabs}
                    scroll
                    height="93vh"
                    tabDirection='vertical'
                    tabList={this.state.tabList}
                    onClick={this.handleClick}>
                    {atgrids}
                </AtTabs>
                <TabBar current={this.state.current}></TabBar>
            </View>

        )
    }
}
export default Index