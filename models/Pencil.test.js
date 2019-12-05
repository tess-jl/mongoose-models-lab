const Pencil = require('./Pencil.js');

describe('Pencil Model', () => {
  describe('material', () => {
    it('requires a material', () => {
      const pencil = new Pencil({
        sharpened: false,
        size: 'small',
        color: 'blue'
      });
      const { errors } = pencil.validateSync();
      expect(errors.material.message).toEqual('Path `material` is required.');
    });
  });

  describe('sharpened', () => {
    it('requires a sharpened property', () => {
      const pencil = new Pencil({
        material: 'wood',
        size: 'small',
        color: 'blue'
      });
      const { errors } = pencil.validateSync();
      expect(errors.sharpened.message).toEqual('Path `sharpened` is required.');
    });
  });

  describe('size', () => {
    it('requires a sharpened property', () => {
      const pencil = new Pencil({
        material: 'wood',
        sharpened: false,
        color: 'blue'
      });
      const { errors } = pencil.validateSync();
      expect(errors.size.message).toEqual('Path `size` is required.');
    });
  });


  describe('color', () => {
    it('requires a color', () => {
      const pencil = new Pencil({
        material: 'wood',
        sharpened: false,
        size: 'small'
      });
      const { errors } = pencil.validateSync();
      expect(errors.color.message).toEqual('Path `color` is required.');
    });
  });
});
