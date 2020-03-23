const Neuron = require('./Neuron.js');

describe('Neuron Model', () => {
  describe('subtype', () => {
    it('requires a subtype', () => {
      const neuron = new Neuron({
        excitatory: true,
        cns: true,
        dendrites: 50
      });
      const { errors } = neuron.validateSync();
      expect(errors.subtype.message).toEqual('Path `subtype` is required.');
    });
  });

  describe('excitatory', () => {
    it('requires an excitatory property', () => {
      const neuron = new Neuron({
        subtype: 'pyramidal',
        cns: true,
        dendrites: 50
      });
      const { errors } = neuron.validateSync();
      expect(errors.excitatory.message).toEqual('Path `excitatory` is required.');
    });
  });

  describe('cns', () => {
    it('requires a CNS property', () => {
      const neuron = new Neuron({
        subtype: 'pyramidal',
        excitatory: true,
        dendrites: 50
      });
      const { errors } = neuron.validateSync();
      expect(errors.cns.message).toEqual('Path `cns` is required.');
    });
  });

  describe('dendrites', () => {
    it('requires dendrites', () => {
      const neuron = new Neuron({
        subtype: 'pyramidal',
        excitatory: true,
        cns: true
      });
      const { errors } = neuron.validateSync();
      expect(errors.dendrites.message).toEqual('Path `dendrites` is required.');
    });
    it('requires at least 1 dendrite', () => {
      const neuron = new Neuron({
        subtype: 'pyramidal',
        excitatory: true,
        cns: true, 
        dendrites: 0
      });
      const { errors } = neuron.validateSync();
      expect(errors.dendrites.message).toEqual('Path `dendrites` (0) is less than minimum allowed value (1).');
    });
  });
});
