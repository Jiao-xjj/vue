import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import Home from '../views/Home'
import Project from '../views/Project'
import Settings from '../views/Settings'
import StoryBoard from '../views/StoryBoard.vue'
import StoryDetails from '../views/StoryDetails.vue'
import ProjectHome from '../views/ProjectHome.vue'
import Board from '../views/Board.vue'
Vue.use(Router);

export default new Router({
  routes:[{
    path: '/Login',
    name: 'Login',
    component: Login
  },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children:[
        {
          path: '/Project',
          name: 'Project',
          component: Project
        }
      ]
    },

    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children:[
        {
          path: '/Settings/:project_id',
          name: 'Settings',
          component: Settings,
        }
      ]
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children:[
        {
          path: '/ProjectHome',
          name: 'ProjectHome',
          component: ProjectHome,
          children:[
            {
            path: '/StoryBoard',
            name: 'StoryBoard',
            component: StoryBoard,
            },
            {
            path: '/StoryDetails',
            name: 'StoryDetails',
            component: StoryDetails
            }
          ]
        }
      ]
    },
    {
      path: '/Board',
      name: 'Board',
      component: Board
    }
  ]
})
