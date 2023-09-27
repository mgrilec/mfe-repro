import { Component, OnInit, inject } from '@angular/core';
import { LibSharedAService } from '@mfe-repro/lib-shared-a';

@Component({
  selector: 'mfe-repro-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'host';

  libSharedService = inject(LibSharedAService)

  ngOnInit() {
    this.libSharedService.hello('host')
  }
}
