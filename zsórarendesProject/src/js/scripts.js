
    var táblázat = document.getElementById("Táblázat");
    var orarend ;
    var orarendAdatok ;

    //megszerezzük a json file tartalmát
    async function orarendAdatai() {
        const response = await fetch("./json/orarend.json");
        var orarendbeta = await response.json();
       orarend = orarendbeta;

    }   

    async function orarendAlapAdatok(){
        const response2 = await fetch("./json/orarendkeszito.json");
        var orarendAdatokbeta = await response2.json();
        orarendAdatok = orarendAdatokbeta;

    }


    console.log(orarend.Hétfő[1].Tantárgy);


////////////////////////////////////////////////////////////////////// Táblázat létrehozása //////////////////////////////////////////////////////////////////////////////////
/*
//létrehozunk egy táblázatot a json fájlunkból
    function createTable(){


        for (let i = 0; i < 10; i++) {
            const sor = document.createElement("tr"); // létrehozzuk a sorokat

            const cella = document.createElement("td");

            //az órát jelző cella
            var cellaTartalom =  document.createTextNode(orarendAdatok.Órák[1] + "\n óra kezdete és vége: " + orarend.Órák[1].ÓraKezdete + " - " + orarend.Órák[1].ÓraVége ); 
                
            cella.appendChild(cellaTartalom);
            sor.appendChild(cella);

                for ( let j = 0; j < 5; j++){
                    switch (j) {
                        case 1:
                            cellaTartalom = document.createTextNode(orarend.Hétfő[i].Tantárgy);
                            break;
                    
                        case 2:
                            cellaTartalom = document.createTextNode(orarend.Kedd[i].Tantárgy);
                            break;
                        
                        case 3:
                            cellaTartalom = document.createTextNode(orarend.Szerda[i].Tantárgy);
                            break;
                        case 4:
                            cellaTartalom = document.createTextNode(orarend.Csütörtök[i].Tantárgy);
                            break;
                        case 5:
                            cellaTartalom = document.createTextNode(orarend.Péntek[i].Tantárgy);
                            break;
                        default:
                            alert("probléma merült fel");
                            break;
                    }

                    cella.appendChild(cellaTartalom);
                    sor.appendChild(cella);

                }


            táblázat.appendChild(sor); 
        }


    }    
    */
    function load(){
        orarendAdatai();
        orarendAlapAdatok();
      //  createTable();

    }
