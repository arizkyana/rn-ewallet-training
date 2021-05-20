import React from 'react';

import Typography from '@components/Typography';
import { ProfileSection, ProfilePicture, ProfileInfo } from '../home.styled';

function Profile() {
  return (
    <ProfileSection>
      <ProfilePicture
        source={{ uri: 'https://source.unsplash.com/user/erondu/300x300' }}
      />
      <ProfileInfo>
        <Typography variant="subTitle" children="M Agung Rizkyana" />
        <Typography variant="body" children="Software Developer" />
      </ProfileInfo>
    </ProfileSection>
  );
}

export default Profile;
