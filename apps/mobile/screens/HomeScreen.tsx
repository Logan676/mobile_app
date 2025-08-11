import { useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';
import type { CardData } from '../data/cards';
import { cards } from '../data/cards';

export default function HomeScreen() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList<CardData>
        data={cards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            data={item}
            isSelected={item.id === selectedId}
            onPress={() => setSelectedId(item.id)}
          />
        )}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    padding: 16,
  },
});
