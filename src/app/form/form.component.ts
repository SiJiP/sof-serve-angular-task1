import { Component, OnInit } from "@angular/core";
import { NgForm, FormControl } from "@angular/forms";
import { Container } from "@angular/compiler/src/i18n/i18n_ast";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})

export class FormComponent implements OnInit {
  name: FormControl = new FormControl("");
  surname: FormControl = new FormControl("");
  email: FormControl = new FormControl("");
  users = [];

  constructor() {}

  onClick(): void {
    let obj = {
      name: this.name.value,
      surname: this.surname.value,
      email: this.email.value
    };
    if (this.name.value != "" && this.surname.value != "") this.users.push(obj);
  }

  onDelete($event) {
    let index = [...$event.target.parentElement.children].indexOf($event.target);
    this.users.splice(index, 1);
  }
  
  ngOnInit() {}
}
