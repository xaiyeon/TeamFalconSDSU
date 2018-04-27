import { Component, OnInit, ViewChild, AfterViewInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgxImageGalleryComponent, GALLERY_IMAGE, GALLERY_CONF } from 'ngx-image-gallery';

import { NgxGalleryAnimation } from 'ngx-gallery';
import { NgxGalleryImage } from 'ngx-gallery';
import { NgxGalleryOptions } from 'ngx-gallery';
import { ngxFalconImage } from '../../_models/ngx_falcon_image';

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

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { workVideo } from '../../_models/workvideo';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit, AfterViewInit {
  modalRef: BsModalRef;

  VideoArray: workVideo[];

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  // get reference to gallery component
  @ViewChild(NgxImageGalleryComponent) ngxImageGallery: NgxImageGalleryComponent;

  // Our images
  //imageURLs: ngxFalconImage[];

  // second images gallery
  plainGalleryColumn: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.COLUMN,
    layout: new LineLayout({ width: '400px', height: 'auto' }, { length: Infinity, wrap: true }, 'flex-start')
  };

  // plainGalleryGrid: PlainGalleryConfig = {
  //   strategy: PlainGalleryStrategy.GRID,
  //   layout: new GridLayout({ width: '200px', height: 'auto' }, { length: 3, wrap: true })
  // };

// For pagination
  currentPage = 1;
  page: number;
  itemsPerPage: number;
  desiredItemPerPage = 10;
  // for bottom
  bottomNumPages: number = 0;

