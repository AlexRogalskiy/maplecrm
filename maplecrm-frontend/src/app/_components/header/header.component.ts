import { OnInit, Component, Input } from '@angular/core';
import { User } from '@app/_models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() public user: User;
  @Input() public title: string;

  ngOnInit() {

  }

}