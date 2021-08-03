import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { RootState } from '@store';
import * as authActions from '@store/authReducer/actions';

import { AuthNavParams } from '@navigation/AuthStackNavigator/AuthStackParamsList';

import SignInInfo from '@models/SignInInfo';

import Text from '@components/Text';
import TextInput from '@components/TextInput';
import Button, { ButtonType } from '@components/Button';
import Card from '@components/Card';

import RabbitIcon from '@icons/rabbit.svg';

import layoutStyles from '@styles/layout';
import textStyles from '@styles/text';

const SignIn: React.FC<AuthNavParams<'SignIn'>> = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState<SignInInfo>({ email: '', password: '' });

  const { loading, error } = useSelector(({ authReducer: { loading, error } }: RootState) => ({
    loading,
    error,
  }));

  const dispatch = useDispatch();

  const onSubmit = () => dispatch(authActions.signIn(userInfo));

  const { t } = useTranslation();

  return (
    <>
      <Card style={[layoutStyles.alignCenter, layoutStyles.m10]}>
        <RabbitIcon width={100} height={100} />
        <Text style={[layoutStyles.my20, textStyles.title]}>{t('common.log in')}</Text>
        <View style={[layoutStyles.mx20, layoutStyles.stretch]}>
          {error !== '' && <Text style={[textStyles.error, textStyles.tertiary]}>{error}</Text>}
          <TextInput
            value={userInfo.email}
            onChange={(email) => setUserInfo({ ...userInfo, email })}
          />
          <TextInput
            value={userInfo.password}
            onChange={(password) => setUserInfo({ ...userInfo, password })}
            secure
          />
          <View style={[layoutStyles.rowDirection, layoutStyles.mt10]}>
            <Button
              onPress={onSubmit}
              loading={loading}
              style={[layoutStyles.flex, layoutStyles.mx5]}
              type={ButtonType.Primary}
            >
              <Text>Sign in</Text>
            </Button>
            <Button
              onPress={() => navigation.navigate('SignUp')}
              loading={loading}
              style={[layoutStyles.flex, layoutStyles.mx5]}
              type={ButtonType.Secondary}
            >
              <Text>Sign up</Text>
            </Button>
          </View>
        </View>
      </Card>
    </>
  );
};

export default SignIn;
