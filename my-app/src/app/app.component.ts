import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<header> 
               Ejemplo curso 
              </header> 
              <section>
                <courses></courses>
              </section>`
})
export class AppComponent {
  title = 'app';
}
