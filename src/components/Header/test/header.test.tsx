import { render, screen } from '@testing-library/react';
import Header from '../Index';

describe('Header', () => {

  it('test if article exits',() => {
    render(<Header></Header>);
    const Article = screen.getByRole('article');
    expect(Article).toBeInTheDocument();
  });

  it('test if the tag header exits', ()=> {
    render(<Header></Header>);
    const header = screen.getByRole('header');
    expect(header).toBeInTheDocument();
  });

});
  