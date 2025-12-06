

let menupage=document.querySelector(".phonemenu");
[...document.querySelectorAll(".svgmenu")][0]
.onclick=()=>{
    menupage.classList.toggle("slidein")
}

[...document.querySelectorAll(".svgmenu")][1]
.onclick=()=>{
menupage.classList.toggle("slidein")
}

let showcase = document.querySelector(".showroom");
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