'use stritc';
let foodform = document.getElementById("foodform");
let order =document.getElementById("order");
let ordering=[];
function Orders(customerName,foodType,foodImg){
    this.customerName=customerName
    this.foodType=foodType
    this.foodImg=foodImg
    this.price=[];
    ordering.push(this);
}

let foodImg=["https://westeurope1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Falqudscollege-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!4kW0Mz1ymE6DvXc0RHm89r7i7SSJUsJOkA-56aojf1AKR62oXKimQaAG9ivOPT6d%2Fitems%2F01W4C7VWHFP65CH4ELOBFLPFIEXF4HOPHF%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvYWxxdWRzY29sbGVnZS1teS5zaGFyZXBvaW50LmNvbUBhMTYyYzUzMi03YTBjLTQ2NDUtOTZmZC0yMGQwMTljZjRlNWEiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNjIyNTI3MjAwIiwiZXhwIjoiMTYyMjU0ODgwMCIsImVuZHBvaW50dXJsIjoiQi9xc0M5cVUzVjZORCtLVm4zdTFETkhwbXo0ZFQrakI4cVl0eDJjUE1mWT0iLCJlbmRwb2ludHVybExlbmd0aCI6IjEyMyIsImlzbG9vcGJhY2siOiJUcnVlIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6Ik16TmlORFExWlRJdE56SXpaQzAwWlRrNExUZ3pZbVF0Tnpjek5EUTBOemxpWTJZMiIsIm5hbWVpZCI6IjAjLmZ8bWVtYmVyc2hpcHx1cm4lM2FzcG8lM2Fhbm9uI2IwYzRkNTI5Nzg3MWIwMjI2NDJkNjQzNmJmOWVhYWFkNGE0ZDYxYzU0YjM4MGZmNjZhZTg3NWY0NTU0MzdkMmMiLCJuaWkiOiJtaWNyb3NvZnQuc2hhcmVwb2ludCIsImlzdXNlciI6InRydWUiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHx1cm4lM2FzcG8lM2Fhbm9uI2IwYzRkNTI5Nzg3MWIwMjI2NDJkNjQzNmJmOWVhYWFkNGE0ZDYxYzU0YjM4MGZmNjZhZTg3NWY0NTU0MzdkMmMiLCJzaGFyaW5naWQiOiJ1N0RRMkpHS1QwVzhEM2dLRTJ4bStnIiwidHQiOiIwIiwidXNlUGVyc2lzdGVudENvb2tpZSI6IjIifQ.eVVBVlY1cTlzdGdkVmxmTGtNTUdFQnhkZzBvdWFiZGZhNS9ub0pHYTF1VT0&encodeFailures=1&width=130&height=195&srcWidth=600&srcHeight=900",
"https://westeurope1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Falqudscollege-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!4kW0Mz1ymE6DvXc0RHm89r7i7SSJUsJOkA-56aojf1AKR62oXKimQaAG9ivOPT6d%2Fitems%2F01W4C7VWBMRCEHKY53F5DZGHY7BFIZUQQ4%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvYWxxdWRzY29sbGVnZS1teS5zaGFyZXBvaW50LmNvbUBhMTYyYzUzMi03YTBjLTQ2NDUtOTZmZC0yMGQwMTljZjRlNWEiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNjIyNTI3MjAwIiwiZXhwIjoiMTYyMjU0ODgwMCIsImVuZHBvaW50dXJsIjoiQi9xc0M5cVUzVjZORCtLVm4zdTFETkhwbXo0ZFQrakI4cVl0eDJjUE1mWT0iLCJlbmRwb2ludHVybExlbmd0aCI6IjEyMyIsImlzbG9vcGJhY2siOiJUcnVlIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6Ik16TmlORFExWlRJdE56SXpaQzAwWlRrNExUZ3pZbVF0Tnpjek5EUTBOemxpWTJZMiIsIm5hbWVpZCI6IjAjLmZ8bWVtYmVyc2hpcHx1cm4lM2FzcG8lM2Fhbm9uI2IwYzRkNTI5Nzg3MWIwMjI2NDJkNjQzNmJmOWVhYWFkNGE0ZDYxYzU0YjM4MGZmNjZhZTg3NWY0NTU0MzdkMmMiLCJuaWkiOiJtaWNyb3NvZnQuc2hhcmVwb2ludCIsImlzdXNlciI6InRydWUiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHx1cm4lM2FzcG8lM2Fhbm9uI2IwYzRkNTI5Nzg3MWIwMjI2NDJkNjQzNmJmOWVhYWFkNGE0ZDYxYzU0YjM4MGZmNjZhZTg3NWY0NTU0MzdkMmMiLCJzaGFyaW5naWQiOiJ1N0RRMkpHS1QwVzhEM2dLRTJ4bStnIiwidHQiOiIwIiwidXNlUGVyc2lzdGVudENvb2tpZSI6IjIifQ.eVVBVlY1cTlzdGdkVmxmTGtNTUdFQnhkZzBvdWFiZGZhNS9ub0pHYTF1VT0&encodeFailures=1&width=275&height=183&srcWidth=275&srcHeight=183",
"https://westeurope1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Falqudscollege-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!4kW0Mz1ymE6DvXc0RHm89r7i7SSJUsJOkA-56aojf1AKR62oXKimQaAG9ivOPT6d%2Fitems%2F01W4C7VWE6SXWWNXKTTVC224RGDB5V25DR%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvYWxxdWRzY29sbGVnZS1teS5zaGFyZXBvaW50LmNvbUBhMTYyYzUzMi03YTBjLTQ2NDUtOTZmZC0yMGQwMTljZjRlNWEiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNjIyNTI3MjAwIiwiZXhwIjoiMTYyMjU0ODgwMCIsImVuZHBvaW50dXJsIjoiQi9xc0M5cVUzVjZORCtLVm4zdTFETkhwbXo0ZFQrakI4cVl0eDJjUE1mWT0iLCJlbmRwb2ludHVybExlbmd0aCI6IjEyMyIsImlzbG9vcGJhY2siOiJUcnVlIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6Ik16TmlORFExWlRJdE56SXpaQzAwWlRrNExUZ3pZbVF0Tnpjek5EUTBOemxpWTJZMiIsIm5hbWVpZCI6IjAjLmZ8bWVtYmVyc2hpcHx1cm4lM2FzcG8lM2Fhbm9uI2IwYzRkNTI5Nzg3MWIwMjI2NDJkNjQzNmJmOWVhYWFkNGE0ZDYxYzU0YjM4MGZmNjZhZTg3NWY0NTU0MzdkMmMiLCJuaWkiOiJtaWNyb3NvZnQuc2hhcmVwb2ludCIsImlzdXNlciI6InRydWUiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHx1cm4lM2FzcG8lM2Fhbm9uI2IwYzRkNTI5Nzg3MWIwMjI2NDJkNjQzNmJmOWVhYWFkNGE0ZDYxYzU0YjM4MGZmNjZhZTg3NWY0NTU0MzdkMmMiLCJzaGFyaW5naWQiOiJ1N0RRMkpHS1QwVzhEM2dLRTJ4bStnIiwidHQiOiIwIiwidXNlUGVyc2lzdGVudENvb2tpZSI6IjIifQ.eVVBVlY1cTlzdGdkVmxmTGtNTUdFQnhkZzBvdWFiZGZhNS9ub0pHYTF1VT0&encodeFailures=1&width=728&height=400&srcWidth=728&srcHeight=400"];

