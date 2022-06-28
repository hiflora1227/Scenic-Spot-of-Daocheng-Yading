// pages/zhihuiyading/zhihuiyading.js
// 导入数据页
import {zhList} from '../../data/chList.js'
// 引用百度地图微信小程序JSAPI模块
var bmap = require('../../libs/bmap-wx.min');
var wxMarkerData = []; 


Page({

  /**
   * 页面的初始数据
   */
  data: {
    city: ''
  },
  goToFood:function(params){
    wx.navigateTo({
      url: '/pages/meishi/meishi',
    })
  },
  goToLive:function(params){
    wx.navigateTo({
      url: '/pages/zhu/zhu',
    })
  },
  goToPlay:function(params){
    wx.navigateTo({
      url: '/pages/wan/wan',
    })
  },
  goToAmmuse:function(params){
    wx.navigateTo({
      url: '/pages/le/le',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var that = this; 
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({ 
        ak: 'zwHLQGoM5eq0BkLOBb4oOK8kB13chIuT'  
    }); 
    var fail = function(data) { 
        console.log(data) 
    }; 
    var success = function(data) { 
        wxMarkerData = data.originalData.result.addressComponent.city; 
        that.setData({ 
            city: wxMarkerData 
        })
    } 
    // 发起geocoding检索请求 
    BMap.regeocoding({ 
        fail: fail, 
        success: success
    }); 

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