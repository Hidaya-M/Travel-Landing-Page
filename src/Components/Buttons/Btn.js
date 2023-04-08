import "./Btn.css"

function Btn() {
  return (
    <>
       <button type="button" class="btn">
  <strong>GET STARTED</strong>
  <div id="container-stars">
    <div id="stars"></div>
  </div>

  <div id="glow">
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
</button>
    </>
  )
}
function Btn2() {
  return (
    <>
   <button className='sub'>
  Subscribe
</button>
    </>
  )
}
export default Btn
export {Btn2}