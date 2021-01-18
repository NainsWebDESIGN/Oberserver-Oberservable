import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TimesService {
    nowTime$: Observable<any>;
    constructor() {
        this.nowTime$ = Observable.create(el => {
            for (let i = 0; i < 100; i++) {
                setTimeout(() => {
                    el.next(10 - i);
                    if (i == 10) {
                        el.complete();
                    }
                }, i * 1000);
            }
        })
    }

}
