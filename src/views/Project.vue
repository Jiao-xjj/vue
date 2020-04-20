<template>
    <div>
      <div>
      <el-button  @click="dialogFormVisible = true">创建项目</el-button>
      </div>
      <div>
        <el-table
          :data="List"
          style="width: 100%">
          <el-table-column
            prop="project_id"
            label="项目id"
            width="100" >
            <template slot-scope="scope">
              <i class="el-icon-star-on"></i>
              <span style="margin-left: 10px">{{ scope.row.project_id }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="project_name"
            label="项目名称"
            width="500" >
            <template slot-scope="scope">
              <i class="el-icon-star-on"></i>
              <span style="margin-left: 10px">{{ scope.row.project_name }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="project_time"
            label="创建日期"
            width="200">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.project_time }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="project_men"
            label="创建人"
            width="200">
            <template slot-scope="scope">
              <i class="el-icon-user"></i>
              <span style="margin-left: 10px">{{ scope.row.project_men }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="进度"
            width="300">
            <template slot-scope="scope">
              <el-progress :percentage="50"></el-progress>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="ProjectSettings(scope.row.project_id)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>

      </div>

      <el-dialog title="新建项目" :visible.sync="dialogFormVisible">
        <el-form :model="form01">
          <el-form-item label="项目名称" :label-width="formLabelWidth">
            <el-input v-model="form01.pm_project.project_name" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="迭代周期" :label-width="formLabelWidth">
            <el-input v-model="form01.pm_project.project_spr" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="项目类型" :label-width="formLabelWidth">
            <el-select v-model="form01.pm_project.project_type" placeholder="请选择项目类型">
              <el-option label="公开" value="0"></el-option>
              <el-option label="私有" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="项目简介" :label-width="formLabelWidth">
            <el-input type="textarea" v-model="form01.pm_project.project_des" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addProject">确 定</el-button>
        </div>
      </el-dialog>

      <!--<el-dialog title="项目设置" :visible.sync="ProjectSettings">

        <el-form :model="form02">
          <el-form-item label="项目名称" :label-width="formLabelWidth">
            <el-input v-model="form02.project_name" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="迭代周期" :label-width="formLabelWidth">
            <el-input v-model="form02.project_spr" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="项目类型" :label-width="formLabelWidth">
            <el-select v-model="form02.project_type" placeholder="请选择项目类型">
              <el-option label="公开" value="0"></el-option>
              <el-option label="私有" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="项目简介" :label-width="formLabelWidth">
            <el-input type="textarea" v-model="form02.project_des" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="ProjectSettings = false">取 消</el-button>
          <el-button type="primary" @click="ProjectSettings = false">确 定</el-button>
        </div>
      </el-dialog>-->
    </div>
</template>

<script>
  //import Qs from 'qs'
    export default {
        name: "project",
      data() {
        return {
          List: [{
            project_id:"",
            project_name:"",
            project_time:"",
            project_men:""
          }],
          dialogTableVisible: false,
          dialogFormVisible: false,
          /*ProjectSettings:false,*/
          form01: {
            pm_project:{
              project_id:'',
              project_men:'',
              project_time:'',
              project_name: '',
              project_spr: '',
              project_type:'',
              project_des:'',
            }
          },
          /*form02: {
            project_name: 'test01',
            project_spr: '2',
            project_type:'0',
            project_des:'',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
          },*/
          formLabelWidth: '120px'
        };
      },
      created(){
        this.fetchData()
      },
      methods:{

        ProjectSettings(project_id){
          this.$router.push("/Settings/"+project_id)
        },

        fetchData(){
            let vm =this;
            this.axios({
              method:"GET",
              url:"http://localhost:8080/pmSystem/pm_project/getPm_project",
            }).then(function (response) {
              vm.List = response.data.data
              /*console.log(vm.List)*/
            })
          },

        addProject(){
          let vm =this;
          this.axios({
            /*transformRequest:[function (data) {
              return Qs.stringify(data)
            }],*/
            data:vm.form01,
            method:"POST",
            url:"http://localhost:8080/pmSystem/pm_project/addProjectInfo",

          }).then(function (response){
            vm.$router.push("/Home")
            console.log(response)
          } )
        }
      }

    }
</script>

<style scoped>

</style>
