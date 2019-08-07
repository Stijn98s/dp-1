import { RectangleBuilder } from './rectangleBuilder';

describe('RectangleBuilder', () => {
  it('Correct default build', () => {
    const rectangle = RectangleBuilder.Create();

    expect(rectangle.X).toBe(0);
    expect(rectangle.Y).toBe(0);
    expect(rectangle.Text).toBe('');
    expect(rectangle.Enabled).toBe(false);
  });

  it('Correct edit text', () => {
    const rectangle = RectangleBuilder.Create().SetText('node');

    expect(rectangle.X).toBe(0);
    expect(rectangle.Y).toBe(0);
    expect(rectangle.Text).toBe('node');
    expect(rectangle.Enabled).toBe(false);
  });

  it('Correct edit enabled', () => {
    const rectangle = RectangleBuilder.Create().SetEnabled(true);

    expect(rectangle.X).toBe(0);
    expect(rectangle.Y).toBe(0);
    expect(rectangle.Text).toBe('');
    expect(rectangle.Enabled).toBe(true);
  });

  it('Correct edit X', () => {
    const rectangle = RectangleBuilder.Create().SetX(55);

    expect(rectangle.X).toBe(55);
    expect(rectangle.Y).toBe(0);
    expect(rectangle.Text).toBe('');
    expect(rectangle.Enabled).toBe(false);
  });

  it('Correct edit Y', () => {
    const rectangle = RectangleBuilder.Create().SetY(55);

    expect(rectangle.X).toBe(0);
    expect(rectangle.Y).toBe(55);
    expect(rectangle.Text).toBe('');
    expect(rectangle.Enabled).toBe(false);
  });

  it('Invalid edit X', () => {
    expect(() => { RectangleBuilder.Create().SetX(101); }).toThrow(Error);
    expect(() => { RectangleBuilder.Create().SetX(-1); }).toThrow(Error);
  });

  it('Invalid edit Y', () => {
    expect(() => { RectangleBuilder.Create().SetY(101); }).toThrow(Error);
    expect(() => { RectangleBuilder.Create().SetY(-1); }).toThrow(Error);
  });

  it('Invalid edit Text', () => {
    expect(() => {
      RectangleBuilder.Create().SetText(
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      );
    }).toThrow(Error);
  });

  it('Enabled draw', () => {
    const rectangle = RectangleBuilder.Create().SetEnabled(true);

    const context = ({
      canvas: {
        height: 100,
        width: 100,
      },
      fillText: jest.fn(),
      strokeRect: jest.fn(),
    } as any) as CanvasRenderingContext2D;

    rectangle.draw(context);

    expect(context.strokeStyle).toBe('green');
  });

  it('Disabled draw Text', () => {
    const rectangle = RectangleBuilder.Create();

    const context = ({
      canvas: {
        height: 100,
        width: 100,
      },
      fillText: jest.fn(),
      strokeRect: jest.fn(),
    } as any) as CanvasRenderingContext2D;

    rectangle.draw(context);

    expect(context.strokeStyle).toBe('red');
  });
});
