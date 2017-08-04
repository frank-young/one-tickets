const verify = {
  user: [
    { required: true, message: '请填写用户名', trigger: 'blur' }
  ],
  phone: [
    { required: true, message: '请填写手机号', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请填写密码', trigger: 'blur' },
    { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
  ]
}

export default {
  verify
}
