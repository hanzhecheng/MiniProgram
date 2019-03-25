import Taro, { Component } from '@tarojs/taro';
import { View, Button, Label, Image } from '@tarojs/components';
import { AtAvatar } from 'taro-ui'
import TabBar from '../../components/TabBar/index'
import UserGrid from './usergrid'
import './index.scss';
class Index extends Component {
    config = {
        navigationBarTitleText: '个人中心'
    }
    constructor(props) {
        super(props)
        this.state = {
            current: 3,
            userName: Taro.getStorageSync("userName"),
            userAvatar: Taro.getStorageSync("userAvatar"),
            orderdatas: [
                {
                    image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
                    value: '待付款'
                },
                {
                    image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
                    value: '待发货'
                },
                {
                    image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
                    value: '待收货'
                },
                {
                    image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
                    value: '待评价'
                },
                {
                    image: '',
                    value: ''
                }
            ],
           
            customerdatas: [
                {
                    image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
                    value: '平台客服'
                },
                {
                    image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
                    value: '电话'
                },
                {
                    image: '',
                    value: ''
                },
                {
                    image: '',
                    value: ''
                },
                {
                    image: '',
                    value: ''
                }
            ],
            likedatas: [
                {
                    image: '//pic11.secooimg.com/product/300/300/52/50/42865a9e1d2a49939c830c6d5e6f5d05.jpg',
                    value: '¥12313'
                },
                {
                    image: 'http://pic11.secooimg.com/product/240/240/10/57/e92f6f3f60ea44f68dbb5ca5d23ec505.jpg',
                    value: '¥2500'
                },
                {
                    image: 'http://pic11.secooimg.com/product/240/240/52/53/45f6b6825fd74f628c59122c748c1e5f.jpg',
                    value: '¥91'
                },
            ],
            type2url: {
                'shippingaddress': '/pages/shippingaddress/index',
                'viewhistory': '/pages/viewhistory/index',
                'allorder': '/pages/allorder/index',
                'myfocus': '/pages/myfocus/index'
            }
        }
    }

    redirectToUrl = (type, status) => {
        if (status) {
            Taro.setStorageSync("orderstatus", status)
        } else {
            Taro.setStorageSync("orderstatus", '')
        }
        Taro.navigateTo({
            url: this.state.type2url[type]
        })
    }

    getUserInfo = (value) => {
        let userinfo = JSON.parse(value.detail.rawData)
        this.setState({
            userName: userinfo.nickName,
            userAvatar: userinfo.avatarUrl
        })
        Taro.setStorageSync("userName", userinfo.nickName)
        Taro.setStorageSync("userAvatar", userinfo.avatarUrl)
    }

    render() {
        return (
            <View className="user">
                <View className="user__atavatar">
                    <View>
                        <AtAvatar size="large" circle image={this.state.userAvatar}></AtAvatar>
                    </View>
                    <View className="user__baseinfo">
                        {this.state.userName && <View className="user__name">{this.state.userName}</View>}
                        {this.state.userName && <View className="user__membertype">钻石会员</View>}
                        {!this.state.userName && <Button open-type="getUserInfo" lang="zh_CN" onGetUserInfo={this.getUserInfo} className="user__login">
                            登录
                        </Button>}
                    </View>
                    <View className="user__setting" onClick={this.redirectToUrl.bind(this, 'shippingaddress')}>
                        <View className="user__setting__title">地址管理</View>
                    </View>
                </View>

                <View className="user__focusinfo">
                    <View className="user__focusinfo__flex" onClick={this.redirectToUrl.bind(this, 'myfocus')}>
                        <View className="user__focusinfo__count">0</View>
                        <View className="user__focusinfo__title">我的关注</View>
                    </View>
                    <View className="user__focusinfo__flex" onClick={this.redirectToUrl.bind(this, 'viewhistory')}>
                        <View className="user__focusinfo__count">1</View>
                        <View className="user__focusinfo__title">浏览历史</View>
                    </View>
                </View>

                <UserGrid datas={this.state.orderdatas} main="我的订单" all="查看全部订单" onRedirect={this.redirectToUrl.bind(this, 'allorder')}></UserGrid>

                <UserGrid datas={this.state.customerdatas} main="客服中心"></UserGrid>

                <UserGrid datas={this.state.likedatas} big main="猜你喜欢"></UserGrid>

                <TabBar current={this.state.current}></TabBar>
            </View>

        )
    }
}
export default Index