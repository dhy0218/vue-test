import Vue from 'vue'
import { Button } from 'element-ui'
import {Form,FormItem} from 'element-ui'
import {Input,Container,Header,Aside,Main,Menu,Submenu,MenuItemGroup,MenuItem,
    Breadcrumb,BreadcrumbItem,Card,Row,Col,Table,TableColumn,Pagination,MessageBox,Steps,Step,Alert
    ,Tabs,TabPane,scrollbar,
} from 'element-ui'
import {Message} from 'element-ui'
import VCharts from 'v-charts'
    Vue.use(VCharts)
    Vue.use(scrollbar)
Vue.prototype.$message = Message

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Aside)

Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)

Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)

Vue.use(Card)
Vue.use(Row)
Vue.use(Col)

Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Step)
Vue.use(Steps)
Vue.use(Alert)
Vue.use(Tabs)
Vue.use(TabPane)
