const IndexGank = require("../../models/IndexGank")

Page({
  data: {
    results:[]
  },
 async onLoad(){
   var res = await IndexGank.getindex()
   var results = res.data.results
   this.setData({
    results
   })
 },
 handleadd(e){
   var url = escape(e.currentTarget.dataset.url)
   wx.navigateTo({
     url: `/pages/gankdetail/gankdetail?url=${url}`
   })
 }
})
