<template>
    <div class="login-box">
      <el-form  :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px">
        <h3 class="login-title">欢迎登录</h3>
        <el-form-item label="用户名" prop="username" >
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" >
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('ruleForm')">登录</el-button>
          <el-button>注册</el-button>
        </el-form-item>
      </el-form>

    </div>
</template>

<script>
    export default {
        name: "Login",
      data() {
        return {
          ruleForm: {
            username: '',
            password:''
          },
          rules:{
            username: [
              { required: true, message: '请输入用户名称', trigger: 'blur' },
              { min: 3, max: 10, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            password: [
              { required: true, message: '请输入用户密码', trigger: 'blur' },
              { min: 3, max: 10, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ]
          },
        }
      },

      methods: {
        onSubmit(formName) {
          this.$refs[formName].validate((valid) => {
            var user = this;
            if (valid) {
             // alert('submit!');
              this.$router.push("/Home")

              /*this.axios({
                method:'post',
                url:'http://localhost:8080/easydev/0.1/user/login',
                data:{
                  username: user.form.username,
                  password: user.form.password
                }
              }).then(function (resp) {
                console.log(resp)
                }
              )*/
            } else {
              alert('请输入用户名或密码!');
              return false;
            }
          });

        }
      }
    }
</script>

<style scoped>
  .login-box{
    width: 500px;
    height: 400px;
    border: 1px solid cornflowerblue;
    margin: 100px auto;
    padding: 30px 50px 0px 30px;
    border-radius: 20px;
    box-shadow: 0px 0px 20px darkcyan;
  }
  .login-title{
    text-align: center;

  }
</style>
