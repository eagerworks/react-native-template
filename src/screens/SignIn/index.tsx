import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@store';
import * as authActions from '@store/authReducer/actions';

import { AuthNavParams } from '@navigation/AuthStackNavigator/AuthStackParamsList';

import SignInInfo from '@models/SignInInfo';

import Text from '@components/Text';
import TextInput from '@components/TextInput';
import TextButton, { ButtonType } from '@components/TextButton';
import Card from '@components/Card';

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

  return (
    <Card style={[layoutStyles.alignCenter, layoutStyles.m10]}>
      <Text style={[layoutStyles.my20, textStyles.title]}>Login</Text>
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
          <TextButton
            onPress={onSubmit}
            loading={loading}
            style={[layoutStyles.flex, layoutStyles.mx5]}
            type={ButtonType.Primary}
          >
            Sign in
          </TextButton>
          <TextButton
            onPress={() => navigation.navigate('SignUp')}
            loading={loading}
            style={[layoutStyles.flex, layoutStyles.mx5]}
            type={ButtonType.Secondary}
          >
            Sign up
          </TextButton>
        </View>
      </View>
    </Card>
  );
};

export default SignIn;
