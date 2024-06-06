import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from 'rxjs';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  saveOrderForm = new FormGroup({
    product: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.pattern(/^([A-Za-z])|([А-Яа-я])$/)]),
    lastName: new FormControl('', [Validators.required, Validators.pattern(/^([A-Za-z])|([А-Яа-я])$/)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/(^[+]?\d{11})$/)]),
    country: new FormControl(''),
    zip: new FormControl(''),
    address: new FormControl('', [Validators.required, Validators.pattern(/^[а-яА-Яa-zA-Z0-9\s-\/]+$/)]),
    comment: new FormControl('')
  });

  get name() {
    return this.saveOrderForm.get('name');
  }

  get lastName() {
    return this.saveOrderForm.get('lastName');
  }

  get phone() {
    return this.saveOrderForm.get('phone');
  }

  get address() {
    return this.saveOrderForm.get('address');
  }

  private subscription: Subscription | null = null;
  private disable: boolean

  constructor(private activatedRoute: ActivatedRoute) {
    this.disable = false;
  }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.queryParams.subscribe((params) => {
      if (params['title']) {
        console.log(params);
        this.saveOrderForm.patchValue({
          product: 'title',
        });
        this.disable = true;
      }
    });
  }


  saveOrder() {
    console.log(this.saveOrderForm.value);
  }
}
