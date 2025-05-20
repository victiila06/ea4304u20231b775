import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatToolbar, MatToolbarRow} from '@angular/material/toolbar';
import {MatAnchor} from '@angular/material/button';
import {LanguageSwitcherComponent} from './public/components/language-switcher/language-switcher.component';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  imports: [
    MatToolbar,
    MatToolbarRow,
    MatAnchor,
    RouterLink,
    LanguageSwitcherComponent,
    RouterOutlet,
    RouterLinkActive,
    TranslatePipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'lunes-open';

  options = [
    {link: '/home', label: 'Home'},
    {link: '/loyalty/ratings/new', label: 'Ratings'},
  ]

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
