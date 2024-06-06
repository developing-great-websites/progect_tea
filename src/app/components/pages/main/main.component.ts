import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

declare var $: any;

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  readonly popup: HTMLElement | null;
  private observable: Observable<string>

  constructor() {
    this.popup = document.getElementById('popup');

    this.observable = new Observable((observer) => {
      setTimeout(() => {
        observer.next('open');
      }, 10000);
    })
  }

  ngOnInit(): void {
    $("#accordion").accordion({
      active: false, collapsible: true
    });

    $('#action').click(function () {
      $("#action::after").css  ({
        transform: 'rotate(180deg)'
      });
    });

    this.observable.subscribe((param) => {
      console.log(param);
      this.popup?.classList.remove('d-none');
      this.popup?.classList.add('d-block');
    })
  }


}
