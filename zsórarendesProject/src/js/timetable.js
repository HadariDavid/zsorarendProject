
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 var táblázat = document.getElementById("Táblázat");
 var tbody = document.getElementById("Tbody");
 var container = document.getElementById("container");
 var outerOrarend ;

 //Json adatainak megszerzése
    //megszerezzük a json file tartalmát
    async function orarend() {
        const response = await fetch("./json/orarend.json");
        var orarend = await response.json();
        console.log(orarend.Hétfő[1].Tantárgy); // mükszik
        
        outerOrarend = orarend;



// az órarend táblázat létrehozása
        for (let i = 0; i < 10; i++) {
            var sor = document.createElement("tr"); // sor létrehozáshoz
          
            //tantárgyak órái
                for ( let j = 0; j < 6; j++){

                var cella = document.createElement("td"); //cellák létrehozáshoz
                var cellaTartalom = document.createElement("p");
                
                if(j == 0){
                    cellaTartalom.innerHTML = (orarend.Órák[i].Óra + ". óra : <br>" + orarend.Órák[i].ÓraKezdete + " - " + orarend.Órák[i].ÓraVége );
                    cella.appendChild(cellaTartalom);
                    cella.addEventListener("click",moreInfo);
                    sor.appendChild(cella);
                    }else if(j == 1){
                        cellaTartalom.innerHTML = (
                                        orarend.Hétfő[i].Tantárgy 
                                        + "<br> Terem: " +
                                        orarend.Hétfő[i].TeremAzonositó 
                                        + "\t Tanár: " +
                                        orarend.Hétfő[i].TanárAzonosító
                                        );
                        cella.appendChild(cellaTartalom); //cellákba elhelyezzük a megjelenítendő tartalmat
                        cellaTartalom.className = i; // hozzárendeljük az elem osztályához hogy hanyadik órát mutatja a cella
                        cellaTartalom.className += j;// hozzárendeljük az elem osztályához hogy melyik napot szerepel a cella
                        cella.addEventListener("click",moreInfo);
                        sor.appendChild(cella);

                    }else if(j == 2){
                        cellaTartalom.innerHTML = (
                                        orarend.Kedd[i].Tantárgy
                                        + "<br> Terem: " +
                                        orarend.Kedd[i].TeremAzonositó
                                        + "\t Tanár: " +
                                        orarend.Kedd[i].TanárAzonosító
                                        );
                        cella.appendChild(cellaTartalom);
                        cellaTartalom.className = i;
                        cellaTartalom.className += j;
                        cella.addEventListener("click",moreInfo);
                        sor.appendChild(cella);

                    }else if(j == 3){
                        cellaTartalom.innerHTML = (
                                        orarend.Szerda[i].Tantárgy
                                        + "<br> Terem: " +
                                        orarend.Szerda[i].TeremAzonositó
                                        + "\t Tanár: " +
                                        orarend.Szerda[i].TanárAzonosító
                                        );
                        cella.appendChild(cellaTartalom);
                        cellaTartalom.className = i;
                        cellaTartalom.className += j;
                        cella.addEventListener("click",moreInfo);
                        sor.appendChild(cella);
                        
                    }else if(j == 4){
                        cellaTartalom.innerHTML = (
                                        orarend.Csütörtök[i].Tantárgy
                                        + "<br> Terem: "+
                                        orarend.Csütörtök[i].TeremAzonositó
                                        + "\t Tanár: " +
                                        orarend.Csütörtök[i].TanárAzonosító
                                        );
                        cella.appendChild(cellaTartalom);
                        cellaTartalom.className = i;
                        cellaTartalom.className += j;
                        cella.addEventListener("click",moreInfo);
                        sor.appendChild(cella);

                    }else{
                        cellaTartalom.innerHTML = (
                                        orarend.Péntek[i].Tantárgy
                                        +"<br> Terem: " +
                                        orarend.Péntek[i].TeremAzonositó
                                        + "\t Tanár: " + 
                                        orarend.Péntek[i].TanárAzonosító
                                        );
                        cella.appendChild(cellaTartalom);
                        cellaTartalom.className = i;
                        cellaTartalom.className += j;
                        cella.addEventListener("click",moreInfo);
                        sor.appendChild(cella);
                    }
                }

            tbody.appendChild(sor);            
            táblázat.appendChild(tbody); 

        }

    }   

    //adatok megszerzése az órarend készítéséhez tartalmazza az órarend alap elemeit
    async function orarendAlapAdatok(){
        const response2 = await fetch("./json/orarendkeszito.json");
        var orarendAdatok = await response2.json();
        

    }


 
