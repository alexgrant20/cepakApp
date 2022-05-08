import { StyleSheet, TextInput } from 'react-native';

function BasicInput({ placeholder, addOn, style }) {
  return (
    <TextInput
      placeholder={placeholder}
      style={[styles.inputContainer, style]}
      {...addOn}
    />
  );
}

export default BasicInput;

const styles = StyleSheet.create({
  inputContainer: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    color: '#555454',
    borderWidth: 1,
    borderColor: '#8E8383',
    borderRadius: 5,
    marginBottom: 10,
  },
});
