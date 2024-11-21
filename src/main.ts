import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
/*import { environment } from './environments/environment';*/


// Check if the app is in production
const isProduction = false; // Set to true for production builds

// Enable production mode if needed
if (isProduction) {
  enableProdMode();
}

// Bootstrap the AppModule
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));


