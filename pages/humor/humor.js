const IndexModel = require('../../models/IndexModel')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    start: 0,
    value: "",
    isShow: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    var res = await IndexModel.getindex(29)
    var list = res.data.list
    this.setData({
      list
    })
    wx.showLoading({
      title: "加载中",
      mask: true,
    });
    setTimeout(() => {
      wx.hideLoading();
    }, 100);
  },
  async onChange(event) {
    wx.showLoading({
      title: "加载中",
      mask: true,
    });
    var value = event.detail.name
    var res = await IndexModel.getindex(value)
    var list = res.data.list
    this.setData({
      list,
      value
    })
    setTimeout(() => {
      wx.hideLoading();
    }, 100);

  },
  async onPullDownRefresh() {
    wx.showLoading({
      title: "加载中",
      mask: true,
    });
    var start = this.data.start
    start += 20
    var value = this.data.value
    var res = await IndexModel.getindex(value, start)
    var list = res.data.list
    this.setData({
      start,
      value,
      list: list.concat(this.data.list)
    })
    setTimeout(() => {
      wx.hideLoading();
    }, 100);
  },
  async onReachBottom() {
    wx.showLoading({
      title: "加载中",
      mask: true,
    });
    var start = this.data.start
    start += 20
    var value = this.data.value
    var res = await IndexModel.getindex(value, start)
    var list = res.data.list
    this.setData({
      start,
      value,
      list: this.data.list.concat(list)
    })
    setTimeout(() => {
      wx.hideLoading();
    }, 100);
  },
  handleImage(e) {
    console.log(1)
    var url = e.currentTarget.dataset.url;
    wx.previewImage({
      current: url, // 当前显示图片的http链接
      urls: url
    })
  }
})