Component({
  externalClasses: ['o-class'],
  relations: {
    '../grid/index': {
      type: 'ancestor',
      linked(parent) {
        this.data.parent = parent
      }
    }
  },
  properties: {
    icon: {
      type: String
    },
    text: {
      type: String
    }
  },
  data: {
    parent: '',
    style: ''
  },
  ready() {
    this.updateStyle()
  },
  methods: {
    updateStyle() {
      if(!this.data.parent) {
        return
      }
      const { data } = this.data.parent
      const { columnNum, border, square, gutter, clickAble, center, children } = data
      const width = `${100 / columnNum}%`
      console.log('============gutter', gutter)
      const styleWrapper = []
      styleWrapper.push(`width: ${width}`)
      if (square) {
        styleWrapper.push(`padding-top: ${width}`)
      }
      if (gutter) {
        styleWrapper.push(`padding-right: ${gutter}rpx`)
        const index = children.indexOf(this);
        if (index >= columnNum) {
          styleWrapper.push(`margin-top: ${gutter}rpx`);
        }
      }
      this.setData({
        style: styleWrapper.join('; '),
        center,
        border,
        square,
        gutter,
        clickAble
      });
    }
  },
})