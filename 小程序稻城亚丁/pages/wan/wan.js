import {zhList} from '../../data/chList'
let _page
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 文字是否收起，默认收起
    ellipsis: true
  },
  /**
    * 收起/展开按钮点击事件
    */
   ellipsis() {
    _page = this;
    let value = !this.data.ellipsis;
    _page.setData({
      ellipsis: value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({zhList})
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