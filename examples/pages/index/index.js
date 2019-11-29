import Page from '../../common/page';
import list from '../../config';
Page({
  data: {
    list
  },
  onChangeCollapse(event) {
    this.setData({
      activeNames: event.detail
    });
  },
  onClick(event) {
    const { switchTab, url } = event.currentTarget.dataset;
    if (switchTab) {
      wx.navigateTo({ url })
    }
  }
});