import { basic } from '../mixins/basic'
const nextTick = () => new Promise(resolve => setTimeout(resolve, 20));
Component({
  externalClasses: ['o-class'],
  options: {
    multipleSlots: true
  },
  behaviors: [basic],
  relations: {
    '../collapse/index': {
      type: 'ancestor',
      linked(parent) {
        this.parent = parent
      }
    }
  },
  properties: {
    name: {
      type: String,
      value: null
    },
    // 左侧标题
    title: {
      type: String,
      value: null
    },
    // 标题下方的描述信息
    label: {
      type: String
    },
    // 右侧内容
    desc: {
      type: String
    },
    // 标题左侧icon
    icon: {
      type: String,
      value: ''
    },
    //  是否展示右侧箭头
    isLink: {
      type: Boolean,
      value: true
    },
    disabled: {
      type: Boolean,
      value: false
    }
  },
  data: {
    contentHeight: 0,
    expanded: false,
    transition: false
  },
  ready() {
    this.updateExpanded()
    .then(nextTick)
    .then(() => {
      const data = { transition: true }
      if (this.data.expanded) {
        data.contentHeight = 'auto'
      }
      this.setData(data)
    })
  },
  methods: {
    updateExpanded() {
      if (!this.parent) {
        return Promise.resolve();
      }
      const { value, accordion } = this.parent.data;
      const { children = [] } = this.parent
      const { name } = this.data;
      const index = children.indexOf(this)
      const currentName = name === null ? index : name

      const expanded = accordion
      ? value === currentName
      : (value || []).some(name => name === currentName)
      const stack = []

      if (expanded !== this.data.expanded) {
        stack.push(this.updateStyle(expanded))
      }

      stack.push(this.set({ index, expanded }))

      return Promise.all(stack);
    },
    updateStyle(expanded) {
      return this.getRect('.o-collapse-item-content')
        .then((rect) => rect.height)
        .then((height) => {
          if (expanded) {
            return this.set({
              contentHeight: height ? `${height}px` : 'auto'
            });
          }

          return this.set({ contentHeight: `${height}px` })
            .then(nextTick)
            .then(() => this.set({ contentHeight: 0 }));
        });
    },
    onClick() {
      if (this.data.disabled) {
        return
      }
      const { name, expanded } = this.data
      const index = this.parent.children.indexOf(this)
      const currentName = name === null ? index : name
      this.parent.switch(currentName, !expanded)
      if (!this.data.expanded) {
        this.setData({
          expanded: !expanded,
          contentHeight: 'auto'
        });
      }
    },
    onTransitionEnd() {
      // console.log('=============this.data.expanded', this.data.expanded)

    }
  },
})