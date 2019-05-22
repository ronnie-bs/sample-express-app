import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
    title = 'Nothing Yet';

    constructor(
        private http: HttpClient,
    ) { }

    ngOnInit() {
        // this.http.get('http://localhost:3000', {
        //     headers: {
        //         // 'Content-Type': 'application/json'
        //     }
        // }).subscribe((res: any) => {
        //     console.log('res', res);
        //     this.title = res.value;
        // });

        this.http.post('http://localhost:3000', {}, {
            headers: {
                // 'Content-Type': 'application/json'
            }
        }).subscribe((res: any) => {
            console.log('res', res);
            this.title = res.value;
        });
    }
}
