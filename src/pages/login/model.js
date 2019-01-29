import Taro from '@tarojs/taro';
export default {
    namespace: "login",
    state: {
        phone: '',
        code: '',
    },
    effects: {
        *login(action, { call, put }) {
            yield put({ type: 'save', payload: {} })
        }
    },
    reducers: {
        save(state, { payload }) {
            return { ...state, ...payload }
        }
    }
}
