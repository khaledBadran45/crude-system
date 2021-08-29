let prodName = document.getElementById('prodName'),
prodPrice = document.getElementById('prodPrice'),
prodCategory = document.getElementById('prodCategory'),
prodDiscription = document.getElementById('prodDiscription'),
submit = document.querySelector('#subBtn'),
updateBtn = document.querySelector('#updateBtn'),
tbody = document.getElementById('tbody'),
searchInp = document.getElementById('search');

if(localStorage.getItem('allProduct') == null){
    var dataList =[];
    
}else{

    var dataList = JSON.parse(localStorage.getItem('allProduct'))
}
// displayData()
retriveDisplay()

submit.addEventListener('click',saveData)
function saveData(){
    let prodDetals = {
        productName : prodName.value,
        productprice :prodPrice.value,
        productCategory : prodCategory.value,
        productDiscription :prodDiscription.value,
    }
    dataList.push(prodDetals)
    localStorage.setItem('allProduct',JSON.stringify(dataList))
    
    displayData()
    cleanInp()
}


function cleanInp(){
    prodName.value = " ";
    prodPrice.value = " ";
    prodCategory.value = " ";
    prodDiscription.value = " ";
}


function displayData(){
    let trs = "";
    for(i=0; i < dataList.length; i++){
        trs +=`<tr>
        <td>${[i]}</td>
        <td>${dataList[i].productName}</td>
        <td>${dataList[i].productprice}</td>
        <td>${dataList[i].productCategory}</td>
        <td>${dataList[i].productDiscription}</td>
       <td> <button onclick="deletData(${i})" class="btn btn-danger" id="deletBtn">delete</button> </td>
        
       <td><button onclick="updateData(${i})" class="btn btn-success">update</button></td> 
       </tr>`
    }       
    tbody.innerHTML = trs

}


function searchData(){
    let str ='';
for(i=0; i<dataList.length; i++){

    if(dataList[i].productName.toLowerCase() .includes(searchInp.value.toLowerCase())){
        
            str +=`<tr>
             <td>${[i]}</td>
             <td>${dataList[i].productName}</td>
             <td>${dataList[i].productprice}</td>
             <td>${dataList[i].productCategory}</td>
             <td>${dataList[i].productDiscription}</td>
            <td> <button class="btn btn-danger">delete</button> </td>
             
            <td> <button class="btn btn-success">update</button></td> 
            </tr>`

    }

tbody.innerHTML = str

}
}


function deletData(ind){
    dataList.splice(ind,1)
    localStorage.setItem('allProduct',JSON.stringify(dataList))
    displayData()
}


function retriveDisplay(){
    
    if(searchInp.value != null){
        displayData()
    }
}



function updateData(ind){
    prodName.value = dataList[ind].productName;
    prodPrice.value = dataList[ind].productprice;
    prodCategory.value = dataList[ind].productCategory;
    prodDiscription.value = dataList[ind].productDiscription;
    submit.classList.add('d-none');
    updateBtn.classList.remove('d-none')
    
    updateBtn.onclick = function(){
        dataList[ind].productName =  prodName.value
        dataList[ind].productprice = prodPrice.value 
        dataList[ind].productCategory =  prodCategory.value 
        dataList[ind].productDiscription = prodDiscription.value
        displayData()   
        localStorage.setItem('allProduct',JSON.stringify(dataList))
        submit.classList.remove('d-none')
        updateBtn.classList.add('d-none')

    }


}



console.log(dataList[ind].productName)
