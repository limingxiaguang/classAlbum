import Mock from "mockjs";
import { getUserInfo, login, authorization } from "./response/user";
import { getTableData, getFileList, getFolderList } from "./response/data";
const Random = Mock.Random;
Mock.setup({
  timeout: 0
});

Random.extend({
  fruit() {
    const fruit = ["apple", "peach", "lemon"];
    return this.pick(fruit);
  }
});

export default Mock;
