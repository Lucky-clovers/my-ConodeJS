/*
 * @Author: QIYE
 * @Date: 2020-06-05 11:42:58
 * @LastEditors: qiye
 * @LastEditTime: 2020-06-10 11:40:57
 */
const getters = {
  token : state => state.user.token,
  signin : state => state.user.signin,
  accesstoken: state => state.user.accesstoken
}
export default getters
