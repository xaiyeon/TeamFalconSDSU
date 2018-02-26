import { Component, OnInit } from '@angular/core';

import { NgxGalleryAnimation } from 'ngx-gallery';
import { NgxGalleryImage } from 'ngx-gallery';
import { NgxGalleryOptions } from 'ngx-gallery';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }

  ngOnInit() {

      this.galleryOptions = [ {
      width: '500px',
      height: '500px',
      imagePercent: 100,
      thumbnailsColumns: 4,
      imageAnimation: NgxGalleryAnimation.Fade,
      preview: false

    } ];

    this.galleryImages = [
      {
          small: '../../../assets/images/meets/DSC_7419.jpg',
          medium: '../../../assets/images/meets/DSC_7419.jpg',
          big: '../../../assets/images/meets/DSC_7419.jpg'
      },
  ];


  }

}
