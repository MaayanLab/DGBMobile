'use strict';

import { observable } from 'mobx';

class UserInput {
  @observable gene = '';
  @observable expression = '';
  @observable dataset = '';
  @observable results = [];

  setGene = (gene) => { this.gene = gene };
  clearGene = () => { this.gene = '' };

  setExpression = (expression) => { this.expression = expression };
  clearExpression = () => { this.expression = '' };

  setDataset = (dataset) => { this.dataset = dataset };
  clearDataset = () => { this.dataset = '' };

  setResults = (results) => { this.results = results };
  clearResults = () => { this.results = [] };
}

export default new UserInput();

// export default {
//   userInputStore: new UserInput(),
// }
