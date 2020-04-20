<template>
  <div id="storyboard" class="flow">
    <el-menu
      class="el-menu-demo"
      mode="horizontal">
      <el-menu-item index="1" ><router-link to="/StoryDetails">故事详情</router-link></el-menu-item>
      <el-menu-item index="2" @click="dialogFormVisible = true">添加用户故事</el-menu-item>
      <!-- <el-menu-item index="3" @click="StorySettings(story_id)">这是一个用户故事</el-menu-item> -->
    </el-menu>

    <div class="components-container board">
      <Kanban :key="1" :list="list1" :group="group" header-text="待处理" />
      <Kanban :key="2" :list="list2" :group="group" header-text="开发中" />
      <Kanban :key="3" :list="list3" :group="group" header-text="测试中" />
      <Kanban :key="4" :list="list4" :group="group" header-text="评审中" />
      <Kanban :key="5" :list="list5" :group="group" header-text="部署中" />
      <Kanban :key="6" :list="list6" :group="group" header-text="已上线" />
    </div>

    <!-- 添加用户故事弹窗 -->
    <el-dialog title="添加用户故事" :visible.sync="dialogFormVisible">
      <el-form :model="form01" :rules="rules" ref="form01">
        <el-form-item label="用户故事描述" :label-width="formLabelWidth" prop="pm_story.story_con">
          <el-input type="textarea" v-model="form01.pm_story.story_con" placeholder="请输入用户故事描述" autocomplete="off"></el-input>
        </el-form-item>
        </el-form-item>
        <el-form-item label="细节注释" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="form01.pm_story.story_not" placeholder="请输入细节注释" autocomplete="off"></el-input>
        </el-form-item>
        </el-form-item>
        <el-form-item label="验收标准" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="form01.pm_story.story_stan" placeholder="请输入验收标准" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addstory();dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

    <div >
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Kanban from '@/components/Kanban'
  export default {
    name: 'StoryBoard',
    components: {
      Kanban
    },
    data() {
      return {
        List: [{
          story_con: '',
          story_not: '',
          story_stan:''
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form01: {
          pm_story:{
            story_con: '',
            story_not: '',
            story_stan:''
          }
        },
        rules: {
            pm_story: {
                story_con: [
                  {required: true, message: '请输入用户故事描述', trigger: 'blur'}
                ]
            }
        },
        formLabelWidth: '120px',
        group: 'mission',
        list1: [
          /* {
            story_id:"",
            story_con:"",
            story_not:"",
            story_stan:"",
            story_pri:"",
            story_state:"",
            lane_id:"",
            project_id:""
          } */
          { name: 'Mission', id: 1 },
          { name: 'Mission', id: 2 },
          { name: 'Mission', id: 3 },
          { name: 'Mission', id: 4 },
          { name: 'Mission', id: 5 },
          { name: 'Mission', id: 6 },
          { name: 'Mission', id: 7 },
        ],
        list2: [
          { name: 'Mission', id: 8 },
          { name: 'Mission', id: 9 },
          { name: 'Mission', id: 10 }
        ],
        list3: [
          /* { name: 'Mission', id: 11 }, */
          { story_con:"", story_id:""}
        ],
        list4: [
          { name: 'Mission', id: 12 }
        ],
        list5: [
          { name: 'Mission', id: 13 }
        ],
        list6: [
          { name: 'Mission', id: 14 },
          { name: 'Mission', id: 15 }
        ]
      }
    },
    created(){
      this.fetchData()
    },
    methods:{

      /* StorySettings(story_id){
        this.$router.push("/StoryDetails/"+1)
      }, */

      addstory(){
        let vm =this;
        this.axios({
          data:vm.form01,
          method:"POST",
          url:"http://localhost:8080/pmSystem/pm_story/addPmStory",

        }).then(function (response){
          //this.$refs['form01'].resetFields()
          //vm.$router.push("/StoryBoard")
          console.log(response)
        } )
      },
      /* resetForm(form01) {
          this.$refs[form01].resetFields();
      }, */

      fetchData(){
          let vm =this;
          this.axios({
            data:{
              lane_id:5
            },
            method:"POST",
            url:"http://localhost:8080/pmSystem/pm_story/getLaneStory",
          }).then(function (response) {
            vm.List3 = response.data.data
             console.log(vm.List3)
          })
      },
    },

  }
</script>

<style lang="scss" scoped>
  .flow {
    overflow:auto;
    max-width: 1300px;
  }
  .board {
    //width: 1000px;
    margin-left: 20px;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: flex-start;
    overflow:auto;
  }

</style>
