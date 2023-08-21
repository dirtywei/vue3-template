/*隐藏身份证中间11位*/
export const omitID = (str) => {
  let new_str = str.substr(0, 3) + '******' + str.substr(12)
  return new_str
}

/*省略手机号码中间4位*/
export const omitPhone = (str) => {
  let str1 = str.substr(0, 3) + '****' + str.substr(7)
  return str1
}

/*隐藏姓名，电话或者身份证中间几位*/
export const hidden = (str, frontLen, endLen) => {
  let len = str.length - frontLen - endLen
  let xing = ''
  for (let i = 0; i < len; i++) {
    xing += '*'
  }
  return str.substring(0, frontLen) + xing + str.substring(str.length - endLen)
}
