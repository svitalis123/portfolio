const div = document.querySelector('#menu');
const icon = document.querySelector('#icon');
icon.addEventListener('click', () => {
  div.classList.toggle('menu_holder_display');
});

const data = [
  {
    id: '1',
    img: './assets/main/projectdetails.jpg',
    deskimg: './assets/main/port.jpg',
    desktech: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Codepen'],
    mobiletech: ['Ruby on rails', 'CSS', 'JavaScript'],
    live_version: 'https://svitalis123.github.io/portfolio/app',
    source_link: 'https://github.com/svitalis123/portfolio',
    head: 'Keeping track of hundreds of components',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  {
    id: '2',
    img: './assets/main/projectdetails.jpg',
    deskimg: './assets/main/port.jpg',
    desktech: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Codepen'],
    mobiletech: ['Ruby on rails', 'CSS', 'JavaScript'],
    live_version: 'https://svitalis123.github.io/portfolio/app',
    source_link: 'https://github.com/svitalis123/portfolio',
    head: 'Keeping track of hundreds of components',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  {
    id: '3',
    img: './assets/main/projectdetails.jpg',
    deskimg: './assets/main/port.jpg',
    desktech: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Codepen'],
    mobiletech: ['Ruby on rails', 'CSS', 'JavaScript'],
    live_version: 'https://svitalis123.github.io/portfolio/app',
    source_link: 'https://github.com/svitalis123/portfolio',
    head: 'Keeping track of hundreds of components',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  {
    id: '4',
    img: './assets/main/projectdetails.jpg',
    deskimg: './assets/main/port.jpg',
    desktech: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Codepen'],
    mobiletech: ['Ruby on rails', 'CSS', 'JavaScript'],
    live_version: 'https://svitalis123.github.io/portfolio/app',
    source_link: 'https://github.com/svitalis123/portfolio',
    head: 'Keeping track of hundreds of components',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  {
    id: '5',
    img: './assets/main/projectdetails.jpg',
    deskimg: './assets/main/port.jpg',
    head: 'Keeping track of hundreds of components',
    desktech: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Codepen'],
    mobiletech: ['Ruby on rails', 'CSS', 'JavaScript'],
    live_version: 'https://svitalis123.github.io/portfolio/app',
    source_link: 'https://github.com/svitalis123/portfolio',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  {
    id: '6',
    img: './assets/main/projectdetails.jpg',
    deskimg: './assets/main/port.jpg',
    head: 'Keeping track of hundreds of components',
    desktech: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Codepen'],
    mobiletech: ['Ruby on rails', 'CSS', 'JavaScript'],
    live_version: 'https://svitalis123.github.io/portfolio/app',
    source_link: 'https://github.com/svitalis123/portfolio',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
];

function getId(id) {
  if (window.innerWidth > 920) {
    const challdesk = (str) => {
      const closebtn2 = document.getElementById(`${str}`);
      closebtn2.addEventListener('click', () => {
        const divDetails2 = document.querySelector('#project1amend1desc');
        divDetails2.classList.remove('details_ammenddescreverse');
      });
    };
    for (let c = 0; c < data.length; c += 1) {
      if (id === data[c].id) {
        const dividwe = document.querySelector('#project1amend1desc');
        dividwe.classList.toggle('details_ammenddescreverse');
        const divi = document.querySelector('#project1amend1desc2');
        divi.innerHTML = `<img src=${data[c].deskimg} style="height:616px; margin-top:78px; width:872px; position: relative;"alt="project image"/>;
          <div id="${data[c].id}dis" class="closexl" style="position:absolute; top:2%; right: 5%;"><i class="fa fa-close" style="float:right; padding:12px; color:#000; font-size:xx-large;" ></i></div>
          <div style="display: flex;">
          <h2 style="font-family: 'Inter', sans-serif; font-size: 32px; width: 589px; font-weight: 700; line-height:44px; color: #172b4d; padding:12px;">${data[c].head}</h2>
          <div style="display: flex; gap:10px; padding: 12px;">
          <a href=${data[c].live_version} target="_blank" class="javabtn" style="padding: 10px; text-decoration: none;  color: #fff; font-size: 15px; line-height:20px; font-weight:600; font-family: 'Inter', sans-serif; background-color: #36b37f; height: 48px; border-radius:5px; display:flex; justify-content:center; align-items:center; outline:none; border:none; ">See live<i class="fa fa-arrow-right" style="color: #fff; padding: 12px 12px 12px 12px; "></i></a>
          <a href=${data[c].source_link}  target="_blank" class="javabtn" style="padding: 10px; text-decoration: none; color: #fff; font-size: 15px; line-height:20px; font-weight:600; font-family: 'Inter', sans-serif; background-color: #36b37f; height: 48px; border-radius:5px; display:flex; justify-content:center; align-items:center; outline:none; border:none; ">See Source<i class="fa fa-github" style="color: #fff; padding: 12px 12px 12px 12px; "></i></a>
        </div>
        </div>
        <ul style="list-style:none; margin-bottom:12px; display:flex; gap:8px; flex-wrap:wrap;">
          ${
  data[c].desktech.map((dat) => `<li style="padding: 8px 12px; background: #ebf0ee; border-radius: 5px; color: #3a4a42; font-size: 12px; line-height:16px; font-weight:600; font-family: 'Inter', sans-serif;">${dat}</li>`)
}
         </ul>
        <p style="width:876px; height:313px;color: #344563; font-size: 16px; line-height:30px; font-weight:400; font-family: 'Inter'; sans-serif; margin-bottom:16px;">${data[c].para}</p>`;
        challdesk(`${data[c].id}dis`);
      }
    }
  } else {
    const chall = (str) => {
      const closebtn = document.getElementById(`${str}`);
      closebtn.addEventListener('click', () => {
        const divDetails = document.querySelector('#project1amend1');
        divDetails.classList.remove('detailsssx');
      });
    };
    for (let b = 0; b < data.length; b += 1) {
      if (id === data[b].id) {
        const divid = document.querySelector('#project1amend1');
        divid.classList.toggle('detailsssx');
        divid.innerHTML = `
        <img src=${data[b].img} 
        style="height:220px; width:311px; position: relative; "
        alt="project image" />
        <div id=${data[b].id}  class="closexs" style="position:absolute; top:1px; right: 5px;"><i class="fa fa-close" style="float:right; padding:12px; color:white; font-size:xx-large;" ></i></div>
        <h2 style="font-family: 'Inter', sans-serif; font-size: 32px; font-weight: 600; line-height:44px; color: #172b4d; padding:12px;">${data[b].head}</h2>
        <ul style="list-style:none; margin-bottom:12px; display:flex; gap:8px; flex-wrap:wrap;">
          ${data[b].mobiletech.map((tec) => `<li style="padding: 8px 12px; background: #ebf0ee; border-radius: 5px; color: #3a4a42; font-size: 12px; line-height:16px; font-weight:600; font-family: 'Inter', sans-serif;">${tec}</li>`)}
        </ul>
        <p style="width:311px; height:313px;color: #344563; font-size: 16px; line-height:24px; font-weight:400; font-family: 'Inter', sans-serif; margin-bottom:16px;">${data[b].para}</p>
        <div style="width: 311px; display: flex; flex-wrap:wrap; gap: 12px;">
        <a  href=${data[b].live_version} target="_blank" class="javabtn" style="padding: 10px; text-decoration: none; color: #fff; font-size: 17px; line-height:24px; font-weight:500; font-family: 'Inter', sans-serif; background-color: #36b37f; height: 48px; border-radius:5px; display:flex; justify-content:center; align-items:center; outline:none; border:none; ">See live<i class="fa fa-arrow-right" style="color: #fff; padding: 12px 12px 12px 12px; "></i></a>
        <a  href=${data[b].source_link} target="_blank" class="javabtn" style="padding: 10px; text-decoration: none; color: #fff; font-size: 17px; line-height:24px; font-weight:500; font-family: 'Inter', sans-serif; background-color: #36b37f; height: 48px; border-radius:5px; display:flex; justify-content:center; align-items:center; outline:none; border:none; ">See Source<i class="fa fa-github" style="color: #fff; padding: 12px 12px 12px 12px; "></i></a>
        </div>
        `;
        chall(data[b].id);
      }
    }
  }
}
getId();

const storagedata = [];
const form = document.getElementById('form');
function submity() {
  form.addEventListener('change', () => {
    const thedata = {
      name: document.getElementById('form_name').value,
      email: document.getElementById('form_email').value,
      comment: document.getElementById('form_message').value,
    };
    storagedata.unshift(thedata);
    localStorage.setItem('formdata', JSON.stringify(storagedata));
  });
}

function callData() {
  const receive = JSON.parse(localStorage.getItem('formdata'));
  document.getElementById('form_email').value = receive[0].email;
  document.getElementById('form_name').value = receive[0].name;
  document.getElementById('form_message').value = receive[0].comment;
}
form.addEventListener('submit', submity());
window.addEventListener('DOMContentLoaded', callData());
