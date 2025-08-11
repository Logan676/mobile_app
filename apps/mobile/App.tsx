import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, useColorScheme} from 'react-native';
import {Card, CardData} from '@dealer/shared';

const sample: CardData[] = [
  {
    id: 1,
    heading: 'Welcome',
    body: ['This card is rendered with shared components.'],
    img: 'https://placehold.co/600x400',
    cta: 'Select',
  },
];

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentContainerStyle={styles.content}>
        {sample.map(item => (
          <Card
            key={item.id}
            data={item}
            selected={selected === item.id}
            onSelect={setSelected}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
});

export default App;
