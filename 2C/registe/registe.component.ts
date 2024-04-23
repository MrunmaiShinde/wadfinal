import { Component } from '@angular/core';
import { getMatFormFieldDuplicatedHintError } from '@angular/material/form-field';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registe',
  templateUrl: './registe.component.html',
  styleUrl: './registe.component.css'
})
export class RegisteComponent {
  constructor(){

  }
  ngOnInit():void{

  }

  user_records: any[]=[];
  data={
    name:"",
    email:"",
    mobile:"",
    address:"",
    password:""
  }
  doRegistration(values:any){
    this.user_records=JSON.parse(localStorage.getItem('users')||'{}');
    if(this.user_records.some((v)=>{
      return v.email==this.data.email
    })){
      alert("Duplicate Data");
    }
    else{
      this.user_records.push(this.data)
      localStorage.setItem("users",JSON.stringify(this.user_records));
      alert('HI '+this.data.name+ "You are successfully registered");
    }
  }

}
