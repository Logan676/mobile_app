import React from 'react';
import {View, Text, Image, StyleSheet, ViewStyle} from 'react-native';
import Button from './Button';

export interface CardData {
  id: number;
  heading: string;
  body: string[];
  img: string;
  cta: string;
  sub?: string;
}

interface CardProps {
  data: CardData;
  onSelect: (id: number) => void;
  selected?: boolean;
  style?: ViewStyle;
}

export default function Card({data, onSelect, selected = false, style}: CardProps) {
  return (
    <View style={[styles.card, selected && styles.selected, style]}>
      <Image source={{uri: data.img}} style={styles.image} />
      <View style={styles.body}>
        <Text style={styles.heading}>{data.heading}</Text>
        {data.sub && <Text style={styles.sub}>{data.sub}</Text>}
        {data.body.map((p, i) => (
          <Text key={i} style={styles.paragraph}>
            {p}
          </Text>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <Button label={data.cta} onPress={() => onSelect(data.id)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    overflow: 'hidden',
    marginBottom: 8,
    alignSelf: 'center',
    maxWidth: 384,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  selected: {
    borderColor: '#3b82f6',
    borderWidth: 4,
  },
  image: {
    width: '100%',
    height: 192,
  },
  body: {
    padding: 16,
    flex: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#111827',
  },
  sub: {
    fontSize: 12,
    color: '#2563eb',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 12,
  },
  buttonContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    marginTop: 'auto',
  },
});
