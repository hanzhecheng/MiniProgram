import Taro, { Component } from '@tarojs/taro';
import { View, Swiper, SwiperItem, Image } from '@tarojs/components';
import { AtTimeline } from 'taro-ui'
import './index.scss';
import TabBar from '../../components/TabBar/index'
class Index extends Component {
    config = {
        navigationBarTitleText: '首页'
    }
    constructor(props) {
        super(props)
        this.state = {
            current: 0
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
    render() {

        return (
            <View>
                <View>
                    <Swiper
                        className='home__swiper'
                        indicatorColor='#999'
                        indicatorActiveColor='#333'
                        circular
                        indicatorDots
                        autoplay>
                        <SwiperItem>
                            <Image src="https://wx.qlogo.cn/mmopen/vi_32/PiajxSqBRaELZA65gQHEsDb567UVB2SI70Mrx4pCGvyBbrlvknfxiaqqccG9jmGahnicWSn30Wg1YsItoIRaVibMMg/132"></Image>
                        </SwiperItem>

                        <SwiperItem>
                            <Image src="https://wx.qlogo.cn/mmopen/vi_32/PiajxSqBRaELZA65gQHEsDb567UVB2SI70Mrx4pCGvyBbrlvknfxiaqqccG9jmGahnicWSn30Wg1YsItoIRaVibMMg/132"></Image>
                        </SwiperItem>

                        <SwiperItem>
                            <Image src="https://wx.qlogo.cn/mmopen/vi_32/PiajxSqBRaELZA65gQHEsDb567UVB2SI70Mrx4pCGvyBbrlvknfxiaqqccG9jmGahnicWSn30Wg1YsItoIRaVibMMg/132"></Image>
                        </SwiperItem>
                    </Swiper>
                </View>

                <TabBar current={this.state.current}></TabBar>
            </View>

        )
    }
}
export default Index