import { Component, OnInit, inject } from '@angular/core';
import { LibSharedAService } from '@mfe-repro/lib-shared-a'

@Component({
  selector: 'mfe-repro-remote-a-entry',
  template: `<mfe-repro-nx-welcome></mfe-repro-nx-welcome>`,
})
export class RemoteEntryComponent implements OnInit {

  libSharedAService = inject(LibSharedAService)

  ngOnInit(): void {
    this.libSharedAService.hello('remote-a')
  }
}
