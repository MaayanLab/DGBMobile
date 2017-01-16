'use strict';

import { observable } from 'mobx';

const seedRes = [
  {
    drug_name: 'first_one',
    sig_id: 'first_one',
    pert_id: 'first_one',
    time: 'first_one',
    time_unit: 'first_one',
    dose: 'first_one',
    dose_unit: 'first_one',
    p_val: 'first_one',
    fold_change: 'first_one',
  },
  {
    drug_name: 'second_one',
    sig_id: 'second_one',
    pert_id: 'second_one',
    time: 'second_one',
    time_unit: 'second_one',
    dose: 'second_one',
    dose_unit: 'second_one',
    p_val: 'second_one',
    fold_change: 'second_one',
  },
  {
    drug_name: 'third_one',
    sig_id: 'third_one',
    pert_id: 'third_one',
    time: 'third_one',
    time_unit: 'third_one',
    dose: 'third_one',
    dose_unit: 'third_one',
    p_val: 'third_one',
    fold_change: 'third_one',
  },
  {
    drug_name: 'fourth_one',
    sig_id: 'fourth_one',
    pert_id: 'fourth_one',
    time: 'fourth_one',
    time_unit: 'fourth_one',
    dose: 'fourth_one',
    dose_unit: 'fourth_one',
    p_val: 'fourth_one',
    fold_change: 'fourth_one',
  },
];

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

  results: seedRes, // should set to empty once testing is complete.
  setResults(results) { this.results = results },
  clearResults() { this.results = [] },
});
