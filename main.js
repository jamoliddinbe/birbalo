fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => console.log(json));


  // add
  fetch("https://fakestoreapi.com/products", {
  method: "POST",
  body: JSON.stringify({
    title: "LG",
    price: 13.5,
    description: "lorem ipsum set",
    image: "https://i.pravatar.cc",
    category: "electronic",
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));




  