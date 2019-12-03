export const basic = Behavior({
  methods: {
    $emit(...args) {
      this.triggerEvent(...args);
    },

    getRect(selector, all) {
      return new Promise(resolve => {
        wx.createSelectorQuery()
          .in(this)[all ? 'selectAll' : 'select'](selector)
          .boundingClientRect(rect => {
            if (all && Array.isArray(rect) && rect.length) {
              resolve(rect);
            }

            if (!all && rect) {
              resolve(rect);
            }
          })
          .exec();
      });
    },
    set(data, callback) {
      return new Promise(resolve => {
        this.setData(data, () => {
          if (callback && typeof callback === 'function') {
            callback.call(this);
          }
          resolve();
        });
      });
    }
  }
});
