const div = document.querySelector('#menu');
const icon = document.querySelector('#icon');
icon.addEventListener('click', () => {
  div.classList.toggle('menu_holder_display');
});

const data = {
  project1: {
    img: './assets/main/projectdetails.jpg',
    deskimg: './assets/main/port.jpg',
    head: 'Keeping track of hundreds of components',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  project2: {
    img: './assets/main/projectdetails.jpg',
    deskimg: './assets/main/port.jpg',
    head: 'Keeping track of hundreds of components',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  project3: {
    img: './assets/main/projectdetails.jpg',
    deskimg: './assets/main/port.jpg',
    head: 'Keeping track of hundreds of components',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  project4: {
    img: './assets/main/projectdetails.jpg',
    deskimg: './assets/main/port.jpg',
    head: 'Keeping track of hundreds of components',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  project5: {
    img: './assets/main/projectdetails.jpg',
    deskimg: './assets/main/port.jpg',
    head: 'Keeping track of hundreds of components',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  project6: {
    img: './assets/main/projectdetails.jpg',
    deskimg: './assets/main/port.jpg',
    head: 'Keeping track of hundreds of components',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
};

const chall = (str) => {
  const closebtn = document.getElementById(`${str}`);
  closebtn.addEventListener('click', () => {
    const divDetails = document.querySelectorAll('[id*="amend"]');
    const arraydiv = Array.from(divDetails);
    for (let a = 0; a < arraydiv.length; a += 1) {
      arraydiv[a].classList?.remove('detailsssx');
    }
  });
};
for (let b = 0; b < Object.keys(data).length; b += 1) {
  const buttona = document.querySelector(`#${Object.keys(data)[b]}`);
  buttona?.addEventListener('click', () => {
    const divDetails = document?.querySelector(`#${Object.keys(data)[b]}amend1`);
    divDetails.classList.toggle('detailsssx');
    divDetails.innerHTML = `<img src=${data.project1.img} 
  style="height:220px; width:311px; position: relative; "
  alt="project image" />;
  <div id=${Object.keys(data)[b]}  class="closexs" style="position:absolute; top:1px; right: 5px;"><i class="fa fa-close" style="float:right; padding:12px; color:white; font-size:xx-large;" ></i></div>
  <h2 style="font-family: 'Inter', sans-serif; font-size: 32px; font-weight: 600; line-height:44px; color: #172b4d; padding:12px;">${data.project1.head}</h2>
  <ul style="list-style:none; margin-bottom:12px; display:flex; gap:8px; flex-wrap:wrap;"><li style="padding: 8px 12px; background: #ebf0ee; border-radius: 5px; color: #3a4a42; font-size: 12px; line-height:16px; font-weight:600; font-family: 'Inter', sans-serif;">Ruby ob rails</li><li style="padding: 8px 12px; background: #ebf0ee; border-radius: 5px; color: #3a4a42; font-size: 12px; line-height:16px; font-weight:600; font-family: 'Inter', sans-serif;">CSS</li><li style="padding: 8px 12px; background: #ebf0ee; border-radius: 5px; color: #3a4a42; font-size: 12px; line-height:16px; font-weight:600; font-family: 'Inter', sans-serif;">JavaScript</li></ul>
  <p style="width:311px; height:313px;color: #344563; font-size: 16px; line-height:24px; font-weight:400; font-family: 'Inter', sans-serif; margin-bottom:16px;">${data.project1.para}</p>
  <div style="width: 311px; display: flex; flex-wrap:wrap; gap: 12px;">
  <button type="button"  class="javabtn" style="padding: 10px; color: #fff; font-size: 17px; line-height:24px; font-weight:500; font-family: 'Inter', sans-serif; background-color: #36b37f; height: 48px; border-radius:5px; display:flex; justify-content:center; align-items:center; outline:none; border:none; ">See live<i class="fa fa-arrow-right" style="color: #fff; padding: 12px 12px 12px 12px; "></i></button>
  <button type="button" class="javabtn" style="padding: 10px; color: #fff; font-size: 17px; line-height:24px; font-weight:500; font-family: 'Inter', sans-serif; background-color: #36b37f; height: 48px; border-radius:5px; display:flex; justify-content:center; align-items:center; outline:none; border:none; ">See Source<i class="fa fa-github" style="color: #fff; padding: 12px 12px 12px 12px; "></i></button
  </div>`;
    chall(Object.keys(data)[b]);
  });
}

const challdesk = (str) => {
  const closebtn2 = document.getElementById(`${str}`);
  closebtn2.addEventListener('click', () => {
    const divDetails2 = document.querySelectorAll('[id*="amend1desc"]');
    const detail2 = Array.from(divDetails2);
    for (let d = 0; d < detail2.length; d += 1) {
      detail2[d].classList.remove('details_ammenddescreverse');
    }
  });
};
for (let c = 0; c < Object.keys(data).length; c += 1) {
  const buttonab = document.querySelector(`#${Object.keys(data)[c]}`);
  buttonab?.addEventListener('click', () => {
    const divDetails2 = document.querySelector(`#${Object.keys(data)[c]}amend1desc`);
    divDetails2.classList.toggle('details_ammenddescreverse');
    divDetails2.innerHTML = `<img src=${data.project1.deskimg} style="height:616px; margin-top:78px; width:872px; position: relative;"alt="project image"/>;
    <div id="${Object.keys(data)[c]}dis" class="closexl" style="position:absolute; top:2%; right: 5%;"><i class="fa fa-close" style="float:right; padding:12px; color:#000; font-size:xx-large;" ></i></div>
    <div style="display: flex;">
    <h2 style="font-family: 'Inter', sans-serif; font-size: 32px; width: 589px; font-weight: 700; line-height:44px; color: #172b4d; padding:12px;">${data.project1.head}</h2>
    <div style="display: flex; gap:10px; padding: 12px;">
    <button type="button"  class="javabtn" style="padding: 10px; color: #fff; font-size: 15px; line-height:20px; font-weight:600; font-family: 'Inter', sans-serif; background-color: #36b37f; height: 48px; border-radius:5px; display:flex; justify-content:center; align-items:center; outline:none; border:none; ">See live<i class="fa fa-arrow-right" style="color: #fff; padding: 12px 12px 12px 12px; "></i></button>
    <button type="button" class="javabtn" style="padding: 10px; color: #fff; font-size: 15px; line-height:20px; font-weight:600; font-family: 'Inter', sans-serif; background-color: #36b37f; height: 48px; border-radius:5px; display:flex; justify-content:center; align-items:center; outline:none; border:none; ">See Source<i class="fa fa-github" style="color: #fff; padding: 12px 12px 12px 12px; "></i></button>
  </div>
  </div>
  <ul style="list-style:none; margin-bottom:12px; display:flex; gap:8px; flex-wrap:wrap;">
    <li style="padding: 8px 12px; background: #ebf0ee; border-radius: 5px; color: #3a4a42; font-size: 12px; line-height:16px; font-weight:600; font-family: 'Inter', sans-serif;">Codekit</li>
    <li style="padding: 8px 12px; background: #ebf0ee; border-radius: 5px; color: #3a4a42; font-size: 12px; line-height:16px; font-weight:600; font-family: 'Inter', sans-serif;">GitHub</li>
    <li style="padding: 8px 12px; background: #ebf0ee; border-radius: 5px; color: #3a4a42; font-size: 12px; line-height:16px; font-weight:600; font-family: 'Inter', sans-serif;">Javasript</li>
    <li style="padding: 8px 12px; background: #ebf0ee; border-radius: 5px; color: #3a4a42; font-size: 12px; line-height:16px; font-weight:600; font-family: 'Inter', sans-serif;">Bootstrap</li>
    <li style="padding: 8px 12px; background: #ebf0ee; border-radius: 5px; color: #3a4a42; font-size: 12px; line-height:16px; font-weight:600; font-family: 'Inter', sans-serif;">Terminal</li>
    <li style="padding: 8px 12px; background: #ebf0ee; border-radius: 5px; color: #3a4a42; font-size: 12px; line-height:16px; font-weight:600; font-family: 'Inter', sans-serif;">Codepen</li>
  </ul>
  <p style="width:876px; height:313px;color: #344563; font-size: 16px; line-height:30px; font-weight:400; font-family: 'Inter', sans-serif; margin-bottom:16px;">${data.project1.para}</p>
  `;
    challdesk(`${Object.keys(data)[c]}dis`);
  });
}
