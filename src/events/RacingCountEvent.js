import { DOM, ERROR_MESSAGE, CAUTION_MESSAGE } from '../constant/constant.js';

export default class RacingCountEvent {
  constructor(carNamesEvent) {
    this.$racingCountInput = DOM.racingCountInput;
    this.$carNamesInput = DOM.carNamesInput;
    this.carNamesEvent = carNamesEvent;
    this.errorMessage = '';
    this.stringRacingCount = '';
    this.numberRacingCount = 0;
  }

  initializeRacingCount = () => {
    this.stringRacingCount = '';
    this.numberRacingCount = 0;
    this.errorMessage = '';
  };

  alertErrorMessage = () => {
    alert(this.errorMessage);
  };

  isPositiveInteger = () => {
    if (this.numberRacingCount > 0) {
      return true;
    }

    return false;
  };

  isInteger = () => {
    this.numberRacingCount = Number(this.stringRacingCount);
    if (Number.isInteger(this.numberRacingCount)) {
      return true;
    }

    return false;
  };

  isEmpty = () => {
    if (this.stringRacingCount.length === 0) {
      return true;
    }

    return false;
  };

  validateCount = () => {
    this.stringRacingCount = this.$racingCountInput.value;
    const isValidate =
      !this.isEmpty() && //
      this.isInteger() &&
      this.isPositiveInteger();

    if (!isValidate) {
      this.errorMessage = ERROR_MESSAGE.NO_POSITIVE_INTEGER;
      this.alertErrorMessage();
    }

    return [this.numberRacingCount, this.carNamesEvent.carNamesArray];
  };

  alertCautionMessage = (cautionMessage) => {
    alert(cautionMessage);
    this.$carNamesInput.focus();
  };

  isCarNamesSubmit = () => {
    if (this.carNamesEvent.carNamesArray.length === 0) {
      return false;
    }

    return true;
  };

  checkCarNames = () => {
    if (!this.isCarNamesSubmit()) {
      this.alertCautionMessage(CAUTION_MESSAGE.FIRST_CAR_NAMES_SUBMIT);

      return;
    }
  };

  isCarNamesBlank = () => {
    if (this.$carNamesInput.value.length === 0) {
      return true;
    }

    return false;
  };

  onFocusInput = () => {
    this.$racingCountInput.addEventListener('focus', () => {
      if (this.isCarNamesBlank()) {
        this.alertCautionMessage(CAUTION_MESSAGE.FIRST_CAR_NAMES);
      }
    });
  };
}
