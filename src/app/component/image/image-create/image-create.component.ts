import { Component, OnInit } from '@angular/core';
import {finalize} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {FormControl, FormGroup} from "@angular/forms";
import {ImageService} from "../../../service/image.service";
import {HouseService} from "../../../service/house.service";
import {House} from "../../../model/house";
import {Image} from "../../../model/image";
import {Router} from "@angular/router";

@Component({
  selector: 'app-image-create',
  templateUrl: './image-create.component.html',
  styleUrls: ['./image-create.component.css']
})
export class ImageCreateComponent implements OnInit {
  houses : House [] | any;
  images : any;
  imageForm: FormGroup = new FormGroup({
  house: new FormControl(),
  image: new FormControl()
  })
  constructor(private imageService: ImageService,private router: Router,private houseService: HouseService, private storage: AngularFireStorage) { }

  ngOnInit(): void {
    this.houseService.getAll().subscribe((houses) => {
      this.houses = houses
    })
  }
  createImage(){
  const image: Image = {
    image: this.fb,
    house: {
      id: this.imageForm.value.house
    }
  }
    console.log(image)

    this.imageService.save(image).subscribe(() => {
      alert("Thành công")
      this.router.navigate(['/'])
    })
  }
  title = "cloudsSorage";
  selectedFile: any;
  fb: any;
  downloadURL: any;

  onFileSelected(event: any) {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe((url: any) => {
            if (url) {
              this.fb = url;
            }
            console.log(this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log('url', url);
        }
      });
  }
}
