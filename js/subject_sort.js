var app = new Vue({
    el: '#app',
    data: {
        columns1:[
            {
                title:'学科名称',
                key:'subject'
            },
            {
                title:'科学研究',
                slot:'research'
            },
            {
                title:'人才培养',
                slot:'people'
            },
            {
                title:'师资队伍',
                slot:'teacher'
            },
            {
                title:'支撑平台',
                slot:'platform'
            },
            {
                title:'社会服务',
                slot:'social'
            },
            {
                title:'总分',
                slot:'score'
            },
            {
                title:'排名',
                key:'sort'
            },
        ],
        data1:[],
        columns:[
            {
                title:'排名',
                type:'index'
            },
            {
                title:'学科',
                key:'subject'
            },
            {
                title:'分值',
                key:'score'
            }
        ],
        commonData:[],
    },
    mounted: function () {
        this.subjectTop1= {
            xdata: ['药学院', '基础学院', '第一临床', '第三临床', '第二临床学院', '生命科学', '医疗技术卫生', '公共卫生', '护理学院', '人文与管理', '口腔', '商科'],
            legend: ["科学研究",
                "人才培养",
                "师资队伍",
                "平台支持",
                "社会服务"],
            seriesData: [
                {
                    name: "科学研究",
                    type: "bar",
                    stack: "总量",
                    data: [
                        { name: "药学院", value: 1 },
                        { name: "基础学院", value: 2 },
                        { name: "第一临床", value: 3 },
                        { name: "第三临床", value: 4 },
                        { name: "第二临床学院", value: 5 },
                        { name: "生命科学", value: 6 },
                        { name: "医疗技术卫生", value: 7 },
                        { name: "公共卫生", value: 7 },
                        { name: "护理学院", value: 7 },
                        { name: "人文与管理", value: 7 },
                        { name: "口腔", value: 7 },
                        { name: "商科", value: 1 }
                    ]
                },
                {
                    name: "人才培养",   
                    type: "bar",
                    stack: "总量",
                    data: [
                        { name: "药学院", value: 1 },
                        { name: "基础学院", value: 2 },
                        { name: "第一临床", value: 3 },
                        { name: "第三临床", value: 4 },
                        { name: "第二临床学院", value: 5 },
                        { name: "生命科学", value: 6 },
                        { name: "医疗技术卫生", value: 7 },
                        { name: "公共卫生", value: 7 },
                        { name: "护理学院", value: 7 },
                        { name: "人文与管理", value: 7 },
                        { name: "口腔", value: 7 },
                        { name: "商科", value: 1 }
                    ]
                },
                {
                    name: "师资队伍",
                    type: "bar",
                    stack: "总量",
                    data: [
                        { name: "药学院", value: 1 },
                        { name: "基础学院", value: 2 },
                        { name: "第一临床", value: 3 },
                        { name: "第三临床", value: 4 },
                        { name: "第二临床学院", value: 5 },
                        { name: "生命科学", value: 6 },
                        { name: "医疗技术卫生", value: 7 },
                        { name: "公共卫生", value: 7 },
                        { name: "护理学院", value: 7 },
                        { name: "人文与管理", value: 7 },
                        { name: "口腔", value: 7 },
                        { name: "商科", value: 1 }
                    ]
                },
                {
                    name: "平台支持",
                    type: "bar",
                    stack: "总量",
                    data: [
                        { name: "药学院", value: 1 },
                        { name: "基础学院", value: 2 },
                        { name: "第一临床", value: 3 },
                        { name: "第三临床", value: 4 },
                        { name: "第二临床学院", value: 5 },
                        { name: "生命科学", value: 6 },
                        { name: "医疗技术卫生", value: 7 },
                        { name: "公共卫生", value: 7 },
                        { name: "护理学院", value: 7 },
                        { name: "人文与管理", value: 7 },
                        { name: "口腔", value: 7 },
                        { name: "商科", value: 1 }
                    ]
                },
                {
                    name: "社会服务",
                    type: "bar",
                    stack: "总量",
                    data: [
                        { name: "药学院", value: 1 },
                        { name: "基础学院", value: 2 },
                        { name: "第一临床", value: 3 },
                        { name: "第三临床", value: 4 },
                        { name: "第二临床学院", value: 5 },
                        { name: "生命科学", value: 6 },
                        { name: "医疗技术卫生", value: 7 },
                        { name: "公共卫生", value: 7 },
                        { name: "护理学院", value: 7 },
                        { name: "人文与管理", value: 7 },
                        { name: "口腔", value: 7 },
                        { name: "商科", value: 50 }
                    ]
                }
            ]
        },
        chartCollection.barChart1("sort", this.subjectTop1)
        this.data1=[
            {subject:'中医学',research:50,researchCompare:2,people:50,peopleCompare:-5,teacher:50,teacherCompare:1,platform:50,platformCompare:-5,social:65,socialCompare:3,score:285,scoreCompare:-15,sort:1},
            {subject:'中药学',research:50,people:50,teacher:50,platform:50,social:65,score:285,sort:1},
            {subject:'中西医结合',research:50,people:50,teacher:50,platform:50,social:65,score:285,sort:1},
            {subject:'中医学',research:50,people:50,teacher:50,platform:50,social:65,score:285,sort:1},
            {subject:'中医学',research:50,people:50,teacher:50,platform:50,social:65,score:285,sort:1},
            {subject:'中医学',research:50,people:50,teacher:50,platform:50,social:65,score:285,sort:1},
            {subject:'中医学',research:50,people:50,teacher:50,platform:50,social:65,score:285,sort:1},
            {subject:'中医学',research:50,people:50,teacher:50,platform:50,social:65,score:285,sort:1},
            {subject:'中医学',research:50,people:50,teacher:50,platform:50,social:65,score:285,sort:1},
            {subject:'中医学',research:50,people:50,teacher:50,platform:50,social:65,score:285,sort:1},
            {subject:'中医学',research:50,people:50,teacher:50,platform:50,social:65,score:285,sort:1}
        ]
        this.commonData=[
            {subject:'中医学',score:283},
            {subject:'中药学',score:283},
            {subject:'中西医结合',score:283},
            {subject:'中医临床医学',score:283},
            {subject:'临床医学',score:283}
        ]
        this.directionList=[{
            name: '科学研究',
            value: [38, 35, 37, 13, 51, 51,38, 35, 37, 13, 51, 51],
            Xtypes: ['中医学', '中药学', '中西医结合', '中医临床基础', '临床医学', '药学','护理学','医学技术','公共卫生与...','生物学','中医内科消化学','中医诊断学'],
        }
        ]
        chartCollection.barChart2('socialResearch', this.directionList, 0, false,{emptyDistance:true,markLine:1});
        this.directionList2=[{
            name: '师资队伍分析',
            value: [38, 35, 37, 13, 51, 51,38, 35, 37, 13, 51, 51],
            Xtypes: ['中医学', '中药学', '中西医结合', '中医临床基础', '临床医学', '药学','护理学','医学技术','公共卫生与...','生物学','中医内科消化学','中医诊断学'],
        }
        ]
        chartCollection.barChart2('teacher', this.directionList2, 1, false,{emptyDistance:true});
        this.directionList3=[{
            name: '社会服务',
            value: [38, 35, 37, 13, 51, 51,38, 35, 37, 13, 51, 51],
            Xtypes: ['中医学', '中药学', '中西医结合', '中医临床基础', '临床医学', '药学','护理学','医学技术','公共卫生与...','生物学','中医内科消化学','中医诊断学'],
        }
        ]
        chartCollection.barChart2('social', this.directionList3, 3, false,{emptyDistance:true});
        this.inventList=[
            {
                name: '人才培养',
                value: [38, 35, 37, 13, 51, 51,38, 35, 37, 13, 51, 51],
                Xtypes: ['中医学', '中药学', '中西医结合', '中医临床基础', '临床医学', '药学','护理学','医学技术','公共卫生与...','生物学','中医内科消化学','中医诊断学'],
            } 
        ],
        chartCollection.lineChart1('people', this.inventList,2,false,{area:true,emptyDistance:true});
        this.inventList2=[
            {
                name: '支撑平台',
                value: [38, 35, 37, 13, 51, 51,38, 35, 37, 13, 51, 51],
                Xtypes: ['中医学', '中药学', '中西医结合', '中医临床基础', '临床医学', '药学','护理学','医学技术','公共卫生与...','生物学','中医内科消化学','中医诊断学'],
            } 
        ],
        chartCollection.lineChart1('platform', this.inventList2,3,false,{area:true,emptyDistance:true});
    },
    methods: {
        

    }
})