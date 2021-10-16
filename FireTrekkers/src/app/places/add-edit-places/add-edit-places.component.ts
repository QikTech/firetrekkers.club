import { Component, Input, OnInit } from '@angular/core';
import { SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-places',
  templateUrl: './add-edit-places.component.html',
  styleUrls: ['./add-edit-places.component.scss']
})
export class AddEditPlacesComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() modalPlace:any;
  PlaceId:string;
  PlaceDate:string;
  PlaceName:string;
  PlaceArea:string;
  PlaceElevation:string;
  PlaceDescription:string;
  PlaceCoverImage:string;
  PlaceImages:string;
  PhotoFilePath:string;

  PlacesList:any=[];

  ngOnInit(): void {
    this.loadPlacesList();

    this.PlaceId=this.modalPlace.PlaceId;
    this.PlaceDate=this.modalPlace.PlaceDate;
    this.PlaceName=this.modalPlace.PlaceName;
    this.PlaceArea=this.modalPlace.PlaceArea;
    this.PlaceElevation=this.modalPlace.PlaceElevation;
    this.PlaceDescription=this.modalPlace.PlaceDescription;
    this.PlaceCoverImage=this.modalPlace.PlaceCoverImage;
    this.PlaceImages=this.modalPlace.PlaceImages;
  }

  loadPlacesList(){
    this.service.getAllPlacesNames().subscribe((data:any)=>{
      this.PlacesList=data;

      this.PlaceId=this.modalPlace.PlaceId;
      this.PlaceDate=this.modalPlace.PlaceDate;
      this.PlaceName=this.modalPlace.PlaceName;
      this.PlaceArea=this.modalPlace.PlaceArea;
      this.PlaceElevation=this.modalPlace.PlaceElevation;
      this.PlaceDescription=this.modalPlace.PlaceDescription;
      this.PlaceCoverImage=this.modalPlace.PlaceCoverImage;
      this.PlaceImages=this.modalPlace.PlaceImages;
      this.PhotoFilePath=this.service.CoverPhotoUrl+this.PlaceCoverImage;
    });
  }

  addPlace(){
    var val = {
                PlaceId:this.PlaceId,
                PlaceDate:this.PlaceDate,
                PlaceName:this.PlaceName,
                PlaceArea:this.PlaceArea,
                PlaceElevation:this.PlaceElevation,
                PlaceDescription:this.PlaceDescription,
                PlaceCoverImage:this.PlaceCoverImage,
                PlaceImages:this.PlaceImages
              };
    this.service.addPlace(val).subscribe(res=>{
      alert(res.toString());
    });                
  }
  updatePlace(){
    var val = {
      PlaceId:this.PlaceId,
      PlaceDate:this.PlaceDate,
      PlaceName:this.PlaceName,
      PlaceArea:this.PlaceArea,
      PlaceElevation:this.PlaceElevation,
      PlaceDescription:this.PlaceDescription,
      PlaceCoverImage:this.PlaceCoverImage,
      PlaceImages:this.PlaceImages
    };
   this.service.updatePlace(val).subscribe(res=>{
      alert(res.toString());
    });   
  }

  uploadPhoto(event){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('UploadedFile', file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.PlaceCoverImage=this.service.CoverPhotoUrl+this.PlaceCoverImage;
    })
  }

}
