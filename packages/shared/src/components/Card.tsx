import { View, Text, Image, StyleSheet } from 'react-native';
import Button from './Button';
import { ImageSourcePropType } from 'react-native';

export interface CardContent {
  id: number;
  heading: string;
  sub?: string;
  body: string[];
  img: ImageSourcePropType;
  cta: string;
}

export default function Card({
  data,
  isSelected,
  onPress,
}: {
  data: CardContent;
  isSelected: boolean;
  onPress: () => void;
}) {
  return (
    <View style={[styles.card, isSelected && styles.selected]}>
      <Image source={data.img} style={styles.image} />
      <View style={styles.body}>
        <Text style={styles.heading}>{data.heading}</Text>
        {data.sub ? <Text style={styles.sub}>{data.sub}</Text> : null}
        {data.body.map((p, i) => (
          <Text key={i} style={styles.text}>
            {p}
          </Text>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <Button label={data.cta} onPress={onPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
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
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sub: {
    color: '#3b82f6',
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    marginBottom: 8,
  },
  buttonContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});
