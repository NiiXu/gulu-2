import Vue from "vue"
import Button from "./button"
import Icon from "./icon"
import ButtonGroup from "./buttonGroup"
import Input from "./input"
import Row from "./row"
import Col from "./col"
import Layout from "./layout"
import Header from "./header"
import Sider from "./sider"
import Content from "./content"
import Footer from "./footer"
import Toast from "./toast"
import plugin from "./plugin"
import Tabs from "./tabs"
import TabsHead from "./tabs-head"
import TabsBody from "./tabs-bodys"
import TabsItem from "./tabs-item"
import TabsPane from "./tabs-pane"
import Popover from "./popover"
import Collapse from './collapse'
import CollapseItem from './collapse-item'
import Slides from "./slides";
import SlidesItem from "./slides-item";

Vue.component("g-button", Button)
Vue.component("g-icon", Icon)
Vue.component("g-button-group", ButtonGroup)
Vue.component("g-input", Input)
Vue.component("g-row", Row)
Vue.component("g-col", Col)
Vue.component("g-layout", Layout)
Vue.component("g-header", Header)
Vue.component("g-sider", Sider)
Vue.component("g-content", Content)
Vue.component("g-footer", Footer)
Vue.component("g-toast", Toast)
Vue.component("g-tabs", Tabs)
Vue.component("g-tabs-head", TabsHead)
Vue.component("g-tabs-body", TabsBody)
Vue.component("g-tabs-item", TabsItem)
Vue.component("g-tabs-pane", TabsPane)
Vue.component("g-popover",Popover)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)
Vue.component("g-slides", Slides)
Vue.component("g-slides-item", SlidesItem)
Vue.use(plugin)



import createElement from "vue"

const h = createElement

new Vue({
  el: "#app",
  data: {
    selectedTab: ['2','1']
  },
  created() {

  },
  methods: {
    yyy(){
      console.log('yyy')
    },
    showToast1() {
      this.showToast("top")
    },
    showToast2() {
      this.showToast("middle")
    },
    showToast3() {
      this.showToast("bottom")
    },
    showToast(position) {
      this.$toast(`你的智商目前为 ${parseInt(Math.random() * 100)}。你的智商需要充值！`, {
        position,
        enableHtml: false,
        closeButton: {
          text: "已充值",
          callback() {
            console.log("他说已经充值智商了")
          }
        },
        autoClose: 3,
      })
    }
  }
})


// import chai from "chai"
// import spies from 'chai-spies'
//
// chai.use(spies)
//
// const expect = chai.expect
// try {
// //单元测试
//   {
//     //测试按钮还有icon
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//       propsData: {
//         icon: "setting"
//       }
//     })
//     vm.$mount("#test")
//     let useElement = vm.$el.querySelector("use")
//     let href = useElement.getAttribute("xlink:href")
//     expect(href).to.eq("#i-setting")
//     vm.$el.remove()
//     vm.$destroy()
//   }
//
//   {
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//       propsData: {
//         icon: "setting",
//         loading: true
//       }
//     })
//     vm.$mount()
//     let useElement = vm.$el.querySelector("use")
//     let href = useElement.getAttribute("xlink:href")
//     expect(href).to.eq("#i-loading")
//     vm.$el.remove()
//     vm.$destroy()
//   }
//
//   {
//     const div = document.createElement("div")
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//       propsData: {
//         icon: "setting"
//       }
//     })
//     vm.$mount(div)
//     let svg = vm.$el.querySelector("svg")
//     let {order} = window.getComputedStyle(svg)
//     expect(order).to.eq("1")
//     vm.$el.remove()
//     vm.$destroy()
//   }
//   {
//     const div = document.createElement("div")
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//       propsData: {
//         icon: "setting",
//         iconPosition: "right"
//       }
//     })
//     vm.$mount(div)
//     let svg = vm.$el.querySelector("svg")
//     let {order} = window.getComputedStyle(svg)
//     expect(order).to.eq("2")
//     vm.$el.remove()
//     vm.$destroy()
//   }
//   {
//
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//       propsData: {
//         icon: "setting",
//         iconPosition: "right"
//       }
//     })
//     vm.$mount()
//     let spy = chai.spy(function () {
//     })
//
//     vm.$on("click", spy)
//     let button = vm.$el
//     button.click()
//     expect(spy).to.have.been.called()
//   }
// } catch (error){
//   window.error = [error]
// } finally {
//   window.error && error.forEach((error) =>{
//     console.error(error.message)
//   })
// }
