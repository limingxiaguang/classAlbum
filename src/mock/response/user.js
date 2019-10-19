export const getUserInfo = option => {
  console.log(option)
  console.log(JSON.parse(option.body))

  const { body } = option;
  const { userId, passwd } = JSON.parse(body)
  if (userId === "8221116054") {
    if (passwd === "123") {
      return {
        err: 0,
        msg: "登陆成功",
        token: "sdfnosdi48489sd48g94sg7f4f6s4gfrgregera87ew7t",
        type: "admin"
      }
    } else {
      return {
        err: -2,
        msg: "密码错误"
      }
    }
  } else {
    return {
      err: -1,
      msg: "用户名不存在"
    };
  }
};
