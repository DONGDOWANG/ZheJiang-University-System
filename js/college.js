var app = new Vue({
    el: '#app',
    data: {
        Squence:['全部','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
        tabsList: [
            {
                title: '学院总览',
                href: 'achorlink1',
            },
            {
                title: '科学研究',
                href: 'achorlink2',
            },
            {
                title: '人才培养',
                href: 'achorlink3',
            },
            {
                title: '师资队伍',
                href: 'achorlink4',
            },
            {
                title: '支撑平台',
                href: 'achorlink5',
            },
            {
                title: '社会服务',
                href: 'achorlink6',
            },
            {
                title: '典型案例',
                href: 'achorlink7',
            },
        ],
        activeTab: 0,
        activeTab2: "0",
        overViewList: [
            {
                src:"./images/icon/icon-colleg-subject1.png",
                title: '主建学科',
                num: '中药学，药学',
            },
            {
                src:"./images/icon/icon-colleg-subject2.png",
                title: '共建学科',
                num: '生物学',
            },
            {
                src:"./images/icon/icon-colleg-subject2.png",
                title: '经费',
                num: '50万',
            }
            
        ],
        selectList1:[
            {
                value: '1',
                label: '国家级教学成果奖'
            },
            {
                value: '2',
                label: '省部级教学成果奖'
            },
        ],
        selectValues1:"1",
        selectList2:[
            {
                value: 'New York',
                label: 'New York'
            },
            {
                value: 'London',
                label: 'London'
            },
        ],
        selectValues2:"",
        selectList3:[
            {
                value: '1',
                label: '2020'
            },
            {
                value: '2',
                label: '2019'
            },
            {
                value: '3',
                label: '2018'
            },
            {
                value: '4',
                label: '2017'
            },
            {
                value: '5',
                label: '2016'
            },
            {
                value: '6',
                label: '近五年'
            },
        ],
        selectValues3:"6",
        selectList4:[
            {
                value: '1',
                label: '"挑战杯"全国大学生课外学术科技作品竞赛'
            },
            {
                value: '2',
                label: '"创青春"全国大学生创业比赛',
            },
            {
                value: '3',
                label: '全国"互联网+"大学生创新创业比赛',
            },
            {
                value: '4',
                label: '全国大学生医学技术技能比赛',
            },
        ],
        selectValues4:'1',
        selectList5:[
            {
                value: '1',
                label: '2017'
            },
            {
                value: '2',
                label: '2018'
            },
            {
                value: '3',
                label: '2019'
            },
            {
                value: '4',
                label: '2020'
            },
            {
                value: '5',
                label: '2021'
            },
            {
                value: '6',
                label: '2022'
            },
            {
                value: '7',
                label: '近五年'
            }
        ],
        selectValues5:"7",
        selectList6:[
            {
                value: '1',
                label: '国家级教学成果奖'
            },
            {
                value: '2',
                label: '省部级教学成果奖'
            },
        ],
        selectValues6:"1",
        TopList: [
            { src:"./images/icon/icon-colleg-subject3.png",
                title: '学科建设进步榜-学院排名',
                num:12
            },
            { src:"./images/icon/icon-colleg-subject3.png",
                title: '学科建设人均榜-学院排名',
                num:8
            },
            { src:"./images/icon/icon-colleg-subject3.png",
                title: '学科建设人均榜-学院排名',
                num:9
            },

        ],
        articleList: [{
            name: 'SCI一区',
            value: [38, 35, 37, 36, 23],
            Xtypes: ['2017', '2018', '2019', '2020', '2021']
        },
        {
            name: '一级期刊',
            value: [25, 20, 16, 22, 35],
            Xtypes: ['2017', '2018', '2019', '2020', '2021']
        },
        {
            name: '国内期刊',
            value: [53, 51, 49, 48, 67],
            Xtypes: ['2017', '2018', '2019', '2020', '2021']
        },
        {
            name: '国外期刊',
            value: [2, 20, 16, 22, 15],
            Xtypes: ['2017', '2018', '2019', '2020', '2021']
        },],
        rewardList: [{
            name: '一等奖',
            value: [38, 35, 37, 13, 51],
            Xtypes: ['2017', '2018', '2019', '2020', '2021'],
        },
        {
            name: '二等奖',
            value: [25, 20, 16, 52, 14],
            Xtypes: ['2017', '2018', '2019', '2020', '2021'],
        },
        {
            name: '三等奖',
            value: [36, 38, 28, 22, 33],
            Xtypes: ['2017', '2018', '2019', '2020', '2021'],
        },

        ],

        directionList: [{
            name: '纵向课题',
            value: [38, 35, 37, 13, 51, 51],
            Xtypes: ['一类目', '二类目', '三类目', '四类目', '五类目', '六类目'],
        }
        ],

        setOptions1: [
            {
                title: '会议名称',
                key: 'name'
            },
            {
                title: '参会人',
                key: 'personName'
            },
            {
                title: '主办单位',
                key: 'school'
            },
            {
                title: '参会日期',
                key: 'date'
            }
        ],
        reportData: [
            {
                name: 'XXX中医药会议',
                personName: '张XX',
                school: 'New York Lake Park',
                date: '2016-10-03'
            },
            {
                name: 'XXX中医药会议',
                personName: '张XX',
                school: 'New York Lake Park',
                date: '2016-10-03'
            }, {
                name: 'XXX中医药会议',
                personName: '张XX',
                school: 'New York Lake Park',
                date: '2016-10-03'
            }, {
                name: 'XXX中医药会议',
                personName: '张XX',
                school: 'New York Lake Park',
                date: '2016-10-03'
            }, {
                name: 'XXX中医药会议',
                personName: '张XX',
                school: 'New York Lake Park',
                date: '2016-10-03'
            }

        ],
        degreeList: [{
            name: '硕士学位授予数',
            value: [38, 35, 37, 36, 23],
            Xtypes: ['2017', '2018', '2019', '2020', '2021']
        },
        {
            name: '博士学位授予数',
            value: [25, 20, 16, 22, 35],
            Xtypes: ['2017', '2018', '2019', '2020', '2021']
        },
        ],
        resultList: [{
            name: '教学成果奖',
            value: [38, 35, 37, 13, 51],
            Xtypes: ['2017', '2018', '2019', '2020', '2021']
        }],
        setOptions2: [
            {
                title: '名称',
                key: 'name',
                width:300,
                ellipsis:true,
                tooltip:true
            },
            {
                title: '分割线',
                slot: 'line',

            },
            {
                title: '数量',
                slot: 'num',

                align: "center"
            },

        ],
        coursesData: [
            {
                name: '国家级线上线下混合式一流课程',
                num: '12',
            },
            {
                name: '国家级线上线下混合式一流课程',
                num: '12',
            }, {
                name: '国家级线上线下混合式一流课程',
                num: '12',
            }, {
                name: '国家级线上线下混合式一流课程',
                num: '12',
            }, {
                name: '国家级线上线下混合式一流课程',
                num: '12',
            }, {
                name: '国家级线上线下混合式一流课程',
                num: '12',
            },

        ],
        isShowHeader: false,
        subRaceList: [
            {
                name: '金奖',
                value: [38, 35, 37, 13, 51],
                Xtypes: ['2017', '2018', '2019', '2020', '2021'],
            },
            {
                name: '银奖',
                value: [25, 20, 16, 52, 14],
                Xtypes: ['2017', '2018', '2019', '2020', '2021'],
            },
            {
                name: '铜奖',
                value: [36, 38, 28, 22, 33],
                Xtypes: ['2017', '2018', '2019', '2020', '2021'],
            },

        ],
        stuArticleList: [{
            name: 'SCI一区',
            value: [38, 35, 37, 36, 23],
            Xtypes: ['2017', '2018', '2019', '2020', '2021']
        },
        {
            name: '一级期刊',
            value: [25, 20, 16, 22, 35],
            Xtypes: ['2017', '2018', '2019', '2020', '2021']
        },
        {
            name: '国内期刊',
            value: [53, 51, 49, 48, 67],
            Xtypes: ['2017', '2018', '2019', '2020', '2021']
        },
        {
            name: '国外期刊',
            value: [2, 20, 16, 22, 15],
            Xtypes: ['2017', '2018', '2019', '2020', '2021']
        },],
        educationList: [{
            name: '国家级规划教材',
            value: [38, 35, 37, 36, 23],
            Xtypes: ['2017', '2018', '2019', '2020', '2021']
        },
        {
            name: '国家行业规划教材',
            value: [25, 20, 16, 22, 35],
            Xtypes: ['2017', '2018', '2019', '2020', '2021']
        },
        {
            name: '马工程教材',
            value: [53, 51, 49, 48, 67],
            Xtypes: ['2017', '2018', '2019', '2020', '2021']
        },
        ],
        setOptions3: [
            {
                title: '名称',
                key: 'name',
                width:200,
                ellipsis:true,
                tooltip:true
            },

            {
                title: '数量',
                slot: 'num',
                align: "center"
            },

        ],
        textbookData: [
            {
                name: '全国高校辅导员年度人物',
                num: '12',
            },
            {
                name: '全国高校辅导员年度人物',
                num: '12',
            }, {
                name: '全国高校辅导员年度人物',
                num: '12',
            }, {
                name: '全国高校辅导员年度人物',
                num: '12',
            }, {
                name: '全国高校辅导员年度人物',
                num: '12',
            }, {
                name: '全国高校辅导员年度人物',
                num: '12',
            },

        ],
        jobList: [
            { name: '正高级', value: 100 },
            { name: '副高级', value: 330 },
            { name: '中级', value: 200 },
            { name: '初级', value: 200 },
        ],
        schoolList1: [
            { name: '本校', value: 100 },
            { name: '外校', value: 330 },
        ],
        schoolList2: [
            { name: '双一流/985/211', value: 100 },
            { name: '其他', value: 200 },
        ],
        schoolList3: [
            { name: '双一流/985/211', value: 100 },
            { name: '海外', value: 330 },
            { name: '其他', value: 200 },

        ],
        ageList: [{ name: '30岁以下', value: 100 },
        { name: '30-40岁', value: 330 },
        { name: '40-50岁', value: 200 },
        { name: '50-60岁', value: 330 },
        { name: '60岁以上', value: 330 }],
        degreeConstructionList:[
         
                { name: '学士', value: 100 },
                { name: '硕士', value: 330 },
                { name: '博士', value: 330 },
                { name: '其他', value: 330 },
          
        ],
        person1List:[
            {
                name: '高层次人才',
                value: [38, 35],
                Xtypes: ['国家级人才', '省部级人才 '],
            }
        ],
        setOptions4: [
            {
                title: '名称',
                key: 'name',
                width:250,
                ellipsis:true,
                tooltip:true
            },

            {
                title: '数量',
                slot: 'num',
                align: "center"
            },

        ],
        personData:[
            {
                name: '浙江省“钱江学者”特聘教授',
                num: '12',
            },
            {
                name: '浙江省“钱江学者”特聘教授',
                num: '12',
            }, {
                name: '浙江省“钱江学者”特聘教授',
                num: '12',
            }, {
                name: '浙江省“钱江学者”特聘教授',
                num: '12',
            }, {
                name: '浙江省“钱江学者”特聘教授',
                num: '12',
            }, {
                name: '浙江省“钱江学者”特聘教授',
                num: '12',
            },
        ],
        setOptions5: [
            {
                title: '名称',
                key: 'name',
              width:250,
                ellipsis:true,
                tooltip:true
            },

            {
                title: '数量',
                slot: 'num',
                align: "center"
            },

        ],
        setOptions6: [
            {
                title: '名称',
                key: 'name',
              width:200,
                ellipsis:true,
                tooltip:true
            },

            {
                title: '数量',
                slot: 'num',
                align: "center"
            },

        ],        setOptions7: [
            {
                title: '名称',
                key: 'name',
              width:250,
                ellipsis:true,
                tooltip:true
            },

            {
                title: '数量',
                slot: 'num',
                align: "center"
            },

        ],
        tearmData:[
            {
                name: '国家创新人才培养示范基地',
                num: '12',
            },
            {
                name: '国家创新人才培养示范基地',
                num: '12',
            }, {
                name: '国家创新人才培养示范基地',
                num: '12',
            }, {
                name: '国家创新人才培养示范基地',
                num: '12',
            }, {
                name: '国家创新人才培养示范基地',
                num: '12',
            }, {
                name: '国家创新人才培养示范基地',
                num: '12',
            },
        ],
        scientificList:[
            {
                name: '高层次人才',
                value: [38, 35],
                Xtypes: ['国家级人才', '省部级人才 '],
            }
        ],
        clinicalList:[
            {
                name: '高层次人才',
                value: [38, 35],
                Xtypes: ['国家级人才', '省部级人才 '],
            } 
        ],
        inventList:[
            {
                name: '高层次人才',
                value: [38, 35,22,35,13,76],
                Xtypes: ['2016', '2017','2018','2019','2020'],
            } 
        ],
        crosswiselList:[
            {
                name: '高层次人才',
                value: [38, 35,33,44,55,66],
                Xtypes: ['20万以下', '20-50万','50-100万', '100-400万', '400-1000万', '1000万以上'],
            } 
        ],
        college:"药学院",
        collegeList:[{
            label:"药学院",
      
        },{
            label:"商学院",
           
        },{
            label:"文学院",
          
        },{
            label:"文书学院",
      
        },{
            label:"计算机学院",
           
        },{
            label:"天文学院",
          
        },{
            label:"语文",
           
        },{
            label:"地理",
          
        },{
            label:"数学",
      
        },{
            label:"高数",
           
        },{
            label:"作文",
          
        },{
            label:"政治",
           
        },{
            label:"化学",
          
        },{
            label:"物理",
           
        },{
            label:"历史",
          
        },{
            label:"生物",
      
        },{
            label:"高分子",
           
        },{
            label:"体育",
          
        },{
            label:"高数",
           
        },{
            label:"作文",
          
        },{
            label:"政治",
           
        },{
            label:"化学",
          
        },{
            label:"物理",
           
        },{
            label:"历史",
          
        },{
            label:"生物",
      
        },{
            label:"高分子",
           
        },{
            label:"体育",
          
        },{
            label:"高数",
           
        },{
            label:"作文",
          
        },{
            label:"政治",
           
        },{
            label:"化学",
          
        },{
            label:"物理",
           
        },{
            label:"历史",
          
        },{
            label:"生物",
      
        },{
            label:"高分子",
           
        },{
            label:"体育",
          
        }],
        isShowMore:false,
        showChange:false
    },
    mounted: function () {
       

        // 锚点滚动
		this.scrollBox = document.getElementById('scrollBox')
		const jump = jQuery('.anchorPoint')
		const topArr = []
        for (let i = 0; i < jump.length; i++) {
            topArr.push(jump.eq(i).position().top)
        }
        console.log(topArr);
        var that = this
		this.scrollBox.addEventListener('scroll', function () {
            that.showChange = false
			var current_offset_top = that.scrollBox.scrollTop
			for (let i = 0; i < topArr.length; i++) {
				if (current_offset_top <= topArr[i]) {
					that.activeTab = i
					break
				}
			}
		}, true);

        // chartCollection.barChart1("subject-top1", this.subjectTop1, this.subjectList, 0)
        // chartCollection.barChart1("subject-top2", this.subjectTop1, this.subjectList, 0)
        // chartCollection.barChart1("subject-top3", this.subjectTop1, this.subjectList, 0)
        chartCollection.lineChart1("article", this.articleList, 0,true)
        chartCollection.lineChart1("degree", this.degreeList, 0,true)
        chartCollection.barChart2('reward', this.rewardList, 0, true);
        chartCollection.barChart2('direction', this.directionList, 0, false,false,false,30);
        chartCollection.barChart2('result', this.resultList, 0,false,false,false,30);
        chartCollection.barChart2('sub-race', this.subRaceList, 0, true,"","",14);
        chartCollection.lineChart1('stu-article', this.articleList, 0,true);
        chartCollection.lineChart1('education', this.educationList, 1,true);
        chartCollection.PieChart1('job', this.jobList, '', 0, 'emptyCircle', true, {showLabelCounts:true});
        chartCollection.PieChart1('school1', this.schoolList1, '', 0, 'emptyCircle', true, true);
        chartCollection.PieChart1('school2', this.schoolList2, '中医药高校(外校)', 0, 'emptyCircle', true, false);
        chartCollection.PieChart1('school3', this.schoolList3, '非中医药高校', 0, 'emptyCircle', true, false);
        chartCollection.PieChart1('ages', this.ageList, '', 0, 'emptyCircle',true, false);
        chartCollection.PieChart1('degree-construction', this.degreeConstructionList, '', 0, 'emptyCircle',true,{showLabelCounts:true});
        chartCollection.barChart2('person1', this.person1List, 0, false,false,true,30,);
        chartCollection.barChart2('scientific', this.scientificList, 0, false,false,true,24);
        chartCollection.barChart2('clinical', this.clinicalList, 0, false,false,true,24);
        chartCollection.barChart2('crosswise', this.crosswiselList, 4, false,false,false,30);
        chartCollection.lineChart1('invent', this.inventList, 5, false,{area:"",});
        
        
    },
    methods: {
        highLight: function (item, index) {

                this.activeTab = index
       
        },

        highLight2: function (item, index) {
            setTimeout(()=>{
                this.activeTab2 = index
            })
        },

    }
})