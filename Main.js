let url = 'https://docs.google.com/spreadsheets/d/1oVDOvliau2kVgtd6fRwXrAuW9jtqOOOC0yLMzOSsfKI/gviz/tq?';
const query = encodeURIComponent('Select A');
url = `${url}&tq${query}`;

fetch(url)
.then(res => res.text())
.then(rep =>{

const data = JSON.parse(rep.substr(47).slice(0,-2));
console.log(data);

const row01 = document.createElement('tr');
Player01.append(row01);
const row02 = document.createElement('tr');
Player02.append(row02);
const row03 = document.createElement('tr');
Player03.append(row03);
const row04 = document.createElement('tr');
Player04.append(row04);
const row05 = document.createElement('tr');
Player05.append(row05);
const row06 = document.createElement('tr');
Player06.append(row06);
const row07 = document.createElement('tr');
Player07.append(row07);
const row08 = document.createElement('tr');
Player08.append(row08);
const row09 = document.createElement('tr');
Player09.append(row09);
const row12 = document.createElement('tr');
Player12.append(row12);
const row13 = document.createElement('tr');
Player13.append(row13);
const row16 = document.createElement('tr');
Player16.append(row16);

data.table.cols.forEach((heading)=>{
const cell = document.createElement('option');
cell.textContent = heading.label;

row01.append(cell);
row02.append(cell);
row03.append(cell);
row04.append(cell);
row05.append(cell);
row06.append(cell);
row07.append(cell);
row08.append(cell);
row09.append(cell);
row12.append(cell);
row13.append(cell);
row16.append(cell);
})
  
data.table.rows.forEach((main)=>{
const container1 = document.createElement('option');
Player01.append(container1);

const container2 = document.createElement('option');
Player02.append(container2);

const container3 = document.createElement('option');
Player03.append(container3);

const container4 = document.createElement('option');
Player04.append(container4);

const container5 = document.createElement('option');
Player05.append(container5);

const container6 = document.createElement('option');
Player06.append(container6);

const container7 = document.createElement('option');
Player07.append(container7);

const container8 = document.createElement('option');
Player08.append(container8);

const container9 = document.createElement('option');
Player09.append(container9);

const container12 = document.createElement('option');
Player12.append(container12);

const container13 = document.createElement('option');
Player13.append(container13);

const container16 = document.createElement('option');
Player16.append(container16);


main.c.forEach((element)=>{

    const cell1 = document.createElement('option');
    cell1.textContent = element.v;

    const cell2 = document.createElement('option');
    cell2.textContent = element.v;

    const cell3 = document.createElement('option');
    cell3.textContent = element.v;

    const cell4 = document.createElement('option');
    cell4.textContent = element.v;

    const cell5 = document.createElement('option');
    cell5.textContent = element.v;

    const cell6 = document.createElement('option');
    cell6.textContent = element.v;

    const cell7 = document.createElement('option');
    cell7.textContent = element.v;

    const cell8 = document.createElement('option');
    cell8.textContent = element.v;

    const cell9 = document.createElement('option');
    cell9.textContent = element.v;

    const cell12 = document.createElement('option');
    cell12.textContent = element.v;

    const cell13 = document.createElement('option');
    cell13.textContent = element.v;

    const cell16 = document.createElement('option');
    cell16.textContent = element.v;


    container1.append(cell1);
    container2.append(cell2);
    container3.append(cell3);
    container4.append(cell4);
    container5.append(cell5);
    container6.append(cell6);
    container7.append(cell7);
    container8.append(cell8);
    container9.append(cell9);
    container12.append(cell12);
    container13.append(cell13);
    container16.append(cell16);




})
})
});

/* Code for Moving Players */
const Result00 = document.getElementById("Result0");

{
    const Res01 = document.getElementById("Result1");
    const Res02 = document.getElementById('Result2');

    const Name01 = document.getElementById('Player01');
    const Name02 = document.getElementById('Player02');


    Res01.addEventListener("change",()=>{
        let Result01 = parseInt(Res01.value);

        if(Result01 === parseInt(Result00.value)){
            document.getElementById("Player10").innerHTML = Name01.value;
        
        }else if(Result01 != parseInt(Result00.value)){
            document.getElementById("Player17").innerHTML = Name01.value;
        }
    })
    
    Res02.addEventListener("change",()=>{
        let Result02 = parseInt(Res02.value);

        if(Result02 === parseInt(Result00.value)){
            document.getElementById("Player10").innerHTML = Name02.value;
        
        }else if(Result02 != parseInt(Result00.value)){
            document.getElementById("Player17").innerHTML = Name02.value; 
        }
    })
}

