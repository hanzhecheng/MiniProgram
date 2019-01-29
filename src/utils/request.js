import Taro from '@tarojs/taro';
const errorMsg = {
  400: "请求错误",
  401: "未授权，请重新登录",
  403: "拒绝访问",
  404: "请求错误,未找到该资源",
  405: "请求方法未允许",
  408: "请求超时",
  500: "服务器端出错",
  501: "网络未实现",
  502: "网络错误",
  503: "服务不可用",
  504: "网络超时",
  505: "http版本不支持该请求"
};
export default (options = {
  method: 'GET',
  data: {}
}) => {
  return Taro.request({
    url: options.url,
    data: {
      ...options.data
    },
    header: {
      'Content-Type': 'application/json'
    },
    method: options.method.toUpperCase()
  }).then(res => {
    const {
      statusCode,
      data
    } = res;
    if (statusCode >= 200 && statusCode < 300) {
        if (data.status!=='0') {
            Taro.showToast({
                title:`${data.errorMessage}`,
                icon: 'none',
                mask: true,
            })
        }else{
            return data
        }
    } else {
      Taro.showToast({
        title: `网络请求错误,${errorMsg[statusCode]}`
      })
    }
  })
}
