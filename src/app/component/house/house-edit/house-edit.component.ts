import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Category} from "../../../model/category";
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../../service/category.service";
import {HouseService} from "../../../service/house.service";
import {House} from "../../../model/house";

@Component({
  selector: 'app-house-edit',
  templateUrl: './house-edit.component.html',
  styleUrls: ['./house-edit.component.css']
})
export class HouseEditComponent implements OnInit {
  categories: Category [] | any;
  id: any;
  editForm: FormGroup = new FormGroup({
    id: new FormControl(),
  name: new FormControl(),
  category: new FormControl(),
  address: new FormControl(),
  bedroom: new FormControl(),
  bathroom: new FormControl(),
  description: new FormControl(),
  price: new FormControl(),
  })

  constructor(private houseService: HouseService,private activatedRoute: ActivatedRoute,private categoriesService: CategoryService,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.id = param.get("id")
      console.log(this.id)
      this.getHouse(this.id)
      this.getCategory();
    })
  }

  getHouse(id: number) {
    this.houseService.findById(id).subscribe((data) => {
      console.log('Data',data);
      this.editForm.patchValue({
        id: data.id,
        name: data.name,
        // @ts-ignore
        category: data.category.id,
        address: data.address,
        bedroom: data.bedroom,
        bathroom: data.bathroom,
        description: data.description,
        price: data.price,
        // @ts-ignore
      })
    })
  }
getCategory(){
this.categoriesService.getAll().subscribe((categories) =>{this.categories = categories})
}
  save() {

    const house: House = {
      name: this.editForm.value.name,
      category: {
        id: this.editForm.value.id
      },
      address: this.editForm.value.address,
      bedroom: this.editForm.value.bedroom,
      bathroom: this.editForm.value.bathroom,
      description: this.editForm.value.address,
      price: this.editForm.value.price,
      owner: {
        // @ts-ignore
        id: localStorage.getItem('ID')
      },
      status: 1,
    }
    console.log(house)
    this.houseService.updateHouse(this.id,house).subscribe(() => {
      alert("Thanh cong")
      this.editForm.reset()
      this.router.navigate([""])
    }, error => {
      alert("Loi")
      console.log(error)
    })
  }
}
