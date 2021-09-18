import { Component, OnInit } from '@angular/core';
import { FtnapiService } from 'src/app/service/ftnapi.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private api:FtnapiService) { }
//Display Headline Data
topHeadlineData:any=[];
  ngOnInit(): void {
    this.api.ftnheadlines().subscribe((result)=>{
      console.log(result.articles);
      this.topHeadlineData=(result.articles);
    })

  }

}
