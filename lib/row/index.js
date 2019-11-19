Component({
  externalClasses: ['o-class'],
  relations: {
    '../col/index': {
      type: 'child',
      linked(target) {
        if (this.data.gutter) {
          target.setGutter(this.data.gutter)
        }
      }
    }
  },
  properties: {
    gutter: {
      value: 0,
      type: Number
    }
  },
  observers: {
    gutter: function() {
      this.setGutter()
    }
  },
  methods: {
    setGutter() {
      const { gutter } = this.data;
      const margin = `-${Number(gutter) / 2}px`;
      const style = gutter
        ? `margin-right: ${margin}; margin-left: ${margin};`
        : '';

      this.setData({ style });
    }
  },
})