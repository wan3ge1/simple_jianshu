import Mock from 'mockjs'
Mock.mock('/api/headerList', {
  success: true,
  data: ["高考","区块链","三生三世","崔永元","vue",
  "小程序","茶点微小说","萨沙讲史堂","夜幕下的地安门",
  "擦亮你的眼","理财","毕业","手帐","简书交友","spring",
  "古风","故事","暖寄归人","旅行","连载","教育","简书",
  "生活","投稿","历史","PHP","考研","docker","EOS",
  "微信小程序","PPT","职场","大数据","创业","书评",
  "东凤","饱醉豚","雨落荒原","程序员","爬虫","时间管理",
  "kotlin","数据分析","阴阳合同","设计","红楼梦","父亲节",
  "女人和衣服","swift","高考作文"]
})

Mock.mock('/api/home', {
  topicList: [
    {
			id: 1,
			title: "社会热点",
			imgUrl: "//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
		}, {
			id: 2,
			title: "手手绘",
			imgUrl: "//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
		}
	],
	articleList: [
		{
			id: 1,
			title: "胡歌12年后首谈车祸",
			desc: "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
			imgUrl: "//upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
		}, {
			id: 2,
			title: "胡歌12年后首谈车祸：既然活下来了，就不能白白活着",
			desc: "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
			imgUrl: "//upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
		}, {
			id: 3,
			title: "胡歌12年后首谈车祸：既然活下来了，就不能白白活着",
			desc: "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
			imgUrl: "//upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
		}, {
			id: 4,
			title: "胡歌12年后首谈车祸：既然活下来了，就不能白白活着",
			desc: "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
			imgUrl: "//upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
		}
	],
	recommendList: [{
		id: 1,
		imgUrl: "http://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png"
	}, {
		id: 2,
		imgUrl: "http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
	}]
})

Mock.mock('/api/homeList', {
	"success": true,
	"data": [{
			"id": 5,
			"title": "胡歌12年后首谈车祸",
			"desc": "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
			"imgUrl": "//upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
		}, {
			"id": 6,
			"title": "胡歌12年后首谈车祸：既然活下来了，就不能白白活着",
			"desc": "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
			"imgUrl": "//upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
		}, {
			"id": 7,
			"title": "胡歌12年后首谈车祸：既然活下来了，就不能白白活着",
			"desc": "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
			"imgUrl": "//upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
		}, {
			"id": 8,
			"title": "胡歌12年后首谈车祸：既然活下来了，就不能白白活着",
			"desc": "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
			"imgUrl": "//upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
		}]
})
