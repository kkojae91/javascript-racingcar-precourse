import { DOM } from '../constant/constant.js';

export default class CarNamesEvent {
  constructor() {
    this.$carNamesInput = DOM.carNamesInput;
    this.$carNamesSubmit = DOM.carNamesSubmit;
    this.carNames = '';
    this.carNamesArray = [];
  }

  recursiveArray = (text) => {
    for (let i = 0; i < this.carNames.length; i += 1) {
      const carNamesText = this.carNames[i];

      if (carNamesText === text) {
        return true;
      }
    }

    return false;
  };

  isNameEmpty = () => {
    let rightName = true;

    this.carNamesArray.forEach((carName) => {
      if (carName === '') {
        rightName = false;
      }
    });

    return rightName;
  };

  isRightLength = () => {
    let rightLength = true;

    this.carNamesArray.forEach((carName) => {
      if (carName.length > 5) {
        rightLength = false;
      }
    });

    return rightLength;
  };

  isDuplicate = () => {
    this.carNamesArray = this.carNames.split(',');
    let noDuplicate = true;

    this.carNamesArray.reduce((prev, curr) => {
      if (prev === curr) {
        noDuplicate = false;
      }

      return curr;
    }, '');

    return noDuplicate;
  };

  isComma = () => this.recursiveArray(',');

  isBlank = () => !this.recursiveArray(' ');

  isEmpty = () => {
    if (this.carNames.length === 0) {
      return false;
    }

    return true;
  };

  validateNames = () => {
    const isValidate =
      this.isEmpty() &&
      this.isBlank() &&
      this.isComma() &&
      this.isDuplicate() &&
      this.isRightLength() &&
      this.isNameEmpty();

    return isValidate;
  };

  onClickSubmit = () => {
    this.$carNamesSubmit.addEventListener('click', (event) => {
      event.preventDefault();
      this.carNames = this.$carNamesInput.value;
      this.validateNames();
    });
  };
}
