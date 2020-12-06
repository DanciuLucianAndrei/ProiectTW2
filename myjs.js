var text = '{ "infected": 373474, "tested": 3733410, "recovered": 253244, "deceased": 9261, "country": "Romania", "historyData": "https:\/\/api.apify.com\/v2\/datasets\/n1XtXTelVG5dJhDhy\/items?format=json&clean=1", "sourceUrl": "", "lastUpdatedAtApify": "2020-11-17T13:10:00.000Z", "lastUpdatedAtSource": "2020-11-17T13:00:00.000Z", "README": "https:\/\/www.graphs.ro\/resources.php" }';
var obj = JSON.parse(text, function (key, value) {
if (key == "country") 
{
    return value.toUpperCase();
} 
else 
{
    return value;
}
});


document.getElementById("conf").innerHTML = obj.infected; 
document.getElementById("recovered").innerHTML = obj.recovered; 
document.getElementById("deaths").innerHTML = obj.deceased; 

var DateJudet='{"data":[{"incidenta":5.52, "county_code":"ROU128","total_county":4784,"total_healed":6,"total_dead":105,"county":"Bucharest" },{"incidenta":2.21, "county_code":"ROU311","total_county":4114,"total_healed":5,"total_dead":242,"county":"Suceava"}, {"incidenta":3.78 ,"county_code":"ROU302","total_county":2656,"total_healed":0,"total_dead":95,"county":"Arges"}, {"incidenta":6.63 ,"county_code":"ROU305","total_county":2629,"total_healed":0,"total_dead":60,"county":"Brasov"}, {"incidenta":2.22 ,"county_code":"ROU315","total_county":1784,"total_healed":0,"total_dead":92,"county":"Galati"}, {"incidenta":3.32 ,"county_code":"ROU130","total_county":1577,"total_healed":6,"total_dead":18,"county":"Dâmbovita"}, {"incidenta":4.2 ,"county_code":"ROU310","total_county":1559,"total_healed":0,"total_dead":39,"county":"Prahova"}, {"incidenta":1.82, "county_code":"ROU317","total_county":1535,"total_healed":0,"total_dead":46,"county":"Vrancea"},{"incidenta":3.24, "county_code":"ROU308","total_county":1328,"total_healed":1,"total_dead":42,"county":"Iasi"},{"incidenta":2.46, "county_code":"ROU314","total_county":1142,"total_healed":0,"total_dead":11,"county":"Buzau"}, {"incidenta":2.43, "county_code":"ROU309","total_county":1125,"total_healed":0,"total_dead":55,"county":"Neamt"},{"incidenta":2.61, "county_code":"ROU312","total_county":1112,"total_healed":0,"total_dead":58,"county":"Bacau"},{"incidenta":2.6 ,"county_code":"ROU287","total_county":1109,"total_healed":3,"total_dead":57,"county":"Botosani"}, {"incidenta":6.81, "county_code":"ROU4844","total_county":1106,"total_healed":0,"total_dead":23,"county":"ILFOV"}, {"incidenta":6.59, "county_code":"ROU280","total_county":985,"total_healed":4,"total_dead":55,"county":"Timis"}, {"incidenta":7.52, "county_code":"ROU296","total_county":953,"total_healed":1,"total_dead":18,"county":"Cluj"}, {"incidenta":4.98, "county_code":"ROU299","total_county":895,"total_healed":0,"total_dead":67,"county":"Mures"}, {"incidenta":5.87, "county_code":"ROU277","total_county":836,"total_healed":0,"total_dead":22,"county":"Bihor"}, {"incidenta":3.12, "county_code":"ROU297","total_county":811,"total_healed":3,"total_dead":72,"county":"Hunedoara"},{"incidenta":5.85, "county_code":"ROU276","total_county":799,"total_healed":1,"total_dead":77,"county":"Arad"},{"incidenta":9.01, "county_code":"ROU303","total_county":793,"total_healed":0,"total_dead":46,"county":"Sibiu"},{"incidenta":4.38, "county_code":"ROU295","total_county":754,"total_healed":0,"total_dead":66,"county":"Bistrita-Nasaud"},{"incidenta":5.81, "county_code":"ROU133","total_county":728,"total_healed":2,"total_dead":19,"county":"Constanta"},{"incidenta":6.25, "county_code":"ROU294","total_county":671,"total_healed":27,"total_dead":23,"county":"Alba"},{"incidenta":1.85, "county_code":"ROU123","total_county":642,"total_healed":1,"total_dead":10,"county":"Gorj"},{"incidenta":3.19, "county_code":"ROU132","total_county":640,"total_healed":16,"total_dead":24,"county":"Ialomita"},{"incidenta":2.76, "county_code":"ROU313","total_county":615,"total_healed":0,"total_dead":4,"county":"Braila"},{"incidenta":1.73, "county_code":"ROU126","total_county":610,"total_healed":5,"total_dead":16,"county":"Olt"}, {"incidenta":3.57, "county_code":"ROU122","total_county":559,"total_healed":0,"total_dead":6,"county":"Dolj"}, {"incidenta":2.79, "county_code":"ROU124","total_county":516,"total_healed":0,"total_dead":22,"county":"Mehedinti"}, {"incidenta":2.17, "county_code":"ROU307","total_county":495,"total_healed":0,"total_dead":3,"county":"Harghita"}, {"incidenta":2.03, "county_code":"ROU316","total_county":495,"total_healed":0,"total_dead":19,"county":"VASLUI"}, {"incidenta":3.34, "county_code":"ROU306","total_county":384,"total_healed":0,"total_dead":11,"county":"Covasna"},{"incidenta":3.13, "county_code":"ROU304","total_county":343,"total_healed":0,"total_dead":4,"county":"Vâlcea"}, {"incidenta":2.27, "county_code":"ROU131","total_county":337,"total_healed":0,"total_dead":6,"county":"Giurgiu"}, {"incidenta":3.79, "county_code":"ROU298","total_county":333,"total_healed":1,"total_dead":6,"county":"Maramures"},{"incidenta":2.78, "county_code":"ROU4847","total_county":254,"total_healed":0,"total_dead":8,"county":"TULCEA"},{"incidenta":2.8 ,"county_code":"ROU127","total_county":253,"total_healed":0,"total_dead":11,"county":"Teleorman"},{"incidenta":2.99, "county_code":"ROU129","total_county":248,"total_healed":0,"total_dead":3,"county":"Calarasi"},{"incidenta":2.86, "county_code":"ROU278","total_county":188,"total_healed":6,"total_dead":7,"county":"Caras-Severin"},{"incidenta":5.34, "county_code":"ROU300","total_county":149,"total_healed":0,"total_dead":17,"county":"Salaj"},{"incidenta":4.77, "county_code":"ROU301","total_county":91,"total_healed":0,"total_dead":8,"county":"Satu Mare"}]}';
    
