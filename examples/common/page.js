export default function(options = {}) {
  return Page({
    onShareAppMessage() {
      return {
        title: 'Oui Weapp 组件库演示'
      };
    },
    ...options
  });
}