import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimesService } from '../times.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css'],
  providers: [TimesService]
})
export class TimeComponent implements OnInit, OnDestroy {
  nowTime = 10;
  unnowTime: Subscription;
  constructor(private times: TimesService, private router: Router) { }

  ngOnInit() {
    const observer = {
      next: el => {
        console.log(el);
        this.nowTime = el;
        if (this.nowTime == 0) {
          this.router.navigate(['/login']);
        };
      },
      error: () => {
        console.log('error');
      },
      complete: () => {
        console.log('complete');
      }
    }
    this.unnowTime = this.times.nowTime$.subscribe(observer)
  }
  ngOnDestroy() {
    this.unnowTime.unsubscribe();
  }
}
