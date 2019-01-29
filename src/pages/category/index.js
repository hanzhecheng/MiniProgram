import Taro, { Component } from '@tarojs/taro';
import { View, Input, Button } from '@tarojs/components';
import { AtTabs, AtTabsPane, AtGrid, AtSearchBar } from 'taro-ui'
import TabBar from '../../components/TabBar/index'
import './index.scss';
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
                { title: '服装' },
                { title: '食品' },
                { title: '标签页3' },
                { title: '标签页4' },
                { title: '标签页5' },
                { title: '标签页6' },
            ],
            categorys: [
                {
                    image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
                    value: '领取中心'
                },
                {
                    image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
                    value: '找折扣'
                },
                {
                    image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
                    value: '领会员'
                },
                {
                    image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
                    value: '新品首发'
                },
                {
                    image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
                    value: '领京豆'
                },
                {
                    image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
                    value: '手机馆'
                }
            ]
        }
    }
    componentDidMount() {
       
    }
    onChange = () => {

    }
    handleClick = (value) => {
        this.setState({
            currentTabs: value
        })
    }
    render() {
        let atgrids = [1, 1, 1, 1, 1, 1].map((item, index) => {
            return (<AtTabsPane tabDirection='vertical' key={index} current={this.state.currentTabs} index={0}>
                <View className='category__atgrid'>
                    <AtGrid mode='rect' hasBorder={false} columnNum={2} data={this.state.categorys} />
                </View>
            </AtTabsPane>)
        })
        return (
            <View>
                <AtSearchBar
                    value={this.state.value}
                    onChange={this.onChange}
                />
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