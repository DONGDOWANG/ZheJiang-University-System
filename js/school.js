var app = new Vue({
    el: '#app',
    data: {
        devidearankOption_data: {
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
                    ],
                  
                    itemStyle: {
                        //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
                         normal: {
                              //柱形图圆角，初始化效果
                               barBorderRadius:[5, 0, 0, 5]
                         }
                    },
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
                    ],
                    borderRadius: 5, 

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
                    ],
                    itemStyle: {
                        //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
                         normal: {
                              //柱形图圆角，初始化效果
                               barBorderRadius:[0, 5, 5, 0]
                         }
                    },
                },

            ]
        },
        tabsList: [
            {
                title: '学校总览',
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
                href: 'achorlink5',
            },
        ],
        activeTab: "0",
        overViewList: [
            {
                src: "./images/icon/icon-overview1.png",
                title: '国家级重点学科',
                num: '11',
            },
            {
                src: "./images/icon/icon-overview2.png",
                title: '省优势特色学科',
                num: '11',
            },
            {
                src: "./images/icon/icon-overview3.png",
                title: '其他省部级重点学科',
                num: '11',
            },
            {
                src: "./images/icon/icon-overview4.png",
                title: '一级学科博士授予点',
                num: '11',
            },
            {
                src: "./images/icon/icon-overview5.png",
                title: '一级学科硕士授予点',
                num: '11',
            },
            {
                src: "./images/icon/icon-overview6.png",
                title: '一流本科专业建设点',
                num: '11',
            },
        ],
        selectList1: [
            {
                value: '1',
                label: '其他省部级奖'
            },
            {
                value: '2',
                label: '国家级奖'
            },
            {
                value: '3',
                label: '省部级奖'
            },
        ],
        selectValues1: "1",
        selectList2: [
            {
                value: 'New York',
                label: 'New York'
            },
            {
                value: 'London',
                label: 'London'
            },
        ],
        selectValues2: "",
        selectList3: [
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
        selectValues3: "7",
        selectList4: [
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
        selectValues4: "1",
        selectList5: [
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
        selectValues5: "7",
        selectList6: [
            {
                value: '第一轮学科评估',
                label: '第一轮学科评估'
            },
            {
                value: '第二轮学科评估',
                label: '第二轮学科评估'
            },
            {
                value: '第三轮学科评估',
                label: '第三轮学科评估'
            },
            {
                value: '第四轮学科评估',
                label: '第四轮学科评估'
            },
        ],
        selectValues6: "第一轮学科评估",
        selectList7: [
            {
                value: '1',
                label: '我校ESI学科现状'
            },
            {
                value: '2',
                label: '浙江ESI学科现状'
            },
            {
                value: '3',
                label: '国内11所中医类高校ESI学科入围情况'
            },
        ],
        selectValues7: "1",
        selectList8: [
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
        ],
        selectValues8: "1",
        selectList9: [
            {
                value: '1',
                label: '中医药'
            },
            {
                value: '2',
                label: '中药学'
            },
            {
                value: '3',
                label: '中西医结合'
            },
            {
                value: '4',
                label: '临床医学'
            },
            {
                value: '5',
                label: '药学'
            },
            {
                value: '6',
                label: '护理学'
            }
        ],
        selectValues9:"1",
        selectList10: [
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
        selectValues10:"7",
        selectValues11:"7",
        selectList11: [
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
        TopList: [
            {
                src: "./images/icon/icon-top1.png",
                title: '教育部学科评估结果',

            },
            {
                src: "./images/icon/icon-top2.png",
                title: 'ESI排名',

            },
            {
                src: "./images/icon/icon-top3.png",
                title: '软科中国最好大学排名',

            },
            {
                src: "./images/icon/icon-top3.png",
                title: '软科中国最好学科排名',
            },
        ],
        subjectTop1: [
            { name: '科学研究', value: [1, 2, 3, 4, 5, 2, 3, 1, 4, 5, 1, 1] },
            { name: '人才培养', value: [1, 2, 3, 4, 5, 2, 3, 1, 5, 5, 1, 1] },
            { name: '师资队伍', value: [1, 2, 3, 4, 5, 2, 3, 1, 4, 5, 1, 1] },
            { name: '平台支持', value: [1, 2, 3, 4, 5, 2, 3, 1, 5, 5, 1, 1] },
            { name: '社会服务', value: [1, 2, 3, 4, 5, 2, 3, 1, 4, 5, 1, 1] },
        ],
        subjectList: [
            '药学院', '基础学院', '第一临床', '第三临床', '第二临床学院', '生命科学', '医疗技术卫生', '公共卫生', '护理学院', '人文与管理', '口腔', '马克思',
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
                width: 300,

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
                width: 200,
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
        degreeConstructionList: [

            { name: '学士', value: 100 },
            { name: '硕士', value: 330 },
            { name: '博士', value: 330 },
            { name: '其他', value: 330 },

        ],
        person1List: [
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
                width: 200,
                ellipsis: true,
                tooltip: true
            },

            {
                title: '数量',
                slot: 'num',
                align: "center"
            },

        ],
        personData: [
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
                width: 250,
            },

            {
                title: '数量',
                slot: 'num',
                align: "center"
            },

        ],
        tearmData: [
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
        scientificList: [
            {
                name: '科研平台',
                value: [38, 35,29],
                Xtypes: ['I类', 'II类','III类'],
            }
        ],
        clinicalList: [
            {
                name: '临床平台',
                value: [38, 35,18],
                Xtypes: ['I类', 'II类','III类'],
            }
        ],
        inventList: [
            {
                name: '发明专利授权',
                value: [38, 35, 22, 35, 13, 76],
                Xtypes: ['2016', '2017', '2018', '2019', '2020'],
            }
        ],
        crosswiselList: [
            {
                name: '横向课题',
                value: [38, 35, 33, 44, 55, 66],
                Xtypes: ['20万以下', '20-50万', '50-100万', '100-400万', '400-1000万', '1000万以上'],
            }
        ],
        modal1: false,
        modalTitle: "",
        showTableIndex: "",
        setOptions6: [
            {
                title: "序号",
                type: "index",
                align: "center",
                width: 100,
            },
            {
                title: '学科名称',
                key: 'subjectName',
                width: 200,
                align: "center",
            },
            {
                title: '入选时间',
                key: 'selectDate',
                width: 200,
                align: "center",
            },
            {
                title: '学科简介',
                slot: 'subjectInfo',
                align: "center",
            }
        ],
        reportData6: [
            {
                subjectName: '中医学临床基础',
                subjectInfo: ['中医临床基础于2007年入选国家重点学科，为浙江省属高校中首批获得的国家重点学科。', ' 中医临床基础主要有中医临床基础治法方药对难治病的研究、证候现代研究、理论规律及其传承研究、教学研究等四个方向。学科以中医临床经典理论的传承与创新、中医临床经典治法的研究与提高免疫临床疗效相结合、运用现代技术方法进行中医临床经典症候基础研究为主要研究特色。'],
                selectDate: '2007'
            }, {
                subjectName: '中医学临床基础',
                subjectInfo: ['中医临床基础于2007年入选国家重点学科，为浙江省属高校中首批获得的国家重点学科。', ' 中医临床基础主要有中医临床基础治法方药对难治病的研究、证候现代研究、理论规律及其传承研究、教学研究等四个方向。学科以中医临床经典理论的传承与创新、中医临床经典治法的研究与提高免疫临床疗效相结合、运用现代技术方法进行中医临床经典症候基础研究为主要研究特色。'],
                selectDate: '2007'
            }, {
                subjectName: '中医学临床基础',
                subjectInfo: ['中医临床基础于2007年入选国家重点学科，为浙江省属高校中首批获得的国家重点学科。', ' 中医临床基础主要有中医临床基础治法方药对难治病的研究、证候现代研究、理论规律及其传承研究、教学研究等四个方向。学科以中医临床经典理论的传承与创新、中医临床经典治法的研究与提高免疫临床疗效相结合、运用现代技术方法进行中医临床经典症候基础研究为主要研究特色。'],
                selectDate: '2007'
            }, {
                subjectName: '中医学临床基础',
                subjectInfo: ['中医临床基础于2007年入选国家重点学科，为浙江省属高校中首批获得的国家重点学科。', ' 中医临床基础主要有中医临床基础治法方药对难治病的研究、证候现代研究、理论规律及其传承研究、教学研究等四个方向。学科以中医临床经典理论的传承与创新、中医临床经典治法的研究与提高免疫临床疗效相结合、运用现代技术方法进行中医临床经典症候基础研究为主要研究特色。'],
                selectDate: '2007'
            }, {
                subjectName: '中医学临床基础',
                subjectInfo: ['中医临床基础于2007年入选国家重点学科，为浙江省属高校中首批获得的国家重点学科。', ' 中医临床基础主要有中医临床基础治法方药对难治病的研究、证候现代研究、理论规律及其传承研究、教学研究等四个方向。学科以中医临床经典理论的传承与创新、中医临床经典治法的研究与提高免疫临床疗效相结合、运用现代技术方法进行中医临床经典症候基础研究为主要研究特色。'],
                selectDate: '2007'
            }, {
                subjectName: '中医学临床基础',
                subjectInfo: ['中医临床基础于2007年入选国家重点学科，为浙江省属高校中首批获得的国家重点学科。', ' 中医临床基础主要有中医临床基础治法方药对难治病的研究、证候现代研究、理论规律及其传承研究、教学研究等四个方向。学科以中医临床经典理论的传承与创新、中医临床经典治法的研究与提高免疫临床疗效相结合、运用现代技术方法进行中医临床经典症候基础研究为主要研究特色。'],
                selectDate: '2007'
            },

        ],
        setOptions7: [
            {
                title: "序号",
                type: "index",
                align: "center",
                width: 100,
            },
            {
                title: '一级学科',
                key: 'firstSubject',
                width: 200,
                align: "center",
            },
            {
                title: '二级学科',
                slot: 'secondSubject',
                width: 200,
                align: "center",
            },
            {
                title: '学科简介',
                slot: 'subjectInfo',
                align: "center",
            },

        ],
        reportData7: [
            {
                firstSubject: '中医学',
                secondSubject: '中医基础理论、中医临床基础、中医内科学、中医骨伤学、中医针灸学',
                subjectInfo: ['中医学一级学科主要覆盖中医基础理论、中医临床基础、中医内科学、中医骨伤学、中医针灸学等二级学科，其中中医临床基础为国家重点学科；主要围绕中医理论与文化的传承和创新、中医方剂的组方配伍与应用、基于中医临床经典理论的难治病防治、骨与关节病的中医药治疗与机制、针灸临床疗效评价及效应机制等五大主攻方向开展研究。']
            }, {
                firstSubject: '中医学',
                secondSubject: '中医基础理论、中医临床基础、中医内科学、中医骨伤学、中医针灸学',
                subjectInfo: ['中医学一级学科主要覆盖中医基础理论、中医临床基础、中医内科学、中医骨伤学、中医针灸学等二级学科，其中中医临床基础为国家重点学科；主要围绕中医理论与文化的传承和创新、中医方剂的组方配伍与应用、基于中医临床经典理论的难治病防治、骨与关节病的中医药治疗与机制、针灸临床疗效评价及效应机制等五大主攻方向开展研究。']
            }, {
                firstSubject: '中医学',
                secondSubject: '中医基础理论、中医临床基础、中医内科学、中医骨伤学、中医针灸学',
                subjectInfo: ['中医学一级学科主要覆盖中医基础理论、中医临床基础、中医内科学、中医骨伤学、中医针灸学等二级学科，其中中医临床基础为国家重点学科；主要围绕中医理论与文化的传承和创新、中医方剂的组方配伍与应用、基于中医临床经典理论的难治病防治、骨与关节病的中医药治疗与机制、针灸临床疗效评价及效应机制等五大主攻方向开展研究。']
            }, {
                firstSubject: '中医学',
                secondSubject: '中医基础理论、中医临床基础、中医内科学、中医骨伤学、中医针灸学',
                subjectInfo: ['中医学一级学科主要覆盖中医基础理论、中医临床基础、中医内科学、中医骨伤学、中医针灸学等二级学科，其中中医临床基础为国家重点学科；主要围绕中医理论与文化的传承和创新、中医方剂的组方配伍与应用、基于中医临床经典理论的难治病防治、骨与关节病的中医药治疗与机制、针灸临床疗效评价及效应机制等五大主攻方向开展研究。']
            }, {
                firstSubject: '中医学',
                secondSubject: '中医基础理论、中医临床基础、中医内科学、中医骨伤学、中医针灸学',
                subjectInfo: ['中医学一级学科主要覆盖中医基础理论、中医临床基础、中医内科学、中医骨伤学、中医针灸学等二级学科，其中中医临床基础为国家重点学科；主要围绕中医理论与文化的传承和创新、中医方剂的组方配伍与应用、基于中医临床经典理论的难治病防治、骨与关节病的中医药治疗与机制、针灸临床疗效评价及效应机制等五大主攻方向开展研究。']
            }, {
                firstSubject: '中医学',
                secondSubject: '中医基础理论、中医临床基础、中医内科学、中医骨伤学、中医针灸学',
                subjectInfo: ['中医学一级学科主要覆盖中医基础理论、中医临床基础、中医内科学、中医骨伤学、中医针灸学等二级学科，其中中医临床基础为国家重点学科；主要围绕中医理论与文化的传承和创新、中医方剂的组方配伍与应用、基于中医临床经典理论的难治病防治、骨与关节病的中医药治疗与机制、针灸临床疗效评价及效应机制等五大主攻方向开展研究。']
            }, {
                firstSubject: '中医学',
                secondSubject: '中医基础理论、中医临床基础、中医内科学、中医骨伤学、中医针灸学',
                subjectInfo: ['中医学一级学科主要覆盖中医基础理论、中医临床基础、中医内科学、中医骨伤学、中医针灸学等二级学科，其中中医临床基础为国家重点学科；主要围绕中医理论与文化的传承和创新、中医方剂的组方配伍与应用、基于中医临床经典理论的难治病防治、骨与关节病的中医药治疗与机制、针灸临床疗效评价及效应机制等五大主攻方向开展研究。']
            },
        ],
        setOptions8: [
            {
                title: "序号",
                type: "index",
                align: "center",
                width: 100,
            },
            {
                title: "学科类别",
                key: "subjectType",
                align: "center"
            },
            {
                title: '学科名称',
                key: 'subjectName',
                align: "center"
            },
            {
                title: '学科带头人',
                key: 'subjectLeader',
                align: "center"
            },
            {
                title: '下达年份',
                key: 'sendYears',
                align: "center"
            },
        ],
        reportData8: [
            {
                subjectType: '国家中医药管理局重点学科',
                subjectName: '临床医学基础',
                subjectLeader: "万海同",
                sendYears: '2016'
            }, {
                subjectType: '国家中医药管理局重点学科',
                subjectName: '临床医学基础',
                subjectLeader: "万海同",
                sendYears: '2016'
            }, {
                subjectType: '国家中医药管理局重点学科',
                subjectName: '临床医学基础',
                subjectLeader: "万海同",
                sendYears: '2016'
            }, {
                subjectType: '国家中医药管理局重点学科',
                subjectName: '临床医学基础',
                subjectLeader: "万海同",
                sendYears: '2016'
            }, {
                subjectType: '国家中医药管理局重点学科',
                subjectName: '临床医学基础',
                subjectLeader: "万海同",
                sendYears: '2016'
            }, {
                subjectType: '国家中医药管理局重点学科',
                subjectName: '临床医学基础',
                subjectLeader: "万海同",
                sendYears: '2016'
            }, {
                subjectType: '国家中医药管理局重点学科',
                subjectName: '临床医学基础',
                subjectLeader: "万海同",
                sendYears: '2016'
            }, {
                subjectType: '国家中医药管理局重点学科',
                subjectName: '临床医学基础',
                subjectLeader: "万海同",
                sendYears: '2016'
            }, {
                subjectType: '国家中医药管理局重点学科',
                subjectName: '临床医学基础',
                subjectLeader: "万海同",
                sendYears: '2016'
            }, {
                subjectType: '国家中医药管理局重点学科',
                subjectName: '临床医学基础',
                subjectLeader: "万海同",
                sendYears: '2016'
            },
        ],
        setOptions9: [
            {
                title: "序号",
                type: "index",
                align: "center",
                width: 100,
            },
            {
                title: '一级学科',
                key: 'firstSubject',
                align: "center",
            },
            {
                title: '一级学科代码',
                key: 'firstSubjectCode',
                align: "center",
            },
            {
                title: '授予时间',
                key: 'giveTime',
                align: "center",
            },

        ],
        reportData9: [
            {
                firstSubject: '中西医结合',
                firstSubjectCode: '1005',
                giveTime: '2016'
            }, {
                firstSubject: '中西医结合',
                firstSubjectCode: '1005',
                giveTime: '2016'
            }, {
                firstSubject: '中西医结合',
                firstSubjectCode: '1005',
                giveTime: '2016'
            }, {
                firstSubject: '中西医结合',
                firstSubjectCode: '1005',
                giveTime: '2016'
            }, {
                firstSubject: '中西医结合',
                firstSubjectCode: '1005',
                giveTime: '2016'
            }, {
                firstSubject: '中西医结合',
                firstSubjectCode: '1005',
                giveTime: '2016'
            }, {
                firstSubject: '中西医结合',
                firstSubjectCode: '1005',
                giveTime: '2016'
            }, {
                firstSubject: '中西医结合',
                firstSubjectCode: '1005',
                giveTime: '2016'
            },],
        setOptions10: [
            {
                title: "序号",
                type: "index",
                align: "center",
                width: 100,
            },
            {
                title: '专业名称',
                key: 'techName',
                align: "center",
            },
            {
                title: '专业负责人',
                key: 'techLeader',
                align: "center",
            },
            {
                title: '建设学院',
                key: 'buildCollege',
                align: "center",
            },
            {
                title: '年份',
                key: 'Year',
                align: "center",
            },

        ],
        reportData10: [
            {
                techName: '听力与言语康复学',
                techLeader: '范永红/张旭（执行）',
                buildCollege: "第二临床医学院（建设单位）/第一临床医学院/第二临床医学院",
                Year: '2016-10-03'
            }, {
                techName: '听力与言语康复学',
                techLeader: '范永红/张旭（执行）',
                buildCollege: "第二临床医学院（建设单位）/第一临床医学院/第二临床医学院",
                Year: '2016-10-03'
            }, {
                techName: '听力与言语康复学',
                techLeader: '范永红/张旭（执行）',
                buildCollege: "第二临床医学院（建设单位）/第一临床医学院/第二临床医学院",
                Year: '2016-10-03'
            }, {
                techName: '听力与言语康复学',
                techLeader: '范永红/张旭（执行）',
                buildCollege: "第二临床医学院（建设单位）/第一临床医学院/第二临床医学院",
                Year: '2016-10-03'
            }, {
                techName: '听力与言语康复学',
                techLeader: '范永红/张旭（执行）',
                buildCollege: "第二临床医学院（建设单位）/第一临床医学院/第二临床医学院",
                Year: '2016-10-03'
            }, {
                techName: '听力与言语康复学',
                techLeader: '范永红/张旭（执行）',
                buildCollege: "第二临床医学院（建设单位）/第一临床医学院/第二临床医学院",
                Year: '2016-10-03'
            }, {
                techName: '听力与言语康复学',
                techLeader: '范永红/张旭（执行）',
                buildCollege: "第二临床医学院（建设单位）/第一临床医学院/第二临床医学院",
                Year: '2016-10-03'
            },],
        modal2: false,
        showTableIndex2: "",
        setOptions11: [
            {
                title: '学校',
                key: 'schoolName',
                align: "center"
            },
            {
                title: '一级学科',
                align: 'center',
                children: [
                    {
                        title: '中医学',
                        key: 'subject1',
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '中药学',
                        key: 'subject2',
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '中医结合',
                        key: 'subject3',
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '临床医学',
                        key: 'subject4',
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '药学',
                        key: 'subject5',
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '护理学',
                        key: 'subject6',
                        align: 'center',
                        sortable: true
                    },
                ]
            }

        ],
        reportData11: [
            {
                type: false,
                schoolName: '黑龙江中医药大学',
                subject1: 'A+',
                subject2: 'B+',
                subject3: 'A+',
                subject4: '/',
                subject5: '后50%',
                subject6: 'C-',
            },
            {
                type: true,
                schoolName: '浙江中医药大学',
                subject1: 'A+',
                subject2: 'B+',
                subject3: 'A+',
                subject4: '/',
                subject5: '后50%',
                subject6: 'C-',
            }, {
                type: false,
                schoolName: '黑龙江中医药大学',
                subject1: 'A+',
                subject2: 'B+',
                subject3: 'A+',
                subject4: '/',
                subject5: '后50%',
                subject6: 'C-',
            }, {
                type: false,
                schoolName: '黑龙江中医药大学',
                subject1: 'A+',
                subject2: 'B+',
                subject3: 'A+',
                subject4: '/',
                subject5: '后50%',
                subject6: 'C-',
            }, {
                type: false,
                schoolName: '黑龙江中医药大学',
                subject1: 'A+',
                subject2: 'B+',
                subject3: 'A+',
                subject4: '/',
                subject5: '后50%',
                subject6: 'C-',
            }, {
                type: false,
                schoolName: '黑龙江中医药大学',
                subject1: 'A+',
                subject2: 'B+',
                subject3: 'A+',
                subject4: '/',
                subject5: '后50%',
                subject6: 'C-',
            },
        ],
        setOptions12: [
            {
                title: '学科',
                slot: 'subject',
                align: 'center',
                width: 300,
            },
            {
                title: '2000',
                slot: "date1",
                align: 'center',
            },
            {
                title: '2001',
                slot: "date2",
                align: 'center',
            },
            {
                title: '2002',
                slot: "date3",
                align: 'center',
            },
            {
                title: '2003',
                slot: "date4",
                align: 'center',
            },
            {
                title: '2004',
                slot: "date5",
                align: 'center',
            },
            {
                title: '2005',
                slot: "date6",
                align: 'center',
            },
        ],
        reportData12: [
            {
                subject: '我校排名/ESI全球进入机构数（前1%）',
                date1: '3812/5460',
                date2: '2940/7098',
                date3: '2933/7261',
                date4: '2933/7261',
                date5: '2933/7261',
                date6: '2933/7261',
            },
            {
                subject: '排名占位比（我校排名/ESI全球进入机构数（前1%））',
                date1: '69.5%',
                date1Compare: "99%",
                date1Trend: true,
                date2: '41.4%',
                date2Compare: "5%",
                date2Trend: false,
                date3: '41.4%',
                date3Compare: "",
                date3Trend: null,
                date4: '40.4%',
                date4Compare: "5%",
                date4Trend: true,
                date5: '0.419',
                date5Compare: "5%",
                date5Trend: false,
                date6: '59.4%',
                date6Compare: "115%",
                date6Trend: true,
            },
            {
                subject: '我校排名/ESI中国大陆进入机构',
                date1: '3812/5460',
                date2: '2940/7098',
                date3: '2933/7261',
                date4: '2933/7261',
                date5: '2933/7261',
                date6: '2933/7261',
            }, {
                subject: '排名占位比（我校排名/ESI中国大陆进入机构）',
                date1: '69.5%',
                date1Compare: "99%",
                date1Trend: true,
                date2: '41.4%',
                date2Compare: "5%",
                date2Trend: false,
                date3: '41.4%',
                date3Compare: "",
                date3Trend: null,
                date4: '40.4%',
                date4Compare: "5%",
                date4Trend: true,
                date5: '0.419',
                date5Compare: "5%",
                date5Trend: false,
                date6: '59.4%',
                date6Compare: "115%",
                date6Trend: true,

            }, {
                subject: '我校排名/临床医学全球进入机构数',
                date1: '3812/5460',
                date2: '2940/7098',
                date3: '2933/7261',
                date4: '2933/7261',
                date5: '2933/7261',
                date6: '2933/7261',
            }, {
                subject: '排名占位比（我校排名/ESI全球临床医学机构数）',
                date1: '69.5%',
                date1Compare: "99%",
                date1Trend: true,
                date2: '41.4%',
                date2Compare: "5%",
                date2Trend: false,
                date3: '41.4%',
                date3Compare: "",
                date3Trend: null,
                date4: '40.4%',
                date4Compare: "5%",
                date4Trend: true,
                date5: '0.419',
                date5Compare: "5%",
                date5Trend: false,
                date6: '59.4%',
                date6Compare: "115%",
                date6Trend: true,

            }, {
                subject: '我校排名/全球药理学与毒理学总机构数',
                date1: '3812/5460',
                date2: '2940/7098',
                date3: '2933/7261',
                date4: '2933/7261',
                date5: '2933/7261',
                date6: '2933/7261',
            },
            {
                subject: '排名占位比(我校排名/ESI全球药理与毒理机构数)',
                date1: '69.5%',
                date1Compare: "99%",
                date1Trend: true,
                date2: '41.4%',
                date2Compare: "5%",
                date2Trend: false,
                date3: '41.4%',
                date3Compare: "",
                date3Trend: null,
                date4: '40.4%',
                date4Compare: "5%",
                date4Trend: true,
                date5: '0.419',
                date5Compare: "5%",
                date5Trend: false,
                date6: '59.4%',
                date6Compare: "115%",
                date6Trend: true,
            }, {
                subject: '我校生物学与生物化学学科距ESI学科门槛值的比值相差值',
                date1: '',
                date2: '',
                date3: '',
                date4: '',
                date5: '',
                date6: '',
            },
        ],
        setOptions13: [
            {
                title: '学校',
                key: 'school',
                align: 'center',
            },
            {
                title: '中医药大学排名',
                key: "type1",
                align: 'center',
            },
            {
                title: '医药类大学排名',
                key: "type2",
                align: 'center',
            },
            {
                title: '综合排名',
                key: "type3",
                align: 'center',
            },
        ],
        reportData13: [
            {
                type:false,
                school: '上海中医药大学',
                type1: '11',
                type2: '9',
                type3: '94',

            },
            {
                type:false,
                school: '上海中医药大学',
                type1: '11',
                type2: '9',
                type3: '94',

            },            {
                type:false,
                school: '上海中医药大学',
                type1: '11',
                type2: '9',
                type3: '94',

            },            {
                type:true,
                school: '浙江中医药大学',
                type1: '11',
                type2: '9',
                type3: '94',

            },            {
                type:false,
                school: '上海中医药大学',
                type1: '11',
                type2: '9',
                type3: '94',

            },            {
                type:false,
                school: '上海中医药大学',
                type1: '11',
                type2: '9',
                type3: '94',

            },            {
                type:false,
                school: '上海中医药大学',
                type1: '11',
                type2: '9',
                type3: '94',

            },            {
                type:false,
                school: '上海中医药大学',
                type1: '11',
                type2: '9',
                type3: '94',

            },
        ],
        setOptions14: [
            {
                title: '学校',
                key: 'school',
                align: 'center',
            },
            {
                title: '2000',
                key: "date1",
                align: 'center',
                sortable:true
            },
            {
                title: '2001',
                key: "date2",
                align: 'center',
                sortable:true
            },
            {
                title: '2002',
                key: "date3",
                align: 'center',
                sortable:true
            },
            {
                title: '2003',
                key: "date4",
                align: 'center',
                sortable:true
            },
            {
                title: '2004',
                key: "date5",
                align: 'center',
                sortable:true
            },
            {
                title: '2005',
                key: "date6",
                align: 'center',
                sortable:true
            },
        ],
        reportData14: [
            {
                type:false,
                school: '上海中医药大学',
                date1: '1/43',
                date2: '1/43',
                date3: '1/43',
                date4: '1/43',
                date5: '1/43',
                date6: '1/43',
            },            {
                type:false,
                school: '上海中医药大学',
                date1: '1/43',
                date2: '1/43',
                date3: '1/43',
                date4: '1/43',
                date5: '1/43',
                date6: '1/43',
            },            {
                type:false,
                school: '上海中医药大学',
                date1: '1/43',
                date2: '1/43',
                date3: '1/43',
                date4: '1/43',
                date5: '1/43',
                date6: '1/43',
            },            {
                type:false,
                school: '上海中医药大学',
                date1: '1/43',
                date2: '1/43',
                date3: '1/43',
                date4: '1/43',
                date5: '1/43',
                date6: '1/43',
            },            {
                type:false,
                school: '上海中医药大学',
                date1: '1/43',
                date2: '1/43',
                date3: '1/43',
                date4: '1/43',
                date5: '1/43',
                date6: '1/43',
            },            {
                type:true,
                school: '浙江中医药大学',
                date1: '1/43',
                date2: '1/43',
                date3: '1/43',
                date4: '1/43',
                date5: '1/43',
                date6: '1/43',
            },            {
                type:false,
                school: '上海中医药大学',
                date1: '1/43',
                date2: '1/43',
                date3: '1/43',
                date4: '1/43',
                date5: '1/43',
                date6: '1/43',
            },            {
                type:false,
                school: '上海中医药大学',
                date1: '1/43',
                date2: '1/43',
                date3: '1/43',
                date4: '1/43',
                date5: '1/43',
                date6: '1/43',
            },
        ],
        setOptions15: [
            {
                type:"index",
                title:"序号",
                align: "center",
                width:100,
            },
            {
                title: '全球机构排名',
                key: 'worldTop',
                align: "center",
                width:130,
            },

            {
                title: '浙江省高校',
                key: 'zhejiangCollege',
                align: 'center',
                width:120,
               
            },
            {
                title: '已进入ESI学科',
                key: 'ESI',
                align: 'center',
                // width:100,
            },
            {
                title: 'ESI学科数',
                key: 'ESIsubject',
                align: 'center',
                width:120,
            },
            {
                title: '新增学科',
                key: 'addSubject',
                align: 'center',
                width:100,
            },
            {
                title: '全球排名上升',
                key: 'worlduUp',
                align: 'center',
                width:130,
            },
        ],
        reportData15: [
            {
                type: false,
                worldTop: '黑龙江中医药大学',
                zhejiangCollege: '浙江大学',
                ESI: '化学、材料科学、临床医学、工程学、生物学与生物化学、植物与动物科学、分子生物学与遗传学、农业科学、环境与生态学、药理与毒理学、计算机科学、数学、免疫学、神经科学与行为科学、微生物学、地球科学、社会科学、经济与商学、精神病学/心理学、多学科',
                ESIsubject: '21',
                addSubject: '+1',
                worlduUp: '32',
             
            },
            {
                type: false,
                worldTop: '黑龙江中医药大学',
                zhejiangCollege: '浙江大学',
                ESI: '化学、材料科学、临床医学、工程学、生物学与生物化学、植物与动物科学、分子生物学与遗传学、农业科学、环境与生态学、药理与毒理学、计算机科学、数学、免疫学、神经科学与行为科学、微生物学、地球科学、社会科学、经济与商学、精神病学/心理学、多学科',
                ESIsubject: '21',
                addSubject: '+1',
                worlduUp: '32',
              
            },            {
                type: true,
                worldTop: '浙江中医药大学',
                zhejiangCollege: '浙江大学',
                ESI: '化学、材料科学、临床医学、工程学、生物学与生物化学、植物与动物科学、分子生物学与遗传学、农业科学、环境与生态学、药理与毒理学、计算机科学、数学、免疫学、神经科学与行为科学、微生物学、地球科学、社会科学、经济与商学、精神病学/心理学、多学科',
                ESIsubject: '21',
                addSubject: '+1',
                worlduUp: '后50%',
               
            },            {
                type: false,
                worldTop: '黑龙江中医药大学',
                zhejiangCollege: '浙江大学',
                ESI: '化学、材料科学、临床医学、工程学、生物学与生物化学、植物与动物科学、分子生物学与遗传学、农业科学、环境与生态学、药理与毒理学、计算机科学、数学、免疫学、神经科学与行为科学、微生物学、地球科学、社会科学、经济与商学、精神病学/心理学、多学科',
                ESIsubject: '21',
                addSubject: '+1',
                worlduUp: '32',
                
            },            {
                type: false,
                worldTop: '黑龙江中医药大学',
                zhejiangCollege: '浙江大学',
                ESI: '化学、材料科学、临床医学、工程学、生物学与生物化学、植物与动物科学、分子生物学与遗传学、农业科学、环境与生态学、药理与毒理学、计算机科学、数学、免疫学、神经科学与行为科学、微生物学、地球科学、社会科学、经济与商学、精神病学/心理学、多学科',
                ESIsubject: '21',
                addSubject: '+1',
                worlduUp: '32',
                
            },            {
                type: false,
                worldTop: '黑龙江中医药大学',
                zhejiangCollege: '浙江大学',
                ESI: '化学、材料科学、临床医学、工程学、生物学与生物化学、植物与动物科学、分子生物学与遗传学、农业科学、环境与生态学、药理与毒理学、计算机科学、数学、免疫学、神经科学与行为科学、微生物学、地球科学、社会科学、经济与商学、精神病学/心理学、多学科',
                ESIsubject: '21',
                addSubject: '+1',
                worlduUp: '32',
            
            },            {
                type: false,
                worldTop: '黑龙江中医药大学',
                zhejiangCollege: '浙江大学',
                ESI: '化学、材料科学、临床医学、工程学、生物学与生物化学、植物与动物科学、分子生物学与遗传学、农业科学、环境与生态学、药理与毒理学、计算机科学、数学、免疫学、神经科学与行为科学、微生物学、地球科学、社会科学、经济与商学、精神病学/心理学、多学科',
                ESIsubject: '21',
                addSubject: '+1',
                worlduUp: '32',
             
            },
        ],
        setOptions16: [
            {
                type:"index",
                title:"序号",
                align: "center",
                width:100,
            },
            {
                title: '学校',
                key: 'school',
                align: "center",
                width:200,
            },

            {
                title: 'ESI全球排名',
                key: 'worldTop',
                align: 'center',
                width:120,
               
            },
            {
                title: '高被引',
                key: 'GBY',
                align: 'center',
                width:100,
            },
            {
                title: '热点论文',
                key: 'article',
                align: 'center',
                width:120,
            },
            {
                title: '进入ESI前1%学科',
                key: 'subject',
                align: 'center',
            },

        ],
        reportData16: [
            {
                type: false,
                school: '南京中医药大学',
                worldTop: '1670',
                GBY: '55',
                article: '2',
                subject: '药理与毒理学、临床医学、化学、生物学与生物化学',
            },
            {
                type: true,
                school: '浙江中医药大学',
                worldTop: '1670',
                GBY: '55',
                article: '2',
                subject: '药理与毒理学、临床医学、化学、生物学与生物化学',
            },            {
                type: false,
                school: '南京中医药大学',
                worldTop: '1670',
                GBY: '55',
                article: '2',
                subject: '药理与毒理学、临床医学、化学、生物学与生物化学',
            },            {
                type: false,
                school: '南京中医药大学',
                worldTop: '1670',
                GBY: '55',
                article: '2',
                subject: '药理与毒理学、临床医学、化学、生物学与生物化学',
            },            {
                type: false,
                school: '南京中医药大学',
                worldTop: '1670',
                GBY: '55',
                article: '2',
                subject: '药理与毒理学、临床医学、化学、生物学与生物化学',
            },            {
                type: false,
                school: '南京中医药大学',
                worldTop: '1670',
                GBY: '55',
                article: '2',
                subject: '药理与毒理学、临床医学、化学、生物学与生物化学',
            },            {
                type: false,
                school: '南京中医药大学',
                worldTop: '1670',
                GBY: '55',
                article: '2',
                subject: '药理与毒理学、临床医学、化学、生物学与生物化学',
            },
        ],
        teacTotal:557,
        includeOutTeac:394,
        money2List:[
            ['project','第一临床医学院','第二临床医学院','第三临床医学院','基础医学院','公共卫生学院','口腔医学院','药学院','护理学院','医学技术与信息工程学院','生命科学院','人文与管理学院','马克思主义学院',],
            ['已使用',34,26,16,23,18,22,33,22,15,33,25,13],
            ['总经费',44,46,56,33,68,67,37,22,15,33,25,13]
        ],
        money3List:[
            ['project','XXXX团队1','XXXX团队2','XXXX团队3','XXXX团队4','XXXX团队5','XXXX团队6','XXXX团队7'],
            ['已使用',23,24,25,26,27,28,29],
            ['总经费',33,34,35,36,37,38,39]
        ]
    },
    mounted: function () {

        // 锚点滚动
        this.scrollBox = document.getElementById("scrollBox")
        console.log(this.scrollBox)
        const jump = jQuery('.anchorPoint')
        const topArr = []
        for (let i = 0; i < jump.length; i++) {
            topArr.push(jump.eq(i).position().top)
        }
        var that = this
        this.scrollBox.addEventListener('scroll', function () {
            var current_offset_top = that.scrollBox.scrollTop
            for (let i = 0; i < topArr.length; i++) {
                if (current_offset_top <= topArr[i]) {
                    that.activeTab = i
                    break
                }
            }
        }, true);
        chartCollection.barChart1("subject-top1", this.devidearankOption_data)
        chartCollection.barChart1("subject-top2", this.devidearankOption_data)
        chartCollection.barChart1("subject-top3", this.devidearankOption_data)
        chartCollection.barChart2('reward', this.rewardList, 0, true);
        chartCollection.barChart2('direction', this.directionList, 0, false,false,false,30);
        chartCollection.barChart2('result', this.resultList, 0,false,false,false,30);
        chartCollection.barChart2('sub-race', this.subRaceList, 0, true,);
        chartCollection.barChart3('money2', this.money2List, {stack:'total',y:'单位：万元'},0);
        chartCollection.barChart4('money3', this.money3List, {stack:'total',y:'单位：万元'},0);
        chartCollection.lineChart1("article", this.articleList, 0, true)
        chartCollection.lineChart1("degree", this.degreeList, 0, true)
        chartCollection.lineChart1('stu-article', this.articleList, 0, true);
        chartCollection.lineChart1('education', this.educationList, 1, true);
        chartCollection.lineChart1('invent', this.inventList, 5, false,{area:"",});
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
        chartCollection.waterChart('money1',this.includeOutTeac,this.teacTotal,{color:['#6dd3f5','#62a1f7'],orient:'horizontal'})
    },
    methods: {
        highLight: function (item, index) {
            this.activeTab = index
        },
        ok() {
            this.$Message.info('Clicked ok');
        },
        cancel() {
            this.$Message.info('Clicked cancel');
        },
        open() {
            console.log(111)
        },
        rowClassName(row, index) {
            if (row.type == true) {
                return 'height-light';
            }
            return '';
        },

    }
})