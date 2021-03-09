import remoteConfig from '@react-native-firebase/remote-config'

export const fetchConfig = async () => {
  let configProps = {};
  let configData;
  remoteConfig().setConfigSettings({
    isDeveloperModeEnabled: __DEV__,
    minimumFetchIntervalMillis: 0,
  });
  await remoteConfig().setDefaults({
    recipe_feature: false,
  });
  try {
    await remoteConfig().fetch();
    const activated = await remoteConfig().activate();
    if (!activated) console.log('Configuração Remota não ativada');
    const parameters = remoteConfig().getAll();
    console.log(parameters);

    Object.keys(parameters).forEach((entry) => {
      configData = remoteConfig().getValue(entry);
      configProps[entry] = configData._value == 'true' ? true : false;
    });
  } catch {
    console.log('Sem internet');
    configProps['recipe_feature'] = false;
  }
  const response = { data: configProps };
  return response;
};

export const refreshConfig = async () => await remoteConfig().fetchAndActivate()

export const getRemoteValue = key => remoteConfig().getValue(key).asString();