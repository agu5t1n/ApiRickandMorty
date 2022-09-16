import { Component, OnInit } from '@angular/core';
import { dataService } from 'src/app/service/data';
@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {
  constructor(private Episodes: dataService) { }
  public listEpisodes: any
  ngOnInit(): void {
    this.GetEpisodes()
  }
  GetEpisodes() {
    this.Episodes.Episodes().subscribe(
      data => {
        this.listEpisodes = data
      })
  }
}
