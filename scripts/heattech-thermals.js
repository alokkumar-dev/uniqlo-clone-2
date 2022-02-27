// const newArrivalObj_1 = [
//     {
//         image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/439045/item/ingoods_09_439045.jpg?width=1008&impolicy=quality_75",
//         gender: "WOMEN",
//         size: "XS-XL",
//         description: "WOMEN HEATTECH Cotton Crew Neck T (Extra Warm) Thermal",
//         exclusive: "Exclusive Size Online Only",
//         price: 1490,
//         id: 445381
//     },
//     {
//         image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/446264/item/ingoods_09_446264.jpg?width=1600&impolicy=quality_75",
//         gender: "WOMEN",
//         size: "S-3XL",
//         description: "WOMEN HEATTECH Cotton Scoop Neck T (Extra Warm) Thermal",
//         exclusive: "Exclusive Size Online Only",
//         price: 1490,
//         id: 445382
//     },

//     {
//         image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/446264/sub/ingoods_446264_sub3.jpg?width=1600&impolicy=quality_75",
//         gender: "WOMEN",
//         size: "S-XXL",
//         description: "WOMEN Ultra Light Down Vest",
//         exclusive: "Exclusive Size Online Only",
//         price: 2990,
//         id: 445383
//     },
//     {
//         image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/446264/item/ingoods_38_446264.jpg?width=1600&impolicy=quality_75",
//         gender: "WOMEN",
//         size: "S-L",
//         description: "WOMEN HEATTECH Cotton Scoop Neck T (Extra Warm) Thermal",
//         exclusive: "Exclusive Size Online Only",
//         price: 2490,
//         id: 445394
//     },
//     {
//         image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/438954/item/ingoods_38_438954.jpg?width=1600&impolicy=quality_75",
//         gender: "WOMEN",
//         size: "S-XL",
//         description: "WOMEN Ultra Light Down Relaxed Jecket",
//         exclusive: "Exclusive Size Online Only",
//         price: 3990,
//         id: 445385
//     },
//     {
//         image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/438954/sub/ingoods_438954_sub3.jpg?width=1600&impolicy=quality_75",
//         gender: "WOMEN",
//         size: "S",
//         description: "WOMEN HEATTECH Crew Neck T-Shirt (Ultra Warm) Thermal",
//         exclusive: "Exclusive Size Online Only",
//         price: 2990,
//         id: 445396
//     },
//     {
//         image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/438954/item/ingoods_09_438954.jpg?width=1600&impolicy=quality_75",
//         gender: "WOMEN",
//         size: "S-3XL",
//         description: "WOMEN Light Pile Lined Fleece Long Sleeve Set",
//         exclusive: "Exclusive Size Online Only",
//         price: 2990,
//         id: 445397
//     },
//     {
//         image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/439138/item/ingoods_12_439138.jpg?width=1008&impolicy=quality_75",
//         gender: "WOMEN",
//         size: "SX-XXL",
//         description: "WOMEN Fluffy Yarn Fleece Full-Zip Jecket",
//         exclusive: "Exclusive Size Online Only",
//         price: 3990,
//         id: 445398
//     },
//     {
//         image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/444146/item/goods_09_444146.jpg?width=1600&impolicy=quality_75",
//         gender: "WOMEN",
//         size: "SX-XXL",
//         description: "WOMEN HEATTECH Leggings (Regular Warm) Thermal",
//         exclusive: "Exclusive Size Online Only",
//         price: 3990,
//         id: 445399
//     },
//     {
//         image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/439512/item/ingoods_08_439512.jpg?width=1600&impolicy=quality_75",
//         gender: "WOMEN",
//         size: "MS",
//         description: "WOMEN HEATTECH Leggings (Ultra Warm) Thermal",
//         exclusive: "Exclusive Size Online Only",
//         price: 3990,
//         id: 445390
//     }

// ];
// console.log(newArrivalObj_1[0].price+newArrivalObj_1[1].price);

let data;
async function heattech_thermals() {
    try {
      let responce = await fetch(
        `https://uniqlo-clone.herokuapp.com/products?gender=WOMEN&cat=Women-heattech-thermals`
      );
  
      data = await responce.json();
      data = data.products;
      console.log("Data : ", data);
  
      displayProducts_1(data);
    } catch (err) {
      console.log("Error", err);
    }
  }
  heattech_thermals();

