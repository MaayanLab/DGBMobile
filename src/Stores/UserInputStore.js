'use strict';

import { observable, action } from 'mobx';

class UserInput {
  @observable gene = '';
  @observable expression = '';
  @observable dataset = '';
  @observable results = {};

  @action setGene(gene) {
    this.gene = gene;
  }
  @action clearGene() {
    this.gene = '';
  }

  @action setExpression(expression) {
    this.expression = expression;
  }
  @action clearExpression() {
    this.expression = '';
  }

  @action setDataset(dataset) {
    this.dataset = dataset;
  }
  @action clearDataset() {
    this.dataset = '';
  }

  @action setResults(results) {
    this.results = results;
  }
  @action clearResults() {
    this.results = [];
  }
}

export default new UserInput();
