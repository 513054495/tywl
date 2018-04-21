Page({
  data: {
    imageWidth: wx.getSystemInfoSync().windowWidth,
    imageWidth1: (wx.getSystemInfoSync().windowWidth-40)/4,
    imgUrls: [
      '../resources/a.jpg', 
      '../resources/b.jpg',    
      '../resources/c.jpg',
      '../resources/d.jpg'
    ],
    list:[
       '我的自由行--北京之旅',
       '三亚旅游全攻略',
       '诗和远方--邂逅云南'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  }
})