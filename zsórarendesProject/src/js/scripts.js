document.body.style = "white-space: pre-line;"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 var táblázat = document.getElementById("Táblázat");
 var tbody = document.getElementById("Tbody");


 //Json adatainak megszerzése
    //megszerezzük a json file tartalmát
    async function orarend() {
        const response = await fetch("./json/orarend.json");
        var orarend = await response.json();
        console.log(orarend.Hétfő[1].Tantárgy); // mükszik
    

        for (let i = 0; i < 10; i++) {
            var sor = document.createElement("tr"); // sor létrehozáshoz
          
            //tantárgyak órái
                for ( let j = 0; j < 6; j++){

                var cella = document.createElement("td"); //cellák létrehozáshoz
                if(j == 0){
                    cellaTartalom = document.createTextNode(orarend.Órák[i].Óra + ". óra : \u000a" + orarend.Órák[i].ÓraKezdete + " - " + orarend.Órák[i].ÓraVége );
                    cella.appendChild(cellaTartalom);
                    sor.appendChild(cella);
                    }else if(j == 1){
                        cellaTartalom = document.createTextNode(
                                        orarend.Hétfő[i].Tantárgy 
                                        + "\u000a Terem: " +
                                        orarend.Hétfő[i].TeremAzonositó 
                                        + "\t Tanár: " +
                                        orarend.Hétfő[i].TanárAzonosító
                                        );
                        cella.appendChild(cellaTartalom);
                        sor.appendChild(cella);

                    }else if(j == 2){
                        cellaTartalom = document.createTextNode(
                                        orarend.Kedd[i].Tantárgy
                                        + "\u000a Terem: " +
                                        orarend.Kedd[i].TeremAzonositó
                                        + "\t Tanár: " +
                                        orarend.Hétfő[i].TanárAzonosító
                                        );
                        cella.appendChild(cellaTartalom);
                        sor.appendChild(cella);

                    }else if(j == 3){
                        cellaTartalom = document.createTextNode(
                                        orarend.Szerda[i].Tantárgy
                                        + "\u000a Terem: " +
                                        orarend.Szerda[i].TeremAzonositó
                                        + "\t Tanár: " +
                                        orarend.Hétfő[i].TanárAzonosító
                                        );
                        cella.appendChild(cellaTartalom);
                        sor.appendChild(cella);
                        
                    }else if(j == 4){
                        cellaTartalom = document.createTextNode(
                                        orarend.Csütörtök[i].Tantárgy
                                        + "\u000a Terem: "+
                                        orarend.Csütörtök[i].TeremAzonositó
                                        + "\t Tanár: " +
                                        orarend.Hétfő[i].TanárAzonosító
                                        );
                        cella.appendChild(cellaTartalom);
                        sor.appendChild(cella);

                    }else{
                        cellaTartalom = document.createTextNode(
                                        orarend.Péntek[i].Tantárgy
                                        +"\u000a Terem: " +
                                        orarend.Péntek[i].TeremAzonositó
                                        + "\t Tanár: " + 
                                        orarend.Hétfő[i].TanárAzonosító
                                        );
                        cella.appendChild(cellaTartalom);
                        sor.appendChild(cella);
                    }
                }

            tbody.appendChild(sor)
            táblázat.appendChild(tbody); 
        }


    }   

    async function orarendAlapAdatok(){
        const response2 = await fetch("./json/orarendkeszito.json");
        var orarendAdatok = await response2.json();
        

    }




////////////////////////////////////////////////////////////////////// Táblázat létrehozása //////////////////////////////////////////////////////////////////////////////////
//létrehozunk egy táblázatot a json fájlunkból
 

    
    
    function load(){
        orarend();
        orarendAlapAdatok();

    }
