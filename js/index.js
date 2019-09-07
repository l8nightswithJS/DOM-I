const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Nav selector using all selector to get nav a property and then using index to get individual a tag

const navAll = document.querySelectorAll('nav a')
console.log(navAll);
const navs = siteContent.nav;
const itemOne = navs["nav-item-1"];
const itemTwo = navs["nav-item-2"];
const itemThree = navs["nav-item-3"];
const itemFour = navs["nav-item-4"];
const itemFive = navs["nav-item-5"];
const itemSix = navs["nav-item-6"];
navAll[0].append(itemOne);
navAll[1].append(itemTwo);
navAll[2].append(itemThree);
navAll[3].append(itemFour);
navAll[4].append(itemFive);
navAll[5].append(itemSix);
console.log(itemOne)

//creating new link tags using prepennd and appendchild

var aOne = document.createElement('a');
aOne.innerHTML = "Home";
var aTwo = document.createElement('a');
aTwo.innerHTML = "Also";
const nav = document.querySelector('nav');
nav.prepend(aOne);
nav.appendChild(aTwo);
navAll.forEach((element) => {
  element.style.color = "green";
})

//selector for h1 and button in the cta-text

const ctaText = document.querySelector('.cta-text h1');
ctaText.append(siteContent.cta["h1"]);

const ctaButton = document.querySelector(".cta-text button")
ctaButton.append(siteContent.cta["button"]);

//selector for img by grabbing its Id

const ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent.cta['img-src']);
ctaImage.addEventListener('click', (image) => {
  ctaImage.setAttribute('src', 'https://i.pinimg.com/originals/63/ea/30/63ea30247778e1899f48503e34474192.jpg');
})

//selectors for top content h4 and p tags using same method as for nav to select by index

const headers = document.querySelectorAll('.text-content h4');
const allMain = siteContent["main-content"];
console.log(allMain)
headers[0].append(allMain["features-h4"]);
headers[1].append(allMain['about-h4'])
headers[2].append(allMain['services-h4'])
headers[3].append(allMain['product-h4'])
headers[4].append(allMain['vision-h4'])

const paragraph = document.querySelectorAll('.text-content p');
console.log(paragraph);
paragraph[0].append(allMain["features-content"]);
paragraph[1].append(allMain['about-content'])
paragraph[2].append(allMain['services-content'])
paragraph[3].append(allMain['product-content'])
paragraph[4].append(allMain['vision-content'])

//adding img to main-content

const mainImage = document.getElementById('middle-img');
mainImage.setAttribute('src', allMain['middle-img-src']);

//adding content to class contact

const contactH4 = document.querySelector('.contact h4');
contactH4.append(siteContent.contact['contact-h4']);
const contactP = document.querySelectorAll('.contact p');
contactP[0].append(siteContent.contact['address'])
contactP[1].append(siteContent.contact['phone'])
contactP[2].append(siteContent.contact['email'])

//adding footer selector and content

const footer = document.querySelector('footer p');
footer.append(siteContent.footer['copyright']);
footer.style.backgroundColor = 'green';

//added some background color too nav container

const headerQuery = document.querySelector('header');
headerQuery.style.backgroundColor = 'yellow';

