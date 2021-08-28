/*<!--===SHOW MENU===-->*/
  const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId)

      if(toggle && nav){
	toggle.addEventListener('click', ()=>{
	nav.classList.toggle('show')
	})
	}
}

   showMenu('nav-toggle','nav-menu')

   const navLink = document.querySelectorAll('.nav__link')
    
    function linkAction() {
     //Active Link
      navLink.forEach(n => n.classList.remove('active'))
      this.classList.add('active')

    //Remove menu mobile
      const navMenu = document.getElementById('nav-menu')
      navMenu.classList.remove('show')
}

   navLink.forEach(n => n.addEventListener('click', linkAction))


function embedElements(index,price,name,target){
  document.getElementById("mySidebar").innerHTML +=`
      <div class="featured__product">
        <a href="${target}">
        <div class="featured__box">
          
          <img src="${index}" alt="" class="featured__img"/>
        </div>
        </a>
      <div class="featured__data">
        <h3 class="featured__name">${name}</h3>
        <span class="featured__preci">$${price}</span>
      </div>  
      
      </div>
  `;
};
function headphone(){
  embedElements(
    "https://github.com/parth-kabra/Ecommerce_Website/blob/main/img/feature1.png?raw=true",
    29,
    "HEADPHONE OE BLACK",
    "headphone detail.html"
  );
}
function speaker(){
  embedElements(
    "https://github.com/parth-kabra/Ecommerce_Website/blob/main/img/feature2.png?raw=true",
    199,
    "SPEAKER BEATS PILL",
    "speaker.html"
  );
}
function ipods(){
  embedElements(
    "https://github.com/parth-kabra/Ecommerce_Website/blob/main/img/feature3.png?raw=true",
    122,
    "APPLE AIR PODS",
    "pods.html"
  );
}
function smartwatch(){
  embedElements(
    "https://github.com/parth-kabra/Ecommerce_Website/blob/main/img/feature4.png?raw=true",
    99,
    "SMARTWATCH F9 BLACK","watch.html"
  );
}
function google(){
  embedElements(
    "https://github.com/parth-kabra/Ecommerce_Website/blob/main/img/new3.png?raw=true",
    99,
    "Goggle",
    "Goggle.html"
  );
}
function bag(){
  embedElements(
    "https://github.com/parth-kabra/Ecommerce_Website/blob/main/img/new1.png?raw=true",
    50,
    "BAG",
    "bag.html"
  );
}

function purse(){
  embedElements(
    "https://github.com/parth-kabra/Ecommerce_Website/blob/main/img/new2.png?raw=true",
    80,
    "PURSE",
    "purse.html"
  );
}
function watch(){
  embedElements(
    "https://github.com/parth-kabra/Ecommerce_Website/blob/main/img/new4.png?raw=true",
    45,
    "WATCH",
    "watch1.html"
  )
}
function wallet(){
  embedElements(
    "https://github.com/parth-kabra/Ecommerce_Website/blob/main/img/new5.png?raw=true",
    47,
    "WALLET",
    "wallet.html"
  )
}
function bag1(){
  embedElements(
    "https://github.com/parth-kabra/Ecommerce_Website/blob/main/img/new6.png?raw=true",
    60,
    "SHOULDER BAG",
    "shoulder bag.html"
  )
}
function openNav() {
    document.getElementById("mySidebar").style.width = "50vw";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}
function rload(){
  location.reload();
}
