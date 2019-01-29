import Taro, { Component } from '@tarojs/taro';
import { View, Input, Button, Text } from '@tarojs/components';
// import { connect } from '@tarojs/redux';
import './index.scss';
// @connect(({ login }) => ({
//     ...login
// }))
class Index extends Component {
    config = {
        navigationBarTitleText: '用户登录',
    }
    constructor(props) {
        super(props)
        this.state = {
            phone: '',
            code: '',
            sendStatus: '0',
            countDowns: 0
        }
    }

    updateState = (type, event) => {
        this.setState({
            [type]: event.target.value
        })
    }

    startCountDown() {
        this.countInterval = setInterval(() => {
            this.setState((prevState) => ({
                countDowns: prevState.countDowns - 1
            }))
            if (this.state.countDowns === 0) {
                clearInterval(this.countInterval)
                this.setState({
                    countDowns: 10,
                    sendStatus: '2'
                })
            }
        }, 1000);
    }

    reGetCode = () => {
        Taro.getSystemInfo().then(res => {
            console.log(res)
        })
        let randomCode = Math.floor(Math.random() * 100000).toString().padStart(6, '0')
        this.setState({
            code: randomCode,
            countDowns: 10,
            sendStatus: '1'
        })
        this.startCountDown()
    }

    getCode = (e) => {
        console.log(e)
        Taro.showLoading().then(res => {
            let randomCode = Math.floor(Math.random() * 100000).toString().padStart(6, '0')
            this.setState({
                code: randomCode,
                countDowns: 10,
                sendStatus: '1'
            })
            this.startCountDown()
            Taro.hideLoading()
        })

    }

    checkValid() {
        return new Promise((resolve, reject) => {
            // if (!this.state.phone) {
            //     return reject("请输入手机号")
            // }
            // if (!this.state.code) {
            //     return reject("请输入验证码")
            // }
            return resolve()
        })
    }

    Login = () => {
        this.checkValid().then(() => {
            Taro.showToast({
                title: '成功',
                icon: 'success',
                duration: 2000
            }).then(res => {
                if (this.countInterval) {
                    clearInterval(this.countInterval)
                }
                Taro.redirectTo({
                    url: "/pages/home/index"
                })
            })
        }).catch(err => {
            Taro.showToast({
                title: err,
                icon: 'none',
                duration: 2000
            })
        })
    }

    render() {
        return (
            <View className="hblogin">
                <View className="hblogin__title hblogin__title--big">您好请登录</View>
                <View className="hblogin__title hblogin__margin">新用户注册即享18天会员98元</View>
                <View className="hblogin__input">
                    <Input placeholder="请输入手机号" focus type="number" value={this.state.phone} maxLength="11" onInput={this.updateState.bind(this, 'phone')} />
                </View>
                <View className="hblogin__input">
                    <Input placeholder="请输入验证码" type="number" value={this.state.code} maxLength="6" onInput={this.updateState.bind(this, 'code')} />
                    {this.state.sendStatus == "2" && <View className="hblogin__regetcode" onClick={this.reGetCode}>重新获取</View>}
                    {this.state.sendStatus == "1" && <View className="hblogin__regetcode"><Text className="hblogin__countdown__number">{this.state.countDowns}</Text>秒后重新发送</View>}
                    {this.state.sendStatus == "0" && <View className="hblogin__regetcode" onClick={this.getCode}>获取验证码</View>}
                </View>
               
                <Button className="hblogin__button" onClick={this.Login}>登录</Button>
            </View>
        )
    }
}
export default Index