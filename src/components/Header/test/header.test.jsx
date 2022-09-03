import { render, screen } from '@testing-library/react';
import Header from '../Index';
import { useRouter } from 'next/router';

const Mock = ( ) => {
  const router = useRouter();
  const { pathname } = router;
  const { menuActive, handleMenuActive, isFirefox } = HeaderLogic();
  
  return (<Header></Header>);
};

describe('Header',()=> {
  it('test if desktop Header has logo',()=> {
    render(<Mock></Mock>);
    const logo = screen.getByTestId('logoD');
    expect(logo).toBeInTheDocument();
  });
});