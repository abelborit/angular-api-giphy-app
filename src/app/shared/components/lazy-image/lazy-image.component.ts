import { Component, Input, OnInit } from '@angular/core';

interface ImgSrc {
  imageUrl: string;
  imageName: string;
}

@Component({
  selector: 'app-shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css'],
})
export class LazyImageComponent implements OnInit {
  /* se podría trabajar para recibir un solo objeto o sino también para recibir dos propiedades separadas usando dos @Input() */
  @Input()
  public imgSrc: ImgSrc = {
    imageUrl: '',
    imageName: '',
  };

  public hasLoaded: boolean = false;

  handleLoadImage(): void {
    setTimeout(() => {
      // console.log('Image Loaded');
      this.hasLoaded = true;
    }, 500);
  }

  ngOnInit(): void {
    if (!this.imgSrc.imageUrl) {
      this.imgSrc.imageUrl =
        'https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg';
    }

    if (!this.imgSrc.imageName) {
      this.imgSrc.imageName = 'No Title';
    }
  }
}
