export function addClass(vnode, classes) {
  if (!vnode.data) {
    vnode.data = { staticClass: classes }
  } else {
    let { staticClass } = vnode.data
    vnode.data.staticClass = staticClass ? `${classes} ${staticClass}` : classes
  }
}
