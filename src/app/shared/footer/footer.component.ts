import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() companyName: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToTop() {
    window.scroll(0, 0)
  }

}
