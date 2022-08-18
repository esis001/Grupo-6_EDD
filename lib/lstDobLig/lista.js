class Nodo {

    info = 0;
    ligaDer = null;
    ligaIzq = null;
}
export class ListaDoblementeLigada {

    INICIO = null;
    FIN = null;

    LISTA_CANVAS = null;

    constructor(listaCanvas) {
        this.LISTA_CANVAS = listaCanvas;
    }///////////////////////////////////////////
    isVacio() {
        if (this.INICIO == null)
            return true;
        else
            return false;
    }///////////////////////////////////////////
    inserta_inicio(DATO) {

        if (this.INICIO == null) {//Algoritmo Jorge

            var Q = new Nodo();
            Q.info = DATO;

            this.INICIO = Q;
            this.FIN = Q;
        }
        else {//Algoritmo cairo

            var P = this.INICIO;

            var Q = new Nodo();
            Q.info = DATO;
            Q.ligaDer = P;
            P.ligaIzq = Q;
            Q.ligaIzq = null;//Opcional no es necesario
            P = Q;

            this.INICIO = P;
        }

        this.LISTA_CANVAS.inserta_inicio(this.INICIO);

    }///////////////////////////////////////////
    inserta_ultimo(DATO) {
        if (this.INICIO == null) {
            throw new Error("No existe una lista");
        } else {
            let F = this.FIN;
            let Q = new Nodo();
            Q.info = DATO;
            F.ligaDer = Q;
            Q.ligaIzq = F;
            Q.ligaDer = null;//Opcional no necesario
            F = Q;

            this.FIN = F;
            this.LISTA_CANVAS.inserta_ultimo(this.INICIO);
        }
    }
    inserta_antes_X(DATO, X) {

        if (this.INICIO == null) {
            throw new Error("No existe una lista");
        }

        var P = this.INICIO;

        var Q = P;
        while (Q.ligaDer != null && Q.info != X) {
            Q = Q.ligaDer;
        }
        if (Q.info == X) {
            var T = new Nodo();
            T.info = DATO;
            T.ligaDer = Q;
            var R = Q.ligaIzq;
            Q.ligaIzq = T;

            if (P == Q) {//LA lista tiene solo un elemento
                P = T;
                T.ligaIzq = null;//OPCIONAL 
            }
            else {
                R.ligaDer = T;
                T.ligaIzq = R;
            }
        }
        else {

            throw new Error("EL elemento no se encuentra en la lista");
        }

        this.INICIO = P;

        this.LISTA_CANVAS.inserta_antes_X(this.INICIO, T);

    }///////////////////////////////////////////
    inserta_despues_X(DATO, x) {
        let P = this.INICIO;
        let F = this.FIN;
        let Q = P;
        let T=new Nodo();
        let BAND = 1;

        while (Q.info != x && BAND == 1) {
            if (Q.ligaDer != null) {
                Q = Q.ligaDer;
            } else {
                BAND = 0;
            }
        }
        if(BAND==1){
            
            T.info=DATO;
            T.igaDer=Q.ligaDer;
            Q.ligaDer=T;
            
            ////------------------
            T.ligaIzq=Q;
            if(Q==F){//ULTIMO NODO
                F=T;
            }else{
                T.ligaDer.ligaIzq=T;    
            }
            ////----------------------
            this.INICIO=P;
            this.FIN=F;
            this.LISTA_CANVAS.inserta_despues_X(this.INICIO, T);
        }else{
            throw new Error("El nodo dado como referencia no se encuentra en el lista");
        }
        
        
    }////////////////////////////////

    async elimina_inicio() {

        await this.LISTA_CANVAS.elimina_inicio_pre(this.INICIO);

        let Q = this.INICIO;
        this.INICIO = Q.ligaDer;

        if (this.INICIO != null)//Solo si hay mas de un nodo
            this.INICIO.ligaIzq = null;//Necesario

        Q = null;//En c++ "delete Q",como buena práctica(en esta caso no es necesario) revisar https://es.javascript.info/garbage-collection

        this.LISTA_CANVAS.elimina_inicio_post(this.INICIO);

    }///////////////////////////////////////////// 
    elimina_ultimo() {
        let P=this.INICIO;
        let F=this.FIN;
        let Q=F;
        if(Q.ligaIzq!=null){
            F=Q.ligaIzq;
            F.ligaDer=null;
        }else{
            F=null;
            P=null;
        }
        this.INICIO=P;
        this.FIN=F;
        this.LISTA_CANVAS.elimina_ultimo(this.INICIO);
    }////////////////////////////////
    elimina_x(x){
        let P=this.INICIO;
        let F=this.FIN;
        let Q=P;
        let T=null, R=null; 
        while (Q.ligaDer!=null && Q.info!=x){
            Q=Q.ligaDer;
        }
        if(Q.info==x){
            if(Q==P && Q==F){
                P=null;
                F=null;
            }else{
                if(Q==P){
                    P=Q.ligaDer;
                    P.ligaIzq=null;
                }else{
                    if(Q==F){
                        F=Q.ligaIzq;
                        F.ligaDer=null;
                    }else{
                        T=Q.ligaIzq;
                        R=Q.ligaDer;
                        T.ligaDer=R;
                        R.ligaIzq=T;
                    }
                }
            }
            this.INICIO=P;
            this.FIN=F;
            this.LISTA_CANVAS.elimina_X(this.INICIO);
        }else{
            throw new Error("El elemento con informacion X no se encuentra en la lista");
        }
    }////////////////////////////////
    elimina_antes_x(x){
        let P=this.INICIO;
        let Q=P;
        let T=null, R=null;
        while(Q.ligaDer!=null && Q.info!=null){
            Q=Q.ligaDer;
        }
        if(Q.info==x){
            if(P==Q){
                throw new Error("No existe un anterior al ultimo");
            }else{
                T=Q.ligaIzq;
                if(P==T){
                    P=Q;
                    Q.ligaIzq=null;
                }else{
                    R=T.ligaIzq;
                    Q.ligaIzq=R;
                    R.ligaDer=Q;
                }
                this.INICIO=P;
                this.LISTA_CANVAS.elimina_antes_X(this.INICIO);
            }
            
        }else{
            throw new Error("El elemento con informacion X no se encuentra en la lista");
        }
    }///////////////////////////////
    elimina_despues_x(x){
        let P=this.INICIO;
        let F=this.FIN;
        let Q=P;
        let T=null, R=null;
        while(Q.ligaDer!=null && Q.info!=x){
            Q=Q.ligaDer;
        }
        if(Q.info==x){
            if(F==Q){
                throw new Error("No existe un posterior al primero");
            }else{
                T=Q.ligaDer;
                if(F==T){
                    F=T;
                    Q.ligaDer=null;
                }else{
                    R=T.ligaDer;
                    Q.ligaDer=R;
                    R.ligaIzq=Q;
                }
                this.INICIO=P;
                this.FIN=F;
                this.LISTA_CANVAS.elimina_despues_X(this.INICIO);
            }
        }else{
            throw new Error("El elemento con informacion X no se encuentra en la lista");
        }
    }
    dibujarNodosLogDer() {

        var P = this.INICIO;
        var cad = "";
        while (P != null) {
            cad += P.info + "::";
            P = P.ligaDer;
        }
        console.log(cad);

    }/////////////////////////////////////////////
    dibujarNodosLogIzq() {

        var P = this.FIN;
        var cad = "";
        while (P != null) {
            cad += P.info + "::";
            P = P.ligaIzq;
        }

        console.log(cad);
    }/////////////////////////////////////////////
}