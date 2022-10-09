import React from 'react';
import {Avatar} from 'react-native-elements';

const AltirAvatar = ({imageURL, ...rest}) => (
  <Avatar
    rounded
    size="large"
    title="MD"
    source={{
      uri: imageURL,
    }}
    {...rest}
  />
);
export default AltirAvatar;