{
    const Res01 = document.getElementById("Result3");
    const Res02 = document.getElementById('Result4');

    const Name01 = document.getElementById('Player03');
    const Name02 = document.getElementById('Player04');


    Res01.addEventListener("change",()=>{
        let Result01 = parseInt(Res01.value);

        if(Result01 === parseInt(Result00.value)){
            document.getElementById("Player11").innerHTML = Name01.value;
        
        } else if(Result01 != parseInt(Result00.value)){
            document.getElementById("Player19").innerHTML = Name01.value; 
        }
    })
    
    Res02.addEventListener("change",()=>{
        let Result02 = parseInt(Res02.value);

        if(Result02 === parseInt(Result00.value)){
            document.getElementById("Player11").innerHTML = Name02.value;
        
        } else if(Result02 != parseInt(Result00.value)){
            document.getElementById("Player19").innerHTML = Name02.value; 
        }
    })
}

{
    const Res01 = document.getElementById("Result5");
    const Res02 = document.getElementById('Result6');

    const Name01 = document.getElementById('Player05');
    const Name02 = document.getElementById('Player06');


    Res01.addEventListener("change",()=>{
        let Result01 = parseInt(Res01.value);

        if(Result01 === parseInt(Result00.value)){
            document.getElementById("Player14").innerHTML = Name01.value;
        
        } else if(Result01 != parseInt(Result00.value)){
            document.getElementById("Player21").innerHTML = Name01.value; 
        }
    })
    
    Res02.addEventListener("change",()=>{
        let Result02 = parseInt(Res02.value);

        if(Result02 === parseInt(Result00.value)){
            document.getElementById("Player14").innerHTML = Name02.value;
        
        } else if(Result02 != parseInt(Result00.value)){
            document.getElementById("Player21").innerHTML = Name02.value; 
        }
    })
}

{
    const Res01 = document.getElementById("Result7");
    const Res02 = document.getElementById('Result8');

    const Name01 = document.getElementById('Player07');
    const Name02 = document.getElementById('Player08');


    Res01.addEventListener("change",()=>{
        let Result01 = parseInt(Res01.value);

        if(Result01 === parseInt(Result00.value)){
            document.getElementById("Player15").innerHTML = Name01.value;
        
        } else if(Result01 != parseInt(Result00.value)){
            document.getElementById("Player23").innerHTML = Name01.value; 
        }
    })
    
    Res02.addEventListener("change",()=>{
        let Result02 = parseInt(Res02.value);

        if(Result02 === parseInt(Result00.value)){
            document.getElementById("Player15").innerHTML = Name02.value;
        
        } else if(Result02 != parseInt(Result00.value)){
            document.getElementById("Player23").innerHTML = Name02.value; 
        }
    })
}

{
    const Res01 = document.getElementById("Result9");
    const Res02 = document.getElementById('Result10');

    const Name01 = document.getElementById('Player09');
    const Name02 = document.getElementById('Player10');


    Res01.addEventListener("change",()=>{
        let Result01 = parseInt(Res01.value);

        if(Result01 === parseInt(Result00.value)){
            document.getElementById("Player25").innerHTML = Name01.value;
        
        } else if(Result01 != parseInt(Result00.value)){
            document.getElementById("Player18").innerHTML = Name01.value; 
        }
    })
    
    Res02.addEventListener("change",()=>{
        let Result02 = parseInt(Res02.value);

        if(Result02 === parseInt(Result00.value)){
            document.getElementById("Player25").innerHTML = Name02.innerHTML;
        
        } else if(Result02 != parseInt(Result00.value)){
            document.getElementById("Player18").innerHTML = Name02.innerHTML; 
        }
    })
}

{
    const Res01 = document.getElementById("Result11");
    const Res02 = document.getElementById('Result12');

    const Name01 = document.getElementById('Player11');
    const Name02 = document.getElementById('Player12');


    Res01.addEventListener("change",()=>{
        let Result01 = parseInt(Res01.value);

        if(Result01 === parseInt(Result00.value)){
            document.getElementById("Player27").innerHTML = Name01.innerHTML;
        
        } else if(Result01 != parseInt(Result00.value)){
            document.getElementById("Player20").innerHTML = Name01.innerHTML; 
        }
    })
    
    Res02.addEventListener("change",()=>{
        let Result02 = parseInt(Res02.value);

        if(Result02 === parseInt(Result00.value)){
            document.getElementById("Player27").innerHTML = Name02.value;
        
        } else if(Result02 != parseInt(Result00.value)){
            document.getElementById("Player20").innerHTML = Name02.value; 
        }
    })
}

