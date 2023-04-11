import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-prac15',
  templateUrl: './prac15.component.html',
  styleUrls: ['./prac15.component.css']
})
export class Prac15Component {
  numberObservable = new Observable<number>((observer) => {
    let count = 0;
    const intervalId = setInterval(() => {
      observer.next(count++);
    }, 1000);
  
    return () => {
      clearInterval(intervalId);
      observer.complete();
    };
  });
    ngOnInit():void{

    this.numberObservable.subscribe({
      next: (num) => {
        if (num % 2 === 0) {
          console.log(num);
        }
      },
      complete: () => {
        console.log('Stream completed');
      },
      error: (err) => {
        console.error('Error:', err);
      },
    });
  }

}

