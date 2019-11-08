import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { RestServiceProvider } from '../../providers/rest-service/rest-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  allItems: any;
  itemList: any;
  constructor(public navCtrl: NavController,public navParams: NavParams,private http: HttpClient,public restProvider: RestServiceProvider) {
    this.getItemList();
  }



  getItemList() {
    

    //service call to get data to diplay
    this.restProvider.getApiData()
    .then(data => {
      console.log("items :", JSON.stringify(data));
      this.allItems=data;
      this.itemList=this.allItems.items  
     
    });
   
  }



  
  
  getItems(event) {
    this.getItemList();
   console.log(this.itemList);
   const items =this.itemList;

   // set val to the value of the searchbar
   const query = event.target.value.toLowerCase();

   // if the value is an empty string don't filter the items
   if (query && query.trim() != '')  {
    this.itemList= items.filter(item => {
      return(item.title.toLowerCase().indexOf(query) > -1);
     });
   }else{
      this.getItemList();
   }


  }
  
  navigateToDetails(item){
   this.navCtrl.push('DetailsPage',{data:item});
  
  }

}
