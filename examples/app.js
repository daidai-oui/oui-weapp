App({
    globalData: {

    },
    onLaunch() {
      const updateManager = wx.getUpdateManager()
      wx.getUpdateManager().onUpdateReady(function() {
        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
        updateManager.applyUpdate()
      })
    }
});