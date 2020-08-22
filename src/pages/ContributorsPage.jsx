import React from 'react';

import { useHistory } from 'react-router-dom';

import ContributorsBar from '../components/contributors/ContributorsBar';
import MainContributor from '../components/contributors/MainContributor';
import SpecialContributors from '../components/contributors/SpecialContributors';
import BackToHomeButton from '../components/contributors/BackToHomeButton';

import Container from '../styles/contributors';

import contributors from '../data/contributors';

export default function ContributorsPage() {
  const history = useHistory();

  function handleClick() {
    history.push('/');
  }

  return (
    <Container>
      <ContributorsBar />
      {
        contributors.main.map((contributor) => (
          <MainContributor
            key={contributor.id}
            contributor={contributor}
          />
        ))
      }
      <SpecialContributors
        contributors={contributors.special}
      />
      <BackToHomeButton
        onClick={handleClick}
      />
    </Container>
  );
}
