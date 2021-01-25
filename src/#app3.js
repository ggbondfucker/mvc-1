import './#app3.css'
import $ from 'jquery'

const $moveBox=$('.movebox')

$moveBox.on("click",()=>{
    $moveBox.toggleClass('active')
    console.log(1)
})