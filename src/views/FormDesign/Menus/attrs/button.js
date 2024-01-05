export default [
  { label: '字段label', component: 'input', name: 'label' },
  { label: '字段标识', component: 'input', name: 'name' },
  { label: '隐藏label', component: 'switch', name: 'hideLabel' },
  {
    label: 'props',
    component: 'itemGroup',
    name: 'props',
    children: [
      { label: '按钮名称', component: 'input', name: 'name' },
      {
        label: '点击事件',
        component: 'select',
        name: 'clickEvent',
        props: {
          mode: 'static',
          options: [
            { label: '提交表单', value: 'submitForm' },
            { label: '重置表单', value: 'resetForm' }
            // { label: '按钮', value: 'button' }
          ]
        },
        initialValue: 'submitForm'
      }
    ]
  }
]