{
    const Res01 = document.getElementById("Result13");
    const Res02 = document.getElementById('Result14');

    const Name01 = document.getElementById('Player13');
    const Name02 = document.getElementById('Player14');


    Res01.addEventListener("change",()=>{
        let Result01 = parseInt(Res01.value);

        if(Result01 === parseInt(Result00.value)){
            document.getElementById("Player26").innerHTML = Name01.value;
        
        } else if(Result01 != parseInt(Result00.value)){
            document.getElementById("Player22").innerHTML = Name01.value; 
        }
    })
    
    Res02.addEventListener("change",()=>{
        let Result02 = parseInt(Res02.value);

        if(Result02 === parseInt(Result00.value)){
            document.getElementById("Player26").innerHTML = Name02.innerHTML;
        
        } else if(Result02 != parseInt(Result00.value)){
            document.getElementById("Player22").innerHTML = Name02.innerHTML; 
        }
    })
}

{
    const Res01 = document.getElementById("Result15");
    const Res02 = document.getElementById('Result16');

    const Name01 = document.getElementById('Player15');
    const Name02 = document.getElementById('Player16');


    Res01.addEventListener("change",()=>{
        let Result01 = parseInt(Res01.value);

        if(Result01 === parseInt(Result00.value)){
            document.getElementById("Player28").innerHTML = Name01.innerHTML;
        
        } else if(Result01 != parseInt(Result00.value)){
            document.getElementById("Player24").innerHTML = Name01.innerHTML; 
        }
    })
    
    Res02.addEventListener("change",()=>{
        let Result02 = parseInt(Res02.value);

        if(Result02 === parseInt(Result00.value)){
            document.getElementById("Player28").innerHTML = Name02.value;
        
        } else if(Result02 != parseInt(Result00.value)){
            document.getElementById("Player24").innerHTML = Name02.value; 
        }
    })
}
/*Knockout stage code*/ 
{
    const Res01 = document.getElementById("Result17");
    const Res02 = document.getElementById('Result18');

    const Name01 = document.getElementById('Player17');
    const Name02 = document.getElementById('Player18');


    Res01.addEventListener("change",()=>{
        let Result01 = parseInt(Res01.value);

        if(Result01 === parseInt(Result00.value)){
            document.getElementById("Player29").innerHTML = Name01.innerHTML;
        
        } else if(Result01 != parseInt(Result00.value)){
            document.getElementById("").innerHTML = ''; 
        }
    })
    
    Res02.addEventListener("change",()=>{
        let Result02 = parseInt(Res02.value);

        if(Result02 === parseInt(Result00.value)){
            document.getElementById("Player29").innerHTML = Name02.innerHTML;
        
        } else if(Result02 != parseInt(Result00.value)){
            document.getElementById("").innerHTML = ''; 
        }
    })
}

{
    const Res01 = document.getElementById("Result19");
    const Res02 = document.getElementById('Result20');

    const Name01 = document.getElementById('Player19');
    const Name02 = document.getElementById('Player20');


    Res01.addEventListener("change",()=>{
        let Result01 = parseInt(Res01.value);

        if(Result01 === parseInt(Result00.value)){
            document.getElementById("Player31").innerHTML = Name01.innerHTML;
        
        } else if(Result01 != parseInt(Result00.value)){
            document.getElementById("").innerHTML = ''; 
        }
    })
    
    Res02.addEventListener("change",()=>{
        let Result02 = parseInt(Res02.value);

        if(Result02 === parseInt(Result00.value)){
            document.getElementById("Player31").innerHTML = Name02.innerHTML;
        
        } else if(Result02 != parseInt(Result00.value)){
            document.getElementById("").innerHTML = ''; 
        }
    })
}

{
    const Res01 = document.getElementById("Result21");
    const Res02 = document.getElementById('Result22');

    const Name01 = document.getElementById('Player21');
    const Name02 = document.getElementById('Player22');


    Res01.addEventListener("change",()=>{
        let Result01 = parseInt(Res01.value);

        if(Result01 === parseInt(Result00.value)){
            document.getElementById("Player30").innerHTML = Name01.innerHTML;
        
        } else if(Result01 != parseInt(Result00.value)){
            document.getElementById("").innerHTML = ''; 
        }
    })
    
    Res02.addEventListener("change",()=>{
        let Result02 = parseInt(Res02.value);

        if(Result02 === parseInt(Result00.value)){
            document.getElementById("Player30").innerHTML = Name02.innerHTML;
        
        } else if(Result02 != parseInt(Result00.value)){
            document.getElementById("").innerHTML = ''; 
        }
    })
}