// From past to present, then reversed below.

  PaginationImages: Image[];
  AGimages: Image[];
  ReversedImage: any;

  constructor(private modalService: BsModalService) {
    
    this.VideoArray = [
      new workVideo('Early Prototype Test', '../../../assets/videos/MOV_0015_h264.mp4', 'Testing out the baby...')
    ];

    this.AGimages = [
      new Image(0, {
          // modal
          img: '../../../assets/images/meets/DSC_7419.jpg',
          description: 'Our first meeting to planning victory. - Jan. 26, 2018',
          extUrl: '../../../assets/images/meets/DSC_7419.jpg'
        }, {
          // plain
          img: '../../../assets/images/meets/DSC_7419.jpg'
        }
      ),
    new Image(1, {
        // modal
        img: '../../../assets/images/meets/DSC_7421.jpg',
        description: 'Our first meeting with everyone. - Jan. 26, 2018',
        extUrl: '../../../assets/images/meets/DSC_7421.jpg'
      }, {
        // plain
        img: '../../../assets/images/meets/DSC_7421.jpg'
      }
      ),
    new Image(2, {
      // modal, 1
      img: '../../../assets/images/meets/DSC_7460.jpg',
      description: 'The meeting where we brainstorm our design and philosophy. - Feb. 2, 2018',
      extUrl: '../../../assets/images/meets/DSC_7460.jpg'
    }, {
      // plain
      img: '../../../assets/images/meets/DSC_7460.jpg'
    }
      ),
    new Image(3, {
        // modal
        img: '../../../assets/images/meets/DSC_7465.jpg',
        description: 'The meeting of finalizing some designs. - Feb. 9, 2018',
        extUrl: '../../../assets/images/meets/DSC_7465.jpg'
      }, {
        // plain
        img: '../../../assets/images/meets/DSC_7465.jpg'
      }
      ),
      new Image(4, {
        // modal, 2,16
        img: '../../../assets/images/meets/DSC_7484.jpg',
        description: 'Our designers are happy. - Feb. 16, 2018',
        extUrl: '../../../assets/images/meets/DSC_7484.jpg'
      }, {
        // plain
        img: '../../../assets/images/meets/DSC_7484.jpg'
      }
      ),
      new Image(5, {
        // modal, 2,23
        img: '../../../assets/images/meets/DSC_7488.jpg',
        description: 'A meeting for finalizing our part orders and more. - Feb. 23, 2018',
        extUrl: '../../../assets/images/meets/DSC_7488.jpg'
      }, {
        // plain
        img: '../../../assets/images/meets/DSC_7488.jpg'
      }
      ),
      new Image(6, {
        // modal, 3,2
        img: '../../../assets/images/meets/DSC_0007.jpg',
        description: 'We have a meeting in the lab and putting things together! - Mar. 2, 2018',
        extUrl: '../../../assets/images/meets/DSC_0007.jpg'
      }, {
        // plain
        img: '../../../assets/images/meets/DSC_0007.jpg'
      }
      ),
      new Image(7, {
        // modal, 3,2
        img: '../../../assets/images/meets/DSC_0009.jpg',
        description: 'Our designer and PCB layout designer posing with The Falcon! - Mar. 2, 2018',
        extUrl: '../../../assets/images/meets/DSC_0009.jpg'
      }, {
        // plain
        img: '../../../assets/images/meets/DSC_0009.jpg'
      }
      ),
      new Image(8, {
        // modal, 3,2
        img: '../../../assets/images/meets/DSC_0011.jpg',
        description: 'Additional testing with variety of sensors. - Mar. 2, 2018',
        extUrl: '../../../assets/images/meets/DSC_0011.jpg'
      }, {
        // plain
        img: '../../../assets/images/meets/DSC_0011.jpg'
      }
      ),
      new Image(9, {
        // modal, 3,5
        img: '../../../assets/images/meets/DSC_0018.jpg',
        description: 'Team Falcon gets ready to deliver a killer presentation. - Mar. 5, 2018',
        extUrl: '../../../assets/images/meets/DSC_0018.jpg'
      }, {
        // plain
        img: '../../../assets/images/meets/DSC_0018.jpg'
      }
      ),
      new Image(10, {
        // modal, 3,5
        img: '../../../assets/images/meets/DSC_0020.jpg',
        description: 'Our programmer having a chill time writing code and testing. - Mar. 5, 2018',
        extUrl: '../../../assets/images/meets/DSC_0020.jpg'
      }, {
        // plain
        img: '../../../assets/images/meets/DSC_0020.jpg'
      }
      ),
      new Image(11, {
        // modal, 3,9
        img: '../../../assets/images/meets/DSC_0021.jpg',
        description: 'A meeting discussing design #2. - Mar. 9, 2018',
        extUrl: '../../../assets/images/meets/DSC_0021.jpg'
      }, {
        // plain
        img: '../../../assets/images/meets/DSC_0021.jpg'
      }
      ),
      new Image(12, {
        // modal, 3,9
        img: '../../../assets/images/meets/DSC_0025.jpg',
        description: 'Another meeting in the lab working on design #2! - Mar. 9, 2018',
        extUrl: '../../../assets/images/meets/DSC_0025.jpg'
      }, {
        // plain
        img: '../../../assets/images/meets/DSC_0025.jpg'
      }
      ),
      new Image(13, {
        // modal, 3,9
        img: '../../../assets/images/meets/DSC_0073.jpg',
        description: 'We are debugging top PCB and doing work. - Mar. 19, 2018',
        extUrl: '../../../assets/images/meets/DSC_0073.jpg'
      }, {
        // plain
        img: '../../../assets/images/meets/DSC_0073.jpg'
      }
      ),
      new Image(14, {
        // modal, 3,9
        img: '../../../assets/images/meets/DSC_0111.jpg',
        description: 'We have a meeting discussing the next design and fixes. - Mar. 23, 2018',
        extUrl: '../../../assets/images/meets/DSC_0111.jpg'
      }, {
        // plain
        img: '../../../assets/images/meets/DSC_0111.jpg'
      }
      ),
      new Image(15, {
        // modal, 3,9
        img: '../../../assets/images/meets/DSC_0116.jpg',
        description: 'Reviewing and fixing the top PCB. - Mar. 23, 2018',
        extUrl: '../../../assets/images/meets/DSC_0116.jpg'
      }, {
        // plain
        img: '../../../assets/images/meets/DSC_0116.jpg'
      }
      ),
      new Image(16, {
        // modal, 3,9
        img: '../../../assets/images/meets/DSC_0117.jpg',
        description: 'Team manager finding new values for our sharp sensor\'\s new design. - Mar. 23, 2018',
        extUrl: '../../../assets/images/meets/DSC_0117.jpg'
      }, {
        // plain
        img: '../../../assets/images/meets/DSC_0117.jpg'
      }
      ),
      new Image(17, {
        // modal, 3,9
        img: '../../../assets/images/meets/DSC_0133.jpg',
        description: 'Peace out bro. - Mar. 29, 2018',
        extUrl: '../../../assets/images/meets/DSC_0133.jpg'
      }, {
        // plain
        img: '../../../assets/images/meets/DSC_0133.jpg'
      }
      ),
      new Image(18, {
        // modal, 3,9
        img: '../../../assets/images/meets/DSC_0185.jpg',
        description: 'Royce took it home for further stress tests. - Apr. 1, 2018',
        extUrl: '../../../assets/images/meets/DSC_0185.jpg'
      }, {
        // plain
        img: '../../../assets/images/meets/DSC_0185.jpg'
      }
      ),
      new Image(19, {
        // modal, 3,9
        img: '../../../assets/images/meets/DSC_0190.jpg',
        description: 'We got a nice room for our hot meetings. - Apr. 2, 2018',
        extUrl: '../../../assets/images/meets/DSC_0190.jpg'
      }, {
        // plain
        img: '../../../assets/images/meets/DSC_0190.jpg'
      }
      ),
      new Image(20, {
        // modal, 3,9
        img: '../../../assets/images/meets/DSC_0196.jpg',
        description: 'We finally logged into the meeting room monitor and discuss domination. - Apr. 2, 2018',
        extUrl: '../../../assets/images/meets/DSC_0196.jpg'
      }, {
        // plain
        img: '../../../assets/images/meets/DSC_0196.jpg'
      }
      ),
      new Image(21, {
        // modal, 3,9
        img: '../../../assets/images/meets/DSC_0197.jpg',
        description: 'Mohammad helping out with mechanics and soldering. - Apr. 2, 2018',
        extUrl: '../../../assets/images/meets/DSC_0197.jpg'
      }, {
        // plain
        img: '../../../assets/images/meets/DSC_0197.jpg'
      }
      ),
      new Image(22, {
        // modal, 3,9
        img: '../../../assets/images/meets/DSC_0204.jpg',
        description: 'A working concept with the new design. - Apr. 3, 2018',
        extUrl: '../../../assets/images/meets/DSC_0204.jpg'
      }, {
        // plain
        img: '../../../assets/images/meets/DSC_0204.jpg'
      }
      ),
      new Image(23, {
        // modal, 3,9
        img: '../../../assets/images/meets/DSC_0215.jpg',
        description: 'Someone forgot to eat lunch. - Apr. 6, 2018',
        extUrl: '../../../assets/images/meets/DSC_0215.jpg'
      }, {
        // plain
        img: '../../../assets/images/meets/DSC_0215.jpg'
      }
      ),
      // new things
      new Image(24, {
        // modal, 3,9
        img: '../../../assets/images/work/img/DSC_0240.jpg',
        description: 'Three musketeers. - Apr. 11, 2018',
        extUrl: '../../../assets/images/work/img/DSC_0240.jpg'
      }, {
        // plain
        img: '../../../assets/images/work/img/DSC_0240.jpg'
      }
      ),
      new Image(25, {
        // modal, 3,9
        img: '../../../assets/images/work/img/DSC_0245.jpg',
        description: 'Using flux all day. - Apr. 12, 2018',
        extUrl: '../../../assets/images/work/img/DSC_0245.jpg'
      }, {
        // plain
        img: '../../../assets/images/work/img/DSC_0245.jpg'
      }
      ),
      new Image(26, {
        // modal, 3,9
        img: '../../../assets/images/work/img/DSC_0248.jpg',
        description: 'Photo inception. - Apr. 12, 2018',
        extUrl: '../../../assets/images/img/work/DSC_0248.jpg'
      }, {
        // plain
        img: '../../../assets/images/work/img/DSC_0248.jpg'
      }
      ),
      new Image(27, {
        // modal, 3,9
        img: '../../../assets/images/work/img/DSC_0250.jpg',
        description: 'Fresh bro with the robot. - Apr. 12, 2018',
        extUrl: '../../../assets/images/work/img/DSC_0250.jpg'
      }, {
        // plain
        img: '../../../assets/images/work/img/DSC_0250.jpg'
      }
      ),
      new Image(28, {
        // modal, 3,9
        img: '../../../assets/images/work/img/team_meeting_apr_16.jpg',
        description: 'Team meeting outside on beautiful terrace of SDSU EIS. (Royce did not take this photo.) - Apr. 16, 2018',
        extUrl: '../../../assets/images/work/img/team_meeting_apr_16.jpg'
      }, {
        // plain
        img: '../../../assets/images/work/img/team_meeting_apr_16.jpg'
      }
      ),
      new Image(29, {
        // modal, 3,9
        img: '../../../assets/images/meets/Final/IMG_5725.jpg',
        description: 'Last minute soldering. (Taken by Aziz.) - Apr. 23, 2018',
        extUrl: '../../../assets/images/meets/Final/IMG_5725.jpg'
      }, {
        // plain
        img: '../../../assets/images/meets/Final/IMG_5725.jpg'
      }
      ),
      new Image(30, {
        // modal, 3,9
        img: '../../../assets/images/meets/Final/IMG_5749.jpg',
        description: 'The smile of defeat. (Taken by Aziz.) - Apr. 23, 2018',
        extUrl: '../../../assets/images/meets/Final/IMG_5749.jpg'
      }, {
        // plain
        img: '../../../assets/images/meets/Final/IMG_5749.jpg'
      }
      ),    
      new Image(31, {
        // modal, 3,9
        img: '../../../assets/images/meets/Final/IMG_5760.jpg',
        description: 'It worked for a good ten seconds. (Taken by Aziz.) - Apr. 23, 2018',
        extUrl: '../../../assets/images/meets/Final/IMG_5760.jpg'
      }, {
        // plain
        img: '../../../assets/images/meets/Final/IMG_5760.jpg'
      }
      ),            
    ];

    this.ReversedImage = this.AGimages.reverse();
    this.PaginationImages = this.ReversedImage;
  }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '1080px',
        height: '720px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Fade,
        preview: false
      }
    ];
    // this.loadChangeImagesPagination();
    // this.galleryImages = this.imagePopulate();
  }

  ngAfterViewInit() {
    //this.loadChangeImagesPagination();
    console.log('ngAfterViewInit');

  }

