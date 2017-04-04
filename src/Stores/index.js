'use strict';

import { observable } from 'mobx';

// class UserInput {
//   @observable all = {
//     gene: '',
//     expression: '',
//     dataset: '',
//     setGene: (gene) => { this.gene = gene },
//     clearGene: () => { this.gene = '' },
//
//     setExpression: (expression) => { this.expression = expression },
//     clearExpression: () => { this.expression = '' },
//
//     setDataset: (dataset) => { this.dataset = dataset },
//     clearDataset: () => { this.dataset = '' },
//
//     results: [], // should set to empty once testing is complete.
//     setResults: (results) => { this.results = results },
//     clearResults: () => { this.results = [] },
//   };
// }

class UserInput {
  @observable gene = '';
  @observable expression = '';
  @observable dataset = '';
  @observable results = []; // should set to empty once testing is complete;

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
