import { createRouter, createWebHistory } from "vue-router";
import ParentComponent from "./pages/parent-child/ParentComponent.vue";
import ChildParentComponent from "./pages/child-parent/ParentComponent.vue";
import ChildComponent from "./pages/child-parent/ChildComponent.vue";
import ChildCParentComponent from "./pages/child-child/ParentComponent.vue";
import UsersComponent from "./pages/users/UsersList.vue";
import FormHandling from "./pages/form-handling/FormHandling.vue";

const routes = [
  { path: "/parent-child", component: ParentComponent },
  { path: "/child-parent", component: ChildParentComponent },
  { path: "/child-parent", component: ChildComponent },
  { path: "/child-child", component: ChildCParentComponent },
  { path: "/users", component: UsersComponent },
  { path: "/form-handling", component: FormHandling },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
