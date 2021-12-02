import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  inputs!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
  }
  ngOnInit(): void {
    this.inputs = this.formBuilder.group({
      description: new FormControl(false),
      title: new FormControl(false),
      ratio: new FormControl("30-9"),
      buttons: new FormControl(false),
    })
  }
}
