import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "../../../model/category";
import {HouseService} from "../../../service/house.service";
import {CategoryService} from "../../../service/category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-house-create',
  templateUrl: './house-create.component.html',
  styleUrls: ['./house-create.component.css']
})
export class HouseCreateComponent implements OnInit {
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

  constructor(private houseService: HouseService,
              private categoryService: CategoryService,
              private router: Router) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((data) => {
      console.log(data)
      this.listCategory = data
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
        id: localStorage.getItem('id')
      },
      status: this.houseForm.value.status
    }
    console.log(this.house)
    this.houseService.saveHouse(this.house).subscribe((data) =>{
      console.log(data)
      alert("Thêm thành công")
      // @ts-ignore
      $('#exampleModal').modal('hide')
      this.houseForm.reset()
      this.router.navigate([''])
    }, error => {
      alert("ERRORR")
      console.log(error)
    })
  }
}
