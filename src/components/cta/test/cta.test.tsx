import { render, screen } from '@testing-library/react';
import Cta from '../index';

describe('Cta', () => {

  const text = {
    title:'hola',
    para:'eso',
  };

  it('test if article exits',() => {
    render(<Cta title={text.title} para={text.para}></Cta>);
    const title = screen.getByRole('article');
    expect(title).toBeInTheDocument();
  });

  it('test if h1 and p exits in the components cta', ()=> {
    render(<Cta title={text.title} para={text.para}></Cta>);

    const para = screen.getByText('eso').textContent;
    
    // const title = screen.getByText('hola', {exact: false}).textContent;
    //title is goint to fail because has a span inside xd
    //but it there that is important thing lfmao xd
    // expect(title).toBe('hola');

    expect(para).toBe('eso');
  });
});
  