import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-places',
  templateUrl: './show-places.component.html',
  styleUrls: ['./show-places.component.scss']
})
export class ShowPlacesComponent implements OnInit {

  constructor(private service:SharedService) { }

  PlacesList:any=[];

  ModalTitle:string;
  ActivateAddEditPlaceComp:boolean=false;
  modalPlace:any;

  ngOnInit(): void {
    this.refreshPlacesList();
  }

  //Method to Refresh Places Variable from API Method
  refreshPlacesList(){
    this.service.getPlacesList().subscribe(data=>{
      this.PlacesList=data;
    });
  }

  addClick(){
    this.modalPlace={
      //when Adding new place, we set place ID = 0
      //To indicate add edit component - We are trying to add new Place
      PlaceId:0,
      PlaceDate:"",
      PlaceName:"",
      PlaceArea:"",
      PlaceElevation:"",
      PlaceDescription:"",
      PlaceCoverImage:"",
      PlaceImages:""

    }
    this.ModalTitle="Add Place";
    this.ActivateAddEditPlaceComp=true;
  }

  closeClick(){
    this.ActivateAddEditPlaceComp=false;
    this.refreshPlacesList();
  }

  editClick(dataItem){
    console.log(dataItem);
    this.ActivateAddEditPlaceComp=true;
    this.modalPlace=dataItem;
    this.ModalTitle="Edit Place Data";
  }

  deleteClick(dataItem){
    console.log(dataItem);
    console.log(dataItem.PlaceId);
    if(confirm('Are you sure??')){
      this.service.deletePlace(dataItem.PlaceId).subscribe(data=>{
        alert(data.toString());
        this.refreshPlacesList();
      })
    }
  }

}
