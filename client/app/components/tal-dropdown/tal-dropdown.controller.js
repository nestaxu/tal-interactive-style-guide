class TalDropdownController {
  
  constructor() {}

  $onInit() {
    this.displayDropdownMenu = false;
  }

  selectOption(option) {
    this.placeholder = null;
    this.selectedOption = option;
    this.displayDropdownMenu = false;
    this.onOptionSelected({selectedOption: option});
  }
  
}

export default TalDropdownController;
