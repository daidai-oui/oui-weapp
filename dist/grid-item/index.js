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
    parent: ''
  },
  ready() {
    this.updateStyle()
  },
  methods: {
    updateStyle() {
      if(!this.data.parent) {
        return
      }
      const { data, children } = this.data.parent
      const { columnNum, border, square, gutter, clickAble, center } = data
      const width = `${100 / columnNum}%`
      const styleWrapper = []
      styleWrapper.push(`width: ${width}`)
      if (square) {
        styleWrapper.push(`padding-top: ${width}`)
      }
      if (gutter) {
        styleWrapper.push(`padding-right: ${gutter}px`)
        const index = children.indexOf(this);
        if (index >= columnNum) {
          styleWrapper.push(`margin-top: ${gutter}px`);
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