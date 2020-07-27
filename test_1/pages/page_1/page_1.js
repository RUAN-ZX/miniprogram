// pages/page_1/page_1.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        num:0,
        tabs:[
            {
                id:0,
                name:"Index",
                isActive:true
            },
            {
                id:1,
                name:"Origin",
                isActive:false
            },
            {
                id:2,
                name:"Devision",
                isActive:false
            },
            {
                id:3,
                name:"About",
                isActive:false
            }
        ]

    },
    handleItemChange(e){
        const {index}=e.detail;
        let tabs = JSON.parse(JSON.stringify(this.data.tabs)); 

        tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);

        this.setData({
            tabs
        })
    },
    handleInputR(e){
        this.setData({
            num:e.detail.value
        }

        )
    },

    // 传参 不能直接传 而是通过事件event
    handletap(e){
        const step = e.currentTarget.dataset.step;
        this.setData({
            num: this.data.num + step
        })

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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