Component({
  externalClasses: ['o-class'],
  relations: {
    '../row/index': {
      type: 'parent'
    }
  },
  properties: {
    span: {
      value: 0,
      type: Number
    },
    offset: {
      value: 0,
      type: Number
    }
  },
  data: {
    style: ''
  },
  methods: {
    setGutter(gutter) {
      const padding = `${gutter / 2}rpx`;
      const style = gutter ? `padding-left: ${padding}; padding-right: ${padding};` : '';

      if (style !== this.data.style) {
        this.setData({ style });
      }
    }
  }
})