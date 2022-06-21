import { Formik } from 'formik';
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { mainStyles } from '../../styles/mainStyles';
import Font from '../styleText/Font';
import SButton from './SButton';
import * as Yup from 'yup';
import { IUser } from '../../types/IUser';

interface IProps {
    // eslint-disable-next-line no-unused-vars
    onSubmitFunc: (values: IUser) => void;
  }

const Schema = Yup.object().shape({
  email: Yup.string()
      .required('Enter email please').email('Email must be valid'),
  password: Yup.string()
      .required('Enter password'),
});

const initValues = {
  email: '',
  password: '',
};

const LogRegInputs = ({ onSubmitFunc }: IProps) => {
  return (
    <>
      <View style={mainStyles.addUnderTitleblock}>
        <View style={mainStyles.addUnderTitleBlockUnd}>
          <Formik initialValues={initValues}
            validationSchema={Schema}
            onSubmit={onSubmitFunc} >
            {(fprops) => (
              <>
                <Font text='Email' style={mainStyles.label} />
                <TextInput style={mainStyles.addInput}
                  onChangeText={fprops.handleChange('email')}
                  value={fprops.values.email} />
                <Font text={'Password'} style={mainStyles.label} />
                <TextInput style={mainStyles.addInput}
                  onChangeText={fprops.handleChange('password')}
                  value={fprops.values.password} secureTextEntry={true} />

                <View style={mainStyles.addButtonViewUnd}>
                  <SButton text="Submit" onclick={() => fprops.handleSubmit()}/>
                </View>

                <View style={mainStyles.errorUnderSubmit}>
                  <Text style={mainStyles.errorUnderSubmitText}>
                    {fprops.errors.email}
                  </Text>
                  <Text style={mainStyles.errorUnderSubmitText}>
                    {fprops.errors.password}
                  </Text>
                </View>
              </>
            )}
          </Formik>
        </View>
      </View>
    </>);
};

export default LogRegInputs;
