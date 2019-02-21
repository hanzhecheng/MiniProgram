import Taro from '@tarojs/taro';
const appid = 'wx9504f077bdc24ea2'
const secret = 'a98c03055579cfd517a45fb4771377e9'

export function parseMoney(num) {
  num = num.toString().replace(/\$|,/g, '')
  if (isNaN(num)) num = '0'

  num = Math.floor(num * 100 + 0.50000000001)
  let cents = num % 100
  num = Math.floor(num / 100).toString()

  if (cents < 10) cents = '0' + cents
  for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
    num = num.substring(0, num.length - (4 * i + 3)) + ',' +
      num.substring(num.length - (4 * i + 3))
  }

  return (num + '.' + cents)
}
export async function getOpenId() {
  const openId = Taro.getStorageSync('taro_demo_openid')
  if (openId) {
    return openId
  } else {
    const loginRes = await Taro.login()
    console.log(JSON.stringify(loginRes))
    const res = await Taro.request({
      url: `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${loginRes.code}&grant_type=authorization_code`
    })
    const openId = res.data.openid
    console.log(JSON.stringify(res.data))
    Taro.setStorage({
      key: 'taro_demo_openid',
      data: openId
    })
    return openId
  }
}
