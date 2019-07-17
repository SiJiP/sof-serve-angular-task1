import { Component, OnInit } from "@angular/core";
import { NgForm, FormControl } from "@angular/forms";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})

export class FormComponent implements OnInit {
  todo: FormControl = new FormControl("");
  list = [];

  constructor() {}

  onClick(): void {
    let obj = {
      todo: this.todo.value,
    };
    if (this.todo.value != "") this.list.push(obj);
  }

  onDelete($event) {
    let index = [...$event.target.parentElement.parentElement.children].indexOf($event.target.parentElement);
    this.list.splice(index, 1);
  }
  onCheck($event){
    $event.target.style.textDecoration = "line-through"
  }
  
  ngOnInit() {}
}
