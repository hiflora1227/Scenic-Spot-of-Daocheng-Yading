// pages/post-detail/post-detail.js
// 导入数据源
import {postList} from '../../data/posts-data.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    postdata:{}//声明变量
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const postdata = postList[options.pid]//赋值(获取上个页面传来的值)
    this.setData({postdata})//给data中的变量赋值给当前页面的全局使用
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