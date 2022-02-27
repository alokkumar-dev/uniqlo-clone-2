// const newArrivalObj_1 = [
//     {
//         image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/439702/item/ingoods_74_439702.jpg?width=1008&impolicy=quality_75",
//         gender: "WOMEN",
//         size: "S-XXL",
//         description: "WOMEN Ultra Light6 Down Jecket",
//         exclusive: "Exclusive Size Online Only",
//         price: 4990
//     },
//     {
//         image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/439704/item/ingoods_71_439704.jpg?width=1008&impolicy=quality_75",
//         gender: "WOMEN",
//         size: "S-3XL",
//         description: "WOMEN Ultra Light Down Parka",
//         exclusive: "Exclusive Size Online Only",
//         price: 5990
//     },

//     {
//         image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/429452/item/ingoods_09_429452.jpg?width=1008&impolicy=quality_75",
//         gender: "WOMEN",
//         size: "S-XXL",
//         description: "WOMEN Ultra Light Down Vest",
//         exclusive: "Exclusive Size Online Only",
//         price: 2990
//     },
//     {
//         image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/443932/item/goods_09_443932.jpg?width=1008&impolicy=quality_75",
//         gender: "WOMEN",
//         size: "S",
//         description: "WOMEN Ultra Light Down Jecket",
//         exclusive: "Exclusive Size Online Only",
//         price: 6990
//     },
//     {
//         image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/439707/item/ingoods_56_439707.jpg?width=1008&impolicy=quality_75",
//         gender: "WOMEN",
//         size: "S-3XL",
//         description: "WOMEN Ultra Light Down Relaxed Jecket",
//         exclusive: "Exclusive Size Online Only",
//         price: 3990
//     },
//     {
//         image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/429454/item/goods_07_429454.jpg?width=1008&impolicy=quality_75",
//         gender: "WOMEN",
//         size: "S",
//         description: "WOMEN Ultra Light Down Parka",
//         exclusive: "Exclusive Size Online Only",
//         price: 2990
//     },
//     {
//         image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/440037/item/ingoods_34_440037.jpg?width=1008&impolicy=quality_75",
//         gender: "WOMEN",
//         size: "S-3XL",
//         description: "WOMEN Light Pile Lined Fleece Long Sleeve Set",
//         exclusive: "Exclusive Size Online Only",
//         price: 2990
//     },
//     {
//         image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/439138/item/ingoods_12_439138.jpg?width=1008&impolicy=quality_75",
//         gender: "WOMEN",
//         size: "SX-XXL",
//         description: "WOMEN Fluffy Yarn Fleece Full-Zip Jecket",
//         exclusive: "Exclusive Size Online Only",
//         price: 3990
//     }

// ];
// console.log(newArrivalObj_1[0].price+newArrivalObj_1[1].price);

let data;
async function ultraLightProduct() {
    try {
      let responce = await fetch(
        `https://uniqlo-clone.herokuapp.com/products?gender=WOMEN&cat=Women-wirelessBra`
      );
  
      data = await responce.json();
      data = data.products;
      console.log("Data : ", data);
  
      displayProducts_1(data);
    } catch (err) {
      console.log("Error", err);
    }
  }
  ultraLightProduct();
  

function displayProducts_1(data) {
    data.map(({ image, gender, size, description, exclusive, price, _id }) => {
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
            id: _id.substr(5, 6)
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

// function sortProductFun(evel) {
//         var selected = document.querySelector("#sortProduct").value;
//         if (selected == "low") {
//             evel.sort((a, b) => {
//                 return a - b;
//             });
//         }
//         if (selected == "high") {
//             evel.sort((a, b) => {
//                 console.log(b.price);
//                 return b - a;
//             });
//         }
//         displayProducts_1(newArrivalObj_1);


//         // console.log(evel);
//     }

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
