<template>
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
</template>
<script>
import { getUserInfo } from "@/api/user";
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入你的密码"));
      } else {
        if (this.formCustom.passwdCheck !== "") {
          // 对第二个密码框单独验证
          // this.$refs.formCustom.validateField("passwd");
        }
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
        // console.log(valid);

        if (valid) {
          // console.log(getUserInfo);

          getUserInfo({ userId: this.numberId })
            .then(res => {
              console.log(res);
            })
            .catch(err => {
              console.log(err);
            });
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    }
  }
};
</script>

<style lang="less">
html,body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.ivu-form {
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
body {
  background-image: url("../assets/img/back_ground.jpg");

  background-repeat: no-repeat;

  background-position: center center;

  background-size: cover;
  
}
</style>
