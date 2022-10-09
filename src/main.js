import {toInteger} from 'lodash';
import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import FeedsList from './components/FeedsList';
import NewRewardForm from './components/RewardForm';
import UserProfile from './components/UserProfile';
import AltirButton from './core/AltirButton';
import AltirIcon from './core/AltirIcon';
import AltirTabs, {AltirTabItem} from './core/AltirTabs';
import {
  CONTENT_SECTION_HEIGHT,
  PROFILE_SECTION_HEIGHT,
} from './utils/constants';
import {currentUser, sampleFeeds} from './__mocks__/data';

const TABS = [
  {
    id: 0,
    label: 'Feed',
  },
  {
    id: 1,
    label: 'My Rewards',
  },
];

export const ProfileSection = styled.View`
  height: ${PROFILE_SECTION_HEIGHT}px;
  background-color: floralwhite;
`;

export const ContentSection = styled.View`
  height: ${CONTENT_SECTION_HEIGHT}px;
  background-color: floralwhite;
`;

export const StyledAmount = styled.Text`
  font-weight: bold;
`;
export const addBtnStyle = {
  containerStyle: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 70,
    height: 70,
  },
};
const Main = () => {
  const [showRewardForm, setShowRewardForm] = useState(false);
  const [feeds, setFeeds] = useState([]);
  const [givenAmount, setGivenAmount] = useState(100);
  const [receivedAmount, setReceivedAmount] = useState(250);
  return (
    <ScrollView>
      <ProfileSection>
        <UserProfile
          profileImageURL={currentUser.profileImageURL}
          title={currentUser.name}
          subtitle={
            <>
              <Text>Given </Text>
              <StyledAmount> ${givenAmount} </StyledAmount>
              <Text> / Received </Text>
              <StyledAmount> ${receivedAmount} </StyledAmount>
            </>
          }
        />
      </ProfileSection>
      <ContentSection>
        <AltirTabs tabs={TABS}>
          <AltirTabItem>
            <>
              <FeedsList feeds={[...feeds, ...sampleFeeds]} />
            </>
          </AltirTabItem>
          <AltirTabItem>
            <FeedsList feeds={[...feeds, ...sampleFeeds]} />
          </AltirTabItem>
        </AltirTabs>
      </ContentSection>

      <AltirButton
        onPress={() => {
          setShowRewardForm(true);
        }}
        icon={<AltirIcon name="add" size={30} />}
        {...addBtnStyle}
      />
      {showRewardForm ? (
        <NewRewardForm
          onClose={() => {
            setShowRewardForm(false);
          }}
          onSubmit={({name, amount, message}) => {
            setGivenAmount(givenAmount + toInteger(amount));
            setFeeds([
              {
                sender: currentUser,
                receiver: {
                  name: name,
                  profileImageURL: 'https://picsum.photos/1027/300.jpg',
                },
                message,
              },
              ...feeds,
            ]);
          }}
        />
      ) : null}
    </ScrollView>
  );
};

export default Main;
