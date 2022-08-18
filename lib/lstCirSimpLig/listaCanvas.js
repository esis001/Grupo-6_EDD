export class ListaCircularSimplementeLigadaCanvas{
    CANVAS=null;
    CTX=null;

    constructor(canvas) {
        this.CANVAS = this.responsive(canvas);
        this.CTX=canvas.getContext('2d');
    }///////////////////////////////////////////
    inserta_inicio(inicio){

        this.clearCanvas();

        var nodo=inicio;
        
        var xList=0;
        var yList=25;

        this.dibujarNodoAnimado(xList,yList,nodo.info,"rgb(200,0,0)","white",()=>{

            if(nodo.liga==nodo){//LA LISTA TIENE UN SOLO NODO
                this.dibujarEnlaceCircular(xList,yList);
            }
            else{
                this.dibujarEnlace(xList,yList);
            }
        });
        

        var ctd=1;
        let x=xList;
        let y=yList;

        while(nodo.liga!=inicio){
                
            nodo=nodo.liga;
            
            x=80*ctd;
            if(nodo.liga==inicio){//ULTIMO NODE DE LA LISTA
                this.dibujarNodo(x,y,nodo.info,"rgb(200,0,0)","white");
                this.dibujarEnlaceCircular(x,y);
            }
            else{
                this.dibujarNodo(x,y,nodo.info,"rgb(200,0,0)","white");
                this.dibujarEnlace(x,y);
            }
            
            ctd++;
        }  

    }///////////////////////////////////////////////////////////////////////////////
    inserta_final(inicio){
        this.clearCanvas();
        let nodo=inicio;
        let xList=0;
        let yList=25;
        while(nodo.liga!=inicio){
            this.dibujarNodo(xList,yList, nodo.info, "rgb(200,0,0)","white");
            this.dibujarEnlace(xList,yList);
            nodo=nodo.liga;
            xList=xList+80;
        }
        this.dibujarNodoAnimado(xList,yList,nodo.info,"rgb(200,0,0)", "white",()=>{
            this.dibujarEnlaceCircular(xList,yList);
        });
    }///////////////////////////////////
    inserta_antes_X(inicio, x1){
        this.clearCanvas();
        let nodo=inicio;
        let xList=0;
        let yList=25;
        let xList1, yList1;
        while(nodo.liga!=inicio){
            
            if(nodo==x1){
                xList1=xList;
                yList1=yList;
                this.dibujarNodoAnimado(xList,yList,nodo.info,"rgb(200,0,0)", "white",()=>{
                    this.dibujarEnlace(xList1,yList1);
                });
            }else{
                this.dibujarNodo(xList,yList, nodo.info, "rgb(200,0,0)","white");
                this.dibujarEnlace(xList,yList);
            }
            xList=xList+80;
            nodo=nodo.liga;
        }
        if(nodo==x1){
            this.dibujarNodoAnimado(xList,yList,nodo.info,"rgb(200,0,0)", "white",()=>{
                this.dibujarEnlaceCircular(xList,yList);
            });
        }else{
            this.dibujarNodo(xList,yList, nodo.info, "rgb(200,0,0)","white");
            this.dibujarEnlaceCircular(xList,yList);
        }
        /*

        let ctd=1;
        let x=xList;
        let y=yList;

        while(nodo.liga!=inicio){
            nodo=nodo.liga;
            x=80+ctd;

        }
        if(nodo.liga==inicio){//ULTIMO NODE DE LA LISTA
            this.dibujarNodo(x,y,nodo.info,"rgb(200,0,0)","white");
            this.dibujarEnlaceCircular(x,y);
        }
        else{
            this.dibujarNodo(x,y,nodo.info,"rgb(200,0,0)","white");
            this.dibujarEnlace(x,y);
        }
        
        ctd++;
        */
    }//////////////////////////////////
    inserta_despues_X(inicio, x1){
        this.clearCanvas();
        let nodo=inicio;
        let xList=0;
        let yList=25;
        let xList1, yList1;
        while(nodo.liga!=inicio){
            
            if(nodo==x1){
                xList1=xList;
                yList1=yList;
                this.dibujarNodoAnimado(xList,yList,nodo.info,"rgb(200,0,0)", "white",()=>{
                    this.dibujarEnlace(xList1,yList1);
                });
            }else{
                this.dibujarNodo(xList,yList, nodo.info, "rgb(200,0,0)","white");
                this.dibujarEnlace(xList,yList);
            }
            xList=xList+80;
            nodo=nodo.liga;
        }
        if(nodo==x1){
            this.dibujarNodoAnimado(xList,yList,nodo.info,"rgb(200,0,0)", "white",()=>{
                this.dibujarEnlaceCircular(xList,yList);
            });
        }else{
            this.dibujarNodo(xList,yList, nodo.info, "rgb(200,0,0)","white");
            this.dibujarEnlaceCircular(xList,yList);
        }
    }
    elimina_inicio(inicio){
        this.clearCanvas();
        if(inicio!=null){
            let nodo=inicio;
            let xList=0;
            let yList=25;
            this.dibujarNodo(xList,yList, nodo.info, "rgb(200,0,0)","white");
            if(nodo.liga==inicio){
                this.dibujarEnlaceCircular(xList,yList);
            }else{
                this.dibujarEnlace(xList,yList);
            }
            
            while(nodo.liga!=inicio){
                nodo=nodo.liga;
                xList=xList+80;
                this.dibujarNodo(xList,yList, nodo.info, "rgb(200,0,0)","white");
                if(nodo.liga!=inicio){
                    this.dibujarEnlace(xList,yList);
                }else{
                    this.dibujarEnlaceCircular(xList,yList);
                }
                
            }
        }
    }
    elimina_ultimo(inicio){
        this.clearCanvas();
        if(inicio!=null){
            let nodo=inicio;
            let xList=0;
            let yList=25;
            this.dibujarNodo(xList,yList, nodo.info, "rgb(200,0,0)","white");
            if(nodo.liga==inicio){
                this.dibujarEnlaceCircular(xList,yList);
            }else{
                this.dibujarEnlace(xList,yList);
            }
            
            while(nodo.liga!=inicio){
                nodo=nodo.liga;
                xList=xList+80;
                this.dibujarNodo(xList,yList, nodo.info, "rgb(200,0,0)","white");
                if(nodo.liga!=inicio){
                    this.dibujarEnlace(xList,yList);
                }else{
                    this.dibujarEnlaceCircular(xList,yList);
                }
                
            }
        }
    }
    elimina_X(inicio){
        this.clearCanvas();
        if(inicio!=null){
            let nodo=inicio;
            let xList=0;
            let yList=25;
            this.dibujarNodo(xList,yList, nodo.info, "rgb(200,0,0)","white");
            if(nodo.liga==inicio){
                this.dibujarEnlaceCircular(xList,yList);
            }else{
                this.dibujarEnlace(xList,yList);
            }
            
            while(nodo.liga!=inicio){
                nodo=nodo.liga;
                xList=xList+80;
                this.dibujarNodo(xList,yList, nodo.info, "rgb(200,0,0)","white");
                if(nodo.liga!=inicio){
                    this.dibujarEnlace(xList,yList);
                }else{
                    this.dibujarEnlaceCircular(xList,yList);
                }
                
            }
        }
    }
    elimina_antes_X(inicio){
        this.clearCanvas();
        if(inicio!=null){
            let nodo=inicio;
            let xList=0;
            let yList=25;
            this.dibujarNodo(xList,yList, nodo.info, "rgb(200,0,0)","white");
            if(nodo.liga==inicio){
                this.dibujarEnlaceCircular(xList,yList);
            }else{
                this.dibujarEnlace(xList,yList);
            }
            
            while(nodo.liga!=inicio){
                nodo=nodo.liga;
                xList=xList+80;
                this.dibujarNodo(xList,yList, nodo.info, "rgb(200,0,0)","white");
                if(nodo.liga!=inicio){
                    this.dibujarEnlace(xList,yList);
                }else{
                    this.dibujarEnlaceCircular(xList,yList);
                }
                
            }
        }
    }
    elimina_despues_X(inicio){
        this.clearCanvas();
        if(inicio!=null){
            let nodo=inicio;
            let xList=0;
            let yList=25;
            this.dibujarNodo(xList,yList, nodo.info, "rgb(200,0,0)","white");
            if(nodo.liga==inicio){
                this.dibujarEnlaceCircular(xList,yList);
            }else{
                this.dibujarEnlace(xList,yList);
            }
            
            while(nodo.liga!=inicio){
                nodo=nodo.liga;
                xList=xList+80;
                this.dibujarNodo(xList,yList, nodo.info, "rgb(200,0,0)","white");
                if(nodo.liga!=inicio){
                    this.dibujarEnlace(xList,yList);
                }else{
                    this.dibujarEnlaceCircular(xList,yList);
                }
                
            }
        }
    }

    dibujarEnlace(x,y){
        
        //Dibujar flecha
        //linea de la flecha
        this.CTX.beginPath();
        this.CTX.moveTo(x+55,y+15);
        this.CTX.lineTo(x+55+20,y+15);
        this.CTX.stroke();

        //cabeza de la flecha
        this.CTX.beginPath();
        this.CTX.fillStyle="black";
        this.CTX.moveTo(x+55+20,y+10);
        this.CTX.lineTo(x+55+20+5,y+15);
        this.CTX.lineTo(x+55+20,y+20);
        this.CTX.closePath();
        this.CTX.fill();
    }///////////////////////////////////////////////////////////////////////////////
    dibujarEnlaceCircular(x,y){

        //LINEA CIRCULAR
        this.CTX.beginPath();
        this.CTX.fillStyle="black";
        this.CTX.moveTo(x+55,y+15);
        this.CTX.lineTo(x+55+20,y+15);
        this.CTX.lineTo(x+55+20,y+15-35);
        x=0;
        this.CTX.lineTo(x+55-25,y+15-35);
        this.CTX.lineTo(x+55-25,y-5);
        this.CTX.stroke();

        //CABEZA DE LA FLECHA
        this.CTX.beginPath();
        this.CTX.fillStyle="black";
        this.CTX.moveTo(x+55-30,y-5);
        this.CTX.lineTo(x+55-30+10,y-5);
        this.CTX.lineTo(x+55-30+5,y+0);
        this.CTX.closePath();
        this.CTX.fill();

    }///////////////////////////////////////////////////////////////////////////////
    async dibujarNodoAnimado(xFinal,yFinal,dato,colorFondo,colorTexto,eventEndAnimation){

        let num=4;
        let yInicio=105;
        let xInicio=0;
        
        let yAltura=yInicio-yFinal;
        let xAltura=xFinal-xInicio;

        //let desplazmiento=Math.sqrt(yAltura*yAltura+xAltura*xAltura);
        
        let vary=yAltura/(num-1);
        let yTmp=yInicio;

        let varx=xAltura/(num-1);
        let xTmp=xInicio;


        for(let i=0;i<num;i++){//SOLO VERTICAL
            
            if(i==num-1)
                this.dibujarNodo(xTmp,yTmp,dato,colorFondo,colorTexto);
            else
                this.dibujarNodo(xTmp,yTmp,dato,"rgb(51,51,0)",colorTexto);//color gray

            let yy_anterior=yTmp;
            let xx_anterior=xTmp;

            yTmp-=vary;
            xTmp+=varx;

            await new Promise(r => setTimeout(r, 500));//sleep
            if(i!=num-1)
                this.dibujarNodoClear(xx_anterior,yy_anterior);
            
        }

        if(eventEndAnimation!=undefined && eventEndAnimation!=null)
                                                         eventEndAnimation();//LANZAMOS EL EVENTO

    }/////////////////////////////////////////////////////////////////////////////
    dibujarNodoClear(x,y){

        this.CTX.beginPath();
        this.CTX.fillStyle = "white";
        //this.CTX.fillRect (x,y, 55,30); 
        this.CTX.fillRect (x-3,y-3, 55+5,30+5); 
        this.CTX.closePath();

    }/////////////////////////////////////////////////////////////////////////////
    clearCanvas(){

        this.CTX.clearRect(0, 0, this.CANVAS.width, this.CANVAS.height);//limpia el canva 
    }/////////////////////////////////////////////////////////////////////////////
    dibujarNodo(x,y,dato,colorFondo,colorTexto){
    
        this.CTX.beginPath();
        //this.CTX.fillStyle = "rgb(200,0,0)";  //ROJO
        this.CTX.fillStyle = colorFondo;  //ROJO
        this.CTX.fillRect (x,y, 55,30);
        
        /*
        this.CTX.beginPath();
        this.CTX.moveTo(x+55,y+15);
        this.CTX.lineTo(x+55+20,y+15);
        this.CTX.closePath();
        this.CTX.stroke();
        */

        this.CTX.fillStyle=colorTexto;
        this.CTX.font = '15px Arial';
        this.CTX.fillText(dato,x+20,y+20);
        this.CTX.closePath();

    }///////////////////////////////////////////////////////////////
    responsive(canvas){
        
        if(window.innerWidth>800){//escritorio
            canvas.width  = window.innerWidth*1;  // set the resolution to fill the page
            canvas.height = window.innerHeight*0.2; 
        }
        else{//mobiles
            canvas.width  = window.innerWidth*1;  // set the resolution to fill the page
            
            if(window.innerHeight<350){
                canvas.height = window.innerHeight*0.2; 
            }else{
                canvas.height = window.innerHeight*0.1; 
            }
        }
        
        return canvas;
    }///////////////////////////////////////////////////////////////
}