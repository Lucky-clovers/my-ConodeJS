/*
 * @Author: QIYE
 * @Date: 2020-06-03 17:29:01
 * @LastEditors: qiye
 * @LastEditTime: 2020-06-03 18:23:21
 */
/**
 * 一个发布-订阅模式的实现
 * 用来解决两个任意组件间的数据传递（一般是非父子组件，因为父子组件用props更好）
 **/
const eventProxy = {
  onObj: {},
  oneObj: {},
  /**
   * 没值得时候接收数据
   * @param {*} key 键
   * @param {*} value 值
   */
  on: function(key, value) {
    if (this.onObj[key] === undefined) {
      //等于一个空对象
      this.onObj[key] = []
    }
    //push 进去接收的参数
    this.onObj[key].push(value)
  },
  //更上面的同理
  one: function(key, value) {
    if (this.oneObj[key] === undefined) {
      this.oneObj[key] = []
    }

    this.oneObj[key].push(value)
  },
  /**
   * 清空当前键的数据
   * @param {*} key 键
   */
  off: function(key) {
    this.onObj[key] = []
    this.oneObj[key] = []
  },

  trigger: function() {
    let key, args
    if (arguments.length === 0) {
      return false
    }

    key = arguments[0]
    args = [].concat(Array.prototype.slice.call(arguments, 1))

    if (this.onObj[key] !== undefined && this.onObj[key].length > 0) {
      for (let i in this.onObj[key]) {
        this.onObj[key][i].apply(null, args)
      }
    }
    if (this.oneObj[key] !== undefined && this.oneObj[key].length > 0) {
      for (let i in this.oneObj[key]) {
        this.oneObj[key][i].apply(null, args)
        this.oneObj[key][i] = undefined
      }
      this.oneObj[key] = []
    }
  }

}

export default eventProxy
