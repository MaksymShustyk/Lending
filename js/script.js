// Функція розміру боксу для коментарів
function size (){

    let textBox = document.getElementsByClassName('testimoilas-text')
    let box = document.getElementsByClassName('testimoilas-box')
    let n = box.length
    for (let i=0; i<n; i++){
    if (textBox[i].textContent.length<220){
    box[i].style.height='141px';
    }
    if (textBox[i].textContent.length>350){
    box[i].style.height='302px';
    }
    if (textBox[i].textContent.length>=550){
        box[i].classList.add('read-more')
        let divReadMore = document.createElement('div')
        divReadMore.className='testimoilas-box_read-more'
        divReadMore.innerHTML='<button class="btn read-more_btn" href="#">Читать далее</button>'
    // document.body.insertBefore(box[i], divReadMore);
    box[i].insertAdjacentElement('afterbegin', divReadMore)
    }
    }
}

size ();

// функція визначення кількості коментарів які видно за замовчуванням
let testimoilasLeft = document.getElementsByClassName('testimoilas_column-left')
let testimoilasRight = document.getElementsByClassName('testimoilas_column-right')
function showTestimoilas(){

    if(testimoilasLeft[0].children[0].style.height===testimoilasRight[0].children[0].style.height){
        testimoilasLeft[0].children[0].classList.add('active')
        testimoilasRight[0].children[0].classList.add('active')
    }else{
        testimoilasLeft[0].children[0].classList.add('active')
        testimoilasLeft[0].children[1].classList.add('active')
        testimoilasRight[0].children[0].classList.add('active')
    }
}

// Функція показу всіх коментарів
showTestimoilas();
let testimoilasBtn = document.getElementById('all_testimoilas');
testimoilasBtn.onclick=function showAllTestimoilas(){
    let box = document.getElementsByClassName('testimoilas-box')
    let n = box.length
    for (let i=0; i<n; i++){
    if (!box[i].classList.contains('active')){
        box[i].classList.add('active')
    }else {
        box[i].classList.remove('active')
        showTestimoilas()

    }
    }
}
// Тестова функція показу модального вікна з текстом великих кометарів
let readMoreBtn = document.getElementsByClassName('read-more_btn')
    let n = readMoreBtn.length
    for (let i =0 ;i<n; i++){
        readMoreBtn[i].addEventListener('click', function(){
            let box = readMoreBtn[i].parentElement.parentElement
            let textBox = box.children[1].textContent;
            let fullTestimoilas = document.getElementById('full-testimoilas')
            let fullTestimoilasText = document.getElementById('full-testimoilas_text')

            if (fullTestimoilas.classList.contains('full_active')){
                fullTestimoilas.classList.remove('full_active')
                return false

            }else {
                fullTestimoilas.classList.add('full_active')
                fullTestimoilasText.textContent=textBox
                return true
            }
        })
    }


// Функція для виходу з модального вікна
function closeModalBox(){
    let fullTestimoilas = document.getElementById('full-testimoilas')

    if (fullTestimoilas.classList.contains('full_active')){
        fullTestimoilas.classList.remove('full_active')

    }
}
// Функція виклику форми
let btn = document.getElementById('discount-btn');
btn.onclick = function onClick(){
    const discountForm = document.getElementById('discount-conteiner');

    discountForm.classList.add('visible');

};


// Перевірка форми на вірність введених даних
const form = document.getElementById('form');
const nameUser = document.getElementById('name');
const surName = document.getElementById('surname');
const telephone = document.getElementById('telephone');
const email = document.getElementById('email');
const date = document.getElementById('date');
const discountForm = document.getElementById('discount-conteiner');

let nameUser_error = false;
let surName_error = false;
let telephone_error = false;
let email_error = false;
let date_error = false;


nameUser.onblur = function checkNameUser() {
    let pat = /^[A-Z\А-ЯІЁ]+[A-Za-zА-Яа-яЁёІі]+$/;
    if (pat.test(nameUser.value.trim())) {
        nameUser.parentElement.className=('form-box corect');
    } else {
        nameUser.parentElement.className=('form-box error');
        let nameError = document.getElementById('name_error');
        nameError.innerText='Не верно указаное имя!';
        nameUser_error=true;
    }
  };

  surName.onblur = function checkSurName() {
    let pat = /^[A-Z\А-ЯІЁ]+[A-Za-zА-Яа-яЁёІі]+$/;
    if (pat.test(surName.value.trim())) {
        surName.parentElement.className=('form-box corect');
    } else {
        surName.parentElement.className=('form-box error');
        let nameError = document.getElementById('surname_error');
        nameError.innerText='Не верно указано фамилию!';
        surName_error=true;
    }
  };
  telephone.onblur = function checkTelephone() {
    let pat = /[\+]\d{3}[\(]\d{2}[\)]\d{3}[\-]\d{2}[\-]\d{2}/;
    if (pat.test(telephone.value.trim())) {
        telephone.parentElement.className=('form-box corect');
    } else {
        telephone.parentElement.className=('form-box error');
        let nameError = document.getElementById('phone_error');
        nameError.innerText='Не верно указан номер телефона (Пример: +380(9х)ххх-хх-хх)';
        telephone_error=true;
    }
  };

  email.onblur = function checkEmail() {
    let pat = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (pat.test(email.value.trim())) {
        email.parentElement.className=('form-box corect');
    } else {
        email.parentElement.className=('form-box error');
        let nameError = document.getElementById('email_error');
        nameError.innerText='Не верний E-mail!';
        email_error=true;
  }
  };

  date.onblur = function checkDate() {
    let pat = /[\+]\d{3}[\(]\d{2}[\)]\d{3}[\-]\d{2}[\-]\d{2}/;
    let dtToday = new Date();
    let month = dtToday.getMonth() + 1;// jan=0; feb=1 .......
    let day = dtToday.getDate();
    let year = dtToday.getFullYear() - 18;
    let brDate = year+'-'+month+'-'+day
    if(date.value.trim()>brDate){
      date.parentElement.className=('form-box error');
      let nameError = document.getElementById('date_error');
      nameError.innerText='Только совершенолетний 18+!)';
      date_error=true;
    } else if(date.value.trim()==='') {
        date.parentElement.className=('form-box error');
        let nameError = document.getElementById('date_error');
        nameError.innerText='Не верная дата рождения!';
        date_error=true;

    } else {
        date.parentElement.className=('form-box corect');
    }
  };


function confirmIn(){
    nameUser_error=false;
    surName_error=false;
    telephone_error=false;
    email_error=false;
    date_error= false;


    nameUser.onblur();
    surName.onblur();
    telephone.onblur();
    email.onblur();
    date.onblur();

    if (nameUser_error===false && surName_error===false && telephone_error===false && email_error===false && date_error=== false){
        alert('Ваша заявка в обработке, ждите звонка.');
    }else if(nameUser_error===false || surName_error===false || telephone_error===false || email_error===false || date_error=== false) {
        alert('Ошибка, не все поля заполнены!');
        return false;
    }else if(nameUser.value==='' || surName.value==='' || telephone.value==='' || email.value==='' || date.value===''){
        alert('Ошибка, все поля должны быть заполнены!');
        return false;
    }
}
