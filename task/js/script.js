fetch("http://127.0.0.1:5501/datatable4.json")
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



  fetch("http://127.0.0.1:5501/datatable4.json")
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








fetch("http://127.0.0.1:5501/datatable4.json")
  .then(function (response) {
    return response.json();
  })
  
  .then(function (datatable) {
    let pr = document.querySelector("#tb");
    // console.log(datatable)
    // console.log(pr)
  
    $('th').on('click' ,function(){
        var column = $(this).data('column')
        // console.log(column);
        var order = $(this).data('order')
        // console.log(order)
        // var text = $(this).html()
        // var a = $('.avg').html();
        // console.log(a);
        var text = $(this).html();
        // console.log(text)
        var text = text.substring(0 , text.length - 1)
        // console.log(text);
        if(order == "desc"){
            
            $(this).data('order' , 'asc')
            datatable = datatable.sort((a,b) => a[column] > b[column] ? 1: -1)
            // var ab = document.getElementById('avg').innerHTML;
            // console.log(ab);
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
            // console.log(datatable);
            pr.innerHTML = out;
        }
        else{
            $(this).data('order' , 'desc')
            datatable = datatable.sort((a,b) => a[column] < b[column] ? 1: -1)
            // var abc = document.getElementById('avg').innerHTML;
            // console.log(abc);
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
            // console.log(datatable);
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
  

// var searchBox = document.getElementById("search");
// searchBox.addEventListener('keyup' ,function(){
//     var searchData = this.value;
//     searchData = searchData.toUpperCase();
//     // console.log(searchData);
//     var tableSearch = document.getElementById('tablesearch');
//     var all = tableSearch.getElementsByTagName('tr');
//     // console.log(all);
//     for(var i=0;i < all.length; i++){
//         var address_column = all[i].getElementsByTagName('td')[6];
//         if(address_column){
//             var address_value = address_column.innerHTML || address_column.textContent; 
//             address_value = address_value.toUpperCase();
//             if(address_value.indexOf(searchData) > -1){
//                 all[i].style.display = '';
//                 // console.log("found")
//             }else{
//                 all[i].style.display = 'none';
//                 // console.log("not found")
//             }

//         }
//     }
// })


var searchBox = document.getElementById("search");
searchBox.addEventListener('keyup' ,function(){
    var searchData = this.value;
    searchData = searchData.toUpperCase();
    // console.log(searchData);
    var tableSearch = document.getElementById('tablesearch');
    var all = tableSearch.getElementsByTagName('tr');
    // console.log(all);
    for(var i=0;i < all.length; i++){
        var address_column = all[i].getElementsByTagName('td');
        for(var j = 0 ; j<address_column.length; j++){
            if(address_column[j]){
                var address_value = address_column[j].innerHTML || address_column[j].textContent; 
                address_value = address_value.toUpperCase();
                if(address_value.indexOf(searchData) > -1){
                    all[i].style.display = '';
                    // console.log("found")
                    break;
                }else{
                    all[i].style.display = 'none';
                    // console.log("not found")
                }
    
            }


        }
        
    }
})






















// var table = document.getElementById('tablesearch');
// // var table = '#tablesearch'
// $('select').on('change', function(){
//   $('.pagination').html('')
//   var t = 0
//   var pageRows = parseInt($(this).value())
  
//   var pageTotalRows = $(table+ 'tbody tr').length
//   $(table +'tr:gt(0)').each(function(){
//     t++
//     if(t > pageRows){
      
//       $(this).hide()
//     }
//     if(t <= pageRows){
      
//       $(this).show()
//     }
//     if(pageTotalRows > pageRows){
//       var pageNum = Math.ceil(pageTotalRows/pageRows)
//       for(var i =1 ; i <= pageNum;){
//         $('.pagination').append('<li data-page="'+i+'">\ <span> '+ i++ +'<span class="sr-only">(current)</span></span>\</li>').show()
//       }
//     }
//     $('.pagination li:first-child').addClass('active')
//     $('.pagination li').on('click', function(){
//       var pNum = $(this).attr('data-page')
//       var index = 0
//       $('.pagination li').removeClass('active')
//       $(this).addClass('active')
//       $(table +'tr:gt(0)').each(function(){
//         index++
//         if(index >(pageRows * pNum) || index <= ((pageRows*pNum)- pageRows)){
//           $(this).hide()
//         }
//         else{
//           $(this).show()
//         }

//       })
//     })
//   })
//   $(function(){
//     $('table tr:eq(0)').prepend('<th>ID<th>')
//     var id = 0;
//     $('table tr:gt(0)').each(function(){
//       id++
//       $(this).prepend('<td>'+ id +'</td>')
//     })
//   })

// })

// pageRows = 15
// pageTotalRows = 45
// pageNum = Math.ceil(pageTotalRows/pageRows)
// console.log(pageNum);






getPagination('#tablesearch');

function getPagination(tablesearch) {
var lastPage = 1;

$('#maxRows')
.on('change', function() {
lastPage = 1;
$('.pagination').find('li').slice(1, -1).remove();
var trnum = 0; 
var maxRows = parseInt($(this).val()); 
// console.log(maxRows)
if (maxRows == 150) {
$('.pagination').hide();
} else {
$('.pagination').show();
}

var totalRows = $(tablesearch + ' tbody tr').length; 
// console.log(totalRows);
$(tablesearch + ' tr:gt(0)').each(function() {
  trnum++;
  if (trnum > maxRows) {
    $(this).hide(); 
  }
  if (trnum <= maxRows) {
    $(this).show();
  } 
}); 
if (totalRows > maxRows) {
var pagenum = Math.ceil(totalRows / maxRows); 

for (var i = 1; i <= pagenum; ) {
  $('.pagination #prev').before('<li data-page="'+ i +'">\<span>' + i++ + '<span class="sr-only">(current)</span></span>\</li>'
  ).show();
} 
} 

$('.pagination [data-page="1"]').addClass('active'); 
$('.pagination li').on('click', function() {
// evt.stopImmediatePropagation();
// evt.preventDefault();
var pageNum = $(this).attr('data-page'); 

var maxRows = parseInt($('#maxRows').val());

if (pageNum == 'prev') {
if (lastPage == 1) {
  return;
}
pageNum = --lastPage;
}
if (pageNum == 'next') {
if (lastPage == $('.pagination li').length - 2) {
  return;
}
pageNum = ++lastPage;
}

lastPage = pageNum;
var trIndex = 0; 
$('.pagination li').removeClass('active'); 
$('.pagination [data-page="' + lastPage + '"]').addClass('active'); 
// limitPagging();
$(tablesearch + ' tr:gt(0)').each(function() {
  trIndex++; 
  if (trIndex > maxRows * pageNum || trIndex <= maxRows * pageNum - maxRows){
    $(this).hide();
  } else {
    $(this).show();
  } 
}); 
}); 
// limitPagging();
})
}





