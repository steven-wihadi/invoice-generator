const product = {
  product_1: {
    id: 'product_1',
    name: 'Assus Rog',
    price: 20000000,
    imgSrc: 'https://www.jd.id/news/wp-content/uploads/2020/11/2f93506b003cc13f3eac93ec785c6e61_review-asus-rog-strix-g15-g512l-9.jpg',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  product_2: {
    id: 'product_1',
    name: 'Razer Blade stealth',
    price: 25000000,
    imgSrc: 'https://cdn.idntimes.com/content-images/community/2019/06/razer-blade-stealth-open-100763052-large-cc6ea3af72b05909709ce04df09aad4f_600x400.jpg',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  product_3: {
    id: 'product_3',
    name: 'Lenovo laptop',
    price: 7000000,
    imgSrc: 'https://static.republika.co.id/uploads/images/inpicture_slide/0.88118000-1564794064-lenovo_111029_big.jpg.jpeg',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  product_4: {
    id: 'product_4',
    name: 'Huawei laptop',
    price: 8000000,
    imgSrc: 'https://static.republika.co.id/uploads/images/inpicture_slide/0.88118000-1564794064-lenovo_111029_big.jpg.jpeg',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }
}

export function checkProduct() {
  if (!localStorage.getItem('product')) {
    localStorage.setItem('product', JSON.stringify(product));
  }
}

export function getProductFromLocal() {
  return  JSON.parse(localStorage.getItem('product'));
}

export function getProductList() {
  const data = getProductFromLocal();
  const result = [];
  for (let key in data) {
    result.push(data[key]);
  }

  return result;
}

export function getProductById(productId) {
  return getProductFromLocal()[productId];
}
