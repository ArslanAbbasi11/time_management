import {login} from "./login";
import { register } from "./register";
import { loginStatus } from "./loginStatus";
import { fetchData } from "./fetchData";
import { crudUsers } from "./crudUsers";
import { createUsers } from "./createUsers";
import { createWorkLog } from "./workLogs";
import { crudWorkLog } from "./crudWorkLog";
import { hoursPatch } from "./hoursPatch";
import { fetchWorkLogs } from "./workLogs";
const allActions = {
   login,
  register,
  loginStatus,
 fetchData,
  crudUsers,
  createUsers,
   createWorkLog,
   crudWorkLog,
   hoursPatch,
  fetchWorkLogs
}

export default allActions