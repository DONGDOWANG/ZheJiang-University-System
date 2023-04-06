var app = new Vue({
    el: '#app',
    data: {
        rankList:'total',
        columns1:[
            {
                title:'学科/学院名称',
                key:'subject'
            },
            {
                title:'科学研究',
                key:'research'
            },
            {
                title:'人才培养',
                key:'people'
            },
            {
                title:'师资队伍',
                key:'teacher'
            },
            {
                title:'支撑平台',
                key:'platform'
            },
            {
                title:'社会服务',
                key:'social'
            },
            {
                title:'总分',
                key:'score'
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
                title:'学科/学院',
                key:'subject'
            },
            {
                title:'分值',
                key:'score'
            }
        ],
        commonData:[],
        columns_advance:[
            {
                title:'学科名称',
                key:'subject'
            },
            {
                title:'科学研究',
                key:'research'
            },
            {
                title:'人才培养',
                key:'people'
            },
            {
                title:'师资队伍',
                key:'teacher'
            },
            {
                title:'支撑平台',
                key:'platform'
            },
            {
                title:'总分',
                key:'score'
            },
            {
                title:'排名',
                key:'sort'
            },
        ],
        advance_data:[],
        columns_advance2:[
            {
                title:'学科名称',
                key:'subject'
            },
            {
                title:'分值',
                key:'score'
            },
            {
                title:'排名',
                type:'index'
            },
        ],
        commonData_advance:[],
    },
    mounted: function () {
        /* 进步榜 */
        // this.$nextTick(function () {
        //     if(this.rankList==='total'){
        //         this.$nextTick(function(){
                    this.initTotalPage()
        //         })
        //     }else if(this.rankList==='advance'){
        //         this.$nextTick(function(){
        //             this.initAdvancePage()
        //         })
        //     }
        // });
    },
    methods: {
        initTotalPage:function(){
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
            chartCollection.barChart2('socialResearch', this.directionList, 0, false,{emptyDistance:true});
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
        initAdvancePage:function(){
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
                ]
            },
            chartCollection.barChart1("sort2", this.subjectTop1)
            this.advance_data=[
                {subject:'中药学',research:50,people:50,teacher:50,platform:50,score:285,sort:1},
                {subject:'中西医结合',research:50,people:50,teacher:50,platform:50,score:285,sort:1},
                {subject:'中医学',research:50,people:50,teacher:50,platform:50,score:285,sort:1}
            ]
            this.commonData_advance=[
                {subject:'中医学',score:283},
                {subject:'中药学',score:283},
                {subject:'中西医结合',score:283}
            ]
            this.schoolList2=[
                { name: '中医学', value: 100 },
                { name: '中药学', value: 330 },
                { name: '中西医结合', value: 200 },
    
            ]
            chartCollection.PieChart2('teacher2', this.schoolList2, {title:'师资队伍\n占比图',key:0,circleType:'empty'}, 0, 'emptyCircle');
            //国际交流
            chartCollection.PieChart2('country', this.schoolList2,{key:0,roseType:'area'});
            //人才培养
            this.peopelList=[
                {
                    name: '人才培养',
                    value: [38, 35, 37],
                    Xtypes: ['中医学', '中药学', '中西医结合'],
                } 
            ],
            chartCollection.stripedBarChart('people2', this.peopelList);
            chartCollection.stripedBarChart('platform2', this.peopelList,{orient:'vertical'});
            this.inventList=[
                {
                    name: '科学研究',
                    value: [38, 35, 37],
                    Xtypes: ['中医学', '中药学', '中西医结合'],
                } 
            ],
            chartCollection.barChart2('research', this.inventList,2,false,{area:true,emptyDistance:true,markLine:1});
            
        }
    },
    watch:{
        // rankList:function(){
        //     if(this.rankList==='total'){
        //         this.$nextTick(function(){
        //             this.initTotalPage()
        //         })
        //     }else if(this.rankList==='advance'){
        //         this.$nextTick(function(){
        //             this.initAdvancePage()
        //         })
        //     }
            
        // }
    }
})