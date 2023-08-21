/*为空*/
export const isEmpty = (str) => {
  if (str == '' || str == undefined || str == null) {
    return true
  } else {
    return false
  }
}

/*6到20位，仅包含字母和数字的密码*/
export const isPassword = (str) => {
  let reg = /^[A-Za-z0-9_]{6,20}$/
  if (reg.test(str)) {
    return true
  } else {
    return false
  }
}

/*身份证验证*/
export const isCard = (str) => {
  // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
  let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  if (reg.test(str)) {
    return true
  } else {
    return false
  }
}

/*是否手机号码*/
export const isPhone = (str) => {
  let phone_reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
  if (phone_reg.test(str)) {
    return true
  } else {
    return false
  }
}
