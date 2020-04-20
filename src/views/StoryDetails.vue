<template>
  <div id="storydetails" class="story">
    <el-form ref="form" :model="form" >
      <el-form-item label="用户故事描述" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="form.story_con" autocomplete="off"></el-input>
        </el-form-item>
      <el-form-item label="细节注释" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="form.story_not" autocomplete="off"></el-input>
        </el-form-item>
      </el-form-item>
      <el-form-item label="验收标准" :label-width="formLabelWidth">
        <el-input type="textarea" v-model="form.story_stan" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="优先级" :label-width="formLabelWidth">
        <el-select v-model="form.story_pri" placeholder="请选择用户故事优先级">
          <el-option label="较低" value="0"></el-option>
          <el-option label="普通" value="1"></el-option>
          <el-option label="紧急" value="2"></el-option>
          <el-option label="非常紧急" value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="状态" :label-width="formLabelWidth">
        <el-select v-model="form.story_state" placeholder="请选择用户故事状态">
          <el-option label="未完成" value="0"></el-option>
          <el-option label="已完成" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth">
          <el-button type="primary" @click="updateStory">确定</el-button>
          <el-button @click="goBoard">取消</el-button>
          <el-button type="primary" @click="deleteStory">删除</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'StoryDetails',
    data(){
      return{
        form: {
            story_id:'',
            story_con: '',
            story_not: '',
            story_stan:'',
            story_pri:'',
            story_state:''
        },
        formLabelWidth: '120px'
      };
    },
    created(){
      this.fetchDataById()
    },
    methods: {
      onSubmit() {
        console.log('submit!', this.form);
      },
      goBoard() {
         this.$router.push({path:'/StoryBoard'})
      },

      fetchDataById(){
         /* let id =this.$route.params.story_id; */
        let vm =this;
        this.$axios({
          data:{
            story_id:35
          },
          method:"POST",
          url:"http://localhost:8080/pmSystem/pm_story/getPmStory"
        }).then(function (response){
          vm.form = response.data.data
          console.log(vm.form)
          console.log(response)
        } )
      },
      updateStory(){
        /* let id =this.$route.params.story_id; */
        let vm =this;
        /* 写死 */
        vm.form.story_id="35";
        this.$axios({
          data:vm.form,
          method:"POST",
          url:"http://localhost:8080/pmSystem/pm_story/updatePmStory",

        }).then(function (response){
          vm.$router.push("/StoryBoard")
          console.log(response)
          console.log(vm.form)
          console.log(vm.form.pm_story.story_id)
        } )
      },
      deleteStory(){
        /* let id =this.$route.params.story_id; */
        let vm =this;
        /* 写死 */
        vm.form.story_id="35";
        this.$axios({
          data:vm.form,
          method:"POST",
          url:"http://localhost:8080/pmSystem/pm_story/deletePmStory",

        }).then(function (response){
          vm.$router.push("/StoryBoard")
          console.log(response)
          console.log(vm.form)
          console.log(vm.form.story_id)
        } )
      }
    },
  }
</script>

<style scoped>
  .story{
    width: 600px;
  }
</style>
