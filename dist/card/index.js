Component({
  externalClasses: ['o-class'],
  options: {
    multipleSlots: true
  },
  properties: {
    full: {
      type: Boolean,
      value: false
    },
    bodyHairline: {
      type: Boolean,
      value: true
    },
    thumb: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: ''
    },
    extra: {
      type: String,
      value: ''
    }
  }
})