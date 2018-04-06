import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgxImageGalleryComponent, GALLERY_IMAGE, GALLERY_CONF } from "ngx-image-gallery";

import { NgxGalleryAnimation } from 'ngx-gallery';
import { NgxGalleryImage } from 'ngx-gallery';
import { NgxGalleryOptions } from 'ngx-gallery';

import {
  AccessibilityConfig,
  Action,
  AdvancedLayout,
  ButtonEvent,
  ButtonsConfig,
  ButtonsStrategy,
  ButtonType,
  Description,
  DescriptionStrategy,
  DotsConfig,
  GridLayout,
  Image,
  ImageModalEvent,
  LineLayout,
  PlainGalleryConfig,
  PlainGalleryStrategy,
  PreviewConfig
} from 'angular-modal-gallery';

import { ModalGalleryModule } from 'angular-modal-gallery';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {

  plainGalleryGrid: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.GRID,
    layout: new GridLayout({ width: '250px', height: 'auto' }, { length: 4, wrap: true })
  };

// From past to present, then reversed below.

AGimages: Image[] = [
  new Image(0, {
      // modal
      img: '../../../assets/images/models/mid-proto/Pic1.PNG',
      description: 'First prototype.',
      extUrl: '../../../assets/images/models/mid-proto/Pic1.PNG'
    }, {
      // plain
      img: '../../../assets/images/models/mid-proto/Pic1.PNG'
    }
  ),
new Image(1, {
    // modal
    img: '../../../assets/images/models/early/design1_c2.png',
    description: 'Other design.',
    extUrl: '../../../assets/images/models/early/design1_c2.png'
  }, {
    // plain
    img: '../../../assets/images/models/early/design1_c2.png'
  }
  ),
new Image(2, {
  // modal, 1
  img: '../../../assets/images/models/early/design1_c3.png',
  description: 'Another design',
  extUrl: '../../../assets/images/models/early/design1_c3.png'
}, {
  // plain
  img: '../../../assets/images/models/early/design1_c3.png'
}
  ),
new Image(3, {
    // modal
    img: '../../../assets/images/models/prototypes/DSC_0044.jpg',
    description: '3D Prints',
    extUrl: '../../../assets/images/models/prototypes/DSC_0044.jpg'
  }, {
    // plain
    img: '../../../assets/images/models/prototypes/DSC_0044.jpg'
  }
  ),
  new Image(4, {
    // modal, 2,16
    img: '../../../assets/images/models/prototypes/DSC_0047.jpg',
    description: 'More 3D prints.',
    extUrl: '../../../assets/images/models/prototypes/DSC_0047.jpg',
  }, {
    // plain
    img: '../../../assets/images/models/prototypes/DSC_0047.jpg',
  }
  ),
  new Image(5, {
    // modal
    img: '../../../assets/images/models/mid-proto/Pic5.PNG',
    description: 'Design made in SolidWorks.',
    extUrl: '../../../assets/images/models/mid-proto/Pic5.PNG'
  }, {
    // plain
    img: '../../../assets/images/models/mid-proto/Pic5.PNG'
  }
  ),
  new Image(6, {
    // modal
    img: '../../../assets/images/models/mid-proto/Pic7.PNG',
    description: 'Design made in SolidWorks.',
    extUrl: '../../../assets/images/models/mid-proto/Pic7.PNG'
  }, {
    // plain
    img: '../../../assets/images/models/mid-proto/Pic7.PNG'
  }
  ),
  new Image(7, {
    // modal
    img: '../../../assets/images/models/mid-proto/Pic8.PNG',
    description: 'Design made in SolidWorks.',
    extUrl: '../../../assets/images/models/mid-proto/Pic8.PNG'
  }, {
    // plain
    img: '../../../assets/images/models/mid-proto/Pic8.PNG'
  }
  ),
  new Image(8, {
    // modal
    img: '../../../assets/images/models/mid-proto/Pic9.PNG',
    description: 'Design made in SolidWorks.',
    extUrl: '../../../assets/images/models/mid-proto/Pic9.PNG'
  }, {
    // plain
    img: '../../../assets/images/models/mid-proto/Pic9.PNG'
  }
  ),
  new Image(9, {
    // modal, 2,16
    img: '../../../assets/images/models/prototypes/DSC_0046.jpg',
    description: 'More 3D prints.',
    extUrl: '../../../assets/images/models/prototypes/DSC_0046.jpg',
  }, {
    // plain
    img: '../../../assets/images/models/prototypes/DSC_0046.jpg',
  }
  ),
  new Image(10, {
    // modal, 3,5
    img: '../../../assets/images/models/prototypes/DSC_0047.jpg',
    description: '3D prints based on our last design.',
    extUrl: '../../../assets/images/models/prototypes/DSC_0047.jpg'
  }, {
    // plain
    img: '../../../assets/images/models/prototypes/DSC_0047.jpg'
  }
  ),
  new Image(10, {
    // modal, 3,5
    img: '../../../assets/images/models/actual/DSC_0074.jpg',
    description: 'Our actual sumo robot prototype that works.',
    extUrl: '../../../assets/images/actual/DSC_0074.jpg'
  }, {
    // plain
    img: '../../../assets/images/models/actual/DSC_0074.jpg'
  }
  ),
];


ReversedImage = this.AGimages.reverse();

  constructor() { }

  ngOnInit() {
  }

}
