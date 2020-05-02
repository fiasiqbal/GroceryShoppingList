function view() {
    var table = document.getElementById("myTable");
    var msg = document.getElementById("msg");

    msg.setAttribute("hidden","true");

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var out = JSON.parse(this.responseText);
        }        
        for (let index = 0; index < out.length; index++) {
            table.rows[index+1].cells[0].innerHTML = out[index].serialnumber;
            table.rows[index+1].cells[1].innerHTML = out[index].name;
            table.rows[index+1].cells[2].innerHTML = out[index].quantity;
            table.rows[index+1].cells[3].innerHTML = out[index].unit;
            table.rows[index+1].cells[4].innerHTML = out[index].department;
            table.rows[index+1].cells[5].innerHTML = out[index].notes;            
        }
        table.removeAttribute("hidden");
    }
    xhttp.open("GET","list.json",true);
    xhttp.send();
}