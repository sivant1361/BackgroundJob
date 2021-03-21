// import 'background.js';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BackgroundJob from 'react-native-background-job';

const backgroundJob = {
  jobKey: 'myJob',
  job: () => console.log('Running in background'),
};

BackgroundJob.register(backgroundJob);

var backgroundSchedule = {
  jobKey: 'myJob',
  allowExecutionInForeground: true,
  notificationTitle: 'My notification title',
  notificationText: 'My notification text',
  exact: true,
  period: 15000,
};

BackgroundJob.schedule(backgroundSchedule)
  .then(() => console.log('Success'))
  .catch((err) => console.err(err));

BackgroundJob.isAppIgnoringBatteryOptimization((err, isIgnoring) =>
  console.log(`Callback: isIgnoring = ${isIgnoring}`),
)
  .then((isIgnoring) => console.log(`Promise: isIgnoring = ${isIgnoring}`))
  .catch((err) => console.err(err));

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Empty project</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
});

export default App;
