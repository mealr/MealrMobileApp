import { Text, View } from 'react-native';

import { EditScreenInfo } from './EditScreenInfo';

type ScreenContentProps = {
  title: string;
  path: string;
};

export const ScreenContent = ({ title, path }: ScreenContentProps) => {
  return (
    <View className={styles.container}>
      <Text className={styles.title}>{title}</Text>
      <View className={styles.separator} />
      <EditScreenInfo path={path} />
    </View>
  );
};
const styles = {
  container: `items-center flex-1 justify-center`,
  separator: `h-0.5 my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-bold`,
};