{
    const Res01 = document.getElementById("Result23");
    const Res02 = document.getElementById('Result24');

    const Name01 = document.getElementById('Player23');
    const Name02 = document.getElementById('Player24');


    Res01.addEventListener("change",()=>{
        let Result01 = parseInt(Res01.value);

        if(Result01 === parseInt(Result00.value)){
            document.getElementById("Player32").innerHTML = Name01.innerHTML;
        
        } else if(Result01 != parseInt(Result00.value)){
            document.getElementById("").innerHTML = ''; 
        }
    })
    
    Res02.addEventListener("change",()=>{
        let Result02 = parseInt(Res02.value);

        if(Result02 === parseInt(Result00.value)){
            document.getElementById("Player32").innerHTML = Name02.innerHTML;
        
        } else if(Result02 != parseInt(Result00.value)){
            document.getElementById("").innerHTML = ''; 
        }
    })
}

{
    const Res01 = document.getElementById("Result25");
    const Res02 = document.getElementById('Result26');

    const Name01 = document.getElementById('Player25');
    const Name02 = document.getElementById('Player26');


    Res01.addEventListener("change",()=>{
        let Result01 = parseInt(Res01.value);

        if(Result01 === parseInt(Result00.value)){
            document.getElementById("Player37").innerHTML = Name01.innerHTML;
        
        } else if(Result01 != parseInt(Result00.value)){
            document.getElementById("Player33").innerHTML = Name01.innerHTML; 
        }
    })
    
    Res02.addEventListener("change",()=>{
        let Result02 = parseInt(Res02.value);

        if(Result02 === parseInt(Result00.value)){
            document.getElementById("Player37").innerHTML = Name02.innerHTML;
        
        } else if(Result02 != parseInt(Result00.value)){
            document.getElementById("Player33").innerHTML = Name02.innerHTML; 
        }
    })
}

{
    const Res01 = document.getElementById("Result27");
    const Res02 = document.getElementById('Result28');

    const Name01 = document.getElementById('Player27');
    const Name02 = document.getElementById('Player28');


    Res01.addEventListener("change",()=>{
        let Result01 = parseInt(Res01.value);

        if(Result01 === parseInt(Result00.value)){
            document.getElementById("Player38").innerHTML = Name01.innerHTML;
        
        } else if(Result01 != parseInt(Result00.value)){
            document.getElementById("Player35").innerHTML = Name02.innerHTML; 
        }
    })
    
    Res02.addEventListener("change",()=>{
        let Result02 = parseInt(Res02.value);

        if(Result02 === parseInt(Result00.value)){
            document.getElementById("Player38").innerHTML = Name02.innerHTML;
        
        } else if(Result02 != parseInt(Result00.value)){
            document.getElementById("Player35").innerHTML = Name02.innerHTML; 
        }
    })
}

{
    const Res01 = document.getElementById("Result29");
    const Res02 = document.getElementById('Result30');

    const Name01 = document.getElementById('Player29');
    const Name02 = document.getElementById('Player30');


    Res01.addEventListener("change",()=>{
        let Result01 = parseInt(Res01.value);

        if(Result01 === parseInt(Result00.value)){
            document.getElementById("Player34").innerHTML = Name01.innerHTML;
        
        } else if(Result01 != parseInt(Result00.value)){
            document.getElementById("").innerHTML = ''; 
        }
    })
    
    Res02.addEventListener("change",()=>{
        let Result02 = parseInt(Res02.value);

        if(Result02 === parseInt(Result00.value)){
            document.getElementById("Player34").innerHTML = Name02.innerHTML;
        
        } else if(Result02 != parseInt(Result00.value)){
            document.getElementById("").innerHTML = ''; 
        }
    })
}

{
    const Res01 = document.getElementById("Result31");
    const Res02 = document.getElementById('Result32');

    const Name01 = document.getElementById('Player31');
    const Name02 = document.getElementById('Player32');


    Res01.addEventListener("change",()=>{
        let Result01 = parseInt(Res01.value);

        if(Result01 === parseInt(Result00.value)){
            document.getElementById("Player36").innerHTML = Name01.innerHTML;
        
        } else if(Result01 != parseInt(Result00.value)){
            document.getElementById("").innerHTML = ''; 
        }
    })
    
    Res02.addEventListener("change",()=>{
        let Result02 = parseInt(Res02.value);

        if(Result02 === parseInt(Result00.value)){
            document.getElementById("Player36").innerHTML = Name02.innerHTML;
        
        } else if(Result02 != parseInt(Result00.value)){
            document.getElementById("").innerHTML = ''; 
        }
    })
}

