import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const PostScreen = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (name) {
      setSubmitted(true);
      setName('');
    }
  };

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        placeholder="Enter Parking Space Name"
        value={name}
        onChangeText={setName}
        style={{ borderBottomWidth: 1, marginBottom: 12 }}
      />
      <Button title="Post" onPress={handleSubmit} />
      {submitted && <Text>Parking space posted!</Text>}
    </View>
  );
};

export default PostScreen;