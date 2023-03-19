function glosuj(){
    var kandydat = document.getElementsByName("wybor")
    var pesel = document.getElementById("pesel").value
    var selectedWybor
    console.log(kandydat)

    kandydat.forEach((kandydat)=>{
        if(kandydat.checked){
            selectedWybor = kandydat.value
            console.log(selectedWybor)
        }
    })
    fetch(`http://localhost:3000/add/${pesel}/${selectedWybor}`)
}
