import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LibSharedAService {
  public hello(from: string) {
    console.log(`hello from ${from}`)
  }
}