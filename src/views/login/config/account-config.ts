export const rules = {
  name: [
    {
      required: true,
      message: '用户名是必须的',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,5}$/,
      message: '长度为3-5个数字或字母',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码是必须的',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码必须为3个以上字母或数字',
      trigger: 'blur'
    }
  ]
}
