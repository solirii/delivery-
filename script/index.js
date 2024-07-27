const modalFunc = () => {
    const modal = document.querySelector('.card-modal__overlay');  
 const cartBtn = document.querySelector('#cart-button');

 const openModal = () => {
    modal.classList.add('open');
 };

 const closeModal = () => {
    modal.classList.remove('open');
 };

 cartBtn.addEventListener('click', () => {
    openModal()
 });

 modal.addEventListener('click', (event) => {
    console.log();
    if (
        event.target.classList.contains('card-modal__overlay') ||
        event.target.closest('.card-modal__header--close')
    ) {
        closeModal()
    }
});
};

const restsFunc = () => {
    const container = document.querySelector('#rests-container')

    const restArray = [
        {
            id: 0,
            title: 'Пицца плюс',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'rest1.jpg'
        },
        {
            id: 1,
            title: 'Тануки',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'rest2.jpg'
        },
        {
            id: 2,
            title: 'FoodBand',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'rest3.jpg'
        },
        {
            id: 3,
            title: 'Жадина-пицца',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'rest4.jpg'
        },
        {
            id: 4,
            title: 'Точка еды',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'rest5.jpg'
        },
        {
            id: 5,
            title: 'PizzaBurger',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'rest6.jpg'
        },
    ]

    const loading = () => {
        container.innerHTML = '<p style="width: 100%; text-align:center;">Загрузка</p>'
    }

    const randerRests = (array) => {
        container.innerHTML = ''


        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
                <a href="./goods.html?id=${card.id}" class="products-card">
                        <div class="products-card_image">
                            <img src="./images/rests/${card.image}" alt="${card.image}">
                        </div>
                        <div class="products-card_description">
                            <div class="products-card_description-row">
                                <h4 class="products-card_description--title">${card.title}</h4>
                                <div class="products-card_description--badge">${card.time} мин</div>
                            </div>

                            <div class="products-card_description-row">
                                <div class="products-card_description-info">
                                    <div class="products-card_description-info--raiting">
                                        <img src="./images/icons/star.svg" alt="star">
                                        ${card.rating}
                                    </div>
                                    <div class="products-card_description-info--price">
                                        От ${card.price} ₽
                                    </div>
                                    <div class="products-card_description-info--group">
                                        ${card.type}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>    
                `)
        })
    }

    if (container) {
        loading()

        setTimeout(() => {
            randerRests(restArray)
        }, 1000)
    }

}

const goodsFunc = () => {
    const container = document.querySelector('#goods-container')

    const goodsArray = [
        {
            id: 0,
            name: 'Ролл угорь стандарт',
            description: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
            price: 250,
            image: 'item1.jpg',
        },
        {
            id: 1,
            name: 'Калифорния лосось стандарт',
            description: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
            price: 395,
            image: 'item2.jpg',
        },
        {
            id: 2,
            name: 'Окинава стандарт',
            description: 'Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
            price: 250,
            image: 'item3.jpg',
        },
        {
            id: 3,
            name: 'Цезарь маки хl',
            description: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
            price: 250,
            image: 'item4.jpg',
        },
        {
            id: 4,
            name: 'Ясай маки стандарт 185 г',
            description: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
            price: 250,
            image: 'item5.jpg',
        },
        {
            id: 5,
            name: 'Ролл с креветкой стандарт',
            description: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
            price: 250,
            image: 'item6.jpg',
        },

    ]

    const loading = () => {
        container.innerHTML = '<p style="width: 100%; text-align:center;">Загрузка</p>'
    }

    const randerGoods = (array) => {
        container.innerHTML = ''


        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
                <div class="products-card">
                <div class="products-card_image">
                            <img src="./images/goods/${card.image}" alt="${card.image}">
                        </div>
                        <div class="products-card_description">
                            <div class="products-card_description-row">
                                <h5 class="products-card_description--name">${card.name}</h5>
                            </div>

                            <div class="products-card_description-row">
                                <p class="products-card_description--text">${card.description}</p>

                            </div>

                            <div class="products-card_description-row">
                                <div class="products-card_description-controls">
                                    <button class="btn btn-primary">
                                        В корзину
                                        <img src="./images/icons/shopping-cart-white.png" alt="shopping-cart-white">
                                    </button>

                                    <span class="products-card_description-controls--price">
                                        ${card.price} ₽
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div> 
                `)
        })
    }



    if (container) {
        loading()

        setTimeout(() => {
            randerGoods(goodsArray)
        }, 1000)
    }

}

modalFunc()
restsFunc()
goodsFunc()