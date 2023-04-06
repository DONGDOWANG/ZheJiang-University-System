var app = new Vue({
    el: '#app',
    data: {
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
           
        }],
        college1:[],
        college2:[],
        tags:["标签一","标签二","标签三"],
        searchData:[
            {
                name:'席晨湘',
                job:"正高级",
                H:99,
                firstSubject:"中医骨伤科学",
                college:"药学院",
                secondSubject:"药学",
                total:"32011"
            },            {
                name:'席晨湘',
                job:"正高级",
                 H:99,
                firstSubject:"中医骨伤科学",
                college:"药学院",
                secondSubject:"药学",
                total:"32011"
            },            {
                name:'席晨湘',
                job:"正高级",
                 H:99,
                firstSubject:"中医骨伤科学",
                college:"药学院",
                secondSubject:"药学",
                total:"32011"
            },            {
                name:'席晨湘',
                job:"正高级",
                 H:99,
                firstSubject:"中医骨伤科学",
                college:"药学院",
                secondSubject:"药学",
                total:"32011"
            },            {
                name:'席晨湘',
                job:"正高级",
                 H:99,
                firstSubject:"中医骨伤科学",
                college:"药学院",
                secondSubject:"药学",
                total:"32011"
            },            {
                name:'席晨湘',
                job:"正高级",
                 H:99,
                firstSubject:"中医骨伤科学",
                college:"药学院",
                secondSubject:"药学",
                total:"32011"
            },
        ],
        selectList5:[
            {
                value: '1',
                label: '综合排序'
            },
            {
                value: '2',
                label: '成果量排序'
            },
            {
                value: '3',
                label: 'H指数排序'
            },
        ],
        selectValues5:"1",
    },
    mounted: function () {




    },
    methods: {

        handleClose(event, name){
                    
                const index = this.college.indexOf(name);
                this.college.splice(index, 1);
          
        }
    }
})