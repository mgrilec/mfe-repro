import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path: 'remote-a',
    loadChildren: () => import('remote-a/Module').then(m => m.RemoteEntryModule)
  }
];
