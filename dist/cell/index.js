Component({
  externalClasses: ['o-class'],
  options: {
    multipleSlots: true
  },
  relations: {
  },
  properties: {
    // 左侧标题
    title: {
      type: String
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
    iconColor: {
      type: String,
      value: '#1d2437' // 标题左侧icon颜色
    },
    rightIcon: {
      type: String,
      value: 'enter'
    },
    //  是否展示右侧箭头
    isLink: {
      type: null,
      value: ''
    },
    // 链接类型，可选值为 navigateTo，redirectTo，switchTab，reLaunch
    linkType: {
      type: String,
      value: 'navigateTo'
    },
    url: {
      type: String,
      value: ''
    },
    border: {
      type: Boolean,
      value: true
    }
  },
  data: {
    isLastCell: true
  },
  methods: {
    navigateTo() {
      console.log('==============navigateTo')
    },
    handleTap(event) {
      this.triggerEvent('click', event.detail);
    }
  },
})