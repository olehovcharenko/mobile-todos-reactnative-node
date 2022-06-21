import { Formik } from 'formik';
import * as React from 'react';
import { Text, TextInput, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { ITodo } from './../../types/ITodo';
import { mainStyles } from './../../styles/mainStyles';
import Font from '../styleText/Font';
import SButton from './SButton';
import * as Yup from 'yup';

interface IProps {
  // eslint-disable-next-line no-unused-vars
  onSubmitFunc: (values: ITodo) => void;
  initValues: ITodo;
}

const schema = Yup.object().shape({
  title: Yup.string()
      .required('Title is required option'),
  text: Yup.string()
      .required('Description is required option'),
});

const Inputs = (props: IProps) => {
  return (
    <>
      <View style={mainStyles.addUnderTitleblock}>
        <View style={mainStyles.addUnderTitleBlockUnd}>
          <Formik initialValues={props.initValues}
            validationSchema={schema}
            onSubmit={props.onSubmitFunc} >
            {(fprops) => (
              <>
                <Font text={'Title'} style={mainStyles.label} />
                <TextInput style={mainStyles.addInput}
                  onChangeText={fprops.handleChange('title')}
                  value={fprops.values.title} />
                <Font text={'Description'} style={mainStyles.label} />
                <TextInput multiline={true} style={[mainStyles.addInput,
                  { height: 100, justifyContent: 'flex-start' }]}
                onChangeText={fprops.handleChange('text')}
                value={fprops.values.text} />

                <View style={mainStyles.addCheckBox}>
                  <Font text="isPublic" style={mainStyles.label} />
                  <CheckBox checkedColor="black"
                    checked={fprops.values.isPublic}
                    onPress={() => fprops.setValues({
                      ...fprops.values,
                      isPublic: !fprops.values.isPublic,
                    })} />
                </View>
                <View style={mainStyles.addCheckBox}>
                  <Font text="Completed" style={mainStyles.label} />
                  <CheckBox checkedColor="black"
                    checked={fprops.values.completed}
                    onPress={() => fprops.setValues({
                      ...fprops.values,
                      completed: !fprops.values.completed,
                    })} />
                </View>

                <View style={mainStyles.addButtonViewUnd}>
                  <SButton text="Submit" onclick={() => fprops.handleSubmit()}/>
                </View>

                <View style={mainStyles.errorUnderSubmit}>
                  <Text style={mainStyles.errorUnderSubmitText}>
                    {fprops.errors.title}
                  </Text>
                  <Text style={mainStyles.errorUnderSubmitText}>
                    {fprops.errors.text}
                  </Text>
                </View>
              </>
            )}
          </Formik>
        </View>
      </View>
    </>);
};

export default Inputs;

