Page({
    // onShareAppMessage() {
    //     return {
    //         title: 'iView Weapp',
    //         imageUrl: 'https://file.iviewui.com/iview-weapp-logo.png'
    //     };
    // },
    handleClick () {
      wx.navigateTo({
          url: '/pages/button/index'
      })
    }
});