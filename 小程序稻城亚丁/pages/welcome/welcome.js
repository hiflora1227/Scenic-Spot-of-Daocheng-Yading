// pages/welcome/welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onTap:function(){
    console.log('点击事件被调用')    
    wx.navigateTo({
      // 相对路径
      url: '../shouye/shouye',
      // 绝对路径
    //   url: '/pages/posts/posts',
    })

    // 上个页面不保存，直接销毁，返回主页面
    // wx.redirectTo({
    //   url: '../posts/posts',
    // })
    
    //跳转到tabbar页面，并关闭前一个页面
    // wx.switchTab({
    //   url: '../posts/posts',
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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