import Page from '../../common/page';
Page({
  data: {
    colorData:[
      {
        title: '主色（用于品牌颜色和标识）',
        list: [
          { class: 'primary', title: 'Primary', content: '#2979FF' },
          { class: 'dark-primary', title: 'Dark Primary', content: '#448AFF' },
          { class: 'light-primary', title: 'Light Primary', content: '#82B1FF' },
          { class: 'btn-disabled', title: 'Disabled', content: '#D2E9FD' }
        ]
      },
      {
        title: '辅助色（用于标识状态的按钮等)',
        list: [
          { class: 'success', title: 'Success', content: '#52C41B' },
          { class: 'warning', title: 'Warning', content: '#FAAD16' },
          { class: 'error', title: 'Error', content: '#ED3F14' }
        ]
      },
      {
        title: '中性色（用于标识状态的按钮等)',
        list: [
          { class: 'title', title: 'Title 标题', content: '#1D2437' },
          { class: 'content', title: 'Content 正文', content: '#48505F' },
          { class: 'sub', title: 'Sub Color 辅助', content: '#7F8490' },
          { class: 'disabled', title: 'Disabled 失效', content: '#BBBEC3' },
          { class: 'border dark', title: 'Border 边框', content: '#DDDEE0' },
          { class: 'divider dark', title: 'Divider 分割线', content: '#E9EAEC' },
          { class: 'background dark', title: 'Background 背景', content: '#F8F8F8' }
        ]
      }
    ]
  },
});