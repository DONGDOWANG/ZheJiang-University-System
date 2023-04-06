var app = new Vue({
    el: '#app',
    data: {
        columns:[
            {
                title:' ',
                type:'selection',
                key:'select',
                width:80
            },
            {
                title:'序号',
                key:'index',
                width:80
            },
            {
                title:'指标项名称',
                key:'name',
                tree: true
            },
            {
                title:'权重',
                key:'weight',
                width:120
            }
        ],
        quatoList:[]
    },
    mounted: function () {
        this.quatoList=[
            {
                id:'100',
                name:'科学研究水平',
                index:'1',
                cellClassName:{
                    name:'bh-table-tree-level-1',
                    index:'bh-table-tree-level-1',
                    weight:'bh-table-tree-level-1',
                    select:'bh-table-tree-level-1'
                },
                children:[
                    {
                        id:'100000',
                        name:'科研获奖',
                        index:'1-1',
                        cellClassName:{
                            name:'bh-table-tree-level-2',
                            index:'bh-table-tree-level-2',
                            weight:'bh-table-tree-level-2',
                            select:'bh-table-tree-level-2'
                        },
                    },
                    {
                        id:'100001',
                        name:'国家级奖项',
                        index:'1-2',
                        cellClassName:{
                            name:'bh-table-tree-level-2',
                            index:'bh-table-tree-level-2',
                            weight:'bh-table-tree-level-2',
                            select:'bh-table-tree-level-2'
                        },
                    },
                    {
                        id:'100002',
                        name:'省部级奖项',
                        index:'1-3',
                        cellClassName:{
                            name:'bh-table-tree-level-2',
                            index:'bh-table-tree-level-2',
                            weight:'bh-table-tree-level-2',
                            select:'bh-table-tree-level-2'
                        },
                    }
                ]
            },
            {
                id:'101',
                name:'科学研究水平',
                index:'2',
                cellClassName:{
                    name:'bh-table-tree-level-1',
                    index:'bh-table-tree-level-1',
                    weight:'bh-table-tree-level-1',
                    select:'bh-table-tree-level-1'
                },
                children:[
                    {
                        id:'101000',
                        name:'科研获奖',
                        index:'2-1',
                        cellClassName:{
                            name:'bh-table-tree-level-2',
                            index:'bh-table-tree-level-2',
                            weight:'bh-table-tree-level-2',
                            select:'bh-table-tree-level-2'
                        },
                    },
                    {
                        id:'101001',
                        name:'国家级奖项',
                        index:'2-2',
                        cellClassName:{
                            name:'bh-table-tree-level-2',
                            index:'bh-table-tree-level-2',
                            weight:'bh-table-tree-level-2',
                            select:'bh-table-tree-level-2'
                        },
                    },
                    {
                        id:'101002',
                        name:'省部级奖项',
                        index:'2-3',
                        cellClassName:{
                            name:'bh-table-tree-level-2',
                            index:'bh-table-tree-level-2',
                            weight:'bh-table-tree-level-2',
                            select:'bh-table-tree-level-2'
                        },
                    }
                ]
            }
        ]
    },
    methods: {
        expandRow:function(row, index) {
            var _this = this;
            changeData(this.quatoList)
            function changeData(data){
                data.forEach(function(item,index){
                    if(item.id==row.id){
                        if(item._showChildren==undefined){
                            _this.$set(item, "_showChildren", true);
                        }else{
                            _this.$set(item, "_showChildren", !item._showChildren);
                        }
                        return false;
                    }
                    if(item.children!=undefined && item.children.length){
                        changeData(item.children)
                    }
                })
            }
        },

    }
})