// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        swiperList:[]
    },

    /**
        * 访问失败的问题！！！
     */
    onLoad: function (options) {
        wx.request({
          url: 'https://www.baidufe.com/test-post.php',
          data:{
            username:"postman",
            password:"123456"
                
          },

          method:'post',

          success:(result)=>{
              this.setData({
                  swiperList:[
                      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596131381499&di=2a83933721b86e67486601c4a52eec39&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fback_pic%2Fqk%2Fback_origin_pic%2F00%2F03%2F74%2Fa5122f03dd68b38c0f344bc8f4d4065f.jpg",
                      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596131418348&di=bc840efdbfa6bd717fc0a83b845675ae&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fback_pic%2Fqk%2Fback_origin_pic%2F00%2F04%2F14%2F8d59ffbfb93a77f291a48496e007e5ee.jpg",
                      "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2696964805,314438294&fm=26&gp=0.jpg"
                  ]
              })
          }
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