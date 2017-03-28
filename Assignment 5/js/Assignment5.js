function MenuChoice()
{
    if (document.getElementById("menu").value == "Customer List")
    {
       document.getElementById("list1").style.visibility = "visible";
       document.getElementById("history2").style.visibility = "hidden";
       document.getElementById("orders3").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value == "Customer Order History")
    {
       document.getElementById("list1").style.visibility = "hidden";
       document.getElementById("history2").style.visibility = "visible";
       document.getElementById("orders3").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value == "Orders For Customer")
    {
       document.getElementById("list1").style.visibility = "hidden";
       document.getElementById("history2").style.visibility = "hidden";
       document.getElementById("orders3").style.visibility = "visible";
    }
    else
    {
     document.getElementById("list1").style.visibility = "hidden";
     document.getElementById("history2").style.visibility = "hidden";
     document.getElementById("orders3").style.visibility = "hidden";
    }
}function ShowHistory(){
     var objRequest = new XMLHttpRequest();
     var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getCustomerOrderHistory/";
     url += document.getElementById("history").value;
     
     objRequest.onreadystatechange = function(){
           if(objRequest.readyState == 4 && objRequest.status == 200){
                 var output = JSON.parse(objRequest.responseText);
                 GenerateHistory(output);
           }
     }
     
     objRequest.open("GET", url, true);
     objRequest.send();
     }

function GenerateHistory(result){
     var count = 0;
     var displaytext = "<table><tr><th>Product Name</th><th>Quantity Ordered</th></tr>";
     
     for(count = 0; count < result.length; count++){
           displaytext += "<tr><td>" + result[count].ProductName + "</td><td>" + result[count].Total + "</td></tr>";  
     }
     displaytext += "</table>";
     document.getElementById("custhistory").innerHTML = displaytext;
}

///////////////////////////////////
//Order section

function ShowOrders()
{
     var objRequest = new XMLHttpRequest();