import getDeep from '@/common/utils/objects';

describe('"getDeep" function should get value attribute given a path', () => {
  const DEFAULT_FALL_BACK = 'defaultFallBack';
  const obj = {
    uno: 1,
    dos: {
      tres: 4,
      cuatro: {
        cinco: [5, 6, 7, 8],
        seis: 6
      }
    },
    siete: {
      ocho: {
        nueve: {
          diez: 10
        }
      }
    }
  };

  const objProto = Object.create(obj);

  it('[Object] Passed a valid simple path "uno" should get the current attribute value', () => {
    expect(getDeep(obj, 'uno', DEFAULT_FALL_BACK)).toBe(1);
  });

  it('[Object] Passed a valid path "dos.tres" should get the current attribute value', () => {
    expect(getDeep(obj, 'dos.tres', DEFAULT_FALL_BACK)).toBe(4);
  });

  it('[Object] Passed a valid large deeper path "siete.ocho.nueve.diez" should get the current attribute value', () => {
    expect(getDeep(obj, 'siete.ocho.nueve.diez', DEFAULT_FALL_BACK)).toBe(10);
  });

  it('[Object] Passed a valid path "dos.cuatro.cinco" should get the current attribute array value', () => {
    expect(getDeep(obj, 'dos.cuatro.cinco', DEFAULT_FALL_BACK)).toEqual(
      expect.arrayContaining(obj.dos.cuatro.cinco)
    );
  });

  it('[Object] Passed a valid path "dos.cuatro" should get the current attribute object value', () => {
    expect(getDeep(obj, 'dos.cuatro', DEFAULT_FALL_BACK)).toEqual(
      expect.objectContaining(obj.dos.cuatro)
    );
  });

  it('[Protyped Object] Passed a valid simple path "uno" should get the current attribute value', () => {
    expect(getDeep(objProto, 'uno', DEFAULT_FALL_BACK)).toBe(1);
  });

  it('[Protyped Object] Passed a valid path "dos.tres" should get the current attribute value', () => {
    expect(getDeep(objProto, 'dos.tres', DEFAULT_FALL_BACK)).toBe(4);
  });

  it('[Protyped Object] Passed a valid large deeper path "siete.ocho.nueve.diez" should get the current attribute value', () => {
    expect(getDeep(objProto, 'siete.ocho.nueve.diez', DEFAULT_FALL_BACK)).toBe(
      10
    );
  });

  it('[Protyped Object] Passed a valid path "dos.cuatro.cinco" should get the current attribute array value', () => {
    expect(getDeep(objProto, 'dos.cuatro.cinco', DEFAULT_FALL_BACK)).toEqual(
      expect.arrayContaining(obj.dos.cuatro.cinco)
    );
  });

  it('[Protyped Object] Passed a valid path "dos.cuatro" should get the current attribute object value', () => {
    expect(getDeep(objProto, 'dos.cuatro', DEFAULT_FALL_BACK)).toEqual(
      expect.objectContaining(obj.dos.cuatro)
    );
  });

  it('[Protyped Object] Passed a wrong path "uno.dos.tres" should get the default fall back value', () => {
    expect(getDeep(objProto, 'uno.dos.tres', DEFAULT_FALL_BACK)).toBe(
      DEFAULT_FALL_BACK
    );
  });

  it('[Object] Passed a wrong path "uno.dos.tres" should get the default fall back value', () => {
    expect(getDeep(obj, 'uno.dos.tres', DEFAULT_FALL_BACK)).toBe(
      DEFAULT_FALL_BACK
    );
  });

  it('[Object] Passed a wrong path "uno.dos.tres" without fall back value should get "undefined"', () => {
    expect(getDeep(obj, 'uno.dos.tres')).toBeUndefined();
  });

  it('[Object] Passed a wrong "null" Object and "null" path should get the default fall back value', () => {
    expect(getDeep(null, null, DEFAULT_FALL_BACK)).toBe(DEFAULT_FALL_BACK);
  });

  it('[Object] Passed a wrong "NaN" Object and "NaN" path should get the default fall back value', () => {
    expect(getDeep(NaN, NaN, DEFAULT_FALL_BACK)).toBe(DEFAULT_FALL_BACK);
  });

  it('[Object] Passed a wrong "undefined" Object and "undefined" path should get the default fall back value', () => {
    expect(getDeep(undefined, undefined, DEFAULT_FALL_BACK)).toBe(DEFAULT_FALL_BACK);
  });

  it('[Object] Passed a wrong "null" path should get the default fall back value', () => {
    expect(getDeep(obj, null, DEFAULT_FALL_BACK)).toBe(DEFAULT_FALL_BACK);
  });

  it('[Object] Passed a wrong "NaN" path should get the default fall back value', () => {
    expect(getDeep(obj, NaN, DEFAULT_FALL_BACK)).toBe(DEFAULT_FALL_BACK);
  });

  it('[Object] Passed a wrong "undefined" path should get the default fall back value', () => {
    expect(getDeep(obj, undefined, DEFAULT_FALL_BACK)).toBe(DEFAULT_FALL_BACK);
  });

  it('[Object] Passed a wrong "null" Object should get the default fall back value', () => {
    expect(getDeep(null, 'dos.tres', DEFAULT_FALL_BACK)).toBe(DEFAULT_FALL_BACK);
  });

  it('[Object] Passed a wrong "NaN" Object should get the default fall back value', () => {
    expect(getDeep(NaN, 'dos.tres', DEFAULT_FALL_BACK)).toBe(DEFAULT_FALL_BACK);
  });

  it('[Object] Passed a wrong "undefined" Object should get the default fall back value', () => {
    expect(getDeep(undefined, 'dos.tres', DEFAULT_FALL_BACK)).toBe(DEFAULT_FALL_BACK);
  });

  it('[Object] Passed a wrong String text instead of an Object should get the default fall back value', () => {
    expect(getDeep('fake.text', 'dos.tres', DEFAULT_FALL_BACK)).toBe(DEFAULT_FALL_BACK);
  });

  it('[Object] Passed a wrong decimal number instead of an Object should get the default fall back value', () => {
    expect(getDeep(34.56, 'dos.tres', DEFAULT_FALL_BACK)).toBe(DEFAULT_FALL_BACK);
  });
});
