Component({
  externalClasses: ['o-class'],
  relations: {
    '../grid-item/index': {
      type: 'descendant',
      linked(child) {
        this.data.children.push(child)
      },
      unlinked(child) {
        this.data.children = this.data.children.filter(
          item => item !== child
        );
      }
    }
  },
  properties: {
    square: {
      type: Boolean,
      observer: 'updateChildren'
    },
    gutter: {
      type: Number,
      value: 0,
      observer: 'updateChildren'
    },
    clickAble: {
      type: Boolean,
      observer: 'updateChildren'
    },
    columnNum: {
      type: Number,
      value: 4,
      observer: 'updateChildren'
    },
    center: {
      type: Boolean,
      value: true,
      observer: 'updateChildren'
    },
    bordered: {
      type: Boolean,
      value: true,
      observer: 'updateChildren'
    }
  },
  data: {
    children: []
  },
  created() {
    const { gutter } = this.data;
    if (gutter) {
      this.setData({
        style: `padding-left: ${gutter}px`
      });
    }
  },
  methods: {
    updateChildren() {
      this.data.children.forEach(
        child => {
          child.updateStyle()
        }
      )
    }
  },
})