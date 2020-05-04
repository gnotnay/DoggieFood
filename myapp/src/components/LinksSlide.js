import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const LinksSlide = () => {
  const preventDefault = (event) => event.preventDefault();

  return (
    <Typography className='links'>
      <Link href="#" onClick={preventDefault} id='link1' data-testid="link1">
        WhatsMore
      </Link>
      <Link href="#" onClick={preventDefault} id='link2' data-testid="link2">
        Order
      </Link>
      <Link href="#" onClick={preventDefault} id='link3' data-testid="link3">
        Gallery
      </Link>
    </Typography>
  );
}

export default LinksSlide;
