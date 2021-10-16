import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  //API URL
  readonly APIUrl="http://localhost:25085/api";
  readonly CoverPhotoUrl="http://localhost:25085/CoverPhotos";

  //Instiantating HTTP CLient in Constructor
  constructor(private http:HttpClient) { } 

  //GET Places Data Method
  getPlacesList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/places');
  }

  // POST new Place
  addPlace(val:any){
    return this.http.post(this.APIUrl+'/places',val);
  }

  //PUT Update Place
  updatePlace(val:any){
    return this.http.put(this.APIUrl+'/places',val);
  }

  //DELETE Delete Place
  deletePlace(val:any){
    return this.http.delete(this.APIUrl+'/places/',val);
  }

  //Method to Save Cover Photo
  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/places/SaveFile',val);
  }

  //get All Places Names
  getAllPlacesNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/places/GetAllPlaesNames');
  }
}