var datajud=JSON.parse(DateJudet);
var colour = '#b9b9b9';
var colour1 = '#ffa4a9';
var colour2 = '#cc6674';
var colour3 = '#993341';
var colour4 = '#66000e';
function colourCountry(name,culoare) {
        var country = document.getElementById(name);    
        country.setAttributeNS(null, 'fill', culoare);
}
for (var country = 0; country < datajud.data.length; country++){
    if(datajud.data[country].incidenta>3)
    colourCountry(datajud.data[country].county_code,colour4);
    if(datajud.data[country].incidenta>1.5 && datajud.data[country].incidenta<3)
    colourCountry(datajud.data[country].county_code,colour3);
    if(datajud.data[country].incidenta>1&& datajud.data[country].incidenta<1.5)
    colourCountry(datajud.data[country].county_code,colour2);
    if(datajud.data[country].incidenta<1)
    colourCountry(datajud.data[country].county_code,colour1);
}


function showTooltip(evt) {
    let tooltip = document.getElementById("tooltip");
    console.log(evt.target.id);
    for(var country=0;country<datajud.data.length;country++)
        {
            if(datajud.data[country].county_code==evt.target.id)
            {
                tooltip.innerHTML = '<strong style="color:#ffff">'+datajud.data[country].county+'</strong>'+'<br>Cazuri Total:'+datajud.data[country].total_county+'<br>Cazuri Vindecate:'+datajud.data[country].total_healed+'<br>Decese:'+datajud.data[country].total_dead+'';
                tooltip.style.display = "block";
                tooltip.style.left = evt.pageX + 10 + 'px';
                tooltip.style.top = evt.pageY + 10 + 'px';
            }
        }
  }
  
  function hideTooltip() {
    var tooltip = document.getElementById("tooltip");
    tooltip.style.display = "none";
  }