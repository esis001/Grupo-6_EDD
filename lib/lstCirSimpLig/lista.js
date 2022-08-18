class Nodo{
    info=0;
    liga=null; 
}
export class ListaCircularSimplementeLigada{
    INICIO=null;
    LISTA_CANVAS=null;
    constructor(listaCanvas) {
        this.LISTA_CANVAS = listaCanvas;
   }///////////////////////////////////////////

    isVacio(){
        if(this.INICIO==null){
            return true;
        }else{
            return false;
        }
    }///////////////////////////////
    buscar(DATO){
        let encontrado=false;
        let tmp=this.INICIO;
        if(tmp==null) return false;
        if(tmp.info==DATO) return true;
        while(tmp.liga !=this.INICIO){
            if(tmp.info==DATO){
                encontrado=true;
                break;
            }
            tmp=tmp.liga;
        }
        return encontrado;
    }///////////////////////////////
    inserta_inicio(DATO){
        if(this.INICIO==null){
            var P=this.INICIO;
            var Q=new Nodo();
            Q.info=DATO;
            Q.liga=Q;
            P=Q;
            this.INICIO=P;
        }else{
            var P=this.INICIO;
            var Q=new Nodo();
            var F=null;
            Q.info=DATO;
            F=P;
            while(F.liga!=P){
                F=F.liga;
            }
            F.liga=Q;
            Q.liga=P;
            P=Q;
            this.INICIO=P;
        }
        this.LISTA_CANVAS.inserta_inicio(this.INICIO);
    }////////////////////////////////
    inserta_final(DATO){
        if(this.INICIO==null){
            var P=this.INICIO;
            var Q=new Nodo();
            Q.info=DATO;
            Q.liga=Q;
            P=Q;
            this.INICIO=P;
            this.LISTA_CANVAS.inserta_final(this.INICIO);
        }else{
            var P=this.INICIO;
            var T=P;
            var Q=new Nodo();
            while(T.liga!=P){
                T=T.liga;
            }
            Q.info=DATO;
            T.liga=Q;
            Q.liga=P;
            this.INICIO=P;
            this.LISTA_CANVAS.inserta_final(this.INICIO);
        }
        
    }///////////////////////////////
    inserta_antes_X (DATO, X){
        let P=this.INICIO;
        let Q=P;
        let BAND=1;
        let T;
        let X1=new Nodo();
        while(Q.info!=X && BAND==1){
            if(Q.liga!=P){
                T=Q;
                Q=Q.liga;
            }else{
                BAND=0;
            }
        }

        if(BAND==1){
            X1.info=DATO;
            if(P==Q){
                let U=P;
                while(U.liga!=P){
                    U=U.liga;
                }
                X1.liga=P;
                P=X1;
                U.liga=P;
            }else{
                T.liga=X1;
                X1.liga=Q;
            }
        }else{
            throw new Error("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA");
        }
        this.INICIO=P;
        this.LISTA_CANVAS.inserta_antes_X(this.INICIO,X1);
    }///////////////////////////////
    inserta_despues_X(DATO, X){
        let P=this.INICIO;
        let Q=P;
        let BAND=1;
        while(Q.info!=X && BAND==1){
            if(Q.liga!=P){
                Q=Q.liga;
            }else{
                BAND=0;
            }
        }
        if(BAND==1){
            let T=new Nodo();
            T.info=DATO;
            T.liga=Q.liga;
            Q.liga=T;
            this.LISTA_CANVAS.inserta_despues_X(this.INICIO, T);
        }else{
            throw new Error("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA");
        }
    }///////////////////////////////
    elimina_inicio(){
        let P=this.INICIO;
        let Q=P.liga;
        let T=null;
        if(P.liga==P){
            P=null;
        }else{
            while(Q!=P){
                T=Q;
                Q=Q.liga;
            }
            P=Q.liga;
            T.liga=Q.liga;
        }
        this.INICIO=P;
        this.LISTA_CANVAS.elimina_inicio(this.INICIO);
    }///////////////////////////////
    elimina_ultimo(){
        let P=this.INICIO;
        let Q=P;
        let T=null;
        if(P.liga==P){
            P=null;
        }else{
            while(Q.liga!=P){
                T=Q;
                Q=Q.liga;
            }
            T.liga=P;
        }
        this.INICIO=P;
        this.LISTA_CANVAS.elimina_ultimo(this.INICIO);
    }///////////////////////////////
    elimina_X(X){
        let P=this.INICIO;
        let Q=P;
        let T=P;
        let BAND=2;
        if(P.info==X && P==P.liga){
            P=null;
        }else{
            while((Q.info!=X && BAND==1) || BAND==2){
                if(T.liga!=P || BAND==2){
                    T=Q;
                    Q=Q.liga;
                    BAND=1;
                }else{
                    BAND=0;
                }
            }
            if(BAND==0){
                throw new Error("El elemento con la informacion X no se encuentra en la lista");
            }else{
                T.liga=Q.liga;
                if(P==Q){
                    P=Q.liga;
                }
            }
            
        }
        this.INICIO=P;
        this.LISTA_CANVAS.elimina_X(this.INICIO);
    }///////////////////////////////
    elimina_antes_X(X){
        let P=this.INICIO;
        let Q=P;
        let T=P;
        let R=null;
        let BAND=3;
        if(P.info==X && P==P.liga){
            P=null;
        }else{
            while((Q.info!=X && BAND==1) || BAND>1){
                if(T.liga!=P || Q.liga.info==X){
                    R=T;
                    T=Q;
                    Q=Q.liga;
                    if(BAND>1){
                        BAND--;
                    }
                }else{
                    BAND=0;
                }
            }
            if(BAND==0){
                throw new Error("El elemento X no se encuentra en la lista");
            }else{
                R.liga=Q;
                if(P.liga==Q){
                    P=Q;
                }
            }
        }
        this.INICIO=P;
        this.LISTA_CANVAS.elimina_antes_X(this.INICIO);
    }///////////////////////////////
    elimina_despues_X(X){
        let P=this.INICIO;
        let Q=P;
        let T=Q.liga;
        let R=T.liga;
        let BAND=1;
        while(BAND==1 && Q.info!=X){
            if(Q.liga!=P){
                Q=Q.liga;
                T=Q.liga;
                R=T.liga;
            }else{
                BAND=0;
            }
        }
        if(BAND==0){
            throw new Error("El elemento X no se encuentra en la lista");
        }else{
            if(Q.liga==P){
                P=R;
            }
            Q.liga=R;
        }
        this.INICIO=P;
        this.LISTA_CANVAS.elimina_despues_X(this.INICIO);
    }///////////////////////////////
    dibujarNodosLog(){
        let P=this.INICIO;
        let cad="";
        if(P!=null){
            let F=P;
            if(F.liga==P){
                cad+=P.info+"::"+P.liga.info;
            }else{
                while(F.liga!=P){
                    cad=cad+F.info+"::";
                    F=F.liga;
                }
                cad=cad+F.info+"::"+F.liga.info;
            }
            console.log(cad);
        }
    }///////////////////////////////
    /*
    dibujarNodos(valor){
        let BAND=2;
        let canvas=this.canvas;
        let ctx=canvas.getContext('2d');
        let tmp=this.INICIO;
        let x=0;
        let y=0;
        let ctd=0;
        ctx.clearRect(0,0, canvas.width, canvas.height);
        let nodo=null;
        while(tmp.liga!=this.INICIO || BAND==2){
            if(valor!=undefined && tmp.info==valor){
                ctx.beginPath();
                ctx.fillStyle="aquamarine";
                ctx.fillRect (x,y,55,30);
                nodo={};
                nodo.x=x;
                nodo.y=y;
                nodo.width=55;
                nodo.height=30;
                nodo.info=tmp.info;
            }else{
                ctx.beginPath();
                ctx.fillStyle="aquamarine";
                ctx.fillStyle="radius: 5px";
                ctx.fillRect (x,y, 55,30);
            }
            BAND=1;
            //texto
            ctx.fillStyle="black";
            ctx.font = '15px Arial';
            ctx.closePath();

            //flecha
            ctx.beginPath();
            ctx.fillStyle="white";
            ctx.moveTo(x+55, y+15);
            ctx.lineTo(x+55+20,y+15);
            ctx.lineTo(x+55+20, y+15+1);
            ctx.lineTo(x+55, y+15+1);
            ctx.closePath();

            ctx.stroke();
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle="white";
            ctx.moveTo(x+55+20,y+10);
            ctx.lineTo(x+55+20+5,y+15);
            ctx.lineTo(x+55+20,y+20);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            x=80*++ctd;
            tmp=tmp.liga;
        }
        ctx.beginPath();
        ctx.moveTo(x+25,y+30);
        ctx.lineTo(x+25,y+30+5);
        ctx.lineTo(25,y+30+5);
        ctx.lineTo(25, 30);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        if(nodo!=null){
            setTimeout(function(){
                ctx.beginPath();
                ctx.fillStyle = "rgb(73, 229, 29)";//color del nodo
                ctx.fillRect (nodo.x,nodo.y,nodo.width,nodo.height);
    
                //texto
                ctx.fillStyle="black";
                ctx.font = '15px Arial';
                ctx.fillText(nodo.info,nodo.x+20,nodo.y+20);
                ctx.closePath();
            }, 2000);
        }
    }
    */
}