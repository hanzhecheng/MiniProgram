import Taro from '@tarojs/taro';

export default {
  namespace: 'common',
  state: {
    access_token: Taro.getStorageSync('access_token'),
    phone:Taro.getStorageSync("phone"),
    code:Taro.getStorageSync("code")
  },

  effects: {

  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },

};