
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { dataService } from 'src/app/service/data';

@Component({
  selector: 'app-detail-character',
  templateUrl: './detail-character.component.html',
  styleUrls: ['./detail-character.component.css']
})
export class DetailCharacterComponent implements OnInit {
  public detail: any
  public id: any

  constructor(private Detail: dataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.GetId()
  }

  GetId() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
    this.Character(this.id)
  }
  Character(id: any) {
    this.Detail.CharacterId(id).subscribe(
      data => {
        this.detail = data
      })
  }
}
