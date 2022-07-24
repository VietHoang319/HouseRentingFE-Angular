import { Component, OnInit } from '@angular/core';
import {HouseService} from "../../../service/house.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Category} from "../../../model/category";
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../../service/category.service";
import {User} from "../../../model/user";

@Component({
  selector: 'app-house-edit',
  templateUrl: './house-edit.component.html',
  styleUrls: ['./house-edit.component.css']
})
export class HouseEditComponent implements OnInit {
  categories: Category [] | any;
  house: any;
  editForm: FormGroup = new FormGroup({
    id: new FormControl(0),
  name: new FormControl(''),
  category: new FormControl(''),
  address: new FormControl(''),
  bedroom: new FormControl(0),
  bathroom: new FormControl(0),
  description: new FormControl(''),
  price: new FormControl(0),
  owner: new FormControl(''),
  status: new FormControl(1),
  })

  constructor(private houseService: HouseService,private activatedRoute: ActivatedRoute,private categoriesService: CategoryService,
              private router: Router) { }

  ngOnInit(): void {
    this.categoriesService.getAll().subscribe((data)=> {
      console.log(data)
      this.categories = data
    })

    this.activatedRoute.paramMap.subscribe((param) => {
      const id = param.get('id');
      this.findById(id);
    })

  }
  findById(id: any) {
    this.houseService.findById(id).subscribe((data) => {
      console.log(data);
      this.editForm = new FormGroup({
        id: new FormControl(data.id),
        name: new FormControl(data.name),
        category: new FormControl(data.category.name),
        address: new FormControl(data.address),
        bedroom: new FormControl(data.bedroom),
        bathroom: new FormControl(data.bathroom),
        description: new FormControl(data.description),
        price: new FormControl(data.price),
        owner: new FormControl(data.owner.username),
        status: new FormControl(data.status),
      })
    })
  }

  save() {
    this.house = {
      name: this.editForm.value.name,
      category: {
        id: this.editForm.value.id
      },
      address: this.editForm.value.address,
      bedroom: this.editForm.value.bedroom,
      bathroom: this.editForm.value.bathroom,
      description: this.editForm.value.address,
      price: this.editForm.value.price,
      owner: this.editForm.value.name,
      status: this.editForm.value.status,
    }
    console.log(this.house)
    this.houseService.updateHouse(this.editForm.value.id, this.house).subscribe(() => {
      alert("Thanh cong")
      // @ts-ignore
      $('#exampleModalEdit').modal('hide');
      this.editForm.reset()
      this.router.navigate(["/houses"])
    }, error => {
      alert("Loi")
      console.log(error)
    })
  }
}
