import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})

export class CapitalizadoPipe implements PipeTransform {
  transform(value: string, todas: boolean = true  ): string {
    // transform(value: string, ...args: any[]  ): string {
    // transform(value: string, args: any[] ): string {
    // transform(value: string, arg1, arg2, arg3 ): string {
    //En la última versión de angular, los ARGS ya no vienen x defecto en un arreglo

    //console.log(value);
    //console.log(args);
    //console.log(arg1);
    //console.log(arg2);
    //console.log(arg3);

    value = value.toLowerCase();
    let nombres = value.split(" ");

    if(todas){
      for (let i in nombres){
        nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
      }
    } else{
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }


    return nombres.join(" ");

    //return "Hola Mundo!";
  }
}
