// components/User/User.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: Object
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    isshow:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(){
      var isshow = this.data.isshow
      isshow = !isshow
      this.setData({
        isshow
      })
    },
  
  }
})
