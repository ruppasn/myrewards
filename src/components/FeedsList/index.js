import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native';
import styled from 'styled-components';
import AltirAvatar from '../../core/AltirAvatar';
import {map} from 'lodash';

const StyledFeed = styled.View`
  display: flex;
  flex-direction: row;
  margin: 15px 0px;
  width: 80%;
`;

const StyledFeedContent = styled.View`
  display: flex;
  flex-direction: column;
`;

const StyledMessage = styled.Text`
  font-size: 16px;
  color: black;
  font-weight: bold;
  word-wrap: break-word;
  margin-bottom: 6px;
`;

const StyledMessageTimeLine = styled.Text`
  font-size: 12px;
  color: grey;
`;

const StyledAvatarContainer = styled.View`
  margin: 0px 8px 8px 15px;
  width: 50px;
`;

const FeedsList = ({feeds}) =>
  map(feeds, ({sender, receiver, message, addedDate}) => (
    <StyledFeed key={`${sender.name}${message}`}>
      <StyledAvatarContainer>
        <AltirAvatar size={45} imageURL={sender.profileImageURL} />
      </StyledAvatarContainer>
      <StyledFeedContent>
        <StyledMessage>{message}</StyledMessage>
        <StyledMessageTimeLine>
          {receiver.name} is awarded by {sender.name}
        </StyledMessageTimeLine>
        <StyledMessageTimeLine>Just now</StyledMessageTimeLine>
      </StyledFeedContent>
    </StyledFeed>
  ));
export default FeedsList;
