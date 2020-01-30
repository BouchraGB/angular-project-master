import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-data-video',
  templateUrl: './data-video.component.html',
  styleUrls: ['./data-video.component.css']
})
export class DataVideoComponent implements OnInit {

  videoList=[
  {
    "liste":[
      {
        "kind": "youtube#video",
        "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/P9DnbBAewaXqwUCcbTBr3qkE66c\"",
        "id": "l0U7SxXHkPY", 
        "step":1,
       },
       {
        "kind": "youtube#video",
        "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/KBJRX-8xJVjroOgy8hPsLSjJweY\"",
        "id": "ia1iuXbEaYQ",
        "step":2,
       },
    ]
  },
  {
    "liste":[
      {
        "kind": "youtube#video",
        "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/rrOCvIzAJdu8O-2wkmv5eHOzO18\"",
        "id": "aIHF7u9Wwiw",
        "step":3,
       },
      {
        "kind": "youtube#video",
        "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/CYeT7kNflGtBLephj5Zdmr4OciQ\"",
        "id": "lr31Nq8B-Ho",
        "step":4,
       },
    ]
  },
  {
   "liste":[
    {
      "kind": "youtube#video",
      "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/xkspumnuzkgXulFvzpWSYOOSKmA\"",
      "id": "YP_YH6cgOA0",
      "step":5,
    }
   ]
  },
];
  constructor(private sanitizer:DomSanitizer ) { }

  getEmbedUrl(item){
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+item);
  }

  getStep(step){
    return step===3;
  }

  ngOnInit() {
  }

}
