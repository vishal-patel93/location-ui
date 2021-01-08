import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'location-ui';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://localhost:8090/locations').subscribe(data => {
      console.log(data);
    });
    console.log('component initialised');
  }
}
