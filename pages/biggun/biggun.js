const IndexModel = require('../../models/IndexModel')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:0,
    list:[],
  },
 async switchNav(e) {
    var page = this;
    var id = e.target.id;
    if (this.data.currentTab == id) {
      return false;
    } else {
      page.setData({
        currentTab: id
      });
    }
    page.setData({
      active: id
    });
    var url = e.currentTarget.dataset.url
    var res = await IndexModel.getbig(url)
    var list = res.data.list
    console.log(list)
    this.setData({
      list
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    var res = await IndexModel.getbig("http://api.budejie.com/api/api_open.php?a=list&c=subscribe&category_id=5")
    var list = res.data.list
    console.log(list)
    this.setData({
      list
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})