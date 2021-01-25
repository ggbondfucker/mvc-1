import './#app4.css'
import $ from 'jquery'

const $circle=$('.circle')

$circle.on('mouseenter',()=>{
    console.log(2)
    $circle.addClass('active')
}).on('mouseleave',()=>{
    $circle.removeClass('active')
})