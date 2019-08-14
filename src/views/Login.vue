<template>
  <Form
    ref="formCustom"
    :model="formCustom"
    :rules="ruleCustom"
    :label-width="80"
  >
    <h1>16计网二班 - 班级管理系统</h1>
    <FormItem label="学号" prop="numberId">
      <Input type="text" v-model="formCustom.numberId"></Input>
    </FormItem>
    <FormItem label="密码" prop="passwd">
      <Input type="password" v-model="formCustom.passwd"></Input>
    </FormItem>
    <FormItem>
      <Button size="large" type="primary" @click="handleSubmit('formCustom')"
        >Submit</Button
      >
    </FormItem>
  </Form>
</template>
<script>
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入你的密码"));
      } else {
        if (this.formCustom.passwdCheck !== "") {
          // 对第二个密码框单独验证
          this.$refs.formCustom.validateField("passwdCheck");
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
        passwd: "",
        age: ""
      },
      ruleCustom: {
        passwd: [{ validator: validatePass, trigger: "blur" }],
        numberId: [{ validator: validateName, trigger: "blur" }]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
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
.ivu-form {
  width: 30%;
  margin: 100px auto;
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
  width: 100%;
  height: 100%;
  background-image: url("../assets/img/back_ground.jpg");

  background-repeat: no-repeat;

  background-position: center center;

  background-size: cover;
}
</style>
