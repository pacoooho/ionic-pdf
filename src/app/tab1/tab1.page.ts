import { Component } from '@angular/core';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(  private pdfGenerator: PDFGenerator,) {}

  onClick(){
    
    let options = {
      documentSize: 'A4',
      type: 'share',
      fileName: 'myFile.pdf'
      
    }
    let div2 = document.getElementById("printable-area").innerHTML;

    let style = ` <style>
.printable-content {
  margin: 16px;
  overflow-x: scroll;
  overflow-y: scroll;
  background-color: #ffffff;
}
.printable-area {
  width: 595px;
  height: 100%;
}
.header-table {
  background-color: #18AC52;
  margin: 2%;
  width: 96%;
  color: #ffffff;
}
.header-table th, .header-table td {
  text-align: left;
  padding: 5px;
}
.header-table .title {
  padding: 5px 20px;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
}
h1, h3 {
  margin-left: 10px;
}
h3 {
  margin-top: 20px;
}
.subheader-table {
  margin: 2%;
  width: 96%;
}
.subheader-table td {
  vertical-align: top;
}
.subheader-table td dt {
  font-size: 11px;
  color: #999;
  margin-bottom: 5px;
}
 subheader-table td dd {
  margin: 0;
}
.subheader-table td:last-child {
  text-align: right;
 }
.subheader-table td:last-child dd {
  font-size: 28px;
  font-weight: bold;
  }     
.detail-table {
  margin: 2%;
  width: 96%;
  border-top: 2px solid #CCC;
  border-bottom: 2px solid #CCC;
}
.detail-table th,.detail-table td {
    padding: 5px;
}
.detail-table th {
  border-bottom: 2px solid #CCC;
} 
.detail-table td  { 
  text-align: right;
}
.detail-table td:first-child {
  text-align: left;
}
.footer-table {
  margin: 2%;
  width: 96%;
}
.footer-table td {
  padding: 5px;
  text-align: right;
  font-weight: bold;
}
        
    </style>`


    this.pdfGenerator.fromData( style+ div2 ,options)
    .then((b)=>{
      
         })
      .catch((err)=>console.log(err))

 
  }  
 
}
