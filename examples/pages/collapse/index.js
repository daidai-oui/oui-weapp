import Page from '../../common/page';
Page({
  data: {
    active1: [0],
    active2: 0,
    active3: [],
    title1: '代代会员',
    title2: '代代回收',
    title3: '代代二手',
    content1: '倡导垃圾分类',
    content2: '全民参与分类',
    content3: '会员活动平台'
  },
  onChange(event) {
    const { key } = event.currentTarget.dataset;
    this.setData({
      [key]: event.detail
    });
  }
})