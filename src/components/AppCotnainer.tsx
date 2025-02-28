import {FC, ReactNode} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  View,
} from 'react-native';

import AppNotification from './AppNotification';

interface Props {
  children: ReactNode;
}

const AppCotnainer: FC<Props> = ({children}) => {
  return (
    <View style={styles.root}>
      {/* Ajout du StatusBar */}
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <SafeAreaView style={styles.container}>
        <AppNotification />
        {children}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    position: 'relative', // Évite le chevauchement avec la barre de statut
  },
  // eslint-disable-next-line react-native/no-color-literals
  root: {
    backgroundColor: '#3C2A24',
    flex: 1, // Ajoutez un background color si nécessaire
  },
});

export default AppCotnainer;
