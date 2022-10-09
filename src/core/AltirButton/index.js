import React from 'react';
import {Button} from 'react-native-elements';

const AltirButton = ({light = false, width, ...rest}) => (
  <Button
    {...rest}
    {...{
      buttonStyle: {
        backgroundColor: light ? 'white' : 'black',
        borderRadius: 25,
        ...rest?.buttonStyle,
        width,
      },
      titleStyle: {
        color: light ? 'black' : 'white',
        ...rest?.titleStyle,
      },
    }}
  />
);
export default AltirButton;
