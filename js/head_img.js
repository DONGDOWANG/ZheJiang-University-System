var app = new Vue({
	el:'#app',
	data:{
        activeTab:0,
        tabsList: [
            {
                title: '个人简介',
                href: 'head_img_introduce',
            },
            {
                title: '人才培养',
                href: 'head_img_traning',
            },
            {
                title: '论文',
                href: 'head_img_article',
            },
            {
                title: '专利',
                href: 'head_img_patent',
            },
            {
                title: '基金',
                href: 'head_img_fund',
            },
            {
                title: '获奖',
                href: 'head_img_award',
            },
        ],
        myInput:"   ",
		setOptions1: [
            {
                title: '序号',
                type: 'index',
				align:"center"
            },
			{
                title: '学生学号',
                key: 'id',
				align:"center"
            },
            {
                title: '学生姓名',
                key: 'name',
				align:"center"
            },
            {
                title: '专业',
                key: 'teach',
				align:"center"
            },
            {
                title: '所属院系',
                key: 'school',
				align:"center"
            },
            {
                title: '毕业时间',
                key: 'date',
				align:"center"
            },
            {
                title: '所在年级',
                key: 'grade',
				align:"center"
            },
            {
                title: '学生类别',
                key: 'date',
				align:"center"
            }
        ],
        reportData: [
            {
                id: '3e201',
                name: '张XX',
                teach: 'New York Lake Park',
                school: '商学院',
				date:'2012',
				grade:"2010",
				type:"一等奖学金",
            },
			{
                id: '3e201',
                name: '张XX',
                teach: 'New York Lake Park',
                school: '商学院',
				date:'2012',
				grade:"2010",
				type:"一等奖学金",
            },            {
                id: '3e201',
                name: '张XX',
                teach: 'New York Lake Park',
                school: '商学院',
				date:'2012',
				grade:"2010",
				type:"一等奖学金",
            },            {
                id: '3e201',
                name: '张XX',
                teach: 'New York Lake Park',
                school: '商学院',
				date:'2012',
				grade:"2010",
				type:"一等奖学金",
            },            {
                id: '3e201',
                name: '张XX',
                teach: 'New York Lake Park',
                school: '商学院',
				date:'2012',
				grade:"2010",
				type:"一等奖学金",
            },            {
                id: '3e201',
                name: '张XX',
                teach: 'New York Lake Park',
                school: '商学院',
				date:'2012',
				grade:"2010",
				type:"一等奖学金",
            },            {
                id: '3e201',
                name: '张XX',
                teach: 'New York Lake Park',
                school: '商学院',
				date:'2012',
				grade:"2010",
				type:"一等奖学金",
            },            {
                id: '3e201',
                name: '张XX',
                teach: 'New York Lake Park',
                school: '商学院',
				date:'2012',
				grade:"2010",
				type:"一等奖学金",
            },

        ],
	},
	mounted:function(){
		// this.secondMenuList = [
		// 	{
		// 		id:11,
		// 		name:'数据驾驶舱',
		// 		url:'',
		// 		icon:'./images/icon/icon_menu_1.png',
		// 		activeIcon:'./images/icon/icon_menu_1.png',
		// 		children:[
		// 			{
		// 				id:111,
		// 				name:'学院驾驶舱',
		// 				url:'cockpit_college.html'
		// 			},
		// 			{
		// 				id:112,
		// 				name:'学科驾驶舱',
		// 				url:'cockpit_subject.html'
		// 			},
		// 			{
		// 				id:113,
		// 				name:'教师画像',
		// 				url:'teacher.html'
		// 			}
		// 		]
		// 	}
		// ];
		// this.secondActiveMenu=113
		// this.initPage();
	},
	methods: {
        highLight: function (item, index) {
                this.activeTab = index
        },
	},
	
})