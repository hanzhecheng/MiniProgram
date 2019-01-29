import { Component } from '@tarojs/taro'
import { AtBadge, AtButton } from 'taro-ui'
import './index.scss'
export default class Index extends Component {

    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        return (
            <div>
                <AtBadge dot>
                    <AtButton size='small'>按钮</AtButton>
                </AtBadge>
                <AtBadge value='NEW'>
                    <AtButton size='small'>按钮</AtButton>
                </AtBadge>
                <AtBadge value={'···'}>
                    <AtButton size='small'>按钮</AtButton>
                </AtBadge>
            </div>
        )
    }
}