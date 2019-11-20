Component({
  data: {
    main: 'left'
  },
  methods: {
    setMain(e) {
      let main = e.target.dataset.main
      this.setData({
        main
      })
    }
  }
});