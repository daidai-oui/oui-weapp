Component({
  externalClasses: ['o-class'],

  properties: {
    // 主轴方向
    dir: {
      type: String,
      value: 'left'
    },
    // 主轴对齐方式
    main: {
      type: String,
      value: 'left'
    },
    // 交叉对齐方式
    cross: {
      type: String,
      value: 'stretch'
    },
    // 换行设置
    wrap: {
      type: String,
      value: 'nowrap'
    }
  },
  methods: {
  }
});
