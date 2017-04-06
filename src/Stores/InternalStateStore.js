'use strict';

import { observable, action } from 'mobx';

class InternalState {
  @observable fetching = false;

  @action beginFetch() {
    this.fetching = true;
  }

  @action endFetch() {
    this.fetching = false;
  }
}

export default new InternalState();
