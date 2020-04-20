<template>
    <div>
      <!--{{this.$route.params.project_id}}-->

        <el-form ref="form" :model="form" >
          <el-form-item label="项目名称" >
            <el-input v-model="form.project_name" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="迭代周期" >
            <el-input v-model="form.project_spr" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="项目类型" >
            <el-select v-model="form.project_type" placeholder="请选择项目类型">
              <el-option label="公开" value="0"></el-option>
              <el-option label="私有" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="项目简介" >
            <el-input type="textarea" v-model="form.project_des" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="ProjectSettings = false">取 消</el-button>
          <el-button type="primary" @click="updateProject">确 定</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Settings",
      data(){
        return{
          form: {
              project_id:'',
              project_men:'',
              project_time:'',
              project_name: '',
              project_spr: '',
              project_type:'',
              project_des:'',

          },
        };
      },
      created(){
        this.fetchDataById();
      },
      methods:{
        fetchDataById(){
          let id =this.$route.params.project_id;
          let vm =this;
          this.$axios({
            data:{
              project_id:id
            },
            method:"POST",
            url:"http://localhost:8080/pmSystem/pm_project/queryById"
          }).then(function (response){
            vm.form = response.data.data
            console.log(response)
          } )
        },
        updateProject(){
          let id =this.$route.params.project_id;
          let vm =this;
          vm.form.project_id=id;
          this.$axios({
            data:vm.form,
            method:"POST",
            url:"http://localhost:8080/pmSystem/pm_project/updateProject",

          }).then(function (response){
            vm.$router.push("/Project")
            console.log(response)
          } )
        }
      }
    }
</script>

<style scoped>

</style>
