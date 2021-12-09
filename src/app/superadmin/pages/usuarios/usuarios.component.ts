import { Component, OnInit } from '@angular/core';
import { Usuarios, } from '../../interfaces/usuarios.interface';
import { DataserviceService } from '../../services/dataservice.service';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios:any = []
  constructor(public dta:DataserviceService) {
   
   }

  ngOnInit(): void {
    this.dta.getdatos().subscribe(cusuarios=>{
      console.log(cusuarios);
      this.usuarios = cusuarios
    })
  }
  selectProduct(usuario: Usuarios) {
    console.log(usuario.id)
  }
  exportExcel(){
    import("xlsx").then(xlsx => {
    const worksheet = xlsx.utils.json_to_sheet(this.usuarios);
    const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, "Usuarios");
  });}

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
    type: EXCEL_TYPE
  });
  FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
}


}