function displayProducts_1(data) {
    data.map(({ image, gender, size, description, exclusive, price,_id }) => {
        let mainDiv = document.createElement("div");
        let imgDiv = document.createElement("div");
        let sizeDiv = document.createElement("div");


        let img = document.createElement("img");
        let gend = document.createElement("h3");
        let siz = document.createElement("h3");
        let desc = document.createElement("h2");
        let exclus = document.createElement("h4");
        let pric = document.createElement("h4");

        imgDiv.setAttribute("class", "imgDiv");
        sizeDiv.setAttribute("class", "sizeDiv");
        exclus.setAttribute("class", "exclusive");

        let productsObj = {
            image,
            gender,
            size,
            description,
            exclusive,
            price,
            id: _id.substr(5,6),
            quantity: 1,

        }
        mainDiv.addEventListener("click", () => {
            storeData(productsObj);
        });

        img.src = image;
        gend.innerText = gender;
        siz.innerText = size;
        desc.innerText = description;
        exclus.innerText = exclusive;
        pric.innerText = `Rs. ${price}.00`;

        imgDiv.append(img);
        sizeDiv.append(gend, siz);
        mainDiv.append(imgDiv, sizeDiv, desc, exclus, pric);

        document.querySelector(".productSide").append(mainDiv);
    });

}

var sort = document.getElementById("sortProduct");
sort.addEventListener("change", function priceSort() {
    document.querySelector(".productSide").innerHTML="";
    var selected = document.getElementById("sortProduct").value;
    if (selected == "low") {
        data.sort(function (a, b) {
            // console.log(a.price)
            return a.price - b.price;

        })
    }
    if (selected == "high") {
        data.sort(function (a, b) {
            // console.log(b.price)
            return b.price - a.price;
        })
    }
    
    displayProducts_1(data);
});
// Store Data in localStorage here..

function storeData(data) {
    localStorage.setItem("uniqloProd", JSON.stringify(data));
    window.location.href = "./viewProd.html";
}

//for selected option 

var selected1 = document.querySelector(".select1");
selected1.addEventListener("change", () => {

    let select = document.querySelector(".select1").value;
    if (select != "") {
        window.location.href = `./${select}.html`;
    }
});
var selected2 = document.querySelector(".select2");
selected2.addEventListener("change", () => {

    let select = document.querySelector(".select2").value;
    if (select != "") {
        window.location.href = `./${select}.html`;
    }
});
var selected3 = document.querySelector(".select3");
selected3.addEventListener("change", () => {

    let select = document.querySelector(".select3").value;
    if (select != "") {
        window.location.href = `./${select}.html`;
    }
});
var selected4 = document.querySelector(".select4");
selected4.addEventListener("change", () => {

    let select = document.querySelector(".select4").value;
    if (select != "") {
        window.location.href = `./${select}.html`;
    }
});
var selected5 = document.querySelector(".select5");
selected5.addEventListener("change", () => {

    let select = document.querySelector(".select5").value;
    if (select != "") {
        window.location.href = `./${select}.html`;
    }
});
var selected6 = document.querySelector(".select6");
selected6.addEventListener("change", () => {

    let select = document.querySelector(".select6").value;
    if (select != "") {
        window.location.href = `./${select}.html`;
    }
});
var selected7 = document.querySelector(".select7");
selected7.addEventListener("change", () => {

    let select = document.querySelector(".select7").value;
    if (select != "") {
        window.location.href = `./${select}.html`;
    }
});
var selected8 = document.querySelector(".select8");
selected8.addEventListener("change", () => {

    let select = document.querySelector(".select8").value;
    if (select != "") {
        window.location.href = `./${select}.html`;
    }
});
var selected9 = document.querySelector(".select9");
selected9.addEventListener("change", () => {

    let select = document.querySelector(".select9").value;
    if (select != "") {
        window.location.href = `./${select}.html`;
    }
});
var selected10 = document.querySelector(".select10");
selected10.addEventListener("change", () => {

    let select = document.querySelector(".select10").value;
    if (select != "") {
        window.location.href = `./${select}.html`;
    }
});
var selected11 = document.querySelector(".select11");
selected11.addEventListener("change", () => {

    let select = document.querySelector(".select11").value;
    if (select != "") {
        window.location.href = `./${select}.html`;
    }
});




// selectedOpt();
