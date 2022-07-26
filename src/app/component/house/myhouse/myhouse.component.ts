import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {HomeService} from "../../../service/home.service";
import {HouseService} from "../../../service/house.service";
import {House} from "../../../model/house";
import {Image} from "../../../model/image";
import {ImageService} from "../../../service/image.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "../../../model/category";
import {CategoryService} from "../../../service/category.service";

@Component({
  selector: 'app-myhouse',
  templateUrl: './myhouse.component.html',
  styleUrls: ['./myhouse.component.css']
})
export class MyhouseComponent implements OnInit {
  houseForm: FormGroup = new FormGroup({
    name: new FormControl(),
    category: new FormControl(),
    address: new FormControl(),
    bedroom: new FormControl(),
    bathroom: new FormControl(),
    description: new FormControl(),
    price: new FormControl(),
    status: new FormControl(1),
  });
  house: any;
  listCategory: Category[] = []

  houses: any
  images: Image[] = []

  id = localStorage.getItem("ID")

  obj: any = [];

  constructor(private houseService: HouseService,
              private categoryService: CategoryService, private imageService: ImageService) {
  }

  ngOnInit(): void {
    this.findMyHouse(this.id)
    this.categoryService.getAll().subscribe((data) => {
      console.log(data)
      this.listCategory = data
    })
  }



  findMyHouse(id: any) {
    this.houseService.findByOwnerId(id).subscribe((data) => {
      this.houses = data
      for (let item of this.houses) {
        this.imageService.getFirstImageByHouse(item.id).subscribe(data => {
          this.images.push(data.image)
        }, error => {
          console.log(error)
        })
      }
    })
  }

  submit() {
    this.house = {
      name: this.houseForm.value.name,
      category: {
        id: this.houseForm.value.category
      },
      address: this.houseForm.value.address,
      bedroom: this.houseForm.value.bedroom,
      bathroom: this.houseForm.value.bathroom,
      description: this.houseForm.value.description,
      price: this.houseForm.value.price,
      owner: {
        id: localStorage.getItem('ID')
      },
      status: this.houseForm.value.status
    }
    console.log(this.house)
    this.houseService.saveHouse(this.house).subscribe((data) =>{
      console.log(data)
      alert("Thêm thành công")
      // @ts-ignore
      $('#exampleModal').modal('hide')
      this.ngOnInit()
      this.houseForm.reset()
    }, error => {
      alert("ERRORR")
      console.log(error)
    })
  }
}