function settingItems(){
    let data =JSON.stringify(ordering)
localStorage.setItem ("order",data);
}

function gettingItems (){ 
    let stringObj= localStorage.getItem("order")
    let normalObj= JSON.parse(stringObj)
    if  ( normalObj!==null);
         ordering =normalObj;
        }
render();

function getRandomPrice() {
    return Math.floor(Math.random() *foodImg.length)
    
}

function render(){
    order.textContent='';
    let tabelEl =document.getElementById('tabel');
    let tabelEl1= document.createElement('table');
    container.appendChild(tabelEl1);

    let trEl=document.createElement('tr');
    tabelEl1.appendChild(trEl);
    
    let thEl1=document.createElement('th')
    thEl1.textContent=('Order Image');
    container.appendChild(thEl1);
    
    let thEl2=document.createElement('th')
thEl2.textContent=('Order Detailes')
container.appendChild(thEl2)

for (let i = 0; i < ordering.length; i++) {
        let liEl=document.createElement('li');
        liEl.textContent=`Customer name: ${ordering[i].customerName} Food type: ${ordering[i].foodType} Food price: ${ordering[i].price}`
        order.appendChild(liEl)  ;

  for (let index = 0; index <foodImg.length; index++) {
    let imgEl =document.createElement('img')
    imgEl.setAttribute=('src'`${imageName}`);
    order.appendChild(imgEl);
    
    
}


}

}


function handlesubmit(event){
    
    event.preventDeafult('submit',handlesubmit);
    let customerName=event.target.customerName.value;
    let foodType=event.target.foodType.value;
    let foodImg=event.target.foodImg.value;
    new Orders(customerName,foodType,foodImg);
}
render();
getRandomPrice();
settingItems();
gettingItems();
foodform.addEventListener('submit',handlesubmit);

