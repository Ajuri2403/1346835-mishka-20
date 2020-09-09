//=============================================================================
//
//________main-nav_________
//
//=============================================================================

let nav_toggle = document.querySelector('.main-nav__toggle');
let nav_item_catalog = document.querySelector('.main-nav__item--catalog');
let nav_item_form = document.querySelector('.main-nav__item--form');
let nav_item_search = document.querySelector('.main-nav__item--search');
let nav_item_cart = document.querySelector('.main-nav__item--cart');
let nav = document.querySelector('.main-nav');

if (nav && window.matchMedia("(max-width: 767px)").matches) {
  nav_toggle.classList.remove('visually-hidden');
  nav_item_catalog.classList.add('visually-hidden');
  nav_item_form.classList.add('visually-hidden');
  nav_item_search.classList.add('visually-hidden');
  nav_item_cart.classList.add('visually-hidden');

  if (nav_toggle) {
    nav_toggle.onclick = function (evt) {
      evt.preventDefault();
      nav_toggle.classList.toggle('main-nav__toggle--active');
      nav_item_catalog.classList.toggle('visually-hidden');
      nav_item_form.classList.toggle('visually-hidden');
      nav_item_search.classList.toggle('visually-hidden');
      nav_item_cart.classList.toggle('visually-hidden');
    }
  }
}

//=============================================================================
//
//________site-list_________
//
//=============================================================================

let site_list = document.querySelector('.site-list');

if (site_list && window.matchMedia("(min-width: 768px) and (max-width: 1149px)").matches) {
  nav_item_catalog.classList.remove('site-list__item--block');
  nav_item_form.classList.remove('site-list__item--block');
  nav_item_catalog.classList.add('site-list__item--text--small');
  nav_item_form.classList.add('site-list__item--text--small');
}

//=============================================================================
//
//________modal-add-in-cart_________
//
//=============================================================================

let modal_add_in_cart = document.querySelector('.modal-add-in-cart');
let btn_order = document.querySelector('.product-of-the-week__button-order');
let catalog_container = document.querySelector('.catalog__container');
let btns_order_catalog = document.querySelectorAll('.catalog-item__button-add-in-cart');
let modal_add_in_cart_btn = document.querySelector('.modal-add-in-cart__button');

if (modal_add_in_cart) {
  if (btn_order) {
      btn_order.onclick = function(evt) {
        evt.preventDefault();
        modal_add_in_cart.classList.remove('visually-hidden');
      }
  }

  modal_add_in_cart_btn.onclick = function(evt) {
    evt.preventDefault();
    modal_add_in_cart.classList.add('visually-hidden');
  }
}

for (let btn of btns_order_catalog) {
  btn.onclick = function(evt) {
    evt.preventDefault();
    modal_add_in_cart.classList.remove('visually-hidden');
  }
}

//if (catalog_container) {
//  catalog_container.onclick = function(event) {
//    let target = event.target;
//
//    if (target.classList.contains('catalog-item__button-add-in-cart')) {
//      event.preventDefault();
//      modal_add_in_cart.classList.remove('visually-hidden');
//    };
//  };
//};

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modal_add_in_cart && !modal_add_in_cart.classList.contains('visually-hidden')) {
      evt.preventDefault();
      modal_add_in_cart.classList.add('visually-hidden');
    }
  }
});