{
    const Res01 = document.getElementById("Result37");
    const Res02 = document.getElementById('Result38');

    const Name01 = document.getElementById('Player37');
    const Name02 = document.getElementById('Player38');


    Res01.addEventListener("change",()=>{
        let Result01 = parseInt(Res01.value);

        if(Result01 === parseInt(Result00.value)){
            document.getElementById("Player43").innerHTML = Name01.innerHTML;
        
        } else if(Result01 != parseInt(Result00.value)){
            document.getElementById("Player41").innerHTML = Name01.innerHTML; 
        }
    })
    
    Res02.addEventListener("change",()=>{
        let Result02 = parseInt(Res02.value);

        if(Result02 === parseInt(Result00.value)){
            document.getElementById("Player43").innerHTML = Name02.innerHTML;
        
        } else if(Result02 != parseInt(Result00.value)){
            document.getElementById("Player41").innerHTML = Name02.innerHTML; 
        }
    })
}

{
    const Res01 = document.getElementById("Result33");
    const Res02 = document.getElementById('Result34');

    const Name01 = document.getElementById('Player33');
    const Name02 = document.getElementById('Player34');


    Res01.addEventListener("change",()=>{
        let Result01 = parseInt(Res01.value);

        if(Result01 === parseInt(Result00.value)){
            document.getElementById("Player39").innerHTML = Name01.innerHTML;
        
        } else if(Result01 != parseInt(Result00.value)){
            document.getElementById("").innerHTML = ''; 
        }
    })
    
    Res02.addEventListener("change",()=>{
        let Result02 = parseInt(Res02.value);

        if(Result02 === parseInt(Result00.value)){
            document.getElementById("Player39").innerHTML = Name02.innerHTML;
        
        } else if(Result02 != parseInt(Result00.value)){
            document.getElementById("").innerHTML = ''; 
        }
    })
}

{
    const Res01 = document.getElementById("Result35");
    const Res02 = document.getElementById('Result36');

    const Name01 = document.getElementById('Player35');
    const Name02 = document.getElementById('Player36');


    Res01.addEventListener("change",()=>{
        let Result01 = parseInt(Res01.value);

        if(Result01 === parseInt(Result00.value)){
            document.getElementById("Player40").innerHTML = Name01.innerHTML;
        
        } else if(Result01 != parseInt(Result00.value)){
            document.getElementById("").innerHTML = ''; 
        }
    })
    
    Res02.addEventListener("change",()=>{
        let Result02 = parseInt(Res02.value);

        if(Result02 === parseInt(Result00.value)){
            document.getElementById("Player40").innerHTML = Name02.innerHTML;
        
        } else if(Result02 != parseInt(Result00.value)){
            document.getElementById("").innerHTML = ''; 
        }
    })
}

{
    const Res01 = document.getElementById("Result39");
    const Res02 = document.getElementById('Result40');

    const Name01 = document.getElementById('Player39');
    const Name02 = document.getElementById('Player40');


    Res01.addEventListener("change",()=>{
        let Result01 = parseInt(Res01.value);

        if(Result01 === parseInt(Result00.value)){
            document.getElementById("Player42").innerHTML = Name01.innerHTML;
        
        } else if(Result01 != parseInt(Result00.value)){
            document.getElementById("").innerHTML = ''; 
        }
    })
    
    Res02.addEventListener("change",()=>{
        let Result02 = parseInt(Res02.value);

        if(Result02 === parseInt(Result00.value)){
            document.getElementById("Player42").innerHTML = Name02.innerHTML;
        
        } else if(Result02 != parseInt(Result00.value)){
            document.getElementById("").innerHTML = ''; 
        }
    })
}

{
    const Res01 = document.getElementById("Result41");
    const Res02 = document.getElementById('Result42');

    const Name01 = document.getElementById('Player41');
    const Name02 = document.getElementById('Player42');


    Res01.addEventListener("change",()=>{
        let Result01 = parseInt(Res01.value);

        if(Result01 === parseInt(Result00.value)){
            document.getElementById("Player44").innerHTML = Name01.innerHTML;
        
        } else if(Result01 != parseInt(Result00.value)){
            document.getElementById("").innerHTML = ''; 
        }
    })
    
    Res02.addEventListener("change",()=>{
        let Result02 = parseInt(Res02.value);

        if(Result02 === parseInt(Result00.value)){
            document.getElementById("Player44").innerHTML = Name02.innerHTML;
        
        } else if(Result02 != parseInt(Result00.value)){
            document.getElementById("").innerHTML = ''; 
        }
    })
}