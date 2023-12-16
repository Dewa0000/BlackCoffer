fetch(" jsondata.json")
.then(function(response){
    return response.json();
})
.then(function(data){
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for(let product of products){
        out += `
              <tr>
                  <td>${product.intensity}</td>
                  <td>${product.likelihood}</td>
                  <td>${product.relevance}</td>
                  <td>${product.end_year}</td>
                  <td>${product.start_year}</td>
                  <td>${product.country}</td>
                  <td>${product.topic}</td>
                  <td>${product.region}</td>
                  
              </tr>
        `;
    }
    placeholder.innerHTML = out;
})

const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu_bar');
const closeBtn = document.querySelector('#close_btn');

const themeToggler = document.querySelector('.theme-toggler');

menuBtn.addEventListener('click',()=>{
    sideMenu.style.display="block"
})
menuBtn.addEventListener('click',()=>{
    sideMenu.style.display="none"
})

.themeToggler.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme-variables')
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
})