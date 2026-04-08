

let menupage=document.querySelector(".phonemenu");
[...document.querySelectorAll(".svgmenu")][0]
.onclick=()=>{
    menupage.classList.toggle("slidein")
}

[...document.querySelectorAll(".svgmenu")][1]
.onclick=()=>{
menupage.classList.toggle("slidein")
}

function launchEmail() {
  const recipient = "bhdecor@gmail.com";
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;
  const topic = document.querySelector('#topic').value;
  const subject = "from:" + email + "(" + phone + ")" + topic;
  const message = document.querySelector('#message').value;
  const formattedBody = `Hello,\n\n${message}\n\nSent from my beautiful home decor website.`;
  // FIX: Changed '&subject' to '?subject'
  const mailtoUrl = `mailto:${recipient}` +
                    `?subject=${encodeURIComponent(subject)}` +
                    `&body=${encodeURIComponent(formattedBody)}`;
window.open(mailtoUrl,"_blank")
  window.location.href = mailtoUrl;
}
let showcase = document.querySelector(".showroom");
let showroom = document.querySelector(".tilecollection");

fetch("https://benasdom.github.io/tiles-api/static.json")
.then((res )=>res.json())
.then(res=>{
    let gallery=res.data;
    gallery = gallery.map((a,b)=>{
return b?`
      <div class="grid-card" key=${b+""}> 
                        <div class="logobackdrop"></div>
        <img class="tilepic"  src="https://benasdom.github.io/tiles-api${a.productImages[0]}" class="imggallery" />
    </div>`:``
}).filter(a=>a)
showroom.innerHTML=gallery.join(``);
})
// let payload = [
//     {brandName:"Beautiful Home decor", name:"Stone Collection", price:"GHS 350",image:"/assets/tilea.jpg", brandUnit:"1.13m"},
//     {brandName:"Beautiful Home decor", name:"Ocean fiji", price:"GHS 290",image:"/assets/tileb.jpg", brandUnit:"1.3m"}
// ]
let data =[...Array(21).fill("/assets/bhd")]
.map((a,b)=>{
return b?`
      <div class="tilecard" key=${b+""}> 
                        <div class="logobackdrop"></div>
        <div class="tilepic"  style="background:url(.${a+b}.jpg);background-size:cover;">
            <div class="brandlogo"></div>
            <div class="picdetail">
            <div class="picdetailitem">
            <div class="pdi">
            Go to products page
            </div>
            <a class="pdis" href="#">
            <svg width="14" height="14" viewBox="0 0 14 14">
            <path d="M10.8101 1.96222L0.726954 12.0453L1.66171 12.9801L11.7448 2.89698L11.9344 9.4447L13.208 9.07311L13.0134 2.35278C12.9877 1.46249 12.2434 0.718185 11.3531 0.692412L4.80762 0.502924L4.43487 1.77539L10.8101 1.96222Z" fill="white" stroke="white" stroke-width="0.542084"></path>
            </svg>
            </a>
            </div>
            </div>
        </div>
    </div>`:``
}).filter(a=>a)
showcase.innerHTML=data.join(``);