const IndexModel = require('../../models/IndexModel')
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
    isdianzan: true,
    ischaping: true,
    ispinglun: false,
    comment:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleshare() {
      wx.showActionSheet({
        itemList: ["分享到微信", "分享到朋友圈"],
        itemColor: '#000000',
        success: (res) => {
        },
        fail: () => { },
        complete: () => { }
      });
    },
    dianzan() {
      var isdianzan = this.properties.isdianzan
      isdianzan = !isdianzan
      this.setData({
        isdianzan
      })
    },
    chaping() {
      var ischaping = this.properties.ischaping
      ischaping = !ischaping
      this.setData({
        ischaping
      })
    },
    async pinglun() {
      var ispinglun = this.data.ispinglun
      ispinglun = !ispinglun
      this.setData({
        ispinglun
      })
      var id = this.properties.data.id
      var data = await IndexModel.getcomment(id)
      var comment  = data.data.data .slice(0,2)
      this.setData({
        comment
      })
    },
    handleMore(){
      var id = this.properties.data.id
      wx.navigateTo({
        url: `/pages/more/more?id=${id}`
      })
    }
  },
  options: {
    multipleSlots: true
  }
})
