class TalDropdownController {
  
  constructor() {}

  $onInit() {
    this.displayDropdownMenu = false;
  }

  selectItem(item) {
    this.placeholder = null;
    this.selectedItem = item;
    this.displayDropdownMenu = false;
    this.itemSelected(item);
  }
  
}

export default TalDropdownController;
