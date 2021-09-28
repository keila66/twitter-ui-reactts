import React from 'react';
import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />

      </Banner>
      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Keila Beatriz</h1>
        <h2>@keila_beatriz</h2>
        <p>
          Developer at <a href="https://rocketseat.com.br">@Rocketseat</a>
        </p>
        <ul>
          <li>
            <LocationIcon />
            Recife, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 24 de janeiro de 1997
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>

      </ProfileData>  

      <Feed />
    </Container>
  );
}

export default ProfilePage;