var app = new Vue({
    el: '#app',
    data: {
        changeCollege:false,
        expand:false,
        columns:[
            {title:'人才/平台',key:'people',align:'center'},
            {title:'科学研究',key:'kxyj',align:'center'},
            {title:'人才培养',key:'rcpy',align:'center'},
            {title:'师资队伍',key:'szdw',align:'center'},
            {title:'支撑平台',key:'zcpt',align:'center'},
            {title:'社会服务',key:'xksy',align:'center'},
            {title:'影响指数',key:'yxzs',align:'center'},
            {title:'操作',slot:'action',align:'center'},
        ],
        deduceList:[],
        columns2:[
            {
                key:'name',
                title:'指标项'
            },
            {
                key:'before',
                title:'推演前'
            },
            {
                key:'later',
                title:'推演后'
            },
            {
                key:'compareNum',
                title:'差值'
            }
        ],
        deduceCompare:[],
        saveRecord:false,
        modal1:false,
        columns3:[
            {
                title:' ',
                type:'selection',
                width:80
            },
            {
                title:'姓名',
                key:'name',
                align:'center'
            },
            {
                title:'工号',
                key:'cardNum',
                align:'center'
            },
            {
                title:'所属学院',
                key:'college',
                align:'center'
            },
            {
                title:'所属学科',
                key:'subject',
                align:'center'
            },
            {
                title:'师资队伍',
                key:'teacher',
                align:'center'
            },
            {
                title:'人才培养',
                key:'people',
                align:'center'
            },
            {
                title:'科学研究',
                key:'research',
                align:'center'
            },
            {
                title:'社会服务',
                key:'social',
                align:'center'
            },
            {
                title:'贡献度',
                key:'share',
                align:'center'
            },
            {
                title:'操作',
                slot:'action',
                align:'center'
            },
        ],
        peopleList:[],
        operationRecord:false,
        columns_operation_record:[
            {
                title:'序号',
                type:'index',
                width:80
            },
            {
                title:'推演学科',
                key:'subject'
            },
            {
                title:'操作人',
                key:'people'
            },
            {
                title:'操作时间',
                key:'time'
            },
            {
                title:'操作记录',
                key:'record'
            },
        ],
        operation_record_list:[],
        platformAdjuct:false,
        columns_paltform_adjuct:[
            {
                title:'序号',
                type:'index',
                width:80,
                align:'center'
            },
            {
                title:'平台名称',
                key:'name',
                align:'center'
            },
            {
                title:'分值',
                key:'score',
                align:'center'
            },
            {
                title:'中医学',
                slot:'subject1',
                align:'center'
            },
            {
                title:'中药学',
                slot:'subject2',
                align:'center'
            },
            {
                title:'中西结合医学',
                slot:'subject3',
                align:'center'
            },
            {
                title:'中医临床基础',
                slot:'subject4',
                align:'center'
            },
            {
                title:'分配率',
                key:'per',
                align:'center'
            },
        ],
        paltform_adjuct_list:[],
        isTaken:true,
        subInfo:{
            top:11,
            name:"中医学"
        }
    },
    mounted: function () {
        this.deduceList=[
            {type:'sub',people:'中医学',rcpy:5,szdw:8,zcpt:8,kxyj:9,xksy:9},
            {type:'stu',people:'王诗雨',rcpy:1,szdw:2,zcpt:2,kxyj:2,xksy:2,yxzs:'26%',curval:'1',xk:'1',oldXk:'2'},
            {type:'stu',people:'刘晓阳',rcpy:0,szdw:3,zcpt:3,kxyj:1,xksy:1,yxzs:'15%',curval:'1',xk:'1',oldXk:'1'},
            {type:'stu',people:'单妍',rcpy:2,szdw:0,zcpt:0,kxyj:0,xksy:0,yxzs:'8%',curval:'1',xk:'1',oldXk:1},
            {type:'stu',people:'闫君',rcpy:0,szdw:3,zcpt:3,kxyj:1,xksy:1,yxzs:'7.8%',curval:'1',xk:'1',oldXk:1},
            {type:'stu',people:'李明铭',rcpy:0,szdw:3,zcpt:3,kxyj:1,xksy:1,yxzs:'6%',curval:'1',xk:'1',oldXk:1}
        ]
        this.directionList2=[{
            name: '指标项增比图',
            value: [38, 35, 37, 13, 51],
            Xtypes: ['科学研究', '人才培养', '师资队伍', '支撑平台', '社会服务'],
        }
        ]
        this.$nextTick(function () {
            this.barChart('barEcharts', this.directionList2);
        });
        this.deduceCompare=[
            {name:'科学研究',before:123,later:'/',compareNum:'/'},
            {name:'人才培养',before:123,later:'/',compareNum:'/'},
            {name:'师资队伍',before:123,later:'/',compareNum:'/'},
            {name:'支撑平台',before:123,later:'/',compareNum:'/'},
            {name:'社会服务',before:123,later:'/',compareNum:'/'}
        ]
        this.peopleList=[
            {
                name:'胡伟毅',
                cardNum:'320456',
                college:'中医药',
                subject:'中医学',
                research:20,
                people:15,
                teacher:15,
                social:10,
                share:'5%'
            },
            {
                name:'胡伟毅',
                cardNum:'320456',
                college:'中医药',
                subject:'中医学',
                research:20,
                people:15,
                teacher:15,
                social:10,
                share:'5%'
            },
            {
                name:'胡伟毅',
                cardNum:'320456',
                college:'中医药',
                subject:'中医学',
                research:20,
                people:15,
                teacher:15,
                social:10,
                share:'5%'
            },
            {
                name:'胡伟毅',
                cardNum:'320456',
                college:'中医药',
                subject:'中医学',
                research:20,
                people:15,
                teacher:15,
                social:10,
                share:'5%'
            }
        ]
        this.operation_record_list=[
            {subject:'中医学',people:'凌云（学校管理员）',time:'2021.08.20 13:56:21',record:'胡** 从 护理学 调配到 中医学'},
            {subject:'中医学',people:'凌云（学校管理员）',time:'2021.08.20 13:56:17',record:'李* 从 护理学 调配到 中医学'},
            {subject:'中医学',people:'凌云（学校管理员）',time:'2021.08.20 13:55:17',record:'胡** 从 护理学 调配到 中医学'},
            {subject:'中医学',people:'凌云（学校管理员）',time:'2021.08.20 13:55:33',record:'李* 从 中医学 调配到 护理学'},
            {subject:'中医学',people:'凌云（学校管理员）',time:'2021.08.20 13:56:07',record:'胡** 从 护理学 调配到 中医学'}
        ]
        this.paltform_adjuct_list=[
            {name:'风湿脏痹证治研究室',score:50,subject1:50,subject2:0,subject3:10,subject4:20,per:'100%'},
            {name:'免疫实验室',score:30,subject1:50,subject2:0,subject3:10,subject4:20,per:'100%'},
            {name:'临床病理实验室',score:50,subject1:50,subject2:0,subject3:10,subject4:20,per:'100%'}
        ]
    },
    methods: {
        rowClassName (row, index) {
            if(row.type=="sub"){
                return 'subject-info-row';
            }
            return '';
        },
        barChart: function (id, data) {
            var myChart = echarts.init(document.getElementById(id));
            var seriesData = [];
            data.forEach(function (d, i) {
                seriesData.push({
                    name: d.name,
                    type: 'bar',
                    // barGap: ,
                    barWidth: '16',
                    itemStyle: {
                        normal: {
                            barBorderRadius: [2, 2, 0, 0],
                        },
                    },
                    data: d.value
                })
            })
            var option = {
                color: ['#EF9F6C'],
                tooltip: {
                },
                grid: {
                    left: 0,
                    right: 10,
                    bottom: 0,
                    top: 10,
                    containLabel: true,
                },
                xAxis: {
                    triggerEvent: true,
                    type: 'category',
                    data: data[0].Xtypes,
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#f0f0f0',
                            type: 'dashed',
                        },
                    },
                    axisLabel: {
                        show: true,
                        interval:0,
                        color: '#3b3b3b',
                        fontSize: '14px',
                        fontFamily: 'SourceHanSansCN-Regular',
    
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false,
                    },
                },
    
                yAxis: {
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            color: '#dcdcdc'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#f0f0f0',
                            type: 'dashed',
                        },
                    },
                    axisLabel: {
                        show: true,
                        color: '#3b3b3b',
                        fontSize: '14px',
                        fontFamily: 'SourceHanSansCN-Regular',
    
                    },
                },
                series: seriesData
            };
            myChart.setOption(option);
    
        },
    }
})