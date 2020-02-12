// pages/todolist/todolist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    id:1,
    value:[]
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  handleSubmit(event){
    var keyword = event.detail.value.keyword;
    var id=this.data.id
    var list=this.data.list
    var obj={}
    obj.name=keyword
    obj.id=id
    obj.isTodo=true
    id=id+1
    list.push(obj)
    this.setData({
      list,
      id,
      value:""
    })
  },
  handleClick(event){
    var {id} = event.currentTarget.dataset

    var list=this.data.list
    list.forEach(item => {
      if(item.id==id){
        item.isTodo=!item.isTodo
      }
    });
    this.setData({
      list
    })
  },
  handledel(event){
    var id = event.currentTarget.dataset.id
    var list=this.data.list
    var number=list.findIndex(item=>{
      if(item.id==id){
        return true
      }
    })
    list.splice(number,1)
    this.setData({
      list
    })
  }


})