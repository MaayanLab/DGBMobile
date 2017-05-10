'use strict';

import { observable, action } from 'mobx';

class InternalState {
  @observable fetching = false;
  @observable fetchComplete = false;

  @action beginFetch() {
    this.fetching = true;
    this.fetchComplete = false;
  }

  @action endFetch() {
    this.fetching = false;
    this.fetchComplete = true;
  }

  @action resetFetchState() {
    this.fetching = false;
    // this.fetchComplete = false;
  }


  @observable spinnerVisible = false;

  @action turnOnSpinner() {
    this.spinnerVisible = true;
  }

  @action turnOffSpinner() {
    this.spinnerVisible = false;
  }
}

export default new InternalState();
