const Hat = require('./Hat.js');

describe('Hat Model', () => {
  describe('name', () => {
    it('requires a name', () => {
      const hat = new Hat({
        shape: 'standard',
        size: 'small',
      });
      const { errors } = hat.validateSync();
      expect(errors.name.message).toEqual('Path `name` is required.');
    });
  });

  describe('shape', () => {
    it('requires a shape', () => {
      const shape = new Hat({
        name: 'baseball cap',
        size: 'small',
      });
      const { errors } = shape.validateSync();
      expect(errors.shape.message).toEqual('Path `shape` is required.');
    });
  });

  describe('size', () => {
    it('requires a size', () => {
      const hat = new Hat({
        name: 'baseball cap',
        shape: 'standard',
      });
      const { errors } = hat.validateSync();
      expect(errors.size.message).toEqual('Path `size` is required.');
    });
  });
});
