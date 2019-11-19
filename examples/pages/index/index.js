import Page from '../../common/page';
Page({
    handleBtn () {
      wx.navigateTo({
          url: '/pages/button/index'
      })
    },
    handleLayout () {
      wx.navigateTo({
        url: '/pages/layout/index'
      })
    }
});