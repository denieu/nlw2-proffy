import React from 'react';
import { View, Text } from 'react-native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

function TeacherList() {
  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis" />

      <View style={styles.container2}>
        <Text>Home</Text>
      </View>
    </View>
  );
}

export default TeacherList;