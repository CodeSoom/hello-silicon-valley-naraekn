import React from 'react';

import styled from '@emotion/styled';

import ExternalLink from './ExternalLink';

import { contributorsImages } from '../../assets/images';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#FFF',
  margin: '2em',
  padding: '2em',
  borderRadius: '.5em',
  boxShadow: '0 8px 8px -8px rgba(0,0,0,.5)',
});

const Role = styled.div({
  marginBottom: '.5em',
  padding: '.3em',
  width: '100%',
  borderBottom: '.5px solid #E8E8E8',
  fontFamily: 'Source Code Pro',
  fontWeight: 'bold',
  textAlign: 'center',
});

const ProfileImage = styled.img({
  display: 'block',
  width: '6em',
  height: '6em',
  margin: '1em',
  border: 0,
  borderRadius: '50%',
  background: 'rgba( 255, 255, 255, 0.7)',
  boxShadow: '0 6px 6px -6px rgba(0,0,0,.4)',
});

const Name = styled.div({
  fontWeight: 'bold',
  fontSize: '1.2em',
});

const Email = styled.div({
  margin: '.5em 0',
});

const Description = styled.div({
  marginTop: '.5em',
});

export default function MainContributor({ contributor }) {
  const {
    id, role, name, description, email, link,
  } = contributor;

  return (
    <Container>
      <Role>{role}</Role>
      <ProfileImage
        src={contributorsImages[id]}
        alt=""
      />
      <Name>{name}</Name>
      <Email>{email}</Email>
      <Description>{description}</Description>
      <ExternalLink link={link} />
    </Container>
  );
}
