import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {SomeModel} from './some-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('someForm')
  form: NgForm;

  /***/
  someModel: SomeModel;

  /***/
  constructor(public changeDetectorRef: ChangeDetectorRef) {
  }

  /***/
  ngOnInit() {
    this.someModel = {dt: new Date(), num: 123, str: 'str'};
  }

  /***/
  onSubmit() {
    const { form: { value: formValueSnap } } = this;
    console.log(this.someModel);
    // this.form.reset();
    this.form.reset(formValueSnap);
    // this.someModel = {dt: new Date(), num: 123, str: 'str'};
  }

  /***/
  setDt(dt) {
    this.someModel.dt = new Date(dt);
  }
}
