import { LightningElement } from "lwc";
import ursusResources from "@salesforce/resourceUrl/ursus_park";
/** BearController.getAllBears() Apex method */
import getAllBears from "@salesforce/apex/BearController.getAllBears";

export default class BearList extends LightningElement {
  bears;
  error;
  appResources = {
    bearSilhouette: `${ursusResources}/standing-bear-silhouette.png`,
  };

  connectedCallback() {
    this.loadBears();
  }

  async loadBears() {
    try {
      const bears = await getAllBears();
      this.bears = bears;
    } catch (error) {
      this.error = error;
    }
  }
}
