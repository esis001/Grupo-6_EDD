import {Spin} from '../utils/load.js'
export class ListaDoblementeLigadaCanvas{

    CANVAS=null;
    CTX=null;

    constructor(canvas) {
        this.CANVAS = this.responsive(canvas);
        this.CTX=canvas.getContext('2d');
    }///////////////////////////////////////////
    async elimina_inicio_pre(inicio){

        this.clearCanvas();

        var nodo=inicio;
        
        this.dibujarNodo(0,0,nodo.info,"rgb(51,51,0)","white");//COLOR GRAY
        this.dibujarEnlace(0, 0);
        
        var ctd=1;

        while(nodo.ligaDer!=null){
            
            nodo=nodo.ligaDer;
            let x=80*ctd;
            let y=0;
                
            this.dibujarNodo(x,y,nodo.info,"rgb(200,0,0)","white");
            this.dibujarEnlace(x, y);
    
            ctd++;        
        } 

        Spin.load();
        await new Promise(r => setTimeout(r, 2000));//sleep
        Spin.unload();

    }///////////////////////////////////////////
    elimina_inicio_post(inicio){
        if(inicio==null){
            this.clearCanvas();
            return;
        }

        this.clearCanvas();

        var nodo=inicio;
        
        this.dibujarNodo(0,0,nodo.info,"rgb(200,0,0)","white"); 
        this.dibujarEnlace(0, 0);
        
        var ctd=1;

        while(nodo.ligaDer!=null){
            
            nodo=nodo.ligaDer;
            let x=80*ctd;
            let y=0;
                
            this.dibujarNodo(x,y,nodo.info,"rgb(200,0,0)","white");
            this.dibujarEnlace(x, y);
            ctd++;        
        } 

    }///////////////////////////////////////////
    inserta_antes_X(inicio,nodo_dato){

        this.clearCanvas();

        var nodo=inicio;
        
        if(inicio==nodo_dato)//PRIMER NODO
            this.dibujarNodoAnimado(0,0,nodo.info,"rgb(200,0,0)","white");  
        else
            this.dibujarNodo(0,0,nodo.info,"rgb(200,0,0)","white");  

        this.dibujarEnlace(0,0);
        var ctd=1;

        while(nodo.ligaDer!=null){
            
            nodo=nodo.ligaDer;
            let x=80*ctd;
            let y=0;
                
            if(nodo==nodo_dato){
                this.dibujarNodoAnimado(x,y,nodo.info,"rgb(200,0,0)","white");
                this.dibujarEnlace(x, y);
            }else{
                this.dibujarNodo(x,y,nodo.info,"rgb(200,0,0)","white");
                this.dibujarEnlace(x,y);
            }
            ctd++;
            
        } 
        
    }////////////////////////////////////////////////////////////////////////////////////////
    inserta_inicio(inicio){

    
        if(inicio.ligaDer==null){//PRIMER NODO

            this.dibujarNodoAnimado(0,0,inicio.info,"rgb(200,0,0)","white");
            this.dibujarEnlace(0, 0);
        }else{   
            this.clearCanvas();
            var nodo=inicio;
            this.dibujarNodoAnimado(0,0,nodo.info,"rgb(200,0,0)","white");
            this.dibujarEnlace(0, 0);
            var ctd=1;
            while(nodo.ligaDer!=null){
                nodo=nodo.ligaDer;
                let x=80*ctd;
                let y=0;
                this.dibujarNodo(x,y,nodo.info,"rgb(200,0,0)","white");
                this.dibujarEnlace(x,y);
                
                ctd++;
            } 
        }
    }///////////////////////////////////////////////////////////////////////////////
    inserta_ultimo(inicio){
        if(inicio.ligaDer==null){
            this.dibujarNodoAnimado(0, 0, inicio.info, "rgb(200,0,0)","white");
            this.dibujarEnlace(0, 0);
        }else{
            this.clearCanvas();
            let nodo=inicio;
            let ctd=1;
            let x=0;
            let y=0;
            while(nodo.ligaDer!=null){
                nodo=nodo.ligaDer;
                this.dibujarNodo(x,y,nodo.info,"rgb(200,0,0)","white");
                this.dibujarEnlace(x, y);
                x=80*ctd;
                y=0;
                ctd++;
            }
            this.dibujarNodoAnimado(x,y,nodo.info,"rgb(200,0,0)","white");
            this.dibujarEnlace(x,y);
        }
        
    }////////////////////////////////
    inserta_despues_X(inicio, nodo_dato){
        this.clearCanvas();
        var nodo=inicio;
        if(inicio==nodo_dato)//PRIMER NODO
            this.dibujarNodoAnimado(0,0,nodo.info,"rgb(200,0,0)","white");  
        else
            this.dibujarNodo(0,0,nodo.info,"rgb(200,0,0)","white");  

        this.dibujarEnlace(0,0);
        var ctd=1;

        while(nodo.ligaDer!=null){
            nodo=nodo.ligaDer;
            let x=80*ctd;
            let y=0;
            if(nodo==nodo_dato){
                this.dibujarNodoAnimado(x,y,nodo.info,"rgb(200,0,0)","white");
            }else{
                this.dibujarNodo(x,y,nodo.info,"rgb(200,0,0)","white");
                this.dibujarEnlace(x,y);
            }
            ctd++;
        }
    }////////////////////////////////
    elimina_ultimo(inicio){
        this.clearCanvas();
        if(inicio!=null){
            let nodo=inicio;
            this.dibujarNodo(0,0,nodo.info,"rgb(200,0,0)","white"); 
            this.dibujarEnlace(0, 0);
            var ctd=1;
            while(nodo.ligaDer!=null){
                nodo=nodo.ligaDer;
                let x=80*ctd;
                let y=0;
                this.dibujarNodo(x,y,nodo.info,"rgb(200,0,0)","white");
                this.dibujarEnlace(x, y);
                ctd++;        
            }
        }
    }////////////////////////////////
    elimina_X(inicio){
        this.clearCanvas();
        if(inicio!=null){
            let nodo=inicio;
            this.dibujarNodo(0,0,nodo.info,"rgb(200,0,0)","white"); 
            this.dibujarEnlace(0, 0);
            var ctd=1;
            while(nodo.ligaDer!=null){
                nodo=nodo.ligaDer;
                let x=80*ctd;
                let y=0;
                this.dibujarNodo(x,y,nodo.info,"rgb(200,0,0)","white");
                this.dibujarEnlace(x, y);
                ctd++;        
            }
        }
    }
    elimina_antes_X(inicio){
        this.clearCanvas();
        let nodo=inicio;
        this.dibujarNodo(0,0,nodo.info,"rgb(200,0,0)","white");
        this.dibujarEnlace(0,0);
        let ctd=1;
        while(nodo.ligaDer!=null){
            nodo=nodo.ligaDer;
            let x=80*ctd;
            let y=0;
            this.dibujarNodo(x,y,nodo.info,"rgb(200,0,0)","white");
            this.dibujarEnlace(x, y);
            ctd++;
        }
    }///////////////////////////////
    elimina_despues_X(inicio){
        this.clearCanvas();
        let nodo=inicio;
        this.dibujarNodo(0,0,nodo.info,"rgb(200,0,0)","white");
        this.dibujarEnlace(0,0);
        let ctd=1;
        while(nodo.ligaDer!=null){
            nodo=nodo.ligaDer;
            let x=80*ctd;
            let y=0;
            this.dibujarNodo(x,y,nodo.info,"rgb(200,0,0)","white");
            this.dibujarEnlace(x, y);
            ctd++;
        }
    }
    async dibujarNodoAnimado(xFinal,yFinal,dato,colorFondo,colorTexto){

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
                this.dibujarNodo(xTmp,yTmp,dato,"rgb(51,51,0)",colorTexto);

            let yy_anterior=yTmp;
            let xx_anterior=xTmp;

            yTmp-=vary;
            xTmp+=varx;

            await new Promise(r => setTimeout(r, 500));//sleep
            if(i!=num-1)
                this.dibujarNodoClear(xx_anterior,yy_anterior);
            
        }

    }/////////////////////////////////////////////////////////////////////////////
    dibujarNodoClear(x,y){

        this.CTX.beginPath();
        this.CTX.fillStyle = "white";
        //this.CTX.fillRect (x,y, 55,30); 
        this.CTX.fillRect (x-3,y-3, 55+5,30+5); 
        this.CTX.closePath();

    }///////////////////////////////////////////////////////////////
    clearCanvas(){

        this.CTX.clearRect(0, 0, this.CANVAS.width, this.CANVAS.height);//limpia el canva 
    }///////////////////////////////////////////////////////////////
    dibujarNodo(x,y,dato,colorFondo,colorTexto){
       
        this.CTX.beginPath();
        //this.CTX.fillStyle = "rgb(200,0,0)";  //ROJO
        this.CTX.fillStyle = colorFondo;  //ROJO
        this.CTX.fillRect (x,y, 55,30);
            
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
            }
            else{
                canvas.height = window.innerHeight*0.1; 
            }
        }
        
        return canvas;
    }///////////////////////////////////////////////////////////////
    dibujarEnlace(x,y){
        //Dibujar flecha
        //linea de la flecha
        this.CTX.beginPath();
        this.CTX.moveTo(x+55,y+10);
        this.CTX.lineTo(x+55+20,y+10);
        this.CTX.stroke();

        //dibuja la segunda flecha
        this.CTX.beginPath();
        this.CTX.moveTo(x+55,y+20);
        this.CTX.lineTo(x+55+20+5,y+20);
        this.CTX.stroke();

        //cabezas de la flecha
        //cabeza 1
        this.CTX.beginPath();
        this.CTX.fillStyle="black";
        this.CTX.moveTo(x+55+20,y+8);
        this.CTX.lineTo(x+55+20+5,y+10);
        this.CTX.lineTo(x+55+20,y+12);
        this.CTX.closePath();
        this.CTX.fill();

        //cabeza 2
        this.CTX.beginPath();
        this.CTX.fillStyle="green";
        this.CTX.moveTo(x+55+5,y+17);
        this.CTX.lineTo(x+55+5-5,y+20);
        this.CTX.lineTo(x+55+5,y+23);
        this.CTX.closePath();
        this.CTX.fill();
    }
}
