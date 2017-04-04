'use strict';

import { observable } from 'mobx';

export default observable({
  gene: '',
  expression: '',
  dataset: '',
  setGene(gene) { this.gene = gene },
  clearGene() { this.gene = '' },

  setExpression(expression) { this.expression = expression },
  clearExpression() { this.expression = '' },

  setDataset(dataset) { this.dataset = dataset },
  clearDataset() { this.dataset = '' },

  results: [], // should set to empty once testing is complete.
  setResults(results) { this.results = results },
  clearResults() { this.results = [] },
});
