var app = new Vue({
    el: '#app',
    data: {
        columns:[
            {
                title:' ',
                type:'selection',
                width:80
            },
            {
                title:'序号',
                type:'index',
                width:80,
                align:'center'
            },
            {
                title:'推演名称',
                key:'name',
                align:'center'
            },
            {
                title:'推演学科',
                key:'subject',
                align:'center'
            },
            {
                title:'操作人',
                key:'operator',
                align:'center'
            },
            {
                title:'操作时间',
                key:'time',
                align:'center'
            },
            {
                title:'操作',
                slot:'action',
                align:'center'
            },
            {
                title:'采用推演结果',
                slot:'isUse',
                align:'center'
            },
        ],
        deduceList:[]
    },
    mounted: function () {
        this.deduceList=[
            {
                name:'283855',
                subject:'中医学',
                operator:'席襄城',
                time:'2021-01-11 13:34:45',
                isUse:true
            },
            {
                name:'283855',
                subject:'中医学',
                operator:'席襄城',
                time:'2021-01-11 13:34:45',
                isUse:true
            },
            {
                name:'283855',
                subject:'中医学',
                operator:'席襄城',
                time:'2021-01-11 13:34:45',
                isUse:true
            },
            {
                name:'283855',
                subject:'中医学',
                operator:'席襄城',
                time:'2021-01-11 13:34:45',
                isUse:true
            }
        ]
    },
    methods: {
        
    }
})