import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import ParkingCard from '../components/ParkingCard';
import { parkingData } from '../data/mockData';

const HomeScreen = () => {
  const [spaces, setSpaces] = useState(parkingData);

  const handleBook = (id) => {
    const updated = spaces.map(space =>
      space.id === id ? { ...space, booked: true } : space
    );
    setSpaces(updated);
  };

  return (
    <View style={{ padding: 16 }}>
      <FlatList
        data={spaces}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ParkingCard space={item} onBook={() => handleBook(item.id)} />
        )}
      />
    </View>
  );
};

export default HomeScreen;