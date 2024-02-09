import { createApp } from 'vue'
import router from './router'
// import VueFormCraft from '../dist/vue-form-craft.mjs'
import VueFormCraft from './release'
import { request } from '@/utils'
// import '@arco-design/web-vue/dist/arco.css'
// import { Switch, Input, Textarea, InputNumber } from '@arco-design/web-vue'
// import 'ant-design-vue/dist/reset.css'
// import { Switch, Input, Textarea, InputNumber } from 'ant-design-vue'

const render = (component, dom) => {
  const app = createApp(component)

  app.use(router)
  app.use(VueFormCraft, {
    request,
    getSchema: async (schemaId) => {
      const { data } = await request({
        url: 'https://hyl999.co:7777/current/query/form',
        params: {
          filters: {
            id: schemaId
          }
        }
      })
      return JSON.parse(data[0].formSchema)
    }
    // icon: { component: IconRender, propKey: 'name' }
    //   customElements: {
    //     Input: {
    //       component: Input,
    //       modelName: 'value'
    //     },
    //     Switch: {
    //       component: Switch,
    //       modelName: 'checked',
    //       propAttrs: [
    //         { label: '打开时描述', component: 'Input', name: 'checked-text' },
    //         { label: '关闭时描述', component: 'Input', name: 'unchecked-text' }
    //       ]
    //     },
    //     Textarea: {
    //       component: Textarea,
    //       modelName: 'value'
    //     },
    //     InputNumber: {
    //       component: InputNumber,
    //       modelName: 'value'
    //     }
    //   }
  })

  app.mount(dom)
}

export default render
