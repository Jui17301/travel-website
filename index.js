const servicesArray=[
 {
    vehicle: "Car",
    imageUrl:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  
    farePerKilo: 3,
    capacity: 4,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
  },
  {
      vehicle: "Car",
      imageUrl:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    
      farePerKilo: 3,
      capacity: 4,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
    },
 {
    vehicle: "Bike",
    imageUrl:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
  
    farePerKilo: 2,
  
    capacity: 2,
  
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
  },
 {
    vehicle: "Bus",
    imageUrl:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  
    farePerKilo: 3,
    capacity: 30,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
  }
  
]

function displayAllArticles(arr){
  for (const element of arr) {
    displayServices(element);
  }
}

function displayServices(service) {
  const mainSection = document.getElementById("main-section");
  const stringifiedObj = JSON.stringify(service);
  const div = document.createElement("div");

  div.innerHTML = `
   <div class="card mt-3  mx-auto" style="max-width: 800px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src=${service.imageUrl} class="img-fluid rounded-start h-100" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Transport Mood ${service.vehicle}</h5>
              <p class="card-text">${service.description}</p>
              <p class="card-text"><small class="text-muted">Fare per kilo ${service.farePerKilo}</small> <small class="text-muted">Capacity ${service.capacity}</small></p>
              <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" onclick='handleBooking(${stringifiedObj})' data-bs-toggle="modal"  data-bs-target="#exampleModal">
              see details
        </button>
            </div>
          </div>
        </div>
</div>

`;

  mainSection.appendChild(div);
}

function handleBooking(obj) {

  const modalBody = document.getElementById("modal-body");

  const stringifiedObj = JSON.stringify(obj);

  modalBody.innerHTML = `
    
    <div class="card mx-auto" style="width: 18rem;">
  <img src=${obj.imageUrl} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Vehicle Mood : ${obj.vehicle}</h5>
    <p class="card-text">${obj.description}</p>

    <p class="card-text"><small class="text-muted">Fare per kilo ${obj.farePerKilo}</small> <small class="text-muted">Capacity ${obj.capacity}</small></p>
    <div class="d-flex flex-column" role="search">
     <p>Fare: <small class="text-muted" id="fare"></small > </p>
     <p>tax: <small class="text-muted" id="tax"></small > </p>
     <p>Total-cost: <small class="text-muted" id="total-cost"></small > </p>

    <input class="form-control m-2" id= "distance-input"  type="number" placeholder="How many Kilometer?" aria-label="Search"/>
    <input class="form-control m-2" type="number" id= "quantity-input" placeholder="How many vehicles?" aria-label="Search"/>
    <button class="btn btn-outline-success" id="search-btn" aria-label="type="submit" onclick='calculateCost(${stringifiedObj})'>submit</button>
  </div>
  </div>
</div>
    
    `;
}
function calculateCost(obj) {
const quantity = document.getElementById("quantity-input").value;
const distance = document.getElementById("distance-input").value;
const fareDiv = document.getElementById("fare");
const tax = document.getElementById('tax');
const totalCost = document.getElementById('total-cost')
const totalFare = quantity * distance * obj.farePerKilo;
const totalTax = totalFare*(20/100);
const totalCostAmount = totalFare+totalTax;
fareDiv.innerHTML = totalFare;
tax.innerHTML = totalTax;
totalCost.innerHTML = totalCostAmount;
}


document.getElementById("search-btn").addEventListener("click", function(){
  const  value = document.getElementById("search-value").value;
  document.getElementById("search-value").value = ""
  
  for (let elementSearch of servicesArray) {
      if(value.toLowerCase()
          == elementSearch.vehicle.toLowerCase()){
              document.getElementById("main-section").innerHTML=""
              displayServices(elementSearch)
              return;
      }
     
  }
  document.getElementById("main-section").innerHTML=""
  alert("No found")  
  
  })


displayAllArticles(servicesArray)