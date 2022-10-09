import React, {useState} from 'react';
import styled from 'styled-components';
import AltirButton from '../../core/AltirButton';
import AltirIcon from '../../core/AltirIcon';
import {CONTENT_SECTION_HEIGHT} from '../../utils/constants';

const FormContainer = styled.View`
  position: absolute;
  z-index: 2;
  height: ${CONTENT_SECTION_HEIGHT}px;
  width: 100%;
  background-color: black;
  bottom: 0;
  padding: 20px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

const Heading = styled.Text`
  font-size: 18px;
  color: white;
  margin: 0 auto;
`;

const FieldLabel = styled.Text`
  margin-left: 6px;
  margin-bottom: 6px;
  font-size: 16px;
  color: #a69875;
`;

const StyledTextInput = styled.TextInput`
  border: 1px solid #a69875;
  color: white;
`;

const Field = styled.View`
  margin-top: 20px;
`;

const styles = {
  giveButtonStyle: {marginTop: 40, marginLeft: 'auto', marginRight: 'auto'},
  cancelIcon: {position: 'absolute', bottom: 30, right: 30},
};

const NewRewardForm = ({onClose, onSubmit}) => {
  const [to, setTo] = useState();
  const [amount, setAmount] = useState();
  const [message, setMessage] = useState();
  return (
    <FormContainer>
      <Heading>Give reward</Heading>
      <Field>
        <FieldLabel>To</FieldLabel>
        <StyledTextInput
          selectionColor="white"
          value={to}
          onChangeText={setTo}
        />
      </Field>
      <Field>
        <FieldLabel>Amount</FieldLabel>
        <StyledTextInput
          selectionColor="white"
          value={amount}
          onChangeText={setAmount}
        />
      </Field>
      <Field>
        <FieldLabel>Message</FieldLabel>
        <StyledTextInput
          selectionColor="white"
          multiline
          numberOfLines={4}
          value={message}
          onChangeText={setMessage}
        />
      </Field>

      <AltirButton
        onPress={() => {
          onSubmit({name: to, amount, message});
          onClose();
        }}
        title="Give"
        light
        width={300}
        buttonStyle={styles.giveButtonStyle}
      />
      <AltirIcon
        name="close"
        onPress={onClose}
        containerStyle={styles.cancelIcon}
      />
    </FormContainer>
  );
};
export default NewRewardForm;
