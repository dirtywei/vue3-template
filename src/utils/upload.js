/**
 * @description  API式调用选择文件弹窗
 * @method  chooseImage().then((file) => {})
 * @author DirtyWei
 */

export const chooseFile = (customerOptions = {}) => {
  return new Promise((resolve) => {
    const classNames = ' apiChooseFile '
    //删除前面创建的 input 避免用户取消选择时 input 遗留在 document
    let apiChooseFiles = document.querySelector(`.${classNames}`)
    apiChooseFiles &&
      [apiChooseFiles].forEach((el) => {
        document.body.removeChild(el)
      })
    //创建选择文件的 dom
    const input = document.createElement('input')
    input.type = 'file'
    input.hidden = 'hidden'
    input.setAttribute('class', classNames)
    document.body.appendChild(input)
    //默认配置
    const defaultOptions = {
      limit: 1
    }
    //合并
    const options = Object.assign(defaultOptions, customerOptions)
    options.accept && (input.accept = options.accept)
    options.limit > 1 && (input.multiple = 'multiple')

    input.click()
    input.onchange = (e) => {
      resolve(e.target.files)
      document.body.removeChild(input)
    }
  })
}

/**
 * @description 选择图片
 * @author DirtyWei
 */
export const chooseImage = (customerOptions = {}) => {
  let options = {
    accept: 'image/*',
    limit: 1
  }
  return chooseFile(Object.assign(options, customerOptions))
}

/**
 * @description  选择表格文件
 * @author DirtyWei
 */
export const chooseTableFile = (customerOptions = {}) => {
  let options = {
    accept:
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel',
    limit: 1
  }
  return chooseFile(Object.assign(options, customerOptions))
}
