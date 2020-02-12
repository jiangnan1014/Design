
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[
      "../../images/weixing.jpg",
      "../../images/item.jpg",
      "../../images/5dc92cdb1da2e_mini.jpg",
    ],
    indicatorDots:true,
    indicatorColor:"rgba(11,44,66,.6)",
    active:"#c20c0c",
    circular:true,
    bbs:[
      {name:"干货集中营",num:"各种不一样的干活应有尽有。",pic:"../../images/play/gh.jpg"},
      {name:"社会新鲜事",num:"禁止发布含有暴力，血腥，政治映射，黄色等内容。",pic:"../../images/play/xinxian.jpg"},
      {name:"音乐厅",num:"每天安静下来听听音乐，快乐每一天哦",pic:"../../images/play/yinyue.jpg"},
      {name:"影视介绍",num:"了解火热电影，即将上映电影的各种新鲜详细",pic:"../../images/play/fangyin.jpg"},
      {name:"TodoList",num:"坚持每天完成每个小目标，才能是自己变得更佳优秀",pic:"../../images/play/todo.jpg"},
      {name:"游戏",num:"观看各种游戏，",pic:"../../images/play/youxi.jpg"}
    ]
  },
  handleTodo(){
    wx.navigateTo({
      url: '/pages/todo/todo'
    })
  },
  handleGanhuo(){
    wx.navigateTo({
      url: '/pages/gank/gank'
    })
  },
  handleXinxian(){
    wx.navigateTo({
      url: '/pages/xinxian/xinxian'
    })
  },
  handleMusic(){
    wx.navigateTo({
      url: '/pages/music/music'
    })
  },
  handleMovie(){
    wx.navigateTo({
      url: '/pages/movie/movie'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    
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