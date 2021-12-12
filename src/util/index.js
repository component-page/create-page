/* 数组对象转化字符串 
[
  tag:,
  style,
  content
]*/
function arrChangeStr(arr) {
  let str = ""
  arr.forEach(e => {
    if (Array.isArray( e.content)) {
      str += `<${e.tag} style="${e.style}">${arrChangeStr(e.content)}</${e.tag}>`
    } else {
      str += `<${e.tag} style="${e.style}">${e.content}</${e.tag}>`
    }

  })
  return str
}
/* 反推找到DOM节点对应的数组位置 */
function backFind(el) {
  let result = "";
  console.log(el.className);
  
  if (el.parentNode && el.className.indexOf("viewShowPage")==-1 && el.className.indexOf("view")==-1) {
    console.log(el.parentNode.children);
    
    [...el.parentNode.children].forEach((e, i) => {
      if (e == el) {
           result= backFind(el.parentNode)+","+i
          
      }
    })
  }
  return result
}
export { arrChangeStr,backFind }

