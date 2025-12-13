const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

// 3 - Розмітка елементів галереї

// У тебе є контейнер, в який можна додати елементи галереї, і дані, за якими їх можна створити.
// Саме час наповнювати галерею розміткою.

// Використовуй масив об’єктів images і цей HTML шаблон елемента галереї та створи в JavaScript
// коді розмітку елементів, після чого додай усю розмітку всередину ul.gallery.Не додавай інші HTML теги,
// крім тих, що містяться в цьому шаблоні.
//<li class="gallery-item">
 // <a class="gallery-link" href="large-image.jpg">
    //<img
      //class="gallery-image"
     // src="small-image.jpg"
     // data-source="large-image.jpg"
     // alt="Image description"
    ///>
  //</a>
//</li>


const container = document.querySelector('.gallery');
const createImages = images => {
    return images.map(image => {
        return `<li class="gallery-item">
            <a class="gallery-link" href="${image.original}">
            <img class="gallery-image" src="${image.preview}"
            data-source="${image.original}" 
            alt="${image.description}"/>
            </a>
            </li>`
    })
        .join('');
}

container.insertAdjacentHTML('beforeend', createImages(images));



// *4 - Стилі

// Додай стилізацію галереї згідно макету.



// *5 - Делегування

// Саме час додати функціонал прослуховування кліка по елементах галереї та отримання посилання
// на велике зображення при кліку.Для цього використовуй прийом делегування на ul.gallery.
// Поки що при кліку на елемент галереї виводь у консоль посилання на велике зображення,
// що зберігається як значення атрибуту data - source елемента img.

container.addEventListener('click', onGalleryItemClick);

// 3. Функція-обробник кліку
// function onGalleryItemClick(event) {
//     // 3.1. Скасовуємо дію за замовчуванням (перехід за посиланням <a>)
//     event.preventDefault();

//     // 3.2. Перевіряємо, чи клік відбувся саме на тегу <img>
//     const isImageElement = event.target.classList.contains('gallery-image');

//     // Якщо клік був не на зображенні, просто виходимо з функції
//     if (!isImageElement) {
//         return;
//     }

//     // 3.3. Якщо клік відбувся на <img>, отримуємо посилання на велике зображення
//     // Посилання зберігається в атрибуті 'data-source' елемента <img>
//     const largeImageUrl = event.target.dataset.source;
// }


// *6 - Підключення бібліотеки

// Бібліотека basicLightbox представляє повністю функціональне модальне вікно, яке відмінно
// підходить під нашу задачу.Використовуй CDN сервіс jsdelivr і додай в HTML файл посилання
// на мініфіковані(.min) JS та CSS файли бібліотеки.



// 7 - Модальне вікно

// Доповни свій код так, щоб при кліку по елементу галереї відкривалось модальне вікно підключеної
// бібліотеки. Для того щоб дізнатися, як ініціалізувати модальне вікно у своєму коді і як його
// використовувати, ознайомся з документацією і прикладами.

// 4. Створення та відкриття модального вікна basicLightbox

    // 4.1. Створюємо розмітку для вмісту модального вікна.
    // Тут ми використовуємо тег <img> з отриманим посиланням.
    // const modalContent = `<img src="${largeImageUrl}" alt="${event.target.alt}">`;

    // // 4.2. Ініціалізуємо (створюємо) екземпляр basicLightbox
    // const instance = basicLightbox.create(modalContent);
    
    // // 4.3. Відкриваємо модальне вікно
    // instance.show();

    // // 5. Додатковий функціонал: закриття модалки клавішею Escape (опціонально, але корисно)
    // document.addEventListener('keydown', onEscKeyPress);
    
    // function onEscKeyPress(e) {
    //     if (e.key === 'Escape') {
    //         instance.close();
    //         // Знімаємо слухача клавіатури, щоб уникнути конфліктів
    //         document.removeEventListener('keydown', onEscKeyPress); 
    //     }
    // }


// 8 - Велике зображення

// Використовуй свій код отримання посилання на велике зображення із атрибуту data - source,
// щоб замінити значення атрибута src елемента < img > в модальному вікні перед відкриттям.
// Використовуй готову розмітку модального вікна із зображенням із прикладів бібліотеки basicLightbox.
// 1. Статична розмітка модального вікна, яка використовуватиметься
// Ми використовуємо її для створення ОДНОГО екземпляра.
const modalContent = `
    <img class="lightbox-image" src="" alt="Large image" />
`;

// 2. Створюємо єдиний екземпляр basicLightbox поза обробником
const instance = basicLightbox.create(modalContent, {
    // Додаткові налаштування, якщо потрібні
    onShow: (instance) => {
        // Додаємо слухача клавіатури лише при відкритті
        document.addEventListener('keydown', onEscKeyPress);
    },
    onClose: (instance) => {
        // Знімаємо слухача клавіатури при закритті
        document.removeEventListener('keydown', onEscKeyPress);
    }
});

// Функція для закриття по Escape (використовує єдиний екземпляр)
function onEscKeyPress(e) {
    if (e.key === 'Escape') {
        instance.close();
    }
}


// 3. Обробник кліку
function onGalleryItemClick(event) {
    event.preventDefault();

    const target = event.target;
    const isImageElement = target.classList.contains('gallery-image');

    if (!isImageElement) {
        return;
    }

    // 3.1. Отримуємо посилання на велике зображення
    const largeImageUrl = target.dataset.source;
    
    // 3.2. **ЗНАХОДИМО та ОНОВЛЮЄМО SRC**
    // Для цього нам потрібно отримати DOM-елемент <img> всередині екземпляра basicLightbox.
    // basicLightbox має метод .element()
    const modalImageElement = instance.element().querySelector('.lightbox-image');

    // Перевіряємо, чи знайшли ми елемент зображення
    if (modalImageElement) {
        // Встановлюємо нове значення атрибута src
        modalImageElement.src = largeImageUrl;
        // Оновлюємо атрибут alt
        modalImageElement.alt = target.alt; 
    }

    // 3.3. Відкриваємо модальне вікно (воно вже створено, ми просто його показуємо)
    instance.show();
}