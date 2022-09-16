import { Component, OnInit } from '@angular/core';
import { dataService } from 'src/app/service/data';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private Charactersdata: dataService) { }
  public Characters: any
  ngOnInit(): void {
    this.GetCharacters()
  }

  GetCharacters() {
    this.Charactersdata.Characters().subscribe(
      data => {
        this.Characters = data
      })
  }
}
