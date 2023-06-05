import { Injectable } from '@angular/core';
import { report } from 'process';

interface IModal{
id:string;
visible: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
private   modals : IModal[] = [];

  register(id: string){
    this.modals.push({
      id,
      visible: false
    })
    console.log(this.modals);
  }

  unregister(id : string){
    this.modals = this.modals.filter(
      element => element.id  !== id
    )
  }
  constructor() {}

  isModalOpen(id: string) : boolean{
    // return Boolean(this.modals.find((element) => element.id === id)?.visible);
    return !!this.modals.find(element=> element.id===id)?.visible
    //return this.visible
  }

  toggleModal(id: string){
    //this.visible = !this.visible
    const modal = this.modals.find(elelmet=>elelmet.id===id)
    if(modal){
      modal.visible =! modal.visible;
    }
  }

}
