import { basic } from '../mixins/basic'
Component({
  externalClasses: ['o-class'],
  behaviors: [basic],
  relations: {
    '../collapse-item/index': {
      type: 'descendant',
      linked(child) {
        this.children.push(child)
      },
      unlinked(child) {
        this.children = this.children.filter(
          item => item !== child
        )
      }
    }
  },
  properties: {
    value: {
      type: Array,
      observer: 'updateExpanded'
    },
    accordion: {
      type: Boolean,
      observer: 'updateExpanded'
    },
    bordered: {
      type: Number,
      value: true
    }
  },
  created() {
    this.children = []
  },
  methods: {
    updateExpanded() {
      this.children.forEach(child => child.updateExpanded())
    },
    switch(name, expanded) {
      const { accordion, value } = this.data
      if (!accordion) {
        name === expanded
          ? (value || []).concat(name)
          : (value || []).filter(
            activeName => activeName !== name
          )
      } else {
        name === expanded ? name : ''
      }
      this.$emit('change', name)
    }
  }
})