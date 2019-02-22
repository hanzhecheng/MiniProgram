import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtTabs, AtTabsPane } from 'taro-ui'
import TabBar from '../../components/TabBar/index'
import './index.scss';
const myCategory = [{
    image: '//pic11.secooimg.com/product/300/300/98/10/bf5450337ffe4ed78b05104460422f80.jpg',
},
{
    image: '//pic11.secooimg.com/product/300/300/99/98/cb356ea56999483793a8c7ad75c3f22c.jpg',
},
{
    image: '//pic11.secooimg.com/product/300/300/98/98/bbe700268686478bb3e3dd86f33f66a6.jpg',
},
{
    image: '//pic11.secooimg.com/product/300/300/52/50/42865a9e1d2a49939c830c6d5e6f5d05.jpg',
},
{
    image: '//pic11.secooimg.com/product/300/300/48/97/0a90c6ab49724053a5cfe1cf6d16d8c4.jpg',
},
{
    image: 'http://pic11.secooimg.com/product/240/240/10/57/e92f6f3f60ea44f68dbb5ca5d23ec505.jpg',
},
{
    image: 'http://pic11.secooimg.com/product/240/240/48/57/09c6bdb4a6414fae9750b47e1dddc18a.jpg',
},
{
    image: 'http://pic11.secooimg.com/product/240/240/99/54/c62a094d931a4d9d8a8d571582ebad6f.jpg',
},
{
    image: 'http://pic11.secooimg.com/product/240/240/52/53/45f6b6825fd74f628c59122c748c1e5f.jpg',
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
                { title: '包袋' },
                { title: '腕表' },
                { title: '珠宝' },
                { title: '服饰' },
                { title: '鞋履' },
                { title: '配饰' },
                { title: '运动' },
                { title: '家居' }
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