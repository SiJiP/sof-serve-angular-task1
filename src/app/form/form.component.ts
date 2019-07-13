import { Component, OnInit } from "@angular/core";
import { NgForm, FormControl } from "@angular/forms";

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

  ngOnInit() {}

  changes(): void {
    if (this.name.value != "" && this.surname.value != "") {
      this.users.push({
        name: this.name.value,
        surname: this.surname.value,
        email: this.email.value
      });
    }
  }
}
