Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:[],
    node:"0000000098f10ef3"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getData();
    this.startButton();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },


  getData(){
    var that=this;
    try{
    wx.request({
      url: 'https://www.abc123abc123.top/mqtt.php',
      method: "GET",
      dataType: "json",
      data:{
        node:that.data.node
      },
      header: {
      'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res.data);
        var data = res.data[0]; // 将JSON格式的数据转换成JavaScript对象
        var arrayData = []; // 定义一个空数组
        arrayData[0]=data.X_axis_inclination;
        arrayData[1]=data.Y_axis_inclination;
        arrayData[2]=data.Z_axis_inclination;
        arrayData[3]=data.X_axis_accelerator;
        arrayData[4]=data.x_axis_vibration_frequency;
        arrayData[5]=data.Y_axis_accelerator;
        arrayData[6]=data.Y_axis_vibration_frequency;
        arrayData[7]=data.Z_axis_accelerator;
        arrayData[8]=data.Z_axis_vibration_frequency;
        arrayData[9]=data.temperature;
        arrayData[10]=data.Humidity;
        arrayData[11]=data.UTCtime;
        arrayData[12]=data.Latitude;
        arrayData[13]=data.LatitudeDirection;
        arrayData[14]=data.Longitude;
        arrayData[15]=data.LongitudeDirection;
        arrayData[16]=data.Elevation;
        arrayData[17]=data.X_angular_velocity;
        arrayData[18]=data.Y_angular_velocity;
        arrayData[19]=data.Z_angular_velocity;
        arrayData[20]=data.X_axis_magnetometer;
        arrayData[21]=data.Y_axis_magnetometer;
        arrayData[22]=data.Z_axis_magnetometer;
        arrayData[23]=data.Percentage_of_electric_quantity;
        arrayData[24]=data.cell_voltage;
        arrayData[25]=data.date;
        that.setData({
          data: arrayData // 将数组赋值给data属性
        });
      }
    });
  }
  catch{
    console.log("未获取到数据");
  }
  },

  startButton(){
    setInterval(() => {
      this.getData();
    }, 6000);
},

  showChangedData(event){
  this.setData({
    node:event.detail.value
  })
  console.log(this.data.node);
}

})
