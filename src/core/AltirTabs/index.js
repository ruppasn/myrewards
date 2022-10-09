import React, {useState} from 'react';
import {Tab, TabView} from 'react-native-elements';
import {map, size} from 'lodash';
import styled from 'styled-components';

const StyledTabViewItem = styled(TabView.Item)`
  width: 100%;
  background-color: white;
  padding: 8px;
`;

const StyledTabsContainer = styled.View`
  height: 100%;
  background-color: floralwhite;
`;

export const AltirTabItem = ({children}) => (
  <StyledTabViewItem>{children}</StyledTabViewItem>
);

const AltirTabs = ({tabs = [], children}) => {
  const [index, setIndex] = useState(0);
  const getTabStyles = id => ({
    containerStyle: {
      borderTopLeftRadius: id === 0 ? 25 : 0,
      borderTopRightRadius: id === size(tabs) - 1 ? 25 : 0,
    },
    titleStyle: {
      color: index !== id ? 'black' : 'darkgoldenrod',
      textTransform: 'capitalize',
    },
    buttonStyle: {
      backgroundColor: index !== id ? 'lightgrey' : 'white',
      borderTopLeftRadius: id === 0 ? 25 : 0,
      borderTopRightRadius: id === size(tabs) - 1 ? 25 : 0,
      borderWidth: 1,
      borderColor: 'white',
      borderTopColor: 'whitesmoke',
    },
  });
  return (
    <StyledTabsContainer>
      <Tab value={index} onChange={setIndex} disableIndicator>
        {map(tabs, ({id, label}) => (
          <Tab.Item key={id} title={label} {...getTabStyles(id)} />
        ))}
      </Tab>

      <TabView value={index} onChange={setIndex}>
        {children}
      </TabView>
    </StyledTabsContainer>
  );
};
export default AltirTabs;