// for videos
openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);
}

  pageChanged(event: any): void {
    this.page = event.page;
    this.loadChangeImagesPagination();
  }

  loadChangeImagesPagination() {
    const numArr = this.paginate(this.ReversedImage, this.desiredItemPerPage, this.page);
    this.PaginationImages = numArr;
  }

  paginate(array, page_size, page_number) {
    --page_number; // because pages logically start with 1, but technically with 0
    return array.slice(page_number * page_size, (page_number + 1) * page_size);
  }

  // imagePopulate() {
  //   const imageURLs = [
  //     {
  //       small: '../../../assets/images/meets/DSC_7419.jpg',
  //       medium: '../../../assets/images/meets/DSC_7419.jpg',
  //       big: '../../../assets/images/meets/DSC_7419.jpg',
  //       description: 'Our first meeting to planning victory. - Jan. 26, 2018',
  //       thumbnailUrl: '../../../assets/images/meets/DSC_7419.jpg'
  //     },
  //     {
  //       small: '../../../assets/images/meets/DSC_7421.jpg',
  //       medium: '../../../assets/images/meets/DSC_7421.jpg',
  //       big: '../../../assets/images/meets/DSC_7421.jpg',
  //       description: 'Our first meeting with everyone. - Jan. 26, 2018'
  //     },
  //     {
  //       small: '../../../assets/images/meets/DSC_7460.jpg',
  //       medium: '../../../assets/images/meets/DSC_7460.jpg',
  //       big: '../../../assets/images/meets/DSC_7460.jpg',
  //       description:
  //         'The meeting where we brainstorm our design and philosophy. - Feb. 2, 2018'
  //     },
  //     {
  //       small:
  //         'https://i.pximg.net/c/600x600/img-master/img/2016/10/09/02/23/02/59381593_p0_master1200.jpg',
  //       medium:
  //         'https://i.pximg.net/c/600x600/img-master/img/2016/10/09/02/23/02/59381593_p0_master1200.jpg',
  //       big:
  //         'https://i.pximg.net/c/600x600/img-master/img/2016/10/09/02/23/02/59381593_p0_master1200.jpg',
  //       description:
  //         'The meeting where we brainstorm our design and philosophy. - Feb. 2, 2018',
  //       thumbnailUrl:
  //         'https://i.pximg.net/c/600x600/img-master/img/2016/10/09/02/23/02/59381593_p0_master1200.jpg'
  //     }
  //   ];
  //   return imageURLs;
  // }


}
