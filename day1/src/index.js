import $ from "jquery"
//@代表src目录
// import './index.css'
import '@/index.css'
import './index1.less'

import img1 from './images/Android.jpg'
$('.img1').attr('src', img1)
//放入口函数内也可


$(function () {
    $('li:odd').css('background-color', 'blue')
    $('li:even').css('background-color', 'pink')
})

//高级语法 测试babel
function info(target) {
    target.a = 1
}

@info
class perosn { }
console.log(perosn.a);