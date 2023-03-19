var char

function Charte(){
    const ctx = document.getElementById('myChart');
char = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Kandydat 1","Kandydat 2","Kandydat 3"],
    datasets: [{
      label: 'Votes',
      data: glosy
    }]
  },
    options: {
        plugins: {
            legend: {
                display: true,
            },
            title: {
                display: true,
                text: 'Votes',
                color:"black"
            },
            tooltip:{
                enabled:true
            },
            label:{
                color:"black"
            }
        }
    }
});

}
function dCharte(){
    char.destroy()
}
Charte()
var json = []
async function select(){
    const data = await fetch(`http://localhost:3000/select`)
    json = await data.json()
    console.log(json)
    if(char != undefined){
        dCharte()
    }
    count()
    Charte()
    tabela()
}
select()
var glosy = []
function count(){
    var a = 0
    var b = 0
    var c = 0
    for(var i=0;i<=json.length-1;i++){
        if(json[i].kandydat==1) a++
        if(json[i].kandydat==2) b++
        if(json[i].kandydat==3) c++    
    }
    glosy = [a,b,c]
    console.log(glosy)
}
function tabela(){
    for(var i=0;i<=json.length-1;i++){
        if(json[i].kandydat == "1"){
        const td = document.createElement("td")


        td.innerHTML ="PESEL: " +  json[i].pesel

        document.getElementById("kan1").appendChild(td)
        }

        if(json[i].kandydat == "2"){
            const td = document.createElement("td")

            td.innerHTML = "PESEL: " + json[i].pesel
            document.getElementById("kan2").appendChild(td)
            }
    if(json[i].kandydat == "3"){
        const td = document.createElement("td")

        td.innerHTML = "PESEL: " + json[i].pesel
        document.getElementById("kan3").appendChild(td)
        }
}
}