//felugró infóablak amikor egy adott órára rákattintunk az órarendben 
    function moreInfo(){

        //itt szerezzük meg a cella osztályát ami ahoz kell hogy az info ablakban helyes adatokat mutassunk az óráról
        var targetClassName = event.target.className;


        //elemek létrehozása
        var window = document.createElement("div");

        var button = document.createElement("button");
        button.setAttribute("onclick","closeWindow()");

        window.id = "window";
        window.classList.add('infoDiv');
        window.id="asd";
        

        var h1 = document.createElement("h1");
        var h3 = document.createElement("h3");
       

        //tartalom hozzáfűzése az elemekhez
        button.innerHTML="Ablak bezárása";

        //a cella osztályára alapozva itt illesztünk be tartalmat az info ablakba az osztály 2 db számból áll (xy)
        //az x (0. indexen található) azt mutatja hanyadik órára kattintottunk míg a másik (y ami az 1. indexen található) azt mutatja melyik napon szeretnénk megnézni az adott órát (az 1 = hétfő , 2 = kedd ... 5 = péntek) => ("35"-ös osztállyal rendelkező cella a pénteki nap 3. órát fogja mutatni)
        if(targetClassName.toString().charAt(1) == 1){
            h1.innerHTML ="<br> Hétfő " + targetClassName.toString().charAt(0) + ". óra <br> " + 
                            outerOrarend.Hétfő[targetClassName.toString().charAt(0)].Tantárgy + "<br> <br>";
            h3.innerHTML = "Tanár: " + outerOrarend.Hétfő[targetClassName.toString().charAt(0)].TeljesNév + 
                            "<br> Terem: " + outerOrarend.Hétfő[targetClassName.toString().charAt(0)].Terem ;
        }else if (targetClassName.toString().charAt(1) == 2){
            h1.innerHTML = "<br> Kedd " + targetClassName.toString().charAt(0) + ". óra <br> " + 
                            outerOrarend.Kedd[targetClassName.toString().charAt(0)].Tantárgy + "<br> <br>";
            h3.innerHTML = "Tanár: " + outerOrarend.Kedd[targetClassName.toString().charAt(0)].TeljesNév + 
                            "<br> Terem: " + outerOrarend.Kedd[targetClassName.toString().charAt(0)].Terem;
        }else if(targetClassName.toString().charAt(1) == 3){
            h1.innerHTML = "<br> Szerda " + targetClassName.toString().charAt(0) + ". óra <br> " + 
                             outerOrarend.Szerda[targetClassName.toString().charAt(0)].Tantárgy  + "<br> <br>";
            h3.innerHTML = "Tanár: " + outerOrarend.Szerda[targetClassName.toString().charAt(0)].TeljesNév + 
                            "<br> Terem: " + outerOrarend.Szerda[targetClassName.toString().charAt(0)].Terem;
        }else if(targetClassName.toString().charAt(1) == 4){
            h1.innerHTML = "<br> Csütörtök " + targetClassName.toString().charAt(0) + ". óra <br> " + 
                            outerOrarend.Csütörtök[targetClassName.toString().charAt(0)].Tantárgy  + "<br> <br>";
            h3.innerHTML = "Tanár: " + outerOrarend.Csütörtök[targetClassName.toString().charAt(0)].TeljesNév + 
                            "<br> Terem: " + outerOrarend.Csütörtök[targetClassName.toString().charAt(0)].Terem;
        }else{
            h1.innerHTML = "<br> Péntek " + targetClassName.toString().charAt(0) + ". óra <br> " +  
                            outerOrarend.Péntek[targetClassName.toString().charAt(0)].Tantárgy  + "<br> <br>";
            h3.innerHTML = "Tanár: " + outerOrarend.Péntek[targetClassName.toString().charAt(0)].TeljesNév + 
                            "<br> Terem: " + outerOrarend.Péntek[targetClassName.toString().charAt(0)].Terem;
        }


        h3.style.textAlign = "center";

        //az elemek elhelyezése az adott szülő elembe
        window.appendChild(h1);
        window.appendChild(h3);
        window.appendChild(button);
        container.appendChild(window);


    }

    
  function closeWindow(){
    var elem = document.getElementById("asd");
    elem.parentNode.removeChild(elem);
  }

    
    function load(){
        orarend();
        orarendAlapAdatok();

    }
