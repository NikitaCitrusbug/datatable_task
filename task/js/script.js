fetch("http://127.0.0.1:5500/datatable4.json")
  .then(function (response) {
    return response.json();
  })
  .then(function(dt){
    // console.log(dt);
    // $('th').on('click' ,function(){
    //     var column = $(this).data('column')
    //     var order = $(this).data('order')
    //     var text = $(this).html()
    //     // console.log(text)
    //     var text = text.substring(0 , text.length - 1)
    //     // console.log(txt);
    //     if(order == "desc"){
    //         dt = dt.sort((a,b) => a[column] > b[column] ? 1: -1)
    //         $(this).data('order' , 'asc')
            
    //         text += '&#9660'
    //         console.log(dt);
    //     }
    //     else{
    //         $(this).data('order' , 'desc')
    //         dt = dt.sort((a,b) => a[column] < b[column] ? 1: -1)
    //         text += '&#9650'
    //         console.log(dt);
    //     }
        
    //     $(this).html(text);
    //     console.log("clicked............." , column , order)
    //   })

  })



  fetch("http://127.0.0.1:5500/datatable4.json")
  .then(function (response) {
    return response.json();
  })
  .then(function(dt){
    // console.log(dt);
    // $('th').on('click' ,function(){
    //     var column = $(this).data('column')
    //     var order = $(this).data('order')
    //     var text = $(this).html()
    //     // console.log(text)
    //     var text = text.substring(0 , text.length - 1)
    //     // console.log(txt);
    //     if(order == "desc"){
    //         dt = dt.sort((a,b) => a[column] > b[column] ? 1: -1)
    //         $(this).data('order' , 'asc')
            
    //         text += '&#9660'
    //         console.log(dt);
    //     }
    //     else{
    //         $(this).data('order' , 'desc')
    //         dt = dt.sort((a,b) => a[column] < b[column] ? 1: -1)
    //         text += '&#9650'
    //         console.log(dt);
    //     }
        
    //     $(this).html(text);
    //     console.log("clicked............." , column , order)
    //   })

  })








fetch("http://127.0.0.1:5500/datatable4.json")
  .then(function (response) {
    return response.json();
  })
  
  .then(function (datatable) {
    let pr = document.querySelector("#tb");
    // console.log(datatable)
    // console.log(pr)
  
    $('th').on('click' ,function(){
        var column = $(this).data('column')
        var order = $(this).data('order')
        var text = $(this).html()
        // console.log(text)
        var text = text.substring(0 , text.length - 1)
        // console.log(txt);
        if(order == "desc"){
            datatable = datatable.sort((a,b) => a[column] > b[column] ? 1: -1)
            $(this).data('order' , 'asc')
            
            text += '&#9660'
            let out = "";
            for (let pr of datatable) {
                out += `
                  
                 <tr class="active">
                      <td>${pr["Avg. Area Income"]}</td>
                      <td>${pr["Avg. Area House Age"]}</td>
                      <td>${pr["Avg. Area Number of Rooms"]}</td>
                      <td>${pr["Avg. Area Number of Bedrooms"]}</td>
                      <td>${pr["Area Population"]}</td>
                      <td>${pr.Price}</td>
                      <td>${pr.Address}</td>    
                  </tr> 
            
                          
                          
                    
                  
              `;
              // alert(pr["Avg. Area Income"]);  
              }
            console.log(datatable);
            pr.innerHTML = out;
        }
        else{
            $(this).data('order' , 'desc')
            datatable = datatable.sort((a,b) => a[column] < b[column] ? 1: -1)
            text += '&#9650'
            let out = "";
            for (let pr of datatable) {
                out += `
                  
                 <tr class="active">
                      <td>${pr["Avg. Area Income"]}</td>
                      <td>${pr["Avg. Area House Age"]}</td>
                      <td>${pr["Avg. Area Number of Rooms"]}</td>
                      <td>${pr["Avg. Area Number of Bedrooms"]}</td>
                      <td>${pr["Area Population"]}</td>
                      <td>${pr.Price}</td>
                      <td>${pr.Address}</td>    
                  </tr> 
            
                          
                          
                    
                  
              `;
              // alert(pr["Avg. Area Income"]);  
              }
            console.log(datatable);
            pr.innerHTML = out;
        }
        
        $(this).html(text);
        console.log("clicked............." , column , order)
      })
    //   pr.innerHTML = out;


    let out = "";
    for (let pr of datatable) {
      out += `
        
       <tr class="active">
            <td>${pr["Avg. Area Income"]}</td>
            <td>${pr["Avg. Area House Age"]}</td>
            <td>${pr["Avg. Area Number of Rooms"]}</td>
            <td>${pr["Avg. Area Number of Bedrooms"]}</td>
            <td>${pr["Area Population"]}</td>
            <td>${pr.Price}</td>
            <td>${pr.Address}</td>    
        </tr> 
  
                
                
          
        
    `;
    // alert(pr["Avg. Area Income"]);  
    }
    
    pr.innerHTML = out;
  });
  

var searchBox = document.getElementById("search");
searchBox.addEventListener('keyup' ,function(){
    var searchData = this.value;
    searchData = searchData.toUpperCase();
    // console.log(searchData);
    var tableSearch = document.getElementById('tablesearch');
    var all = tableSearch.getElementsByTagName('tr');
    // console.log(all);
    for(var i=0;i < all.length; i++){
        var address_column = all[i].getElementsByTagName('td')[6];
        if(address_column){
            var address_value = address_column.innerHTML || address_column.textContent; 
            address_value = address_value.toUpperCase();
            if(address_value.indexOf(searchData) > -1){
                all[i].style.display = '';
                // console.log("found")
            }else{
                all[i].style.display = 'none';
                // console.log("not found")
            }

        }
    }
})