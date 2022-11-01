// import { LinkStyled } from 'Pages/MovieDetailsPage/MovieDetailsPage.styled';
import React from 'react';
import { MdOutlineSentimentDissatisfied } from 'react-icons/md';
import { LinkStyled, Title, Wrapper  } from './NotFoundPage.styled';

export default function NotFoundPage() {
  return (
      <Wrapper>
          <LinkStyled to="/">Home page</LinkStyled>
             <Title> Not Found Page</Title>
          <MdOutlineSentimentDissatisfied size="80"/>
      </Wrapper>
  )
}
