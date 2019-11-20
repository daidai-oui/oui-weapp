import Page from '../../common/page';
Page({
  handleBtn (e) {
    let url = e.target.dataset.url
    wx.navigateTo({
      url
    })
  }
});