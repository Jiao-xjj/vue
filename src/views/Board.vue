<!-- <template>
  <div id="board"></div>
</template>

<script>
  import draggable from 'vuedraggable'

  export default {
    name: 'Board',
    components: {
      draggable
    },
  }
</script>

<style>
</style> -->
<template>
  <div class="wrapper wrapper-content" id="main" v-cloak>
    <div class="row">
      <!-- top -->
      <div class="col-sm-12 animated fadeInRight">
        <div class="btn-sm btn btn-white navBackground">
          <p class="pull-left" id="iconBackground">
            <i class="fa fa-cog"></i>工作看板</p>
          <!-- <img class="pull-left" src="../../../static/img/navbar.png" /> -->
          <p class="pull-left">我的看板</p>
        </div>
        <div class="clearfix"></div>

        <div class="board">
          <div v-for="(listItem,index) in dataList" :key="index" class="col-md-3 cardList">
            <h3>{{listItem.listName}}<span @click="editListName(listItem,index)"></span></h3>

            <draggable class="dragArea" :list="listItem.list" :options="{group:'people'}" @change="log">
              <div v-for="(element, index) in listItem.list" :key="index" class="lineData" >
                {{element.name}} {{index}}
              </div>
              <div :key="listItem.list.length" style="opacity: 0;height: 8px">test1</div>
            </draggable>

            <div @click="addNewCardShow(listItem)" v-show="listItem.listAdd" class="addNewCardShow"><a href="javascript:void(0)"
                class="hoverStyle">添加卡片...</a></div>
            <div class="hideAddItem" v-show="!listItem.listAdd">
              <textarea style="width:100%" v-model="itemValue"></textarea>
              <p><button class="btn zbtn-bg btn-sm" @click="addNewCard(listItem)">添加</button><a href="javascript:void(0)"
                  class="hoverStyle" @click="closeAddItem(listItem)">X</a></p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import draggable from 'vuedraggable'
  import Sortable from 'vue-sortable'
  export default {
    name: "app",
    data() {
      return {
        itemAddShow: true,
        itemValue: '',
        dataList: [{
            list: [{
                name: "John",
                id: 1
              },
              {
                name: "Joao",
                id: 2
              },
              {
                name: "Jean",
                id: 3
              },
              {
                name: "Gerard",
                id: 4
              }
            ],
            listName: '待处理',
            listAdd: true
          },
          {
            list: [{
                name: "Juan",
                id: 5
              },
              {
                name: "Edgard",
                id: 6
              },
              {
                name: "Johnson",
                id: 7
              }
            ],
            listName: '开发中',
            listAdd: true
          },
          {
            list: [{
                name: "tom",
                id: 8
              },
              {
                name: "mike",
                id: 9
              },
              {
                name: "lucy",
                id: 10
              }
            ],
            listName: '测试中',
            listAdd: true
          },
          {
            list: [{
                name: "tomchen",
                id: 8
              },
              {
                name: "mikechen",
                id: 9
              },
              {
                name: "lucychen",
                id: 10
              }
            ],
            listName: '评审中',
            listAdd: true
          },
          {
            list: [{
                name: "tomchen",
                id: 8
              },
              {
                name: "mikechen",
                id: 9
              },
              {
                name: "lucychen",
                id: 10
              }
            ],
            listName: '部署中',
            listAdd: true
          },
          {
            list: [{
                name: "tomchen",
                id: 8
              },
              {
                name: "mikechen",
                id: 9
              },
              {
                name: "lucychen",
                id: 10
              }
            ],
            listName: '已上线',
            listAdd: true
          }
        ]
      }
    },
    components: {
      'draggable': draggable
    },
    created(){
      this.fetchData()
    },
    methods: {
      
      fetchData(){
          let vm =this;
          this.axios({
            data:{
              lane_id:5
            },
            method:"POST",
            url:"http://localhost:8080/pmSystem/pm_story/getLaneStory",
          }).then(function (response) {
            vm.List = response.data.data
             console.log(vm.List)
          })
      },
      
      editListName() {},
      addNewCardShow(listItem) {
        listItem.listAdd = false;
      },
      addNewCard(listItem) {
        if (this.itemValue == '') {
          return false;
        }
        let itemV = this.itemValue;
        let tempTime = new Date().getTime();
        let itemValue = {
          name: itemV,
          id: tempTime
        };
        console.log(itemValue);
        listItem.list.push(itemValue);
        this.itemValue = '';
      },
      closeAddItem(listItem) {
        listItem.listAdd = true;
      },
      log: function(evt) {
        console.log(evt)
      }
    },
    mounted() {}
  }
</script>
<style>
  .board {
    //width: 1000px;
    margin-left: 20px;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: flex-start;
    overflow: auto;
  }

  .addNewCardShow {
    height: 24px;
    line-height: 24px;
  }

  .cardList {
    border: 1px solid #ccc;
    padding: 0 4px;
    /*margin-right: 10px;*/
    background: #eceaea;
    border-radius: 6px;
    width: 200px;
    overflow: hidden;

  }

  .cardList>h3 {
    background: #eceaea;
    margin: 0;
    height: 36px;
    line-height: 36px;
    padding: 0 8px;
  }

  body {
    font-family: '微软雅黑'
  }

  [v-cloak] {
    display: none;
  }

  #example {
    /*width:1000px;*/
    margin: 0 auto;
  }

  .list-complete-item {
    transition: all 1s;
    /*height:50px;*/
    line-height: 50px;
    background: #ccc;
    color: #fff;
    text-align: center;
    font-size: 24px;
    margin-top: 10px;
    border-right: 1px solid #ccc;
  }

  .styleclass {
    width: 100px;
    float: left;
  }

  .list-complete-enter,
  .list-complete-leave-active {
    opacity: 0;
    height: 0px;
    margin-top: 0px;
    padding: 0px;
    border: solid 0px;
  }

  .list-complete-sortable-chosen,
  .list-complete-sortable-ghost {
    opacity: 0;
    height: 0px;
    margin-top: 0px;
    padding: 0px;
    border: solid 0px;
  }

  .dargDiv {
    cursor: move;
    background: #78BC27;
  }

  .wrods {
    margin-top: 50px;
  }

  p {
    line-height: 24px;
  }

  .lineData {
    background: white;
    cursor: move;
    padding: 4px 8px;
    border: 1px solid #ccc;
  }
</style>
