import { StyleSheet } from 'react-native';


const usableConsts = {
  m3minus: -3,
  m3: 3,
  m5: 5,
  m10: 10,
  m15: 15,
  m20: 20,
  m30: 30,
  m40: 40,
  m200: 200,
  white: '#fff',
  black: 'black',
  darkred: 'darkred',
};

export const mainStyles = StyleSheet.create({
  statusBar: {
    backgroundColor: 'usableConsts.white',
  },
  wrapper: {
    marginTop: usableConsts.m40,
    alignItems: 'center',
  },
  homeFilterPanel: {
    height: 65,
    marginTop: usableConsts.m20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: usableConsts.m10,
    paddingHorizontal: usableConsts.m10,
  },
  homeFilterButton: {
    width: '15%',
  },
  label: {
    fontSize: 16,
    color: usableConsts.black,
  },
  todoElementBlock: {
    alignItems: 'center',
    padding: usableConsts.m15,
    paddingBottom: 0,
  },
  firstScreenBlock: {
    alignItems: 'center',
    marginTop: '50%',
    height: 120,
  },
  firstScreenButton: {
    borderRadius: 0,
    backgroundColor: '#fff',
    borderColor: 'black',
    borderWidth: 3,
    paddingHorizontal: 30,
    paddingVertical: 5,
    marginLeft: -4,
    marginTop: -4,
    alignItems: 'center',
  },
  firstScreenText: {
    fontSize: 20,
    color: 'black',
  },
  firstScreenButtonBlock: {
    flex: 1,
    justifyContent: 'space-between',
  },
  todoElementNotAuthor: {
    justifyContent: 'flex-start',
    flex: 1,
    alignItems: 'flex-end',
  },
  todoElementUnder: {
    marginTop: usableConsts.m10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  todoElementTextBlock: {
    width: '70%',
  },
  todoElementIconBlock: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '30%',
    paddingTop: usableConsts.m5,
  },
  todoElementTitle: {
    fontSize: 18,
    paddingBottom: 5,
  },
  todoElementPS: {
    paddingTop: usableConsts.m10,
  },
  addHeader: {
    fontSize: 30,
  },
  addUnderTitleblock: {
    marginTop: usableConsts.m10,
    width: '90%',
  },
  addUnderTitleBlockUnd: {
    alignItems: 'center',
  },
  addButtonViewUnd: {
    marginVertical: usableConsts.m20,
    width: 150,
  },
  addInput: {
    borderWidth: 2,
    fontSize: usableConsts.m20,
    width: usableConsts.m200,
    margin: usableConsts.m5,
    paddingTop: usableConsts.m5,
    paddingHorizontal: usableConsts.m10,
  },
  addCheckBox: {
    width: usableConsts.m200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addButton: {
    borderRadius: 0,
    backgroundColor: '#fff',
    borderColor: 'black',
    borderWidth: usableConsts.m3,
    paddingHorizontal: usableConsts.m15,
    paddingVertical: usableConsts.m5,
    marginLeft: usableConsts.m3minus,
    marginTop: usableConsts.m3minus,
  },
  buttonShadow: {
    borderBottomWidth: usableConsts.m3,
    borderRightWidth: usableConsts.m3,
  },
  buttonText: {
    color:  usableConsts.black,
    fontFamily: 'notoserif',
  },
  Button: {
    marginLeft: 15,
  },
  underline: {
    width: '30%',
    borderBottomWidth: 1.5,
    marginTop: 25,
    marginBottom: usableConsts.m5,
  },
  errorUnderSubmit: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorUnderSubmitText: {
    color: usableConsts.darkred,
  },
  loginWarning: {
    color: usableConsts.darkred,
    fontSize: 16,
    paddingBottom: usableConsts.m20,
  },
  homePageNavBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  homePageNavButton: {
    alignItems: 'center',
    width: '100%',
  },
  paginationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
    marginTop: 30,
  },
});

