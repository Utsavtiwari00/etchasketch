document.addEventListener("DOMContentLoaded",()=>{
    const grids=document.querySelectorAll(".grids");
    const parentgrids=document.querySelector(".gridlayout");
    const gridvalue=document.querySelectorAll('.griddy');
    const chosecolor=document.querySelector('#color');
    let isDrawing=false;
    let color="#ffc0cb"
    const resetbtn=document.querySelector('#rbtn')
    chosecolor.addEventListener('input',()=>{
         color=chosecolor.value;
    })
    resetbtn.addEventListener('click',()=>{
        color="#000000"
        chosecolor.value=color;
    })

    function sketch(){
        parentgrids.addEventListener("mousedown", (e) => {
            if (e.target.classList.contains("grids")) {
                isDrawing = true;
                if(color==="#000000"){
                    e.target.style.backgroundColor = color;
                e.target.style.border="1px solid white";
                }
                else{
                e.target.style.backgroundColor = color;
                e.target.style.border="1px solid black";
                }
                
            }
        });

        parentgrids.addEventListener("mouseover", (e) => {
            if (isDrawing && e.target.classList.contains("grids")) {
                if(color==="#000000"){
                    e.target.style.backgroundColor = color;
                e.target.style.border="1px solid white";
                }
                else{
                e.target.style.backgroundColor = color;
                e.target.style.border="1px solid black";
                }
                
            }
        });
    document.addEventListener("mouseup",()=>{
        isDrawing=false;
    
    });
}
sketch();
function gridgeneration(size){
    parentgrids.innerHTML="";
    const griddysize=400;
    const cellsize=griddysize/size;
    parentgrids.style.gridTemplateColumns=`repeat(${size},${cellsize}px)`
     parentgrids.style.gridTemplateRows=`repeat(${size},${cellsize}px)`
    const totalcell=size*size;
    for(let i=0;i<totalcell;i++){
        const newgrid=document.createElement('div');
        newgrid.classList.add('grids');
        newgrid.style.width=`${cellsize}`;
        newgrid.style.height=`${cellsize}`
        parentgrids.append(newgrid);
    }
      }
function gridsize(){
    gridvalue.forEach((option)=>{
        option.addEventListener("change",()=>{
            const size=parseInt(option.value ,10);
            if(size){
                gridgeneration(size);
            }
        });
    });
}
gridgeneration(5);
gridsize();
sketch();

});

      
   

