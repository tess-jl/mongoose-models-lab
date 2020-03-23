const Sailboat = require('./Sailboat.js');

describe('Sailboat Model', () => {
  describe('type', () => {
    it('requires a type', () => {
      const sailboat = new Sailboat({
        masts: 1,
        keel: true,
        material: 'wood'
      });
      const { errors } = sailboat.validateSync();
      expect(errors.type.message).toEqual('Path `type` is required.');
    });
    it('requires a specific string for type', () => {
      const sailboat = new Sailboat({
        type: 'sailboat',
        masts: 1,
        keel: true,
        material: 'wood'
      });
      const { errors } = sailboat.validateSync();
      expect(errors.type.message).toEqual('`sailboat` is not a valid enum value for path `type`.');
    });
  });

  describe('masts', () => {
    it('requires masts', () => {
      const sailboat = new Sailboat({
        type: 'sloop',
        keel: true,
        material: 'wood'
      });
      const { errors } = sailboat.validateSync();
      expect(errors.masts.message).toEqual('Path `masts` is required.');
    });
    it('requires at least 1 mast', () => {
      const sailboat = new Sailboat({
        type: 'sloop',
        masts: 0,
        keel: true,
        material: 'wood'
      });
      const { errors } = sailboat.validateSync();
      expect(errors.masts.message).toEqual('Path `masts` (0) is less than minimum allowed value (1).');
    });
  });

  describe('keel', () => {
    it('requires a keel', () => {
      const sailboat = new Sailboat({
        type: 'sloop',
        masts: 1,
        material: 'wood'
      });
      const { errors } = sailboat.validateSync();
      expect(errors.keel.message).toEqual('Path `keel` is required.');
    });
  });

  describe('material', () => {
    it('requires a keel', () => {
      const sailboat = new Sailboat({
        type: 'sloop',
        masts: 1,
        keel: true
      });
      const { errors } = sailboat.validateSync();
      expect(errors.material.message).toEqual('Path `material` is required.');
    });
  });
});
