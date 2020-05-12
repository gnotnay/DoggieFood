import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const LinksSlide = () => {
  const preventDefault = (event) => event.preventDefault();

  return (
    <Typography className='links'>
      <a href="https://www.instagram.com/juliotheshiba/" target="_black" id='link3' style={{ textDecoration: 'none' }} data-testid="link3">
      <img src="http://icode4.life/img/202005/instagram.png" alt="logo" height="25px" width="25px" id="instagram-img" data-testid="instagram-img"/>
      </a>
      <a href="https://www.youtube.com/c/JulioShiba/?sub_confirmation=1" target="_black" id='link3' style={{ textDecoration: 'none' }} data-testid="link3">
      <img src="http://icode4.life/img/202005/youtube.png" alt="logo" height="60px" width="60px" id="youtube-img" data-testid="youtube-img"/>
      </a>
    </Typography>
  );
}

export default LinksSlide;
