<template>
  <div class="outer">
    <Form
    ref="formCustom"
    :model="formCustom"
    :rules="ruleCustom"
    :label-width="80"
  >
    <h1>16计网二班 - 班级管理系统</h1>
    <FormItem label="学号" prop="numberId">
      <Input type="text" v-model="formCustom.numberId" placeholder="请输入学号">
      </Input>
    </FormItem>
    <FormItem label="密码" prop="passwd">
      <Input
        type="password"
        v-model="formCustom.passwd"
        placeholder="请输入密码"
      ></Input>
    </FormItem>
    <FormItem>
      <Button size="large" type="primary" @click="handleSubmit('formCustom')"
        >登录</Button
      >
    </FormItem>
  </Form>
  </div>
</template>
<script>
import { getUserInfo } from "@/api/user";
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入你的密码"));
      } else {
        callback();
      }
    };
    const validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("学号不能为空"));
      } else {
        callback();
      }
    };

    return {
      formCustom: {
        numberId: "",
        passwd: ""
      },
      ruleCustom: {
        passwd: [{ validator: validatePass, trigger: "blur" }],
        numberId: [{ validator: validateName, trigger: "blur" }]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      // console.log(this.$refs[name].validate);

      this.$refs[name].validate(valid => {
        console.log(valid);

        if (valid) {
          // console.log(getUserInfo);

          getUserInfo({ userId: this.formCustom.numberId, passwd: this.formCustom.passwd})
            .then(res => {
              // console.log(res);
              if(res.err == 0){
                this.$Message.success(res.msg);
                localStorage.setItem("Token", res.token)
                this.$router.push({
                  name: 'Layout'
                })
              } else {
                this.$Message.error(res.msg);
              }
            })
            .catch(err => {
              console.log(err);
              this.$Message.error('内部错误');
            });
          
        } else {
          this.$Message.error("密码或者用户名为空!");
        }
      });
    }
  }
};
</script>

<style lang="less">

.ivu-form {
  z-index: 999;
  width: 30%;
  margin: 10% auto;
  & .ivu-input-wrapper {
    display: block;
    width: 100%;
  }
  & h1 {
    margin: 20px 0;
    text-align: center;
    padding: 30px;
  }
  & .ivu-btn {
    display: block;
    width: 100%;
  }
}
.outer {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url("../assets/img/back_ground.jpg");

  background-repeat: no-repeat;

  background-position: center center;

  background-size: cover;
  
  z-index: 998;
}
</style>
