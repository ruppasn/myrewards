import React from 'react';
import {ListItem} from 'react-native-elements';
import styled from 'styled-components';
import AltirAvatar from '../../core/AltirAvatar';

const StyledListItem = styled(ListItem)`
  padding: 10px 4px;
`;

const listItemContainerStyles = {
  containerStyle: {
    backgroundColor: 'floralwhite',
  },
};
const UserProfile = ({profileImageURL, title, subtitle}) => (
  <StyledListItem {...listItemContainerStyles}>
    <AltirAvatar imageURL={profileImageURL} />
    <ListItem.Content>
      <ListItem.Title style={{fontWeight: 'bold', fontSize: 18}}>
        {title}
      </ListItem.Title>
      <ListItem.Subtitle style={{fontWeight: '600', fontSize: 14}}>
        {subtitle}
      </ListItem.Subtitle>
    </ListItem.Content>
  </StyledListItem>
);
export default UserProfile;
