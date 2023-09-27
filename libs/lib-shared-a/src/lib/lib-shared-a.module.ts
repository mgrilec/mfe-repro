import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
})
export class LibSharedAModule {

  static rnd = Math.random()

  constructor() {
    console.log('importing module ', LibSharedAModule.name, LibSharedAModule.rnd)
  }
}
