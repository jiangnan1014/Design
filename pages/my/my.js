

Page({
  data: {
    imageUrl: '../../images/weixing.jpg',
    isname: false,
    name: "江南",
    oldname:""
  },
  //事件处理函数
  handelimg() {
    wx.chooseImage({
      count: 9, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: (res) => {
        const src = res.tempFilePaths[0]
        this.setData({
          imageUrl: src
        })
      },


    })
  },
  handlename() {
    var isname = this.data.isname
    var oldname = this.data.name
    this.setData({
      oldname
    })
    isname = true
    this.setData({
      isname,
      name: ""
      
    })
  },
  handleCilck(e) {
    var name = e.detail.value

    if (name == "") {
      this.setData({
        name: this.data.oldname,
        isname: false
      })
    } else {
      this.setData({
        name,
        isname: false
      })
    }

  },
  handleBlur(e) {
    var name=e.detail.value
    if (name == "") {
      this.setData({
        name: this.data.oldname,
        isname: false
      })
    } else {
      this.setData({
        name,
        isname: false
      })
    }
  },
  handleLike(){
    wx.navigateTo({
      url: '/pages/like/like'
    })
  },
  handleWorks(){
    wx.navigateTo({
      url: '/pages/works/works'
    })
  },
  handleGuanzhu(){
    wx.navigateTo({
      url: '/pages/guanzhu/guanzhu'
    })
  },
  handleFans(){
    wx.navigateTo({
      url: '/pages/fans/fans'
    })
  }
})
