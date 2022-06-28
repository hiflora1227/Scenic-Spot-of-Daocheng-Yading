// pages/posts/posts.js
// 导入文件的两种方式
// var content = require('../../data/posts-data.js')
import {postList} from '../../data/posts-data.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  onGoToDetail:function(params){
    // console.log(params)
    const pid = params.currentTarget.dataset.postsId
    console.log(pid)
    wx.navigateTo({
      url: '/pages/post-detail/post-detail?pid=' + pid,
    })
    // wx.navigateBack({
    //   delta: 1,
      
    // })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const content = [{
      title:'《长津湖》电影',
      author:'@test',
      authorImg:'../../images/shuijiao.jpg',
      img:'https://p6.itc.cn/q_70/images03/20211002/79542d934e7e481ebe6b834eefb9beee.png',
      abstract:'长津湖战役是抗美援朝战争第二次战役中发生在长津湖地区的一场战役。战役中，中国人民志愿军第9兵团3个军，在艰难困苦的条件下，与武器装备世界一流、战功显赫的美军第10军，于1950年11月27日至12月24日在朝鲜长津湖地区进行直接较量，创造了抗美援朝战争中全歼美军整团的纪录，迫使美军王牌部队经历了有史以来“路程最长的退却”。',
      like:100,
      view:200
    },{
      title: "正是虾肥蟹壮时",
      img: "../../images/muwu.jpg",
      abstract: "菊黄蟹正肥，品尝秋之味。徐志摩把,“看初花的荻芦”和“到楼外楼吃蟹”,并列为秋天来杭州不能错过的风雅之事；用林妹妹的话讲是“螯封嫩玉双双满，",
      like:96,
      view:219,
      authorImg: "../../images/cbd.jpg",
      author: "林白衣"
  }]
    this.setData({postList})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})