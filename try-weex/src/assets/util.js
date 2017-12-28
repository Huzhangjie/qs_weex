let utilFunc = {
  initIconFont() {
    // weex 有其之处
    // native的解决方案 icon
    let domMoudle = weex.requireModule('dom');
    domMoudle.addRule('fontFace', {
      "fontFamily": "iconfont",
      'src': "url('http://at.alicdn.com/t/font_404010_jgmnakd1zizr529.ttf')"
    })
  }
}
export default utilFunc;