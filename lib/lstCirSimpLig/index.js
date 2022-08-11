import { ListaCircularSimplementeLigada } from "./lista.js";
import { ListaCircularSimplementeLigadaCanvas } from "./listaCanvas.js";
import { bootbox_prompt, bootbox_alert } from "../utils/dialog.js";

let lista=null;
let listaCanvas=null;
export async function insertar_al_inicio(){
    var canvas=document.getElementById("tutorial2");
    if(lista == null){
        listaCanvas=new ListaCircularSimplementeLigadaCanvas(canvas);
        lista=new ListaCircularSimplementeLigada(listaCanvas);
    }

    let DATO= await bootbox_prompt("ingrese valor del DATO");
    if (DATO == null || DATO.trim() == ""){return;}
    try{
        DATO=DATO.trim();
        if(lista.buscar(DATO) == true) {
            throw new Error("El nodo ya ha sido ingresado");
        }
        lista.inserta_inicio(DATO);
        lista.dibujarNodosLog();
    }catch(e){
        await bootbox_alert(e.message);
    }
}///////////////////////////////
export async function insertar_al_final(){
    var canvas = document.getElementById("tutorial2");
    if(lista == null){
        lista=new ListaCircularSimplementeLigada(canvas);
    }
    let DATO= await bootbox_prompt("ingrese valor del DATO");
    if (DATO==null) return;
    try {
        if(lista.buscar(DATO) == true){
            throw new Error("El nodo ya ha sido ingresado");
        }
        lista.inserta_final(DATO);
        lista.dibujarNodosLog();
    } catch (e) {
        await bootbox_alert(e.message);
    }
}///////////////////////////////
export async function insertar_antes_x() {
    var canvas = document.getElementById("tutorial2");
    if (lista == null) listaSimplementeLigada(canvas);
    try {
        if(lista.isVacio() == true) throw new Error("La lista esta vacia");
        let DATO= await bootbox_prompt("ingrese valor del DATO");
        if(DATO == null) return;
        if(lista.buscar(DATO) == true) throw new Error("El nodo ya ha sido ingresado");
        let X= await bootbox_prompt("Ingrese el valor de X");
        if (X == null) return;

        lista.inserta_antes_X();
        lista.dibujarNodosLog();
    } catch (e) {
        await bootbox_alert(e.message);
    }
}///////////////////////////////
export async function insertar_despues_x() {
    var canvas = document.getElementById("tutorial2");
    if (lista == null) lista = new ListaSimplementeLigada(canvas);
    try {
        if (lista.isVacio() == true) throw new Error("La lista esta vacia");
        let DATO = await bootbox_prompt("Ingrese valor de Dato");
        if (DATO == null) return;
        if (lista.buscar(DATO) == true) throw new Error("El nodo ya se ingreso");
        let X = await bootbox_prompt("ingrese el valor de X");
        if (X == null) return;
        lista.inserta_despues_X(DATO, X);
        lista.dibujarNodosLog();
    } catch (f) {
        await bootbox_alert(f.message);
    }
}///////////////////////////////
export async function eliminar_inicio() {
    var canvas = document.getElementById("tutorial2");
    if (lista == null) lista = new ListaSimplementeLigada(canvas);
    try {
        if (lista.isVacio() == true) throw new Error("La lista esta vacia");
        lista.elimina_inicio();
        lista.dibujarNodosLog();
        lista.dibujarNodos();

        await bootbox_alert("Nodo eliminado exitosamente");
    } catch (e) {
        await bootbox_alert(e.message);
    }
}///////////////////////////////
export async function eliminar_ultimo(){
    var canvas = document.getElementById("tutorial2");
    if (lista == null) lista = new ListaSimplementeLigada(canvas);
    try {
        if (lista.isVacio() == true) throw new Error("La lista esta vacia");
        lista.elimina_ultimo();
        lista.dibujarNodosLog();
        lista.dibujarNodos();
        await bootbox_alert("Nodo eliminados exitosamente");
    } catch (e) {
        await bootbox_alert(e.message);
    }
}///////////////////////////////
export async function eliminar_x(){
    let canvas = document.getElementById("tutorial2");
    if (lista == null) lista = new ListaSimplementeLigada(canvas);
    try {
        if (lista.isVacio() == true) throw new Error("La lista esta vacia");
        var X = await bootbox_prompt("Ingrese el valor de X");
        if (X == null) return;
        lista.elimina_X(X);
        lista.dibujarNodosLog();
        lista.dibujarNodos();
    } catch (e) {
        await bootbox_alert(e.message);
    }
}///////////////////////////////
export async function eliminar_antes_x() {
    var canvas = document.getElementById("tutorial2");
    if (lista == null) lista = new ListaSimplementeLigada(canvas);
    try {
        if (lista.isVacio() == true) throw new Error("La lista esta vacia");
        let X = await bootbox_prompt("Ingrese el valor de X");
        if (X == null) return;
        lista.elimina_antes_X(X);
        lista.dibujarNodosLog();
        lista.dibujarNodos();
    } catch (e) {
        await bootbox_alert(e.message);
    }
}///////////////////////////////
export async function eliminar_despues_x(){
    var canvas = document.getElementById("tutorial2");
    if (lista == null) lista = new ListaSimplementeLigada(canvas);
    try {
        if (lista.isVacio() == true) throw new Error("La lista esta vacio ");
        let X = await bootbox_prompt("Ingrese el valor de X");
        if (X == null) return;
        lista.elimina_despues_X(X);
        lista.dibujarNodosLog();
        lista.dibujarNodos();
    } catch (e) {
        await bootbox_alert(e.message);
    }
}